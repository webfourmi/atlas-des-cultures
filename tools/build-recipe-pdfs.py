"""Construire les quatre fiches A4 depuis les données utilisées par l'application."""
from pathlib import Path
from io import BytesIO
from xml.sax.saxutils import escape
import json
import subprocess
from PIL import Image as PILImage
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader

ROOT = Path(__file__).resolve().parents[1]
DATA = json.loads(subprocess.check_output(['node', str(ROOT / 'tools/export-recipe-data.cjs')]))
FONTS = Path('/usr/share/fonts/truetype/dejavu')
for name, file in [('AtlasSans','DejaVuSans.ttf'),('AtlasBold','DejaVuSans-Bold.ttf'),('AtlasSerif','DejaVuSerif.ttf'),('AtlasSerifBold','DejaVuSerif-Bold.ttf')]:
    pdfmetrics.registerFont(TTFont(name, str(FONTS / file)))
pdfmetrics.registerFontFamily('AtlasSans', normal='AtlasSans', bold='AtlasBold')
INK, TEAL, MUTED = HexColor('#173642'), HexColor('#287e79'), HexColor('#596d68')
W, H = A4
M = 15 * mm
CW = W - 2 * M
STYLE = ParagraphStyle('body', fontName='AtlasSans', fontSize=9.2, leading=13.1, textColor=INK)
SMALL = ParagraphStyle('small', parent=STYLE, fontSize=7.1, leading=10, textColor=MUTED, splitLongWords=True)
TITLE = ParagraphStyle('title', parent=STYLE, fontName='AtlasSerifBold', fontSize=20.5, leading=25)
CONTEXT = ParagraphStyle('context', parent=STYLE, fontSize=9, leading=13, textColor=MUTED)
HEAD = ParagraphStyle('head', parent=STYLE, fontName='AtlasSerifBold', fontSize=12.5, leading=17, textColor=TEAL)

def paragraph(c, text, x, y, width, style=STYLE):
    p = Paragraph(text, style)
    _, height = p.wrap(width, H)
    p.drawOn(c, x, y-height)
    return y-height

def heading(c, text, x, y, width):
    return paragraph(c, escape(text), x, y, width, HEAD) - 7

def make_pdf(stop, recipe):
    target = ROOT / recipe['pdf'].removeprefix('./')
    c = canvas.Canvas(str(target), pagesize=A4, pageCompression=1)
    c.setTitle(recipe['title'] + ' - Atlas des cultures')
    c.setAuthor('Atlas des cultures')
    c.setSubject('Fiche recette illustrée A4 : ingrédients, préparation, adaptations et sources')
    c.setFillColor(TEAL)
    c.setFont('AtlasBold', 8)
    c.drawString(M,H-M,'ATLAS DES CULTURES')
    c.drawRightString(W-M,H-M,'RECETTES DU MONDE / '+stop['country'].upper())
    c.setStrokeColor(HexColor('#ccd8ce'))
    c.line(M,H-M-9,W-M,H-M-9)
    y=H-M-27
    iw=68*mm; ih=iw*2/3; tw=CW-iw-8*mm
    title_end=paragraph(c,escape(recipe['title']),M,y,tw,TITLE)
    text_end=paragraph(c,escape(recipe['context']),M,title_end-11,tw,CONTEXT)
    image=PILImage.open(ROOT/recipe['image'].removeprefix('./')).convert('RGB')
    jpeg=BytesIO();image.save(jpeg,'JPEG',quality=90);jpeg.seek(0)
    c.drawImage(ImageReader(jpeg),W-M-iw,y-ih,iw,ih)
    c.setFont('AtlasSans',6.2);c.setFillColor(MUTED)
    c.drawRightString(W-M,y-ih-9,'Illustration créée pour le carnet')
    y=min(text_end,y-ih-12)-16
    c.setFillColor(HexColor('#f2f4ec')); c.roundRect(M,y-38,CW,38,5,stroke=0,fill=1)
    y1=paragraph(c,'<b>'+escape(recipe['servings'])+'</b>',M+9,y-7,CW-18,STYLE)
    meta='Préparation : '+recipe['prep']+'  |  Cuisson : '+recipe['cook']+'  |  Repos : '+recipe['rest']
    # Separate the longer rest label to keep the complete text visible.
    y2=paragraph(c,escape(meta),M+9,y1-3,CW-18,SMALL)
    y=min(y-38,y2)-19
    gap=9*mm; lw=64*mm; rw=CW-lw-gap; rx=M+lw+gap
    left=heading(c,'Ingrédients',M,y,lw)
    for item in recipe['ingredients']:
        left=paragraph(c,'• '+escape(item),M,left,lw)-6
    right=heading(c,'Préparation',rx,y,rw)
    for i,item in enumerate(recipe['steps'],1):
        right=paragraph(c,'<b>'+str(i)+'.</b> '+escape(item),rx,right,rw)-7
    y=min(left,right)-10
    y=heading(c,'Histoire, variantes et adaptations',M,y,CW)
    y=paragraph(c,escape(recipe['notes']),M,y,CW)-17
    y=heading(c,'Références',M,y,CW)
    source_label,source_url=recipe['source']
    y=paragraph(c,'<b>Recette :</b> '+escape(source_label)+'<br/><link href="'+escape(source_url)+'" color="#287e79">'+escape(source_url)+'</link>',M,y,CW,SMALL)-6
    y=paragraph(c,'<b>Contexte culturel :</b> UNESCO / '+escape(stop['topic'])+'<br/><link href="'+escape(stop['source'])+'" color="#287e79">'+escape(stop['source'])+'</link>',M,y,CW,SMALL)-8
    y=paragraph(c,'Sources consultées le 18 octobre 2026. Rédaction et adaptations : Atlas des cultures. Durées indicatives.',M,y,CW,SMALL)
    if y < M+14:
        raise RuntimeError(f'La fiche {stop["id"]} déborde : {y:.1f} pt')
    c.setStrokeColor(HexColor('#ccd8ce'));c.line(M,M+5,W-M,M+5)
    c.setFillColor(MUTED);c.setFont('AtlasSans',6.7)
    c.drawString(M,M-7,'Un voyage de saveurs, une recette à partager.')
    c.drawRightString(W-M,M-7,'Atlas des cultures / v3.2.0 / 1')
    c.showPage();c.save()
    print(f'{target.name} : 1 page A4, contenu jusqu’à {y/mm:.1f} mm du bas')

for stop in DATA['stops']:
    if stop['id'] in DATA['recipes']:
        make_pdf(stop,DATA['recipes'][stop['id']])
