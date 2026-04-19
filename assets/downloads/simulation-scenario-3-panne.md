# Scénario 3, Panne critique, dimanche 23h07

Simulation Agoriade, Module 4 « Atelier de consolidation ». Brief adaptable en solo sur ton propre projet. Durée indicative : 75 minutes de travail individuel.

## Le pitch

Dimanche **23h07**. Ton téléphone vibre. SMS de ton principal client&nbsp;:

> **RecrutTech** (DRH, Anne-Laure)
> « ChatBotRH est HS. Rien ne marche. Les candidats me disent que ça plante. Lundi matin j'ai **80 entretiens à caler** à partir de leurs candidatures. Je compte sur toi. »

Tu ouvres ton laptop. Plusieurs choses te reviennent&nbsp;:
- Le scénario Make n'a plus tourné depuis 14h32 aujourd'hui.
- Airtable affiche une erreur `429 Too Many Requests`.
- Ton CI/CD Vercel a déployé hier soir à 21h14 une nouvelle version du formulaire (tu ne te souviens pas exactement de ce qu'elle change).
- Ta clé OpenAI a peut-être atteint le plafond mensuel (tu ne sais pas, tu ne regardes jamais).
- Tu es seul·e. Ta DPO n'est pas joignable. Ton dev freelance dort.

Il est 23h07. Anne-Laure attend une réponse.

## Contexte opérationnel

- **Produit** : ChatBotRH (même cas que les autres scénarios).
- **Documentation existante** : un Notion créé il y a 3 mois, pas à jour. Aucun runbook. Aucune procédure d'escalade.
- **Dernières 2 semaines** : 3 déploiements, aucun post-déploiement validé.
- **SLA client** : aucun écrit. Promesse orale « on est là si ça casse ».

## Ta mission (en solo, sur ton propre projet)

Adapte ce scénario à ton produit. Imagine que ton produit est HS ce soir à 23h07, un client clé attend lundi matin, tu es seul·e.

1. **Premiers gestes, 0-30 min (15 min)** — lister dans l'ordre strict ce que **toi** tu fais entre 23h07 et 23h37. Objectif&nbsp;: diagnostic rapide + communication au client.
2. **Écriture du runbook définitif (35 min)** — en utilisant le template, produire un runbook complet pour ce type de panne. Contrainte&nbsp;: il doit être **utilisable par quelqu'un d'autre que toi**, à 3h du matin, sans te réveiller.
3. **Post-mortem préventif (15 min)** — remplir un post-mortem basé sur l'hypothèse la plus probable de la panne sur ton projet. Règles du blameless post-mortem appliquées.
4. **Plan de prévention (10 min)** — 5 actions pour ne plus revivre ce dimanche soir, chacune avec un coût estimé et une date d'échéance.

## Livrables utiles

- [Template Runbook](/livrables/runbook/)
- [Trame de doc technique](/livrables/trame-doc/)
- [Checklist « ma doc est-elle exploitable »](/livrables/checklist-doc/)
- [Synthèse 8 risques sécurité](/livrables/synthese-8-risques/)

## Critères d'auto-évaluation

- **Utilisabilité en panique** — ton runbook tient-il la route à 3h du matin, sans ambiguïté, sans « ça dépend »&nbsp;?
- **Blameless** — le post-mortem vise le système, pas une personne.
- **Transparence client** — la communication au client est tenue dans les 15 min, pas le lendemain matin.

## Pour aller plus loin avec la formatrice

Quand tu l'appelles en 1:1, elle joue la cliente qui attend lundi matin + ton·ta dev à qui tu repasses la main la semaine suivante. Elle teste ton runbook à froid&nbsp;: est-ce qu'elle s'en sortirait avec, sans toi&nbsp;?

---

*Espace pédagogique Agoriade, Bootcamp AI Product Builder, Édition 2026.*
