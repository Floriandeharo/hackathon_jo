WebApp de Prédiction et Visualisation des Médailles Olympiques
  Ce projet est une application web conçue pour prédire et visualiser les données des médailles olympiques des 120 dernières années. L'application est construite avec un front-end en React, une API back-end en Node.js, une base de données MySQL et un modèle 
  d'apprentissage automatique dans un notebook Python.

Table des Matières
Aperçu
Fonctionnalités
Architecture
Instructions d'Installation
Prérequis
Configuration de la Base de Données
Configuration du Back-end
Configuration du Front-end
Configuration du Modèle d'Apprentissage Automatique
Utilisation
Contribuer
Licence
Aperçu
L'application Web de Prédiction et Visualisation des Médailles Olympiques est conçue pour fournir des informations et des prédictions sur le nombre de médailles des pays aux Jeux Olympiques. Les utilisateurs peuvent visualiser des données historiques et voir des prédictions pour les jeux futurs basées sur des tendances historiques et des modèles d'apprentissage automatique.

Fonctionnalités
Visualisation des Données : Graphiques interactifs affichant les données olympiques.
Prédictions des Médailles : Prédire les futures médailles à l'aide de l'apprentissage automatique.
Données Historiques : Accès à 120 ans de données olympiques.
Interface Conviviale : Facile à naviguer et à utiliser.
Architecture
Front-end : React
API Back-end : Node.js
Base de Données : MySQL
Apprentissage Automatique : Python avec Jupyter Notebook
Instructions d'Installation
Prérequis
Assurez-vous d'avoir les éléments suivants installés :

Node.js
MySQL
Python et Jupyter Notebook
Git
Configuration de la Base de Données
Installer MySQL :

Téléchargez et installez MySQL depuis le site officiel.
Démarrez le serveur MySQL.
Créer la Base de Données :

sql
Copier le code
CREATE DATABASE olympics;
USE olympics;
Importer les Données :

Importez vos données olympiques dans la base de données olympics. Vous pouvez utiliser des outils comme MySQL Workbench ou la ligne de commande.
Configuration du Back-end
Cloner le dépôt :

bash
Copier le code
git clone [(https://github.com/Floriandeharo/hackathon_jo/tree/main)](https://github.com/Floriandeharo/hackathon_jo/tree/main)
cd olympic-medals-webapp/api
Installer les dépendances :

bash
Copier le code
npm install
Configurer la connexion à la base de données :

Créez un fichier .env dans le répertoire api avec le contenu suivant :
env
Copier le code
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=votremotdepasse
DB_NAME=olympics
Démarrer le serveur :

bash
Copier le code
node server.js
Configuration du Front-end
Naviguer vers le répertoire front-end :

bash
Copier le code
cd ../frontend
Installer les dépendances :

bash
Copier le code
npm install
Démarrer l'application React :

bash
Copier le code
npm start
Configuration du Modèle d'Apprentissage Automatique
Naviguer vers le répertoire machine learning :

bash
Copier le code
cd ../ml
Installer les dépendances Python :

bash
Copier le code
pip install -r requirements.txt
Ouvrir Jupyter Notebook :

bash
Copier le code
jupyter notebook
Exécuter le notebook :

Ouvrez model_training.ipynb et exécutez toutes les cellules pour entraîner et sauvegarder le modèle d'apprentissage automatique.
Utilisation
Accéder à l'application web :

Ouvrez votre navigateur et naviguez à http://localhost:3000.
Utiliser l'application :

Naviguez dans l'application pour visualiser les données olympiques historiques et voir les prédictions de médailles pour les jeux futurs.
Contribuer
Fork le dépôt.
Créer une nouvelle branche (git checkout -b feature-branch).
Commit vos modifications (git commit -m 'Ajouter une nouvelle fonctionnalité').
Push vers la branche (git push origin feature-branch).
Créer une Pull Request.
Licence
Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.
