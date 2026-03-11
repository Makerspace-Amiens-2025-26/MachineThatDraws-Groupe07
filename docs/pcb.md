---
layout: default
title: Carte PCB
nav_order: 6
---

# Conception de la carte PCB

Dans le cadre du projet **DrawBot A4**, nous avons également réalisé la conception d’une **carte électronique (PCB)** afin de regrouper les différents composants nécessaires au fonctionnement de la machine.

L’objectif est de remplacer les montages temporaires réalisés lors du prototypage par une **solution plus propre, compacte et fiable**.

---

## Objectif du projet

La carte PCB doit permettre de :

- contrôler les **moteurs pas-à-pas** de la machine
- connecter les **capteurs de fin de course**
- gérer l’**interface utilisateur**
- centraliser les connexions de la machine

Cette carte facilite donc l’intégration et améliore la fiabilité du système.

---

## Composants principaux

La carte intègre plusieurs éléments essentiels :

- **ESP32** : microcontrôleur principal de la machine
- **Drivers A4988** : pilotage des moteurs pas-à-pas
- **Écran OLED** : affichage des informations de la machine
- **Lecteur de carte SD** : stockage des fichiers de dessin
- **Connecteurs moteurs et capteurs**

Ces composants permettent de contrôler l’ensemble du système.

---

## Conception avec KiCad

La conception de la carte a été réalisée avec le logiciel **KiCad**.

Les principales étapes ont été :

1. création du schéma électronique
2. vérification des connexions
3. routage du PCB
4. génération des fichiers de fabrication

Cette étape permet de transformer le schéma électronique en **carte physique utilisable**.

---

## Routage du PCB

Lors du routage de la carte, plusieurs règles ont été respectées :

- pistes plus larges pour les lignes d’alimentation
- plan de masse pour améliorer la stabilité
- placement des composants de manière logique

Cela permet d'obtenir une carte **stable et fiable**.

---

## Fabrication et assemblage

Une fois la conception terminée, les fichiers de fabrication ont été générés afin de produire la carte PCB.

Après réception, les composants ont été soudés sur la carte afin de réaliser l’assemblage complet.

---

## Résultat

La carte PCB permet de regrouper tous les éléments électroniques nécessaires au fonctionnement du **DrawBot A4** sur un seul circuit.

Elle constitue une solution **plus propre, plus compacte et plus fiable** que le montage réalisé lors du prototypage.
