                                            #PROJET HPI#

###### Etat actuel du code

Sur les 7 taches, il y'a 3 qui ont été faites totalement à savoir :
=> taches affichées sous forme de liste, les unes sur les autres
=> taches ordonnées en deux blocks : taches en cours et taches terminée. les blocks sont ordonnés par date de création des taches
=> la liste est récupérée depuis l'api rest donnée

il y'a 4 taches en cours à savoir :
=> champ texte permettant d'ajouter une nouvelle tache (j'ai pu la faire sans utiliser les méthodes HTTP mais encore en cours car je m'en suis rendu compte tardivement)
=> possible d'ajouter une tache comme terminée
=> Un bouton permet de supprimer toutes les taches
=> les actions telles que ajouter, supprimer ou marquer une tache s'effectuent sur l'api

Je pouvais cependant faire des taches en dehors des 7 premières tel que :
=> l'application divisée en deux pages car j'ai eu l'occasion d'utiliser les routes en react pour un petit projet de prise en main de react que vous pouvez retrouver ici : https://github.com/RomainBiziou/reactproject/tree/develop

### Bibliothèque tierces utilisées

J'aimerais preciser que j'ai voulu coder en "React Hooks" car je trouve la syntaxe plus facile et aussi car on commençait à faire la prise en main en classe, ce projet m'a alors beaucoup aidé car j'ai fait pas mal de recherches et j'ai fini par avoir une petite avance sur mes amis pendant les cours de React.

Comme bibliothèques tierces j'ai utilisé (pendant un moment en codant mais pas dans cette version du projet) les boutons de bootstrap qui sont tres facile à utiliser et très beaux d'ailleur
J'ai aussi utilisé une bibliothèque de date qui est "moment" : https://momentjs.com/) que je vais utiliser (car pas encore terminé) pour ajouter directement la date des que le libellé d'une tache a été ajouté. l'avantage qu'a cette library est qu'elle est tres pratique à utiliser et elle dispose de plusieurs format d'affichage de la date ainsi que de l'heure, celle de l'api createdAt y compris.

### étape de codage

J'ai rassemblé toutes les taches à faire ainsi que mon avancement dans le code à chaque grande étape au cas où je perdrais par quelconque manipulation l'intégralité de mon avancement.
Vous y trouverez également les différentes pistes utilisées à certains moments : https://www.notion.so/Projet-React-HPI-655e1b806a5148159743f8b73b603a68

Dans les commit vous allez surement trouver un dans le lequel je parlais de refactoring car j'avais réorganisé mon code pour faire par exemple un fichier AddTask.js pour les taches et RemoveTask.js pour la suppression des taches par exemple, et j'ai fini par refaire dans tout un fichier sous les conseils de mon prof qui me disait que j'allais pouvoir faire cela une fois le projet presque entierement terminé et qu'il fallait mieux aller pas à pas pour ne pas perdre le fil dans le code

# Démarrage avec Create React App

Ce projet a été démarré avec [Create React App](https://github.com/facebook/create-react-app).

## Scripts disponibles

Dans le répertoire du projet, vous pouvez exécuter :

### `npm start`

Lance l'application en mode développement.
Ouvrez [http://localhost:3000](http://localhost:3000) pour la visualiser dans le navigateur.

La page se rechargera si vous effectuez des modifications.
Vous verrez également toutes les erreurs de lint dans la console.

### `npm test`

Lance le programme d'exécution des tests en mode de surveillance interactive.
Consultez la section sur [l'exécution des tests](https://facebook.github.io/create-react-app/docs/running-tests) pour plus d'informations.

### `npm run build`

Construit l'application pour la production dans le dossier `build`.
Il regroupe correctement React en mode production et optimise la construction pour obtenir les meilleures performances.

La compilation est réduite et les noms de fichiers incluent les hachages.
Votre application est prête à être déployée !

Consultez la section sur le [déploiement](https://facebook.github.io/create-react-app/docs/deployment) pour plus d'informations.

### `npm run eject`.

**Note : c'est une opération à sens unique. Une fois que vous avez `ejecté`, vous ne pouvez plus revenir en arrière !**.

Si vous n'êtes pas satisfait de l'outil de compilation et des choix de configuration, vous pouvez vous `ejecter` à tout moment. Cette commande enlèvera la dépendance de construction unique de votre projet.

Au lieu de cela, elle copiera tous les fichiers de configuration et les dépendances transitives (webpack, Babel, ESLint, etc) directement dans votre projet afin que vous ayez un contrôle total sur eux. Toutes les commandes sauf `eject` fonctionneront toujours, mais elles pointeront vers les scripts copiés afin que vous puissiez les modifier. A ce stade, vous vous débrouillez tout seul.

Vous n'aurez jamais à utiliser `eject`. L'ensemble des fonctionnalités conservées est adapté aux petits et moyens déploiements, et vous ne devriez pas vous sentir obligé d'utiliser cette fonctionnalité. Cependant, nous comprenons que cet outil ne serait pas utile si vous ne pouviez pas le personnaliser lorsque vous êtes prêt à le faire.

## En savoir plus

Vous pouvez en savoir plus en consultant la [documentation sur la création d'une application React](https://facebook.github.io/create-react-app/docs/getting-started).

Pour apprendre React, consultez la [documentation React](https://reactjs.org/).

### Fractionnement du code

Cette section a été déplacée ici : [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyse de la taille des paquets

Cette section a été déplacée ici : [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Créer une application Web progressive

Cette section a été déplacée ici : [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Configuration avancée

Cette section a été déplacée ici : [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Déploiement

Cette section a été déplacée ici : [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` ne parvient pas à minifier les fichiers

Cette section a été déplacée ici : [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
