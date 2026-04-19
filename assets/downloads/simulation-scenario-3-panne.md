# Scénario 3, Panne critique, dimanche 23h07

Simulation Agoriade, Module 4 « Bureau de crise responsable ». Durée en équipe : 75 minutes de préparation + 10 min de restitution.

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

## Ta mission (en équipe)

1. **Premiers gestes, 0-30 min (15 min de prépa)** — lister dans l'ordre strict ce que **toi** tu fais entre 23h07 et 23h37. Objectif&nbsp;: diagnostic rapide + communication au client.
2. **Écriture du runbook définitif (35 min)** — en utilisant le template, produire un runbook complet pour ce type de panne. Contrainte&nbsp;: il doit être **utilisable par quelqu'un d'autre que toi**, à 3h du matin, sans te réveiller.
3. **Post-mortem préventif (15 min)** — remplir un post-mortem basé sur l'hypothèse la plus probable (fuite de quota OpenAI). Règles du blameless post-mortem appliquées.
4. **Plan de prévention (10 min)** — 5 actions pour ne plus revivre ce dimanche soir, chacune avec un coût estimé et une date d'échéance.

## Livrables utiles

- [Template Runbook](/livrables/runbook/)
- [Trame de doc technique](/livrables/trame-doc/)
- [Checklist « ma doc est-elle exploitable »](/livrables/checklist-doc/)
- [Synthèse 8 risques sécurité](/livrables/synthese-8-risques/)

## Critères d'évaluation par le jury

- **Utilisabilité en panique** — le runbook tient-il la route à 3h du matin, sans ambiguïté, sans « ça dépend »&nbsp;?
- **Blameless** — le post-mortem vise le système, pas une personne.
- **Transparence client** — la communication à Anne-Laure est tenue à 23h18 et pas le lendemain à 9h.

## Restitution (10 min)

Le jury joue Anne-Laure (cliente) + un·e dev freelance à qui tu passes la main la semaine suivante. Format&nbsp;:
1. Pitch d'ouverture (2 min) — chronologie du dimanche soir, ce qui a été bien fait / mal fait.
2. Présentation du runbook + post-mortem (5 min).
3. Questions du jury (3 min), dont&nbsp;: « si ça recasse cette nuit, qu'est-ce qui sera différent&nbsp;? »

---

*Espace pédagogique Agoriade, Bootcamp AI Product Builder, Édition 2026.*
