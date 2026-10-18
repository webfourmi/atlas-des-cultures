/* Carnet de recettes : données locales, favoris et fiches illustrées. */
'use strict';
let recipeSearch = '', recipeCountry = 'all', recipeOnlyFavorites = false;

function cleanRecipeFavorites(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {};
  return Object.fromEntries(Object.keys(RECIPES).filter(id => value[id] === true).map(id => [id, true]));
}
function recipeSearchText(value) {
  return String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('fr');
}
function recipeEntries() {
  const query = recipeSearchText(recipeSearch.trim());
  return STOPS.filter(s => RECIPES[s.id])
    .filter(s => recipeCountry === 'all' || s.id === recipeCountry)
    .filter(s => !recipeOnlyFavorites || state.recipeFavorites[s.id])
    .filter(s => {
      const r = RECIPES[s.id];
      const ingredients = recipeSearchText(r.ingredients.join(' ')).replace(/\bc\.\s*a\s*(cafe|soupe)\b/g, '');
      return !query || (recipeSearchText(s.country + ' ' + r.title) + ' ' + ingredients).includes(query);
    })
    .sort((a, b) => Number(!!state.recipeFavorites[b.id]) - Number(!!state.recipeFavorites[a.id]));
}
function favoriteRecipeButton(id, extraClass = '') {
  const favorite = !!state.recipeFavorites[id], title = RECIPES[id].title;
  return `<button class="recipe-favorite ${extraClass}" data-action="favorite-recipe" data-id="${id}" aria-pressed="${favorite}" aria-label="${esc((favorite ? 'Retirer des favoris : ' : 'Ajouter aux favoris : ') + title)}"><span aria-hidden="true">${favorite ? '★' : '☆'}</span> ${favorite ? 'Favori' : 'Garder'}</button>`;
}
function renderNotebook() {
  const stops = STOPS.filter(s => RECIPES[s.id]);
  app.innerHTML = `<header class="notebook-hero"><span class="eyebrow">Le voyage continue à table</span><h1>Recettes du monde</h1><p>Un petit carnet de saveurs à découvrir, à cuisiner et à garder. Retrouve ici les recettes des escales, leurs images et leurs fiches imprimables.</p><div class="notebook-count">${stops.length} recettes · ${stops.length} escales · À emporter en cuisine</div></header>
  <section class="notebook-tools" aria-label="Rechercher dans les recettes"><div class="recipe-search-field"><label for="recipe-search">Un plat, un pays, un ingrédient…</label><input id="recipe-search" type="search" value="${esc(recipeSearch)}" placeholder="Par exemple : tofu, Mexique, café" autocomplete="off"></div><div><label for="recipe-country">Destination</label><select id="recipe-country"><option value="all">Tous les pays</option>${stops.map(s => `<option value="${s.id}" ${recipeCountry === s.id ? 'selected' : ''}>${esc(s.country)}</option>`).join('')}</select></div><button class="chip ${recipeOnlyFavorites ? 'active' : ''}" data-action="recipe-favorites" aria-pressed="${recipeOnlyFavorites}">★ Mes favoris</button></section>
  <div class="notebook-results-head"><p id="recipe-result-count" role="status" aria-live="polite" aria-atomic="true"></p><span>Les favoris apparaissent en premier</span></div><section id="recipe-results" class="recipe-cards" aria-label="Les recettes du carnet"></section><p class="notebook-note">Images créées pour le carnet, à titre d’illustration. Chaque recette indique sa source et ses adaptations. Les images et les fiches restent disponibles hors connexion après la mise à jour complète de l’application.</p>`;
  renderRecipeResults();
}
function renderRecipeResults() {
  const results = document.getElementById('recipe-results');
  if (!results) return;
  const entries = recipeEntries();
  document.getElementById('recipe-result-count').textContent = `${entries.length} recette${entries.length === 1 ? '' : 's'}${recipeOnlyFavorites ? ' favorite' + (entries.length === 1 ? '' : 's') : ''}`;
  results.innerHTML = entries.length ? entries.map(s => {
    const r = RECIPES[s.id];
    return `<article class="recipe-card"><div class="recipe-card-picture"><img src="${r.image}" alt="${esc(r.imageAlt)}" width="960" height="640" loading="lazy">${favoriteRecipeButton(s.id)}</div><div class="recipe-card-copy"><div class="overline">${s.flag} ${esc(s.country)}</div><h2>${esc(r.title)}</h2><p>${esc(r.context)}</p><div class="recipe-card-meta"><span>${esc(r.servings)}</span><span>Préparation ${esc(r.prep)}</span></div><button class="btn prime" data-action="recipe" data-id="${s.id}">Ouvrir la recette →</button><a class="recipe-pdf-link" href="${r.pdf}" download>Fiche PDF illustrée ↓</a></div></article>`;
  }).join('') : `<div class="empty"><h2>${recipeOnlyFavorites ? 'Aucun favori ne correspond' : 'Aucune recette ne correspond'}</h2><p>${recipeOnlyFavorites ? 'Touche l’étoile d’une recette pour la retrouver ici, ou élargis ta recherche.' : 'Essaie un autre mot ou choisis tous les pays.'}</p><button class="btn ghost" data-action="reset-recipe-filters">Voir toutes les recettes</button></div>`;
}
function toggleRecipeFavorite(id) {
  if (!RECIPES[id]) return;
  if (state.recipeFavorites[id]) delete state.recipeFavorites[id];
  else state.recipeFavorites[id] = true;
  persist();
  if (view === 'recipes') {
    renderRecipeResults();
    (app.querySelector(`[data-action="favorite-recipe"][data-id="${id}"]`) || app.querySelector('[data-action="recipe-favorites"]'))?.focus({preventScroll:true});
  } else if (view === 'recipe') {
    const button = app.querySelector('[data-action="favorite-recipe"]');
    if (button) {
      const favorite = !!state.recipeFavorites[id];
      button.innerHTML = `<span aria-hidden="true">${favorite ? '★' : '☆'}</span> ${favorite ? 'Favori' : 'Garder'}`;
      button.setAttribute('aria-pressed', String(favorite));
      button.setAttribute('aria-label', (favorite ? 'Retirer des favoris : ' : 'Ajouter aux favoris : ') + RECIPES[id].title);
    }
  }
  flash(state.recipeFavorites[id] ? '★ Recette ajoutée à tes favoris.' : 'Recette retirée des favoris.');
}
function renderRecipe() {
  const s = recipeStop, r = RECIPES[s.id];
  const backLabel = recipeReturn?.view === 'recipes' ? 'au carnet' : recipeReturn?.view === 'detail' ? 'à la lecture' : 'à la bibliothèque';
  app.innerHTML = `<div class="recipe-toolbar"><button class="back" data-action="back-recipe">← Retour ${backLabel}</button><button class="btn prime" data-action="print-recipe">Imprimer la recette</button><a class="btn ghost" href="${r.pdf}" download>Télécharger la fiche PDF</a>${favoriteRecipeButton(s.id)}<p>Impression A4 : tu peux aussi choisir « Enregistrer au format PDF ». La fiche PDF illustrée est prête à télécharger.</p></div><article class="recipe-sheet"><div class="recipe-heading"><div><div class="overline">Atlas des cultures · ${esc(s.country)}</div><h1 id="recipe-title" tabindex="-1">${esc(r.title)}</h1><p>${esc(r.context)}</p></div><figure class="recipe-visual"><img src="${r.image}" alt="${esc(r.imageAlt)}" width="960" height="640"><figcaption>Illustration créée pour le carnet</figcaption></figure></div><div class="recipe-meta"><strong>${esc(r.servings)}</strong><span>Préparation : ${esc(r.prep)}</span><span>Cuisson : ${esc(r.cook)}</span><span>Repos : ${esc(r.rest)}</span></div><div class="recipe-columns"><section><h2>Ingrédients</h2><ul>${r.ingredients.map(x => `<li>${esc(x)}</li>`).join('')}</ul></section><section><h2>Préparation</h2><ol>${r.steps.map(x => `<li>${esc(x)}</li>`).join('')}</ol></section></div><section><h2>Histoire, variantes et adaptations</h2><p>${esc(r.notes)}</p></section><section class="recipe-sources"><h2>Références</h2><p>Recette : <a href="${esc(r.source[1])}" target="_blank" rel="noopener noreferrer">${esc(r.source[0])}</a><span class="print-url"> — ${esc(r.source[1])}</span></p><p>Contexte culturel : <a href="${src(s)}" target="_blank" rel="noopener noreferrer">UNESCO · ${esc(s.topic)}</a><span class="print-url"> — ${esc(s.source)}</span></p><p>Sources consultées le 18 octobre 2026. Rédaction et adaptations : Atlas des cultures. Les durées sont indicatives.</p></section></article>`;
}
async function printRecipe() {
  const image = app.querySelector('.recipe-visual img');
  if (image?.decode) { try { await image.decode(); } catch {} }
  if (document.fonts?.ready) await document.fonts.ready;
  window.print();
}
document.addEventListener('input', event => {
  if (event.target.id === 'recipe-search') { recipeSearch = event.target.value; renderRecipeResults(); }
});
document.addEventListener('change', event => {
  if (event.target.id === 'recipe-country') { recipeCountry = event.target.value; renderRecipeResults(); }
});
document.addEventListener('click', event => {
  const button = event.target.closest('[data-action]');
  if (!button) return;
  if (button.dataset.action === 'favorite-recipe') toggleRecipeFavorite(button.dataset.id);
  else if (button.dataset.action === 'recipe-favorites') {
    recipeOnlyFavorites = !recipeOnlyFavorites;
    button.classList.toggle('active', recipeOnlyFavorites);
    button.setAttribute('aria-pressed', String(recipeOnlyFavorites));
    renderRecipeResults();
  } else if (button.dataset.action === 'reset-recipe-filters') {
    recipeSearch = ''; recipeCountry = 'all'; recipeOnlyFavorites = false;
    renderNotebook(); document.getElementById('recipe-search').focus();
  }
});
