
//                     Exercice Bases JS

// Ex 1

const tab1 = [1,2,3,4];

for (let i = 0; i < tab1.length; i++) {
    console.log(tab1[i]);  
}

// Ex 2

const tab2 = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

console.log(tab2[0]);

// Ex 3

const tab3 = [0,2,4,6,8,10];
let sum = 0;

for (let i = 0; i < tab3.length; i++) {
    sum += tab3[i]
}
console.log(sum);

// Ex 4 

const tab4 = ['Pomme', 'Banane', 'Poire', 'Figue', 'Nectarine'];


tab4.push("Pèche");
console.log(tab4)

// Ex 5

const tab5 = [8,10,12,14,20]
let moyenne = 0                                   

for (let i = 0; i < tab5.length; i++) {

    moyenne += tab5[i];

}

console.log(moyenne / tab5.length)

// Ex 6

const tab6 = ['titi', 'riri', 'fifi', 'macron']

let success = false

for (let i = 0; i < tab6.length; i++) {

    if (tab6[i] == 'macron'){

        success =true;
        

    }

}

if (success == true){

    console.log("Trouvé")
}
else{
    console.log("Pas Trouvé")
}

//Ex 7

const tab7 = ['France', 'Espagne', 'Allemagne', 'Japon']

tab7.sort();
console.log(tab7)

//Ex 8

const tab8 = ['Janvier','Fevrier', 'Mars', 'Avril']

console.log(tab8[2])

// Ex 9

const tab9  = []

for (let i = 0; i < 10; i++) {

    

    nbr = Math.round(Math.random() * 100) 

    tab9.push(nbr)
    
}
console.log("Le Mininum est", Math.min(...tab9), "le max est", Math.max(...tab9));
console.log();

// Ex 10




//                  Exercice Fonction

//Ex 1


function sum(a,b){

    return a + b; 


}
console.log(sum(5,5));


// Ex 2

function max(tab){

    result = Math.max(...tab)
    return result

}

console.log(max([2,4,3,1,5]))

// Ex 3

function voyelle(chaine){

    const regex = /[aeiouy]/g;

    result = chaine.replace(regex,'')
    return result

}

console.log(voyelle('bonjour'))

// Ex 4

function trialpha(chaine2){

    console.log(chaine2.sort())


}

trialpha(["a","e",'b'])

// Ex 5
function nombreToMots(num) {
    const unites = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf']
    const dizaine = ['', '', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingt', 'quatre-vingt-dix']

    if (num === 0) return 'zéro'
    if (num < 0) return 'moins ' + nombreToMots(Math.abs(num))

    let mots = ''
    if (num >= 1000) {
      mots += nombreToMots(Math.floor(num / 1000)) + ' mille '
      num %= 1000
    }
    if (num >= 100) {
      mots += nombreToMots(Math.floor(num / 100)) + ' cent '
      num %= 100
    }
    if (num >= 20) {
      mots += dizaine[Math.floor(num / 10)]
      if (num % 10 !== 0) {
        if (num >= 70 && num < 80) {
          mots += 's' + unites[num % 10]
        } else if (num >= 90) {
          mots += '-' + unites[num % 10 + 10]
        } else {
          mots += '-' + unites[num % 10]
        }
      }
    } else {
      mots += unites[num]
    }

    return mots.trim()
}

console.log(nombreToMots(42))


// Ex 6

const objName = [
{firstName: 'Max', age: '34'},
{lastName: 'Mouras', age: '35'}

]

const getValueProperty = (objectArr, property) => {

    return objectArr.map((obj) => obj[property]);

}
objName.map((element) => {

    console.log(element)

})

//Ex 7

const inverseSort = (nombreTab) =>{

    
    return nombreTab.reverse();

}

console.log(inverseSort([2,3,4,5,5]))

//Ex 8


const voyelleMaj = (voyelleChaine) =>
{
    const regex = /[aeiouy]/g;

    result = voyelleChaine.replace(regex, function(voyelle) {
        return voyelle.toUpperCase();
      });
    
    
    return result

}


console.log(voyelleMaj('bonjour'))

// Ex 9

const voyelleCount = (voyelleChaine) =>
{
    const regex = /[aeiouy]/g;
    let count = 0;

    result = voyelleChaine.replace(regex, function() {
        
        
        count = count + 1;
        
        
        
    });
    
    return count

}


console.log(voyelleCount('bonjour'))


// Ex 10


const consolleMaj = (voyelleChaine) =>
{
    const regex = /[^aeiouy]/g;

    result = voyelleChaine.replace(regex, function(voyelle) {
        return voyelle.toUpperCase();
      });
    
    
    return result

}

console.log(consolleMaj('bonjour'))