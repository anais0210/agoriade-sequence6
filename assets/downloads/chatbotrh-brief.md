# Cas pratique, ChatBotRH

Module 1 RGPD, Temps 3, audit en binôme ou en trio.

## Contexte

**RecrutTech**, cabinet de recrutement spécialisé dans la tech (50 salarié·es). A déployé la semaine dernière un chatbot « ChatBotRH » censé pré-qualifier les candidatures.

## Description du dispositif

Le chatbot est accessible depuis le site public. Voici son fonctionnement :

1. Le candidat arrive sur la page « Postuler ». Une fenêtre de chat s'ouvre automatiquement.
2. Le bot demande : « Pour commencer, envoyez-moi votre CV en PDF. »
3. Le CV est uploadé dans **Airtable** (compte gratuit, serveurs US, pas de DPA signé).
4. Un scénario **Make** envoie automatiquement le contenu du CV à **GPT-4 (OpenAI)** pour l'analyser et extraire : nom, prénom, email, téléphone, adresse, date de naissance, photo, expériences, diplômes, compétences, centres d'intérêt, informations de santé si mentionnées.
5. Le bot pose ensuite 5 questions au candidat :
    - « Quelle est votre nationalité ? »
    - « Avez-vous des enfants ? »
    - « Êtes-vous syndiqué·e ? »
    - « Quel est votre état de santé général ? »
    - « Quelles sont vos convictions politiques et religieuses ? »
6. Les réponses sont stockées dans Airtable, accessibles à toute l'équipe RH (15 personnes) et à tous les managers (23 personnes).
7. L'analyse GPT-4 produit un score de 0 à 100. En dessous de 60 : rejet automatique, mail envoyé au candidat « Votre profil ne correspond pas. » Sans autre explication, sans recours.
8. Les logs Make et Airtable sont conservés **indéfiniment**.
9. Aucune information n'est donnée au candidat sur le traitement de ses données, le bot, ou l'existence d'une décision automatisée.
10. Il n'y a pas de case à cocher, pas de politique de confidentialité, pas de mention légale.
11. Les clés API OpenAI et Airtable sont stockées en clair dans le scénario Make. L'équipe RH a accès au scénario.
12. Pas de sauvegarde automatique d'Airtable. Pas de procédure en cas de panne.

## Mission des groupes

Identifier au moins **8 violations RGPD ou manquements sécurité**, et proposer pour chacune une correction.

Format de chaque ligne :

```
Violation #X, élément du dispositif, nature du problème, principe RGPD concerné, comment corriger
```

Durée : **25 minutes** en binôme ou en trio.

Un template tableur (CSV) est disponible pour structurer la restitution : [chatbotrh-audit-template.csv](chatbotrh-audit-template.csv).

---

*Espace pédagogique Agoriade, Bootcamp AI Product Builder, Édition 2026.*
