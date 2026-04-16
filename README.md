# Agoriade — Séquence 6 — Espace pédagogique

> Espace pédagogique conçu et développé par **Anaïs Sparesotto** pour l'**école Agoriade Nantes**, dans le cadre du bootcamp **AI Product Builder**.
>
> Ce site rassemble en un seul endroit tous les supports dont les apprenant·es ont besoin pendant les 4 demi-journées de la Séquence 6 : guides animateur, livrables à produire, checklists interactives, ressources externes et exports prêts à importer dans Modulo. L'objectif : que chacun·e puisse se concentrer sur la pratique, pas sur la recherche d'un PDF perdu dans un drive.
>
> Le site est pensé **accessibilité-first** (WCAG 2.1 AA, contrastes AAA, navigation clavier complète) — parce qu'un support de formation sur l'IA responsable doit l'être lui-même.

**Formatrice :** Anaïs Sparesotto
**Période :** 27 avril → 13 mai 2026
**Format :** 4 demi-journées — RGPD & sécurité, accessibilité & écoconception, documentation, mise en situation

---

## 📁 Structure du projet

```
agoriade-sequence6/
├── index.html                              Portail d'accueil
├── 404.html                                Page d'erreur
├── README.md                               Ce fichier
├── vercel.json                             Config Vercel (headers)
├── .htaccess                               Bonus — config Apache si migration hors Vercel
│
├── assets/
│   ├── css/
│   │   ├── main.css                        Charte (jaune #FFF44F / noir / blanc, WCAG AAA)
│   │   └── print.css                       Version imprimable / PDF
│   └── js/
│       └── checklist.js                    Checklists interactives (localStorage)
│
├── a-propos-anais/index.html               Présentation d'Anaïs
├── dj1-rgpd-securite/index.html            DJ1 — Mer. 29 avril 13h30-17h
├── dj2-accessibilite-ecoconception/        DJ2 — Jeu. 30 avril 13h30-17h
├── dj3-documentation/index.html            DJ3 — Lun. 4 mai 9h-12h30
├── dj4-mise-en-situation/index.html        DJ4 — Lun. 4 mai 13h30-17h
│
└── modulo-export/                          Export pour app.modulo.io
    ├── DJ1-modulo.md                       Markdown DJ1 prêt pour copier-coller
    ├── DJ2-modulo.md                       Markdown DJ2
    ├── DJ3-modulo.md                       Markdown DJ3
    ├── DJ4-modulo.md                       Markdown DJ4
    └── sequences-global.csv                CSV des 32 séquences (import bulk)
```

---

## 🚀 Déploiement sur Vercel via GitHub

