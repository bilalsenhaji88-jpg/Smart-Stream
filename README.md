# 📺 Smart Stream - IPTV Web Platform

**Smart Stream** est une plateforme web d'IPTV et de TV en direct développée dans le cadre d'un projet d'apprentissage (YouCode).

L'objectif principal de ce projet est de construire une application web dynamique côté client (SPA) en mettant l'accent sur :
- **L'architecture modulaire** en JavaScript (séparation des services, de l'UI et de la logique métier).
- **L'asynchronisme** en utilisant `async/await`, `fetch` API et la gestion des erreurs (`try/catch`).
- **L'interface utilisateur (UI)** reproduisant fidèlement une Smart TV grâce aux classes utilitaires de **Tailwind CSS**.
- **La manipulation des données** en temps réel (recherche et filtrage dynamiques des chaînes).

---

## 🌐 Lien de déploiement

[https://votre-lien-de-deploiement.com](https://votre-lien-de-deploiement.com)

---

## 🛠️ Technologies utilisées

| Technologie | Rôle |
|---|---|
| **HTML5** | Structure de la page |
| **JavaScript (ES6+ modules)** | Logique de l'application, séparée en modules |
| **Tailwind CSS** (CDN) | Mise en forme et design responsive |
| **hls.js** (CDN) | Lecture des flux vidéo `.m3u8` dans les navigateurs Chrome, Firefox, Edge et Brave |
| **Fetch API** | Récupération des chaînes depuis une API distante (npoint.io) |
| **Git / GitHub** | Versionnement du code |

Aucun framework n'est utilisé : le projet est écrit en JavaScript vanilla.

---

## ✨ Fonctionnalités

- **Liste des pays** affichée au chargement de l'application.
- **Chaînes par pays** : un clic sur un pays affiche uniquement ses chaînes, avec un bouton « Retour aux pays ».
- **Recherche dynamique** par nom ou par numéro de chaîne, appliquée au pays sélectionné.
- **Lecteur vidéo intégré** : un clic sur une chaîne lance son flux directement dans la zone de prévisualisation.
- **Chaîne active mise en évidence** dans la liste.
- **Gestion des états de l'interface** : chargement (skeleton), erreur avec bouton « Réessayer », et résultat vide.
- **Interface responsive** : adaptée aux écrans mobiles et ordinateurs.

---

## 📁 Structure des fichiers

```
smart-stream/
├── index.html          # Page principale (structure + chargement des scripts)
├── README.md           # Présentation du projet
└── js/
    ├── main.js         # Point d'entrée : orchestre l'application (pays, recherche, événements)
    ├── api.js          # Service : récupération des chaînes avec fetch
    ├── channels.js     # UI : affichage de la liste des chaînes
    ├── preview.js      # UI : sélection d'une chaîne et lecture de la vidéo
    ├── search.js       # Logique : filtrage des chaînes par nom ou numéro
    └── states.js       # État global + affichage des états (chargement, erreur, vide)
```

---

## 🚀 Lancer le projet avec un serveur local

Le projet utilise les **modules ES** (`<script type="module">`). Ouvrir `index.html` directement dans le navigateur (protocole `file://`) provoque une erreur CORS : il faut donc passer par un serveur local.

**Option 1 : Live Server (VS Code)**
1. Installer l'extension **Live Server**.
2. Clic droit sur `index.html` puis **Open with Live Server**.

**Option 2 : Python**
```bash
cd smart-stream
python3 -m http.server 8000
```
Puis ouvrir [http://localhost:8000](http://localhost:8000).

**Option 3 : Node.js**
```bash
cd smart-stream
npx serve
```

Une connexion Internet est nécessaire : Tailwind, hls.js et l'API des chaînes sont chargés à distance.
