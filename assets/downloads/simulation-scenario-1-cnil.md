# Scénario 1, Contrôle CNIL inopiné

Simulation Agoriade, Module 4 « Bureau de crise responsable ». Durée en équipe : 75 minutes de préparation + 10 min de restitution.

## Le pitch

Lundi 9h00. Tu arrives au bureau. Un courrier recommandé attend sur ton clavier&nbsp;:

> Madame, Monsieur,
>
> La Commission nationale de l'informatique et des libertés (CNIL) vous informe qu'un **contrôle sur place** de votre dispositif **« ChatBotRH »** aura lieu **demain mardi à 14h00** dans vos locaux, en application de l'article 19 de la loi Informatique et Libertés.
>
> Les agents de contrôle souhaitent examiner&nbsp;: le registre des traitements, la mini-AIPD du dispositif, les bases légales retenues, la politique de conservation, les transferts hors UE, les mesures de sécurité, les procédures en cas de violation, et la documentation fournie aux personnes concernées.

Le dispositif ChatBotRH est celui que tu as audité en Module 1. Il est **en production** depuis 3 mois et a traité **412 candidatures**.

## Contexte opérationnel

- **Structure** : RecrutTech, 50 salarié·es, pas de DPO désigné.
- **Fournisseurs** : Airtable (US, pas de DPA), OpenAI (GPT-4), Make.
- **Personnes concernées** : candidat·es aux offres d'emploi (données CV + questionnaire + décision automatisée).
- **Situation actuelle** : aucun registre formalisé, pas d'AIPD, mentions d'information absentes, clés API en clair dans le scénario Make.

## Ta mission (en équipe)

1. **Diagnostic rapide (15 min)** — lister tout ce qui vous manque. Risque encouru (sanctions max RGPD).
2. **Plan de mise en conformité d'urgence (35 min)** — que peut-on produire en 24h&nbsp;? Que va-t-on honnêtement admettre à la CNIL&nbsp;?
3. **Livrables à remettre aux contrôleurs (25 min)** — produire un **dossier de contrôle** contenant au minimum&nbsp;:
   - Registre des traitements v1 (tableau avec les 8 colonnes CNIL)
   - Mini-AIPD (utiliser le template du Module 1)
   - Mentions d'information candidat·es (texte prêt à afficher)
   - Procédure de violation de données (runbook style, qui fait quoi en 72h)
   - Liste des sous-traitants + statut DPA
   - Tableau des mesures de sécurité prises / à prendre (utiliser la synthèse 8 risques)

## Livrables utiles (déjà vus ce matin et les jours précédents)

- [Checklist RGPD](/livrables/checklist-rgpd/) (24 points)
- [Template Mini-AIPD](/livrables/template-aipd/)
- [Synthèse 8 risques sécurité](/livrables/synthese-8-risques/)
- [Trame de doc technique](/livrables/trame-doc/)
- [Template Runbook](/livrables/runbook/)

## Critères d'évaluation par le jury (les autres équipes + formatrice)

Votre dossier est-il&nbsp;:
- **Honnête** — vous distinguez clairement ce qui est fait, ce qui est en cours, ce qui manque.
- **Actionnable** — un contrôleur peut suivre les procédures sans vous poser de questions.
- **Priorisé** — les 3 chantiers les plus critiques sont identifiés et planifiés.

## Restitution (10 min)

Vous recevez le jury « contrôleur CNIL ». Format&nbsp;:
1. Pitch d'ouverture (2 min) — contexte, posture.
2. Présentation du dossier (5 min) — quoi conforme, quoi à corriger, quel délai.
3. Questions du jury (3 min).

---

*Espace pédagogique Agoriade, Bootcamp AI Product Builder, Édition 2026.*