### Pré-requis
- Un compte GitHub (gratuit — [github.com/signup](https://github.com/signup))
- Un compte Vercel (gratuit — [vercel.com/signup](https://vercel.com/signup))

### Étape 1 — Créer le dépôt GitHub

1. Sur GitHub, clic sur le bouton **New repository** (ou [ce lien](https://github.com/new))
2. Nom du dépôt : `agoriade-sequence6` (ou autre, peu importe)
3. Visibilité : **Public** (demandé par ton process — aucune donnée sensible dans ce projet)
4. **Ne pas cocher** « Add a README » (il y en a déjà un)
5. Clic sur **Create repository**

### Étape 2 — Pousser le code

Depuis ton ordinateur, à la racine du dossier `agoriade-sequence6/` :

```bash
git init
git add .
git commit -m "Initial commit - Sequence 6 Agoriade"
git branch -M main
git remote add origin https://github.com/TON-USERNAME/agoriade-sequence6.git
git push -u origin main
```

Remplace `TON-USERNAME` par ton nom d'utilisateur GitHub.

### Étape 3 — Connecter Vercel au dépôt

1. Se connecter à [vercel.com](https://vercel.com)
2. Clic sur **Add New → Project**
3. Sélectionner le dépôt `agoriade-sequence6` dans la liste (autoriser l'accès GitHub si première fois)
4. **Project Name** : `agoriade-s6` (c'est ce qui donne l'URL `agoriade-s6.vercel.app`)
5. **Framework Preset** : laisser `Other` (site statique)
6. **Root Directory** : laisser `./`
7. **Build Command** : laisser vide
8. **Output Directory** : laisser vide
9. Clic sur **Deploy**

**C'est tout.** En 20 secondes, ton site est en ligne à l'URL `https://agoriade-s6.vercel.app`.

### Étape 4 — Déploiements suivants

À chaque fois que tu modifies un fichier :

```bash
git add .
git commit -m "Description de la modification"
git push
```

Vercel redéploie automatiquement. URL unchanged.

### Étape 5 — Domaine personnalisé (optionnel)

Dans Vercel → ton projet → **Settings** → **Domains** → ajouter ton domaine et suivre les instructions DNS (généralement un `CNAME` vers `cname.vercel-dns.com`).

---

## 📝 Utiliser les exports Modulo

Le dossier `modulo-export/` contient tout ce qu'il faut pour créer la séquence dans [app.modulo.io](https://app.modulo.io).

### ⚠️ Avant toute chose : remplacer l'URL placeholder

Les markdowns contiennent l'URL d'exemple `https://agoriade-s6.vercel.app`. **Une fois Vercel déployé, remplace cette URL par la vraie :**

**Sur Mac (Terminal depuis le dossier modulo-export/) :**
```bash
# Remplace l'URL dans tous les fichiers .md
sed -i '' 's|https://agoriade-s6.vercel.app|https://TON-VRAIE-URL.vercel.app|g' *.md *.csv
```

**Sur Linux :**
```bash
sed -i 's|https://agoriade-s6.vercel.app|https://TON-VRAIE-URL.vercel.app|g' *.md *.csv
```

**Sur Windows (ou si tu n'es pas à l'aise avec Terminal)** : ouvre chaque fichier `.md` et `.csv` dans un éditeur de texte (VS Code, Notepad++, Sublime), utilise **Ctrl+H** (Find & Replace), remplace `https://agoriade-s6.vercel.app` par ton URL.

### Option A — Import par DJ (recommandé pour débuter)

Pour chaque fichier `DJ1-modulo.md`, `DJ2-modulo.md`, etc. :

1. Dans Modulo, créer un nouvel événement avec le titre et les métadonnées indiqués en haut du fichier
2. Pour chaque séquence dans le fichier, créer une nouvelle séquence dans Modulo
3. Copier-coller les champs du tableau markdown dans les champs Modulo correspondants
4. Les liens **Pièces jointes** pointent vers les ancres précises du site — les apprenant·es accèdent directement à la bonne séquence

### Option B — Import en masse via CSV

Le fichier `sequences-global.csv` contient les 32 séquences (4 DJ × 8 séquences). Si Modulo supporte l'import CSV, utiliser ce fichier pour tout créer d'un coup. Colonnes : `DJ, Ordre, Heure, Duree_min, Titre, Format, Type, Objectif_pedagogique, URL_ancree`.

---

## 🎨 Visuel et accessibilité

Le site respecte **WCAG 2.1 AA** avec les contrastes principaux en **AAA** :

- Contraste jaune `#FFF44F` / noir `#000` : **18.5:1** ✓ AAA
- Contraste noir / blanc : **21:1** ✓ AAA
- Navigation clavier complète avec focus visible épais
- Skip link « Aller au contenu principal »
- Hiérarchie des titres respectée, `lang="fr"` sur tous les documents
- Images décoratives avec `alt=""`, informatives avec `alt` descriptif
- `aria-current="page"` sur le lien actif de la nav
- Respect de `prefers-reduced-motion`
- Compatible `forced-colors` (Windows High Contrast)
- Responsive dès 320px, texte redimensionnable à 200% sans casse

---

## 🖨️ Impression / export PDF

Chaque page est optimisée pour l'impression via `assets/css/print.css` :

- Header/footer/nav retirés à l'impression
- Fonds colorés remplacés par du noir & blanc
- URLs des liens externes affichées en fin de ligne
- Sauts de page intelligents (pas de coupe au milieu d'une carte)
- Format A4 par défaut

**Pour générer un PDF :** Ctrl/Cmd + P → Enregistrer en PDF.

---

## 🛠️ Développement local (optionnel)

Pas besoin de build : c'est du HTML/CSS/JS pur. Pour prévisualiser localement :

```bash
# Python
python3 -m http.server 8000
# → http://localhost:8000

# ou Node
npx serve .
```

---

## 🔄 Migration vers autre hébergement

### Hébergement Apache classique (OVH, O2switch, etc.)

Le fichier `.htaccess` à la racine est prêt à l'emploi. Upload tous les fichiers via FTP/SFTP dans `www/` ou `public_html/`. Les modules Apache nécessaires (`mod_headers`, `mod_deflate`, `mod_rewrite`, `mod_expires`) sont actifs par défaut chez OVH.

### Autre hébergement statique (Netlify, Cloudflare Pages, GitHub Pages)

Le site ne nécessite aucun build — push le dossier racine et ça marche.

---

## 📝 Licence & crédits

© 2026 Agoriade — Espace pédagogique. Les ressources sont destinées aux apprenant·es de la Séquence 6.

- **Formatrice** : Anaïs Sparesotto
- **Contact** : [contact@agoriade.fr](mailto:contact@agoriade.fr)
- **Période** : 27 avril → 13 mai 2026
