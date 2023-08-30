# suffixes_communes

Projet personnel qui permet de visualiser les communes de France selon les suffixes dans leur nom. J'ai considéré comme suffixe tout groupement de 2 à 4 lettres en fin d'un mot composant le nom de la commune. Par exemple, la commune Saint-Avold comporte les suffixes [aint, int, nt, vold, old, ld]. J'ai exploré les suffixes les plus populaires dans exploration.ipynb, et décidé de n'en garder que quelques uns pour la visualisation de départ. L'utilisateur peut lui même ajouter ou enlever des suffixes à la visualisation.
NB: Le nombre de couleurs différentes sur la carte est limitée à 10.


## Fonctionnalités:
- Vous pouvez passer le curseur sur un point de la carte pour afficher des informations sur la commune
- Vous pouvez ajouter un nouveau suffixe à la visualisation en le tapant dans la zone de texte au-dessus de "Suffixes:" puis en pressant la touche Entrée.
- Vous pouvez enlever un suffixe de la visualisation en cliquant sur la croix à côté de celui-ci dans la légende
- Vous pouvez passer le curseur sur un point dans la légende pour mettre en évidence tous les points de la carte associés à ce suffixe.

## Data:
Les données des communes de France a été partagé par Tony Archambeau sur sql.sh https://sql.sh/736-base-donnees-villes-francaises
J'ai moi-même ajouté le titre des colonnes.


Le fond de carte provient quant à lui de data.gouv, à l'adresse suivante: https://www.data.gouv.fr/fr/datasets/contours-des-communes-de-france-simplifie-avec-regions-et-departement-doutre-mer-rapproches/
J'ai modifié ce fichier afin d'enlever les DROM rapprochés (les deniers éléments du tableau JSON)

## TODO:
- responsive design
- ne pas changer la couleur des éléments existant lorsqu'on enlève un suffixe
- Meilleure exploration pour avoir suffixes intéressants en début de visualisation
- déployer le site
