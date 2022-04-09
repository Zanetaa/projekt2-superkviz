// Nejdříve si vytvoř objekt, který bude držet tvoje super otázky :-)

const otazky = [{
    cisloOtazky: 1,
    otazka: "Jaká je Žanety oblíbená pohádková princezna?",
    obrazek: "obrazky/snehurka.jpg",
    moznosti: ['Sněhurka', 'Popelka', 'Malá mořská víla Ariel'],
    spravne: 'Sněhurka'
    },

    {   
    cisloOtazky: 2,
    otazka: "Jaká je Žanety nejoblíbenější ovoce?",
    obrazek: "obrazky/ovoce.jpg",
    moznosti: ['Jahody', 'Třešně', 'Meloun'],
    spravne: 'Třešně'
    },

    {cisloOtazky: 3,
    otazka: "Která evrpská země má největší spotřebu piva na hlavu?",
    obrazek: "obrazky/pivo.jpg",
    moznosti: ['Česká republika', 'Belgie', 'Německo'],
    spravne: 'Česká republika'
    },

    {cisloOtazky: 4,
    otazka: "Co je ikonická hračka z 80. let?",
    obrazek: "obrazky/moncicak.jpg",
    moznosti: ['Kočičák', 'Mončičák', 'Opičák'],
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
let odpovedi = document.querySelector('#odpovedi')

let vysledek = document.querySelector('.vysledek')

let i =0;


// Tato funkce se postará o vygenerování otázky
// Zavoláme ji jednou na začátku a poté vždy po odpovězení
function zobrazOtazku() {}

// Funkce se postará o obsluhu kliknutí na odpověď
// Musíme ji navázat na kokrétní odpovědi každé otázky (to uděláme v rámci funkce zobrazOtazku())
function klikNaOdpoved() {}

// Když už mám odpovězeno na vše (řídí se velikosí objektu otazky na řádku 3), tak mohu zobrazi výsledky
// Vypočítám skóre a nageneruje nové elementy do HTML
// Touto funkcí končí můj program (budu se rozhodovat, zda ji zavolat v rámci klikNaOdpoved())
function zobrazVyhodnoceni() {}