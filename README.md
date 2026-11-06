# Portfolio — Matteo Bouhuis

Sito statico (HTML/CSS/JS, nessuna build) pronto per GitHub Pages.

## Pubblicarlo

1. Su GitHub crea un repository chiamato `portfolio` (pubblico).
2. Carica tutto il contenuto di questa cartella nella radice del repo (`Add file → Upload files`, oppure `git push`).
3. Repo → **Settings → Pages** → *Source*: `Deploy from a branch`, *Branch*: `main` / `(root)` → Save.
4. Dopo 1–2 minuti il sito è su `https://<tuo-username>.github.io/portfolio/`.

Se invece vuoi l'indirizzo corto `https://<tuo-username>.github.io/`, chiama il repo `<tuo-username>.github.io`.

## Riempirlo

Tutti i testi stanno in **`assets/content.js`**. Cerca `TODO` per trovare cosa manca.

| Cosa | Dove |
|---|---|
| Link LinkedIn / GitHub | `linkedin`, `github` in cima al file |
| CV scaricabile | metti i PDF in `cv/` con i nomi `CV_Matteo_Bouhuis_EN.pdf` e `CV_Matteo_Bouhuis_IT.pdf` |
| Foto | `img/foto-profilo.jpg` (estratta dal CV attuale; sostituiscila se vuoi) |
| Immagini progetto | `progetti/<id-progetto>/cover.jpg` — se manca, compare un segnaposto |
| Galleria | nel progetto: `gallery: [{ src: "progetti/<id>/02.jpg", caption: { it: "...", en: "..." } }]` |
| Link a codice/report | nel progetto: `links: [{ href: "https://github.com/...", label: { it: "Codice", en: "Code" } }]` |

### Aggiungere un progetto
Copia un blocco `{ id: "...", ... }` dentro `projects`, cambia `id` (senza spazi: diventa l'URL `#/p/<id>`) e i testi.
L'ordine nell'array è l'ordine sul sito. `status` è opzionale (badge "In corso").

### Immagini: consigli
- Copertine 1600×1000 px (16:10), JPG qualità ~80, < 300 KB.
- Per i progetti CFD funzionano meglio: contour di Cp/velocità, streamline, mesh in sezione, grafici di convergenza o di confronto.

## Provarlo in locale
```
python3 -m http.server 8000
```
poi apri http://localhost:8000
