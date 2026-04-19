# Scénario 4, Audit RSE, un grand compte exige des preuves

Simulation Agoriade, Module 4 « Bureau de crise responsable ». Durée en équipe : 75 minutes de préparation + 10 min de restitution.

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

## Ta mission (en équipe)

1. **État des lieux honnête (15 min)** — faire passer ChatBotRH au crible de la checklist écoconception (10 gestes). Identifier les 3-4 points les plus problématiques (choix GPT-4 vs GPT-3.5/4o-mini, taille des prompts, conservation des logs, dépendances Airtable US).
2. **Bilan carbone approximatif (15 min)** — produire une estimation grossière du scope énergie+usage. Hypothèses explicitées. Utiliser l'API Website Carbon pour le front, estimer à la louche les tokens GPT-4 (≈ 0,5 g CO₂e / 1000 tokens selon ADEME/études récentes).
3. **Dossier RSE v1 (30 min)** — produire les 5 livrables demandés par Caroflex, avec le principe de **« honnête plutôt que beau »**&nbsp;:
   - Bilan carbone v1 (énergie hébergement + usage IA + estimation visites)
   - Déclaration d'accessibilité (même si « non conforme », il faut la publier)
   - Charte d'écoconception interne (1 page, 10 engagements concrets)
   - Politique de sobriété (règles pour l'équipe, ex&nbsp;: choix du modèle le plus petit viable)
   - Objectifs chiffrés 12 mois (ex&nbsp;: -30&nbsp;% tokens GPT par candidat traité)
4. **Pitch commercial (15 min)** — retourner l'audit en **argument de vente**. Préparer 3 slides max.

## Livrables utiles

- [Checklist écoconception](/livrables/checklist-ecoconception/) (10 gestes)
- [Synthèse POUR](/livrables/synthese-pour/) (pour l'a11y)
- [Grille d'audit a11y](/livrables/audit-a11y/)
- [Trame de doc technique](/livrables/trame-doc/)
- [Checklist doc](/livrables/checklist-doc/)
- Page [empreinte carbone du site Agoriade](/empreinte-carbone/) comme exemple de rendu

## Critères d'évaluation par le jury

- **Honnêteté** — pas de greenwashing, les chiffres viennent avec leurs hypothèses.
- **Trajectoire** — vous montrez que vous progressez, avec des jalons datés.
- **Commercialement tenable** — le dossier RSE devient un **argument**, pas un boulet.

## Restitution (10 min)

Le jury joue l'équipe achats de Caroflex + un·e représentant·e CSE attentif·ve à la sobriété. Format&nbsp;:
1. Pitch d'ouverture (2 min) — vous reprenez la main sur la narration RSE.
2. Présentation du dossier + 3 slides commerciales (5 min).
3. Questions du jury (3 min), dont&nbsp;: « qu'est-ce que vous faites quand un concurrent annonce -60&nbsp;% et vous -30&nbsp;%&nbsp;? »

---

*Espace pédagogique Agoriade, Bootcamp AI Product Builder, Édition 2026.*
