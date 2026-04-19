# Scénario 5, Fuite de données, la notification en 72h

Simulation Agoriade, Module 4 « Atelier de consolidation ». Brief adaptable en solo sur ton propre projet. Durée indicative : 75 minutes de travail individuel.

## Le pitch

Mardi 11h47. Message Slack en urgence d'un collègue&nbsp;:

> **Julien** (dev back)
> « Urgent. J'ai fait une boulette ce matin à 10h. J'ai mis un export CSV dans un bucket S3 pour un test, et je viens de me rendre compte que le bucket était **public**. Il contient 412 lignes avec nom, prénom, email, téléphone, CV et score d'évaluation. C'est accessible depuis internet. Je l'ai dépublié à 11h45 dès que je m'en suis aperçu. Qu'est-ce qu'on fait&nbsp;? »

Tu viens de te rendre compte que ton produit a subi une **violation de données à caractère personnel** au sens de l'article 4(12) du RGPD. Le compteur des **72 heures** de notification à la CNIL (article 33) vient de démarrer.

## Contexte opérationnel

- **Volume exposé** : 412 personnes, candidat·es aux offres d'emploi.
- **Nature des données** : identifiants directs (nom, email, tél), CV (incluant données potentiellement sensibles&nbsp;: santé, religion, situation familiale selon les CV), score d'évaluation automatisé.
- **Durée d'exposition** : de 10h00 à 11h45, soit **1h45**.
- **Preuve d'accès tiers** : inconnue à ce stade (logs S3 à analyser).
- **Registre des traitements** : le traitement existe mais la mention « violation » n'a jamais été testée.
- **Assurance cyber** : aucune.

## Ta mission (en solo, sur ton propre projet)

Adapte ce scénario à ton produit. Imagine qu'un export de tes utilisateur·rices s'est retrouvé exposé publiquement 1h45.

1. **Diagnostic rapide (15 min)** — qu'est-ce qui est exposé ? Combien de personnes ? Quelles données ? Depuis combien de temps ? Qu'est-ce qui est sensible ?
2. **Arbitrage notification (15 min)** — faut-il notifier la CNIL ? Si oui, selon quels critères (article 33, évaluation du risque) ? Faut-il notifier les personnes (article 34, si risque élevé) ?
3. **Production des livrables (35 min)** — tu produis, en version v1 honnête :
   - La **déclaration de violation à la CNIL** (utiliser le formulaire en ligne de la CNIL comme guide).
   - Le **modèle de communication aux personnes** si tu décides de les informer.
   - Un **runbook « violation de données »** pour ne plus improviser la prochaine fois.
   - La **mise à jour du registre des traitements** (tenir à jour les incidents).
4. **Post-mortem (10 min)** — qu'est-ce qui a permis cet incident ? Qu'est-ce qu'on change ? Règle blameless.

## Livrables utiles

- [Checklist RGPD](/livrables/checklist-rgpd/) (dont les points sur la sécurité et les droits)
- [Template Mini-AIPD](/livrables/template-aipd/)
- [Synthèse 8 risques sécurité](/livrables/synthese-8-risques/)
- [Template Runbook](/livrables/runbook/)
- [Trame de doc technique](/livrables/trame-doc/)

## Critères d'auto-évaluation

- **Délai** — ta déclaration CNIL tiendrait-elle dans les 72h en vrai ?
- **Honnêteté** — tu décris factuellement, tu ne minimises pas, tu ne catastrophises pas.
- **Actionnabilité** — ton runbook est clair pour quelqu'un qui découvrirait la panne.
- **Apprentissage** — le post-mortem propose une vraie amélioration système, pas juste « on fera plus attention ».

## Ressource officielle CNIL

- <a href="https://www.cnil.fr/fr/notifier-une-violation-de-donnees-personnelles">cnil.fr/fr/notifier-une-violation-de-donnees-personnelles</a>, guide officiel + formulaire en ligne.

---

*Espace pédagogique Agoriade, Bootcamp AI Product Builder, Édition 2026.*
