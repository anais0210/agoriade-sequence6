# Agoriade, espace pédagogique du bootcamp AI Product Builder

> Espace pédagogique open source conçu et développé par **Anaïs Sparesotto** pour l'**école Agoriade Nantes**, dans le cadre du bootcamp **AI Product Builder**.
>
> Ce site rassemble en un seul endroit tous les supports dont les apprenant·es ont besoin pendant le parcours&nbsp;: cadrage pédagogique, déroulé des modules, livrables interactifs (checklists cochables, templates), ressources externes et exports pour Modulo. L'objectif&nbsp;: que chacun·e puisse se concentrer sur la pratique, pas sur la recherche d'un PDF perdu dans un drive.
>
> Le site est pensé **accessibilité-first** (WCAG 2.1 AA, contrastes AAA, navigation clavier complète) parce qu'un support de formation sur l'IA responsable doit l'être lui-même.

- **Dépôt GitHub** : <https://github.com/anais0210/agoriade-sequence6>
- **Site en ligne** : <https://agoriade-s6.vercel.app>
- **Formatrice** : Anaïs Sparesotto
- **Format** : 4 modules d'une demi-journée (3 apports + 1 simulation), présentiel à Nantes (Halles 1 &amp; 2, 5 Allée Frida Kahlo)

---

## 📚 Contenu pédagogique

Le parcours couvre trois sujets d'apport indissociables pour livrer une solution No-Code/IA responsable, puis un quatrième module de simulation pour les mobiliser tous ensemble&nbsp;:

| Module | Thème | Livrables |
|---|---|---|
| [Module 1](dj1-rgpd-securite/) | RGPD &amp; sécurité en No-Code/IA | Checklist RGPD (24 points), Mini-AIPD, Synthèse 8 risques sécurité |
| [Module 2](dj2-accessibilite-ecoconception/) | Accessibilité (a11y) &amp; écoconception | Grille d'audit a11y, Checklist écoconception, Synthèse POUR |
| [Module 3](dj3-documentation/) | Documentation &amp; support | Trame doc technique, 10 templates de doc (README, ADR, runbook, post-mortem, changelog, monitoring, observabilité, SLA, SLO, Diátaxis), Template runbook, Checklist doc exploitable |
| [Module 4](dj4-simulation/) | Atelier de consolidation individuelle, Ton projet au crible du parcours | Auto-diagnostic + atelier 3 niveaux + 6 briefs de scénarios au choix |

Chaque livrable des modules 1 à 3 a sa page dédiée sous [`/livrables/`](livrables/), consultable, imprimable et exportable en CSV pour les checklists. Les 6 briefs de scénario du Module 4 sont des Markdown téléchargeables dans [`assets/downloads/`](assets/downloads/).

---

## 📁 Structure du projet

```
agoriade-sequence6/
├── index.html                              Portail d'accueil
├── 404.html                                Page d'erreur
├── README.md                               Ce fichier
├── vercel.json                             Config Vercel (headers de sécurité)
├── .htaccess                               Bonus, config Apache si migration hors Vercel
├── .gitignore                              Exclusions (DS_Store, éditeurs, .vercel, logs)
│
├── assets/
│   ├── css/
│   │   ├── main.css                        Charte (jaune #FFF44F / noir / blanc, WCAG AAA)
│   │   └── print.css                       Version imprimable / PDF
│   ├── js/
│   │   ├── checklist.js                    Checklists interactives (localStorage)
│   │   ├── checklist-export.js             Export CSV (BOM UTF-8, séparateur point-virgule)
│   │   └── carbon.js                       Affichage inline de l'empreinte carbone (API Website Carbon)
│   └── downloads/
│       ├── chatbotrh-brief.md              Brief du cas pratique Module 1
│       ├── chatbotrh-audit-template.csv    Template d'audit prêt à remplir
│       ├── template-aipd.md                Template Mini-AIPD Markdown
│       ├── simulation-scenario-1-cnil.md   Brief Module 4, contrôle CNIL inopiné
│       ├── simulation-scenario-2-a11y.md   Brief Module 4, plainte pour discrimination
│       ├── simulation-scenario-3-panne.md  Brief Module 4, panne critique dimanche 23h
│       ├── simulation-scenario-4-eco.md    Brief Module 4, audit RSE grand compte
│       ├── simulation-scenario-5-breach.md Brief Module 4, fuite de données / notif CNIL 72h
│       └── simulation-scenario-6-reprise.md Brief Module 4, reprise de projet à chaud
│
├── a-propos-anais/index.html               Présentation d'Anaïs
├── dj1-rgpd-securite/index.html            Module 1, RGPD et sécurité
├── dj2-accessibilite-ecoconception/        Module 2, accessibilité et écoconception
├── dj3-documentation/index.html            Module 3, documentation et support
├── dj4-simulation/index.html               Module 4, atelier de consolidation individuelle
│
├── livrables/                              Pages dédiées aux livrables
│   ├── checklist-rgpd/                     Checklist RGPD interactive (24 points)
│   ├── template-aipd/                      Template Mini-AIPD viewable + download MD
│   ├── synthese-8-risques/                 Fiche visuelle 8 risques sécurité
│   ├── audit-a11y/                         Grille d'audit a11y (15 critères POUR)
│   ├── checklist-ecoconception/            Checklist écoconception (10 gestes)
│   ├── synthese-pour/                      Fiche visuelle POUR
│   ├── trame-doc/                          Trame de doc technique (6 blocs)
│   ├── templates-doc/                      10 templates de doc (README, ADR, runbook, post-mortem, etc.)
│   ├── runbook/                            Template de runbook d'incident
│   └── checklist-doc/                      Checklist « ma doc est-elle exploitable »
│
└── modulo-export/                          Export pour app.modulo.io
    ├── DJ1-modulo.md                       Markdown DJ1 prêt pour copier-coller
    ├── DJ2-modulo.md                       Markdown DJ2
    ├── DJ3-modulo.md                       Markdown DJ3
    └── sequences-global.csv                CSV des séquences (import bulk)
```

