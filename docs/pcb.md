---
layout: default
title: Carte PCB
nav_order: 6
---

# Conception d’une carte PCB dédiée

Dans la continuité du projet **DrawBot A4**, nous avons conçu une **carte électronique dédiée** afin de remplacer le contrôleur utilisé lors des premiers prototypes.

L’objectif est de créer une carte unique capable de piloter la machine, gérer les moteurs et fournir une interface utilisateur simple.

Cette approche permet :

- d'améliorer la fiabilité du système
- de réduire le nombre de connexions externes
- d'intégrer toutes les fonctions dans une seule carte

---

# Architecture de la carte

La carte repose sur une architecture simple et modulaire.

Le **microcontrôleur ESP32-S3** agit comme le cerveau du système et communique avec différents périphériques :

- **Drivers A4988** pour piloter les moteurs pas-à-pas
- **Écran OLED** pour afficher l’état de la machine
- **Carte SD** pour stocker les fichiers de dessin
- **Fins de course** pour sécuriser les déplacements

Cette architecture permet de contrôler la machine tout en offrant une interface de suivi.

---

# Pourquoi utiliser un ESP32 ?

L’ESP32 a été choisi pour plusieurs raisons :

- microcontrôleur puissant et polyvalent
- nombreuses interfaces (SPI, I2C, GPIO)
- compatibilité avec l’environnement Arduino
- facilité de programmation

Il permet de gérer à la fois :

- le contrôle des moteurs
- la lecture des capteurs
- l’affichage sur écran
- la communication avec la carte SD.

---

# Pilotage des moteurs

Les moteurs pas-à-pas sont contrôlés par **deux drivers A4988**.

Chaque driver permet de contrôler :

- la direction du moteur (DIR)
- le nombre de pas effectués (STEP)

Cela permet de déplacer précisément les axes **X et Y** du DrawBot.

Le courant moteur peut être ajusté via la tension de référence (**Vref**) afin d’éviter la surchauffe.

---

# Gestion des entrées et capteurs

La carte intègre également des **fins de course mécaniques**.

Ces capteurs permettent :

- de détecter la position limite des axes
- d’effectuer un **homing automatique**
- d’éviter les collisions mécaniques.

---

# Interface utilisateur

Un **écran OLED** est utilisé pour afficher les informations importantes :

- état de la machine
- progression du dessin
- menus de navigation

L’écran communique avec l’ESP32 via le **bus I2C**, ce qui simplifie le câblage.

---

# Stockage des fichiers

La machine peut lire des fichiers depuis une **carte SD**.

Cela permet de stocker :

- les fichiers G-code
- les dessins à réaliser

La communication avec la carte SD se fait via le **bus SPI**, plus rapide et adapté au transfert de données.

---

# Conception électronique avec KiCad

La conception de la carte a été réalisée avec le logiciel **KiCad**.

Les principales étapes ont été :

1. création du schéma électronique
2. vérification des connexions
3. attribution des empreintes
4. routage du PCB
5. génération des fichiers de fabrication

Ces étapes permettent de passer d’un schéma théorique à une carte physique.

---

# Routage du PCB

Lors du routage, plusieurs contraintes ont été prises en compte :

- pistes plus larges pour les lignes d’alimentation
- plan de masse pour améliorer la stabilité électrique
- placement des condensateurs de découplage au plus près des circuits

Ces bonnes pratiques permettent d’obtenir une carte fiable et stable.

---

# Fabrication et assemblage

Une fois le routage terminé, les fichiers **Gerber** ont été générés pour la fabrication.

L’assemblage de la carte comprend :

- soudure des composants CMS
- soudure des composants traversants
- inspection des soudures

Des tests électriques sont ensuite réalisés avant la mise sous tension.

---

# Validation du système

La validation finale consiste à tester :

- la communication avec l’écran OLED
- la lecture de la carte SD
- la rotation des moteurs
- la détection des fins de course

Ces tests permettent de vérifier que la carte fonctionne correctement avec le **DrawBot A4**.

---

# Résultat attendu

La carte PCB doit permettre de centraliser toutes les fonctions nécessaires au pilotage du DrawBot :

- contrôle des moteurs
- gestion des capteurs
- interface utilisateur
- stockage des fichiers

Elle constitue ainsi une **solution compacte et intégrée** pour le fonctionnement de la machine.
