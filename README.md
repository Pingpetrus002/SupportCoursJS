# Notes Cours JS Pierre Sularec

## Les Declarations de Variables : 

- Pour Nommée ses variables utiliser camelcase *(mavarible -> maVariable)* : 

- `var` - Declare une variable globale
- `let` - Declare une variable dans le bloc courant
- `const` - Déclare une constante globale

## Les Commentaires de code : 

- `//` -  Pour une lignes
-  `/* */` - pour un bloc de texte

## Les Tableaux :  

- Se Déclare avec 
``` js
const tableau = []; // possible avec let et var
```
- Permet d'append une valeur a la fin du tableau
``` js
const tableau = [];
tableau.push(maValeur); // Fonctionne du LiFo
```
- Permet de modifier une valeur
``` js
const tableau = [1,2,3,4];
tableau[0] = 5; // Alors le chiffre en index 0 donc 1 est remplassé par 5 
```
- Permet de supprimer une/plusieurs valeur(s)
``` js
const tableau = [1,2,3,4];
tableau.splice(1,3) ; // Supprimer à partir de l'index 1 et pendant 3 donc tableau = [1]
```
- Permet d'ajouter un valeur a un index souhaité
``` js
const tableau = [1,2,3,4];
tableau.splice(1,0, 3) ; // Ajoute à l'index 1 et pendant 0 ne supprime rien donc tableau = [1,1,2,3,4]
```
**L'operateur ... permet de spread de tableau et de peter mes accolades et les virgules**

## Les Boucles : 
- Boucle for
``` js
for (let i = 0; i < 9; i++) {
  console.log(tableau[i]); // Ici mon l'index i du tableau est print de l'index 1 à 9
}
```
- Boucle While : 
``` js
while (n < 3) {
  n++;              // Ici mon n s'incremente de 1 a chaque passage de la boucle, la boucle s'arrete quans n = 3
}
```

- Boucle for...in (A utiliser avec un object et non un tableau)
``` js
const object = { firstName: 'John', lastName: 'Doe', age:'18' };      //Déclaration d'un dictionnaire

for (const property in object) {          // La boucle parcours le dict
  console.log(object[property]);    // print la clé en index property
}

```

- Boucle for...of    (A utiliser avec un tableau et non un object)
``` js
const array1 = ['a', 'b', 'c'];       // Déclaration d'un tableau

for (const element of array1) {
  console.log(element);               // Element ici est directement égale a l'index du tableau correspondant (Ex: index 0 = a)
}

```


 ## Les Structures Conditionnels : 

- if else elif:
``` js
if (age === 19){       // = pour affectation; === pour comparaison egale ; !== pour comparaison inégale 
    console.log("Vieux Majeur")
}
else if (age === 18){
  console.log("Toout juste majeur")
}
else{
    console.log("Mineur ou Vieux")
}
```
**Le === compare de manière strict et prend en compte le type de variables**

**Le == ne prend pas en compte le type de variables**

- Les Operateurs Ternaires:

**A completer**


## Les Fonctions :  

- Déclaration d'une fonction : 
``` js
function functionName(params1, ...) {
  
  //Instructions
  
  return resultat;
}
```
- Déclaration de fonction fléché : 
``` js
const addition = (a, b) => a + b;     //La constante addition est de type fonction 
console.log(addition(3, 5)); // Affiche 8
```

## Les expressions régulières:

- Recherche d'un mot spécifique dans une chaîne de caractères :

``` js
let chaine = "Le JavaScript est un langage de programmation populaire";
let regex = /JavaScript/;
console.log(regex.test(chaine)); // Affiche true si la chaîne de caractères `chaine` contient la regex.
```
- Remplacement d'un ou plusieurs caractères dans une chaîne de caractères :

```js
let chaine = "Le JavaScript est un langage de programmation populaire";
let regex = /populaire/;
let nouvelleChaine = chaine.replace(regex, "super");
console.log(nouvelleChaine); // Affiche "Le JavaScript est un langage de programmation super"
```

**Pour les Regex, utiliser les Cheat-Sheet sur https://www.regexpal.com**