---

## 🚀 Déploiement sur Vercel via GitHub

### Pré-requis
- Un compte GitHub (gratuit, [github.com/signup](https://github.com/signup))
- Un compte Vercel (gratuit, [vercel.com/signup](https://vercel.com/signup))

### Étape 1, forker ou cloner le dépôt

Ce projet est **open source**. Tu peux&nbsp;:
- **Forker** le dépôt depuis <https://github.com/anais0210/agoriade-sequence6>
- Ou **cloner** puis pousser vers ton propre dépôt&nbsp;:

```bash
git clone https://github.com/anais0210/agoriade-sequence6.git mon-projet
cd mon-projet
rm -rf .git
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TON-USERNAME/mon-projet.git
git push -u origin main
```

### Étape 2, connecter Vercel au dépôt

1. Se connecter à [vercel.com](https://vercel.com)
2. Clic sur **Add New → Project**
3. Sélectionner le dépôt (autoriser l'accès GitHub si première fois)
4. **Project Name** : au choix (détermine l'URL `*.vercel.app`)
5. **Framework Preset** : laisser `Other` (site statique)
6. **Root Directory** : laisser `./`
7. **Build Command** et **Output Directory** : laisser vides
8. Clic sur **Deploy**

En 20 secondes, le site est en ligne.

### Étape 3, déploiements suivants

À chaque `git push`, Vercel redéploie automatiquement. L'URL ne change pas.

### Étape 4, domaine personnalisé (optionnel)

Dans Vercel → ton projet → **Settings** → **Domains** → ajouter ton domaine et suivre les instructions DNS (généralement un `CNAME` vers `cname.vercel-dns.com`).

---

## 🛠️ Développement local

Pas besoin de build, c'est du HTML/CSS/JS pur. Pour prévisualiser localement&nbsp;:

```bash
# Python
python3 -m http.server 8000
# → http://localhost:8000

# ou Node
npx serve .
```

Note&nbsp;: l'empreinte carbone inline dépend d'un hébergement réel. En local, un fallback s'affiche pour le badge carbone.

---

## 📝 Utiliser les exports Modulo

Le dossier `modulo-export/` contient tout ce qu'il faut pour recréer le parcours dans [app.modulo.io](https://app.modulo.io).

### Avant toute chose, remplacer l'URL placeholder

Les markdowns contiennent l'URL `https://agoriade-s6.vercel.app`. Une fois ton Vercel déployé, remplace cette URL par la tienne&nbsp;:

```bash
# macOS
sed -i '' 's|https://agoriade-s6.vercel.app|https://TON-URL.vercel.app|g' modulo-export/*.md modulo-export/*.csv

# Linux
sed -i 's|https://agoriade-s6.vercel.app|https://TON-URL.vercel.app|g' modulo-export/*.md modulo-export/*.csv
```

### Option A, import par module

Ouvre `DJ1-modulo.md`, `DJ2-modulo.md`, `DJ3-modulo.md`&nbsp;:
1. Dans Modulo, crée un nouvel événement avec le titre et les métadonnées indiqués.
2. Pour chaque temps du fichier, crée une séquence Modulo correspondante.
3. Copie-colle les champs du tableau dans Modulo. Les liens **Pièces jointes** pointent vers les ancres précises du site, les apprenant·es accèdent directement au bon contenu.

### Option B, import en masse via CSV

Le fichier `sequences-global.csv` contient toutes les séquences. Si Modulo supporte l'import CSV, utilise-le pour tout créer d'un coup. Colonnes&nbsp;: `DJ, Ordre, Heure, Duree_min, Titre, Format, Type, Objectif_pedagogique, URL_ancree`.

---

## 🚦 Qualité automatique (Lighthouse CI)

Un audit **Lighthouse CI** tourne à chaque `push` et chaque PR sur `main`, **en parallèle sur desktop et mobile** (workflow GitHub Actions `.github/workflows/lighthouse-ci.yml`, configs [`.lighthouserc.desktop.json`](.lighthouserc.desktop.json) et [`.lighthouserc.mobile.json`](.lighthouserc.mobile.json)).

Pages auditées : home, les 4 modules, et trois pages livrables (templates-doc, checklist-rgpd, audit-a11y).

Seuils stricts (le CI échoue en dessous)&nbsp;:

| Catégorie | Desktop | Mobile |
|---|---|---|
| Accessibilité | 100 / 100 | 100 / 100 |
| Performance | ≥ 90 / 100 | ≥ 70 / 100 |
| Best practices | ≥ 95 / 100 | ≥ 95 / 100 |
| SEO | désactivé (`noindex` assumé) | désactivé |

Mobile a un seuil performance plus bas car le preset Lighthouse simule un Moto G Power sur 4G (CPU et réseau bridés). En plus, la configuration mobile active l'audit `tap-targets` (taille minimale des cibles tactiles), inactif en desktop.

Pour lancer l'audit en local&nbsp;:

```bash
npm install -g @lhci/cli@0.15.x
lhci autorun --config=.lighthouserc.desktop.json   # ou .mobile.json
```

Les rapports HTML sont uploadés vers `temporary-public-storage` (Google) et le lien apparaît dans les logs du run.

---

## 🎨 Visuel et accessibilité

Le site respecte **WCAG 2.1 AA** avec les contrastes principaux en **AAA**&nbsp;:

- Contraste jaune `#FFF44F` / noir `#000`&nbsp;: **18,5:1** ✓ AAA
- Contraste noir / blanc&nbsp;: **21:1** ✓ AAA
- Navigation clavier complète avec focus visible épais
- Skip link « Aller au contenu principal »
- Hiérarchie des titres respectée, `lang="fr"` sur tous les documents
- Images décoratives avec `alt=""`, informatives avec `alt` descriptif
- `aria-current="page"` sur le lien actif de la nav
- Respect de `prefers-reduced-motion`
- Compatible `forced-colors` (Windows High Contrast)
- Responsive dès 320px, texte redimensionnable à 200&nbsp;% sans casse
- Glossaire inline via `<abbr title="...">` sur les acronymes

---

## 🖨️ Impression / export PDF

Chaque page est optimisée pour l'impression via `assets/css/print.css`&nbsp;:

- Header, footer et nav retirés à l'impression
- Fonds colorés remplacés par du noir et blanc
- URLs des liens externes affichées en fin de ligne
- Sauts de page intelligents (pas de coupe au milieu d'une carte)
- Format A4 par défaut

**Pour générer un PDF&nbsp;:** Ctrl ou Cmd + P → Enregistrer en PDF.

---

## 🔄 Migration vers un autre hébergement

### Hébergement Apache classique (OVH, O2switch, etc.)

Le fichier `.htaccess` à la racine est prêt à l'emploi. Upload tous les fichiers via FTP/SFTP dans `www/` ou `public_html/`. Les modules Apache nécessaires (`mod_headers`, `mod_deflate`, `mod_rewrite`, `mod_expires`) sont actifs par défaut chez OVH.

### Autre hébergement statique (Netlify, Cloudflare Pages, GitHub Pages)

Le site ne nécessite aucun build, pousse le dossier racine et ça marche.

---

## 📝 Licence et crédits

© 2026 Agoriade. Espace pédagogique open source, destiné aux apprenant·es du bootcamp AI Product Builder et à toute personne qui souhaite s'en inspirer.

- **Formatrice** : Anaïs Sparesotto
- **Contact formation** : [contact@agoriade.fr](mailto:contact@agoriade.fr)
- **Dépôt GitHub** : <https://github.com/anais0210/agoriade-sequence6>

Les contributions (issues, pull requests) sont les bienvenues.
