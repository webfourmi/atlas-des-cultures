/* Quantités explicites : ne jamais multiplier les durées ou la capacité d’une tasse. */
'use strict';
let kitchenMode = false;

function cleanRecipeKitchen(value) {
  const output = {};
  if (!value || typeof value !== 'object' || Array.isArray(value)) return output;
  for (const [id, recipe] of Object.entries(RECIPES)) {
    const item = value[id];
    if (!item || typeof item !== 'object' || Array.isArray(item)) continue;
    const validIndices = (list, length) => Array.isArray(list) ? [...new Set(list.filter(i => Number.isInteger(i) && i >= 0 && i < length))] : [];
    output[id] = {
      portions: Number.isInteger(item.portions) && item.portions >= 1 && item.portions <= 12 ? item.portions : recipe.portionModel.base,
      ingredients: validIndices(item.ingredients, recipe.ingredients.length),
      steps: validIndices(item.steps, recipe.steps.length)
    };
  }
  return output;
}
function kitchenState(id) {
  return state.recipeKitchen[id] || {portions:RECIPES[id].portionModel.base, ingredients:[], steps:[]};
}
function formatRecipeQuantity(value, fraction = false) {
  if (fraction) {
    const whole = Math.floor(value + 1e-8), sixteenths = Math.round((value - whole) * 16);
    if (!sixteenths) return String(whole);
    const symbols = {2:'⅛',4:'¼',6:'⅜',8:'½',10:'⅝',12:'¾',14:'⅞'};
    if (symbols[sixteenths]) return (whole || '') + symbols[sixteenths];
    return (whole ? whole + ' ' : '') + sixteenths + '/16';
  }
  return Number(value.toFixed(2)).toLocaleString('fr-FR', {maximumFractionDigits:2});
}
function scaledRecipeIngredient(part, factor) {
  if (typeof part === 'string') return part;
  const quantities = (Array.isArray(part.amount) ? part.amount : [part.amount]).map(n => n * factor);
  const fraction = !part.unit || part.unit.startsWith('c.');
  const quantity = quantities.map(n => formatRecipeQuantity(n, fraction)).join(' à ');
  const name = part.pluralName && quantities.at(-1) > 1 ? part.pluralName : part.name;
  return [quantity, part.unit, name].filter(Boolean).join(' ');
}
function scaledRecipeIngredients(id, portions = kitchenState(id).portions) {
  const recipe = RECIPES[id], factor = portions / recipe.portionModel.base;
  return recipe.measuredIngredients.map(parts => parts.map(part => scaledRecipeIngredient(part, factor)).join(''));
}
function scaledRecipeSteps(id, portions = kitchenState(id).portions) {
  const recipe = RECIPES[id], factor = portions / recipe.portionModel.base;
  return recipe.steps.map((step, i) => {
    const template = recipe.measuredSteps?.[i];
    return template ? template.text.replace(/\{(\d+)\}/g, (_, n) => formatRecipeQuantity(template.amounts[Number(n)] * factor)) : step;
  });
}
function recipePortionsLabel(id, portions = kitchenState(id).portions) {
  const model = RECIPES[id].portionModel;
  if (model.max) return `${portions} à ${portions * model.max / model.base} accompagnements`;
  const label = portions === 1 ? model.singular : model.plural;
  return `${portions} ${label}` + (model.itemsPerPortion ? ` · ${portions * model.itemsPerPortion} petites tortillas` : '');
}
function recipePortionControls(id) {
  const current = kitchenState(id).portions, base = RECIPES[id].portionModel.base;
  return `<section class="recipe-scale" aria-label="Adapter la recette"><div><label for="recipe-portions">Pour combien ?</label><select id="recipe-portions" data-recipe="${id}">${Array.from({length:12}, (_, i) => i + 1).map(n => `<option value="${n}" ${n === current ? 'selected' : ''}>${esc(recipePortionsLabel(id, n))}</option>`).join('')}</select></div><button class="btn ghost" data-action="recipe-base" data-id="${id}">Quantités de base</button><button class="btn ${kitchenMode ? 'prime' : 'ghost'}" data-action="kitchen-mode" aria-pressed="${kitchenMode}">${kitchenMode ? 'Quitter le mode cuisine' : 'Mode cuisine'}</button><p>Les quantités sont recalculées. Les temps restent indicatifs et peuvent varier avec les fournées. Le PDF à télécharger correspond à la recette de base : ${esc(recipePortionsLabel(id, base))}.</p></section>`;
}
function kitchenProgressMarkup(id) {
  if (!kitchenMode) return '';
  const done = kitchenState(id).steps.length, total = RECIPES[id].steps.length;
  return `<section class="kitchen-progress" aria-label="Ta préparation"><div><strong id="kitchen-progress-text" role="status" aria-live="polite">${done === total ? 'C’est prêt ! Toutes les étapes sont cochées.' : `${done} / ${total} étapes terminées`}</strong><progress id="kitchen-progress-bar" value="${done}" max="${total}" aria-label="Étapes terminées"></progress></div><button class="btn ghost" data-action="kitchen-reset" data-id="${id}">Nouvelle préparation</button></section>`;
}
function kitchenListMarkup(id, kind) {
  const item = kitchenState(id), lines = kind === 'ingredients' ? scaledRecipeIngredients(id) : scaledRecipeSteps(id);
  return lines.map((text, index) => `<li class="${kitchenMode && item[kind].includes(index) ? 'is-checked' : ''}">${kitchenMode ? `<label class="kitchen-check"><input type="checkbox" data-kitchen="${kind}" data-recipe="${id}" data-index="${index}" ${item[kind].includes(index) ? 'checked' : ''}><span>${esc(text)}</span></label>` : esc(text)}</li>`).join('');
}
function setRecipePortions(id, portions) {
  if (!RECIPES[id] || !Number.isInteger(portions) || portions < 1 || portions > 12) return;
  const old = kitchenState(id);
  if (old.portions === portions) return;
  state.recipeKitchen[id] = {portions, ingredients:[], steps:[]};
  persist();
  if (view === 'recipe' && recipeStop?.id === id) {
    renderRecipe();
    document.getElementById('recipe-portions')?.focus({preventScroll:true});
  }
  flash(old.ingredients.length || old.steps.length ? 'Quantités mises à jour ; les coches sont réinitialisées pour cette préparation.' : 'Quantités mises à jour.');
}
function updateKitchenCheck(id, kind, index, checked) {
  if (!RECIPES[id] || !['ingredients','steps'].includes(kind) || !Number.isInteger(index) || index < 0 || index >= RECIPES[id][kind].length || typeof checked !== 'boolean') return false;
  const item = kitchenState(id);
  item[kind] = checked ? [...new Set([...item[kind], index])] : item[kind].filter(i => i !== index);
  state.recipeKitchen[id] = item;
  persist();
  const done = item.steps.length, total = RECIPES[id].steps.length;
  const text = document.getElementById('kitchen-progress-text'), bar = document.getElementById('kitchen-progress-bar');
  if (text) text.textContent = done === total ? 'C’est prêt ! Toutes les étapes sont cochées.' : `${done} / ${total} étapes terminées`;
  if (bar) bar.value = done;
  return true;
}
document.addEventListener('change', event => {
  const input = event.target;
  if (input.id === 'recipe-portions') setRecipePortions(input.dataset.recipe, Number(input.value));
  else if (input.dataset?.kitchen && updateKitchenCheck(input.dataset.recipe, input.dataset.kitchen, Number(input.dataset.index), input.checked)) input.closest('li')?.classList.toggle('is-checked', input.checked);
});
document.addEventListener('click', event => {
  const button = event.target.closest('[data-action]');
  if (!button || view !== 'recipe') return;
  const id = recipeStop.id;
  if (button.dataset.action === 'kitchen-mode') {
    kitchenMode = !kitchenMode;
    renderRecipe();
    app.querySelector('[data-action="kitchen-mode"]')?.focus({preventScroll:true});
  } else if (button.dataset.action === 'recipe-base') setRecipePortions(id, RECIPES[id].portionModel.base);
  else if (button.dataset.action === 'kitchen-reset') {
    state.recipeKitchen[id] = {portions:kitchenState(id).portions, ingredients:[], steps:[]};
    persist(); renderRecipe();
    app.querySelector('.kitchen-check input')?.focus({preventScroll:true});
    flash('Une nouvelle préparation commence.');
  }
});
