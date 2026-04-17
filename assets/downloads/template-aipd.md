# Template Mini-AIPD

Version simplifiée de l'AIPD officielle CNIL, adaptée à un projet No-Code/IA en phase de MVP. À remplir en 30-45 minutes, pour un traitement à la fois. Duplique le fichier si tu as plusieurs traitements à analyser.

---

## Bloc 1, Description du traitement

- **Nom du traitement :** _[ex : « Pré-qualification automatique des candidatures »]_
- **Finalité(s) :** _[pourquoi je traite, ex : évaluer l'adéquation d'un profil au poste]_
- **Responsable :** _[nom + rôle]_
- **Personnes concernées :** _[ex : candidat·es externes]_
- **Catégories de données :** _[liste précise : nom, email, CV, réponses au questionnaire, score…]_
- **Données sensibles :** _[oui / non, si oui, lesquelles et sur quel fondement]_
- **Flux de données :** _[schéma ou description : source → traitements → stockage → destinataires]_
- **Sous-traitants :** _[liste, par sous-traitant : outil + pays d'hébergement + DPA signé oui/non]_
- **Durée de conservation :** _[par catégorie de donnée]_

---

## Bloc 2, Nécessité et proportionnalité

- **Base légale retenue :** _[consentement / contrat / intérêt légitime / obligation légale / intérêts vitaux / mission d'intérêt public]_
    - **Justification :** _[pourquoi celle-ci et pas une autre]_
- **Données strictement nécessaires ?** _[oui / non, si non, quoi enlever ?]_
- **Information des personnes :** _[comment, quand, sur quoi]_
- **Droits :** _[comment une personne exerce ses droits d'accès, rectification, suppression, opposition, portabilité ; procédure concrète]_
- **Sous-traitants conformes :** _[DPA signés ? Transferts hors UE encadrés ?]_

---

## Bloc 3, Identification des risques

Pour chaque scénario, évaluer : **Impact** (faible / modéré / élevé) × **Probabilité** (faible / modérée / élevée).

### Scénario 1, Accès illégitime

_Qu'est-ce qui se passe si les données fuitent ?_

- Impact :
- Probabilité :
- Sources du risque :

### Scénario 2, Modification non désirée

_Si les données sont modifiées par erreur ou malveillance ?_

- Impact :
- Probabilité :
- Sources du risque :

### Scénario 3, Disparition

_Si les données sont perdues ?_

- Impact :
- Probabilité :
- Sources du risque :

---

## Bloc 4, Mesures de traitement des risques

Pour chaque risque identifié, préciser les mesures de **prévention**, **détection** et **réaction**.

| Risque | Prévention | Détection | Réaction |
|---|---|---|---|
| Accès illégitime | _[ex : 2FA, droits restreints, chiffrement]_ | _[ex : logs d'accès, alertes anomalies]_ | _[ex : révocation, notification CNIL sous 72h si nécessaire]_ |
| Modification non désirée | _[ex : historique versions, validation avant écriture]_ | _[ex : alertes, diff automatique]_ | _[ex : rollback backup, reconstitution]_ |
| Disparition | _[ex : sauvegarde automatique quotidienne]_ | _[ex : monitoring, tests de restauration]_ | _[ex : restauration + communication usagers]_ |

---

## Conclusion

Les risques résiduels sont-ils acceptables au regard de la finalité ? _[oui / non / à renforcer par…]_

- **Validé le :** _[date]_
- **Par :** _[nom]_
- **Prochaine revue prévue :** _[date]_

---

*Template Agoriade, adapté de l'AIPD officielle CNIL. Espace pédagogique Module 1 RGPD, Édition 2026.*
