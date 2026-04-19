# Scénario 4, Audit RSE, un grand compte exige des preuves

Simulation Agoriade, Module 4 « Atelier de consolidation ». Brief adaptable en solo sur ton propre projet. Durée indicative : 75 minutes de travail individuel.

## Le pitch

Mercredi 16h. Mail de ton plus gros prospect, **Caroflex** (groupe industriel, 8 000 salarié·es). Vous êtes en dernière ligne droite sur un contrat à **180 k€ annuels**&nbsp;:

> Bonjour,
>
> Notre comité achats nous demande, avant de signer, un **dossier RSE** sur votre solution ChatBotRH. Notre politique d'achats responsables (alignée ISO 20400) exige pour tout fournisseur numérique&nbsp;:
>
> 1. Bilan carbone du service sur 12 mois (scope énergie + hébergement + usage)
> 2. Déclaration d'accessibilité conforme RGAA 4.1.2
> 3. Preuve d'engagement d'écoconception (RGESN ou équivalent)
> 4. Politique de sobriété numérique documentée
> 5. Engagement sur des objectifs chiffrés de réduction
>
> Délai de réponse&nbsp;: **10 jours ouvrés**. Au-delà, nous passons au concurrent.

Ta solution n'a actuellement ni bilan carbone, ni déclaration d'accessibilité, ni politique d'écoconception. Tu vends « on est responsables » mais tu n'as rien de tangible.

## Contexte opérationnel

- **Produit** : ChatBotRH. Tech actuelle&nbsp;: Airtable + Make + OpenAI GPT-4 + Vercel.
- **Usage** : 412 candidatures traitées en 3 mois, environ 3 millions de tokens GPT-4 générés.
- **Ton argumentaire commercial actuel** : « solution française, légère, centrée utilisateur ». Aucune preuve.
- **Contrainte** : tu ne peux pas tout refaire en 10 jours. Tu dois livrer un **dossier crédible** qui montre où tu en es honnêtement, et ta trajectoire.

## Ta mission (en solo, sur ton propre projet)

Adapte ce scénario à ton produit. Imagine qu'un grand compte prospect exige 5 livrables RSE sous 10 jours.

1. **État des lieux honnête (15 min)** — faire passer ton produit au crible de la checklist écoconception (10 gestes). Identifier les 3-4 points les plus problématiques (choix de modèle IA, taille des prompts, conservation des logs, dépendances hors UE).
2. **Bilan carbone approximatif (15 min)** — produire une estimation grossière du scope énergie+usage. Hypothèses explicitées. Utiliser l'API Website Carbon pour le front, estimer à la louche les tokens LLM (≈ 0,5 g CO₂e / 1000 tokens selon ADEME/études récentes).
3. **Dossier RSE v1 (30 min)** — produire les 5 livrables avec le principe de **« honnête plutôt que beau »**&nbsp;:
   - Bilan carbone v1 (énergie hébergement + usage IA + estimation visites)
   - Déclaration d'accessibilité (même si « non conforme », il faut la publier)
   - Charte d'écoconception interne (1 page, 10 engagements concrets)
   - Politique de sobriété (règles pour l'équipe, ex&nbsp;: choix du modèle le plus petit viable)
   - Objectifs chiffrés 12 mois (ex&nbsp;: -30&nbsp;% tokens LLM par usage)
4. **Pitch commercial (15 min)** — retourner l'audit en **argument de vente**. Préparer 3 slides max.

## Livrables utiles

- [Checklist écoconception](/livrables/checklist-ecoconception/) (10 gestes)
- [Synthèse POUR](/livrables/synthese-pour/) (pour l'a11y)
- [Grille d'audit a11y](/livrables/audit-a11y/)
- [Trame de doc technique](/livrables/trame-doc/)
- [Checklist doc](/livrables/checklist-doc/)
- Page [empreinte carbone du site Agoriade](/empreinte-carbone/) comme exemple de rendu

## Critères d'auto-évaluation

- **Honnêteté** — pas de greenwashing, les chiffres viennent avec leurs hypothèses.
- **Trajectoire** — tu montres que tu progresses, avec des jalons datés.
- **Commercialement tenable** — le dossier RSE devient un **argument**, pas un boulet.

## Pour aller plus loin avec la formatrice

Quand tu l'appelles en 1:1, elle joue l'équipe achats du prospect + un·e représentant·e CSE attentif·ve à la sobriété, et te pose la question qui pique&nbsp;: « qu'est-ce que vous faites quand un concurrent annonce -60&nbsp;% et vous -30&nbsp;%&nbsp;? »

---

*Espace pédagogique Agoriade, Bootcamp AI Product Builder, Édition 2026.*
