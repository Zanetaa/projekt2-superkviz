// Nejdříve si vytvoř objekt, který bude držet tvoje super otázky :-)

let otazky = [{
    cisloOtazky: 1,
    otazka: "Jaká je Žanety oblíbená pohádková princezna?",
    obrazek: "obrazky/snehurka.jpg",
    poleOdpovedi: ['Sněhurka', 'Popelka', 'Malá mořská víla Ariel'],
    /*moznost[0]:'Sněhurka',
    moznost[1]:'Popelka',
    moznost[2]:'Malá mořská víla Ariel',*/
    spravne: 0,
    },

    {   
    cisloOtazky: 2,
    otazka: "Jaká je Žanety nejoblíbenější ovoce?",
    obrazek: "obrazky/ovoce.jpg",
    poleOdpovedi: ['Jahody', 'Třešně', 'Meloun'],
    /*moznost1:'Jahody',
    moznost2:'Třešně',
    moznost3:'Meloun',*/
    spravne: 1,
    },

    {cisloOtazky: 3,
    otazka: "Která evrpská země má největší spotřebu piva na hlavu?",
    obrazek: "obrazky/pivo.jpg",
    poleOdpovedi: ['Česká republika', 'Belgie', 'Německo'],
    /*moznost1:'Česká republika',
    moznost2:'Belgie',
    moznost3:'Německo',*/
    spravne: 0,
    },

    {cisloOtazky: 4,
    otazka: "Co je ikonická hračka z 80. let?",
    obrazek: "obrazky/moncicak.jpg",
    poleOdpovedi: ['Kočičák', 'Mončičák', 'Opičák'],
    /*moznost[0]:'Kočičák',
    moznosz[1]:'Mončičák',
    moznost[2]:'Opičák',*/
    spravne: 1,
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
let odpovedi = document.querySelector('#odpovedi');
let vysledek = document.querySelector('.vysledek');

// Tato funkce se postará o vygenerování otázky
// Zavoláme ji jednou na začátku a poté vždy po odpovězení

 let zobrazenaOtazka =0;

 function zobrazOtazku() {
    poradi.innerHTML = 'Otázka č. ' + otazky[zobrazenaOtazka].cisloOtazky;
    obrazek.src = otazky[zobrazenaOtazka].obrazek;
    otazka.innerHTML = otazky[zobrazenaOtazka].otazka;

    for (let i=0; i < otazky[zobrazenaOtazka].poleOdpovedi.length; i=i+1) {

    let volba = document.createElement('li');
    volba.dataset.poleOdpovedi = i;
    volba.innerHTML = otazky[zobrazenaOtazka].poleOdpovedi[i];
    odpovedi.appendChild(volba);

    //hází mí to ty odpovědi dvakrát a nevím proč :( )

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