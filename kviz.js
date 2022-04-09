// Nejdříve si vytvoř objekt, který bude držet tvoje super otázky :-)

const otazky = [{
    cisloOtazky: 1,
    otazka: "Jaká je Žanety oblíbená pohádková princezna?",
    obrazek: "obrazky/snehurka.jpg",
    /*moznosti: ['Sněhurka', 'Popelka', 'Malá mořská víla Ariel'],*/
    odpoved1:'Sněhurka',
    odpoved2:'Popelka',
    odpoved3:'Malá mořská víla Ariel',
    spravne: 'Sněhurka'
    },

    {   
    cisloOtazky: 2,
    otazka: "Jaká je Žanety nejoblíbenější ovoce?",
    obrazek: "obrazky/ovoce.jpg",
    /*moznosti: ['Jahody', 'Třešně', 'Meloun'],*/
    odpoved1:'Jahody',
    odpoved2:'Třešně',
    odpoved3:'Meloun',
    spravne: 'Třešně'
    },

    {cisloOtazky: 3,
    otazka: "Která evrpská země má největší spotřebu piva na hlavu?",
    obrazek: "obrazky/pivo.jpg",
    /*moznosti: ['Česká republika', 'Belgie', 'Německo'],*/
    odpoved1:'Česká republika',
    odpoved2:'Belgie',
    odpoved3:'Německo',
    spravne: 'Česká republika'
    },

    {cisloOtazky: 4,
    otazka: "Co je ikonická hračka z 80. let?",
    obrazek: "obrazky/moncicak.jpg",
    /*moznosti: ['Kočičák', 'Mončičák', 'Opičák'],*/
    odpoved1:'Kočičák',
    odpoved2:'Mončičák',
    odpoved3:'Opičák',
    spravne: 'Mončičák'
    },

];

// Dále budeš potřebovat další proměnné - jaké?

let kviz = document.querySelector('.kviz')
let poradi = document.querySelector('#poradi')
let otazka = document.querySelector('#otazka')

let obsah = document.querySelector('.obsah')
let foto = document.querySelector('.foto')

let obrazek = document.querySelector('#obrazek')

let moznosti = document.querySelector('#moznosti')

//Z hodiny:
/* let seznamOdpovedi = document.createElement('li');

let seznam = document.querySelector('ul');
seznam.appendChild(seznamOdpovedi); */

let odpovedi = document.querySelector('#odpovedi');
let odpoved1 = document.createElement('li'); 
let odpoved2 = document.createElement('li');
let odpoved3 = document.createElement('li'); 

odpovedi.appendChild(odpoved1);
odpovedi.appendChild(odpoved2);
odpovedi.appendChild(odpoved3);


let vysledek = document.querySelector('.vysledek');

let i =0;

// Tato funkce se postará o vygenerování otázky
// Zavoláme ji jednou na začátku a poté vždy po odpovězení

//Z hodiny:
//" cyklus for"
 /* for (let i = 0; i < 10 ; i=i+1) {
     console.log(i)
 } */

 function zobrazOtazku() {
    poradi.innerHTML = otazky[i].cisloOtazky;
    obrazek.src = otazky[i].obrazek;
    otazka.innerHTML = otazky[i].otazka;
    odpoved1.innerHTML = otazky[i].odpoved1;
    odpoved2.innerHTML = otazky[i].odpoved2;
    odpoved3.innerHTML = otazky[i].odpoved3;
}

 
// Funkce se postará o obsluhu kliknutí na odpověď
// Musíme ji navázat na kokrétní odpovědi každé otázky (to uděláme v rámci funkce zobrazOtazku())

//Z hodiny:
//" cyklus for"
 /* for (let i = 0; i < 10 ; i=i+1) {
     console.log(i)
 } */

//Můj pokus:
/* poleOtazek.sort(porovnej);
 fucntion porovnej (cisl1, cisl3) {
if (cisl1 = cisl2) {
    return To je správně!;
} else {
    return To je špatně
}
}; */

function vybiramOdpoved() {
    if 

}


function klikNaOdpoved() {

    zobrazOtazku();
} 

// Když už mám odpovězeno na vše (řídí se velikosí objektu otazky na řádku 3), tak mohu zobrazi výsledky
// Vypočítám skóre a nageneruje nové elementy do HTML
// Touto funkcí končí můj program (budu se rozhodovat, zda ji zavolat v rámci klikNaOdpoved())
function zobrazVyhodnoceni() {}