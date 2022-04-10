// Nejdříve si vytvoř objekt, který bude držet tvoje super otázky :-)

const otazky = [{
    cisloOtazky: 1,
    otazka: "Jaká je Žanety oblíbená pohádková princezna?",
    obrazek: "obrazky/snehurka.jpg",
    moznostiOdpovedi: ['Sněhurka', 'Popelka', 'Malá mořská víla Ariel'],
    /*moznost1:'Sněhurka',
    moznost2:'Popelka',
    moznost3:'Malá mořská víla Ariel',*/
    spravne: 'Sněhurka' 
    },

    {   
    cisloOtazky: 2,
    otazka: "Jaká je Žanety nejoblíbenější ovoce?",
    obrazek: "obrazky/ovoce.jpg",
    moznostiOdpovedi: ['Jahody', 'Třešně', 'Meloun'],
    /*moznost1:'Jahody',
    moznost2:'Třešně',
    moznost3:'Meloun',*/
    spravne: 'Třešně'
    },

    {cisloOtazky: 3,
    otazka: "Která evrpská země má největší spotřebu piva na hlavu?",
    obrazek: "obrazky/pivo.jpg",
    moznostiOdpovedi: ['Česká republika', 'Belgie', 'Německo'],
    /*moznost1:'Česká republika',
    moznost2:'Belgie',
    moznost3:'Německo',*/
    spravne: 'Česká republika'
    },

    {cisloOtazky: 4,
    otazka: "Co je ikonická hračka z 80. let?",
    obrazek: "obrazky/moncicak.jpg",
    moznostiOdpovedi: ['Kočičák', 'Mončičák', 'Opičák'],
    /*moznost1:'Kočičák',
    moznosz2:'Mončičák',
    moznost3:'Opičák',*/
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

/*let moznosti = document.querySelector('#moznosti')*/

//Z hodiny:
/* let seznamOdpovedi = document.createElement('li');

let seznam = document.querySelector('ul');
seznam.appendChild(seznamOdpovedi); */

/*let odpovedi = document.querySelector('#odpovedi');*/
/*let moznosti = document.createElement('li');*/

/* let moznost = document.createElement('li'); 

odpovedi.appendChild(moznost); */

/*let odpovedi = document.createElement('ul');
let moznost = document.createElement('li');
moznost.innerHTML = otazky[zobrazenaOtazka].moznostiOdpovedi[a];
odpovedi.appendChild(moznost);
document.querySelector('moznosti').appendchild(odpovedi); */


let vysledek = document.querySelector('.vysledek');

// Tato funkce se postará o vygenerování otázky
// Zavoláme ji jednou na začátku a poté vždy po odpovězení

//Z hodiny:
//" cyklus for"
 /* for (let i = 0; i < 10 ; i=i+1) {
     console.log(i)
 } */

 let zobrazenaOtazka =0;

 function zobrazOtazku() {
    poradi.innerHTML = 'Otázka č. ' + otazky[zobrazenaOtazka].cisloOtazky;
    obrazek.src = otazky[zobrazenaOtazka].obrazek;
    otazka.innerHTML = otazky[zobrazenaOtazka].otazka;

    /*moznost.innerHTML = otazky[zobrazenaOtazka].moznostiOdpovedi[i];*/

    /* let moznost1 = document.createElement('li'); 
    let moznost2 = document.createElement('li');
    let moznost3 = document.createElement('li'); 

    odpovedi.appendChild(moznost1);
    odpovedi.appendChild(moznost2);
    odpovedi.appendChild(moznost3); */

    /*moznost1.innerHTML = otazky[zobrazenaOtazka].moznost1;
    moznost2.innerHTML = otazky[zobrazenaOtazka].moznost2;
    moznost3.innerHTML = otazky[zobrazenaOtazka].moznost3;*/

    //nedaří se mi připojit ten set možností..otázka se mi načte jen když mám nahoře vypasné otázky bod po bodu :(..raději bych měla vypasné jako set
    for (let i=0; i < otazky[zobrazenaOtazka]; i=i+1) {

    let odpovedi = document.querySelector('#odpovedi')
    let moznost = document.createElement('li');

    odpovedi.appendChild(moznost);

    moznost.innerHTML = otazky[zobrazenaOtazka].moznostiOdpovedi[i];
     }

 }

 zobrazOtazku();

// Funkce se postará o obsluhu kliknutí na odpověď
// Musíme ji navázat na kokrétní odpovědi každé otázky (to uděláme v rámci funkce zobrazOtazku())

//Pokus // z hodiny:
/* poleOtazek.sort(porovnej);
 fucntion porovnej (cisl1, cisl3) {
if (cisl1 = cisl2) {
    return To je správně!;
} else {
    return To je špatně
}
}; */

let spravneOdpovezeno = 0

//Tady mi ještě chybí vměstnat, jak tu možnost zvolím..?!
function spravnaOdpoved() {
    if (spravne === moznostiOdpovedi[i]) {
        console.log('Tohle je správně');
        spravneOdpovezeno = spravneOdpovezeno + 1;
    } else {
        console.log('Tohle je špatně');
    }
}

function klikNaOdpoved() {

    /* for (let i= 0; i < pocetMoznosti; i=i+1) {
    otazka.addEventListener("click") }*/

   zobrazenaOtazka = zobrazenaOtazka + 1;

    if (zobrazenaOtazka < otazky.length) {
        console.log('Otázka');
        zobrazOtazku();
    } else {
        console.log('Vyhodnocení')
        zobrazVyhodnoceni()
    } 
}


// Když už mám odpovězeno na vše (řídí se velikosí objektu otazky na řádku 3), tak mohu zobrazi výsledky
// Vypočítám skóre a nageneruje nové elementy do HTML
// Touto funkcí končí můj program (budu se rozhodovat, zda ji zavolat v rámci klikNaOdpoved())

function zobrazVyhodnoceni() {

for (let a =0; a < otazky.length; a = a+1) {

}

}