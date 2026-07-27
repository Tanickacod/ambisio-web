# Ambisio — web

Prototyp nového webu firmy Ambisio (pergoly, zimné záhrady, ploty, tieniaca technika).
Celý obsah je v **slovenčine** — texty, komentáre v kóde aj commit správy.

## Štruktúra repozitára

```
/                 statický HTML prototyp — 19 stránok na koreni
assets/           css, js, img, icons, video
wp-theme/         WordPress block téma (samostatná vetva práce)
podklady/         zdrojové materiály od klienta
__MACOSX/         smetie z rozbaleného zipu, možno zmazať
```

Statický web a WP téma sú **dve paralelné realizácie toho istého dizajnu**, nie jedna
verzia druhej. Zmena v jednom sa automaticky nepremieta do druhého — ak sa má prejaviť
v oboch, treba to spraviť dvakrát.

## Statický web (koreň)

Žiadny build, žiadne závislosti — čisté HTML + CSS + JS, otvoriteľné priamo.

- `assets/css/style.css` (~590 riadkov) — všetko CSS v jednom súbore. Farby, typografia
  a rozmery sú CSS premenné v `:root` na začiatku. Nové farby sa nepridávajú natvrdo,
  použi existujúce premenné.
- `assets/js/main.js` (~520 riadkov) — vanilla JS, bez frameworku. Navigácia, galéria
  s lightboxom, prepínač veľkosti písma (`data-fontsize` na `<html>`), vyhľadávanie,
  dopytový formulár.
- Stránky sa navzájom linkujú relatívne (`o-nas.html`), hlavička a pätička sú v každom
  HTML skopírované — pri zmene navigácie ich treba prejsť všetky.

### Spustenie

```bash
node <cesta>/static-server.js . 4321
```

V praxi stačí povedať Claudovi „spusti web" — `.claude/launch.json` to rieši samo.
Statický server je pomocný skript mimo repozitára, do webu nezasahuje.

## WordPress téma (`wp-theme/`)

Block theme. `wp-theme/ambisio/` je samotná téma, `wp-theme/blueprint.json` je konfigurácia
pre WordPress Playground. Obsah je poskladaný z patternov v `wp-theme/ambisio/patterns/`
(hero, galéria, partneri, recenzie, akordeón, formulár, kontakty…).

Do histórie sa dostala subtree merge-om z pôvodného samostatného repozitára `ambisio-wp`,
preto sú jej commity staršie než merge commit.

## Podklady (`podklady/`)

- `Ambisio špecifikácia webu v2.pdf` — záväzné zadanie, podľa neho vznikol prototyp
- `Ambisio popis k zmenam na webe.docx` — požiadavky klienta na zmeny
- `texty z webu/` — 57 .md súborov s textami zo starého webu; **zdroj pravdy pre fakty
  o produktoch**. Pri písaní obsahu čerpaj odtiaľ, nevymýšľaj parametre.
- `loga partnerov/` — originály log v pôvodnom rozlíšení
- `Tóbl.mov` (479 MB) — zdrojové video, v `.gitignore` kvôli 100 MB limitu GitHubu.
  Skomprimovaná verzia je `assets/video/hero.mp4`.

## Konvencie

- Commit správy po slovensky, v tvare „Čo sa spravilo" (`Detail oplotenia Zora s galériou a videom`).
- Fakty o produktoch overuj v `podklady/texty z webu/`, nie z pamäte — už sa raz stalo,
  že pergola Combi bola popísaná ako hliníková, hoci je oceľovo-drevená.
- Veľké video nikdy necommituj priamo; najprv skomprimuj do `assets/video/`.
