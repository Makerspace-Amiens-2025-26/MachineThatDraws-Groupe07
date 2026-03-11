---
layout: default
title: Carte PCB
nav_order: 6
---

# Conception d'une carte PCB dédiée

Ce projet s’inscrit dans la continuité du projet **Machine that Draws**.  
L’objectif est de concevoir et fabriquer une **carte électronique dédiée** afin de remplacer le contrôleur de drivers utilisé précédemment.

La carte permettra d'intégrer directement les éléments nécessaires au pilotage de la machine.

---

# Architecture de la carte

La carte intègre les composants suivants :

- **ESP32** comme microcontrôleur principal  
- **2 drivers A4988** pour piloter les moteurs pas-à-pas X et Y  
- **Lecteur de carte SD** pour stocker les fichiers G-code ou dessins  
- **Écran OLED** pour afficher les informations et les menus  
- **Connecteurs moteurs et alimentation**  
- **Gestion des alimentations**

---

# Objectifs pédagogiques

À l’issue de ce projet, nous serons capables de :

- Concevoir un **schéma électronique complet avec KiCad**
- Réaliser le **routage d’un PCB**
- Intégrer des **bus de communication (I2C et SPI)**
- Gérer les **contraintes de puissance et découplage**
- Souder des **composants CMS et traversants**
- Déboguer une **carte électronique**
- Documenter un **projet technique complet**

---

# Cahier des charges

## Spécifications fonctionnelles

La carte doit permettre de :

- Piloter **2 moteurs pas-à-pas (axes X et Y)** via drivers A4988
- Stocker des fichiers sur **carte SD**
- Afficher des informations sur **écran OLED**
- Détecter les **fins de course**
- Effectuer le **référencement automatique (homing)**
- Protéger contre les **déplacements hors limites**

---

# Spécifications techniques

| Paramètre | Valeur | Remarques |
|--------|--------|--------|
| Alimentation moteurs | 12V ou 24V DC | alimentation externe |
| Alimentation ESP32 | 5V | régulateur R-78E5.0-1.0 |
| Logique | 3.3V | ESP32 |
| Courant moteurs | 0.5A – 1.5A | réglage via Vref |
| Interface I2C | GPIO8 / GPIO9 | écran OLED |
| Interface SPI | GPIO 18/19/11/5 | carte SD |
| Microcontrôleur | ESP32 S3 UNO | format Arduino |
| Dimensions PCB | Shield Arduino UNO | intégration facile |

---

# Bill of Materials (BOM)

## Composants principaux

| Composant | Référence | Quantité |
|----------|----------|----------|
| ESP32 S3 UNO | ESP32 S3 UNO | 1 |
| Driver A4988 | StepStick | 2 |
| Écran OLED | SSD1306 | 1 |
| Lecteur carte SD | Socket SD | 1 |
| Moteur NEMA17 | - | 2 |
| Régulateur 5V | R-78E5.0 | 1 |

---

# Étapes de réalisation

## 1 — Prototypage

Test du driver **A4988** sur breadboard avec un moteur NEMA17.

Objectif :

- vérifier le fonctionnement du driver
- régler le **courant moteur**
- tester un **code de rotation simple**

Livrables :

- photos du montage
- résultats des tests

---

## 2 — Conception du schéma (KiCad)

Étapes :

- création du projet KiCad
- placement des composants
- connexion des alimentations
- ajout des résistances et condensateurs
- vérification ERC

Livrables :

- fichier `.kicad_sch`
- PDF du schéma

---

## 3 — Routage PCB

Dans **KiCad Pcbnew** :

- placement des composants
- routage des pistes
- ajout du plan de masse
- vérification DRC

Livrables :

- fichier `.kicad_pcb`

---

## 4 — Fabrication du PCB

- génération des fichiers **Gerber**
- vérification avec visualiseur
- commande du PCB

Livrables :

- archive `.zip` des Gerber

---

## 5 — Assemblage

- soudure CMS
- soudure composants traversants
- inspection visuelle

Livrables :

- photos du PCB assemblé

---

## 6 — Tests et validation

Tests réalisés :

- continuité électrique
- alimentation
- communication I2C
- lecture carte SD
- rotation moteurs
- détection des fins de course

Livrables :

- **vidéo de démonstration**
- **documentation technique**

---

# Configuration PlatformIO

Pour programmer l’ESP32 S3 :
[env:esp32-s3-devkitc-1]
platform = espressif32
board = esp32-s3-devkitc-1
framework = arduino
monitor_speed = 115200
---

# Planning du projet

| Séance | Durée | Contenu |
|------|------|------|
| 1 | 3h | Prototypage |
| 2 | 3h | Schéma électronique |
| 3 | 3h | Routage PCB |
| 4 | 3h | Routage PCB |
| 5 | 3h | Assemblage |
| 6 | 3h | Développement logiciel |
| 7 | 3h | Correctifs |
| 8 | 3h | Validation finale |

---

# Résultat attendu

Une **carte PCB fonctionnelle** permettant de piloter le **DrawBot A4** avec :

- contrôle moteurs
- stockage fichiers
- interface utilisateur
- capteurs de position
