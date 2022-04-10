// Nejdříve si vytvoř objekt, který bude držet tvoje super otázky :-)

const otazky = [{
    cisloOtazky: 1,
    otazka: "Jaká je Žanety oblíbená pohádková princezna?",
    obrazek: "obrazky/snehurka.jpg",
    moznostiOdpovedi: ['Sněhurka', 'Popelka', 'Malá mořská víla Ariel'],
    /*odpoved1:'Sněhurka',
    odpoved2:'Popelka',
    odpoved3:'Malá mořská víla Ariel',*/
    spravne: 'Sněhurka' 
    },

    {   
    cisloOtazky: 2,
    otazka: "Jaká je Žanety nejoblíbenější ovoce?",
    obrazek: "obrazky/ovoce.jpg",
    moznostiOdpovedi: ['Jahody', 'Třešně', 'Meloun'],
    /*odpoved1:'Jahody',
    odpoved2:'Třešně',
    odpoved3:'Meloun',*/
    spravne: 'Třešně'
    },

    {cisloOtazky: 3,
    otazka: "Která evrpská země má největší spotřebu piva na hlavu?",
    obrazek: "obrazky/pivo.jpg",
    moznostiOdpovedi: ['Česká republika', 'Belgie', 'Německo'],
    /*odpoved1:'Česká republika',
    odpoved2:'Belgie',
    odpoved3:'Německo',*/
    spravne: 'Česká republika'
    },

    {cisloOtazky: 4,
    otazka: "Co je ikonická hračka z 80. let?",
    obrazek: "obrazky/moncicak.jpg",
    moznostiOdpovedi: ['Kočičák', 'Mončičák', 'Opičák'],
    /*odpoved1:'Kočičák',
    odpoved2:'Mončičák',
    odpoved3:'Opičák',*/
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

/*let odpovedi = document.querySelector('#odpovedi');*/
/*let moznosti = document.createElement('li');*/

/* let moznost = document.createElement('li'); 

odpovedi.appendChild(moznost); */

/*let odpovedi = document.createElement('ul');
let moznost = document.createElement('li');
moznost.innerHTML = otazky[zobrazenaOtazka].moznostiOdpovedi[a];
odpovedi.appendChild(moznost);
document.querySelector('moznosti').appendchild(odpovedi); */


/* let odpoved1 = document.createElement('li'); 
let odpoved2 = document.createElement('li');
let odpoved3 = document.createElement('li'); 

odpovedi.appendChild(odpoved1);
odpovedi.appendChild(odpoved2);
odpovedi.appendChild(odpoved3); */



let vysledek = document.querySelector('.vysledek');

let zobrazenaOtazka =0;

// Tato funkce se postará o vygenerování otázky
// Zavoláme ji jednou na začátku a poté vždy po odpovězení

//Z hodiny:
//" cyklus for"
 /* for (let i = 0; i < 10 ; i=i+1) {
     console.log(i)
 } */

 function zobrazOtazku() {
    poradi.innerHTML = otazky[zobrazenaOtazka].cisloOtazky;
    obrazek.src = otazky[zobrazenaOtazka].obrazek;
    otazka.innerHTML = otazky[zobrazenaOtazka].otazka;
    /*moznost.innerHTML = otazky[zobrazenaOtazka].moznostiOdpovedi[i];*/
    /*odpoved1.innerHTML = otazky[zobrazenaOtazka].odpoved1;
    odpoved2.innerHTML = otazky[zobrazenaOtazka].odpoved2;
    odpoved3.innerHTML = otazky[zobrazenaOtazka].odpoved3;*/

    //nedaří se mi připojit ten set možností..otázka se mi načte jen když mám nahoře vypasné otázky bod po bodu ale to podle mě není cesta ..
    for (let a=0; a < otazky[zobrazenaOtazka]; a=a+1) {

    let odpovedi = document.querySelector('#odpovedi')
    let moznost = document.createElement('li');

    odpovedi.appendChild(moznost);

    moznost.innerHTML = otazky[zobrazenaOtazka].moznostiOdpovedi[a];
     }

    
    //tohle by mi fungovalo, kdybych použila "možnosti" místo odpovědi..ale nejde mi to s něma.. teď je to nefunkční kód
     //pokusy, pokusy, pokusy...
    
   /*for (let i=0; i < otazky[zobrazenaOtazka].moznostiOdpovedi.length; i=i+1) {

        /*let odpovedi = document.querySelector('#odpovedi');*/
        /*let moznosti = document.createElement('li'); */

        /*let moznost = document.createElement('li'); 
        moznost.setAttribute('odpovedi', i);
        moznost.setAttribute('kliknuti', 'klikNaOdpoved');
        moznost.innerHTML = otazky[zobrazenaOtazka].moznostiOdpovedi[i];

        odpovedi.appendChild(moznost);
    } */
    //pokus s možnostma
    /*pocetMoznosti = otazky[i].moznosti.length;*/

 }

    /*for (i < pocetMoznosti; i=i+1) {
        otazka.addEventListener("click")
    }*/

 
// Funkce se postará o obsluhu kliknutí na odpověď
// Musíme ji navázat na kokrétní odpovědi každé otázky (to uděláme v rámci funkce zobrazOtazku())

//Z hodiny:
//" cyklus for"
 /* for (let i = 0; i < 10 ; i=i+1) {
     console.log(i)
 } */

//Pokus / z hodiny:
/* poleOtazek.sort(porovnej);
 fucntion porovnej (cisl1, cisl3) {
if (cisl1 = cisl2) {
    return To je správně!;
} else {
    return To je špatně
}
}; */


function klikNaOdpoved() {

   zobrazenaOtazka = zobrazenaOtazka + 1;

    if (zobrazenaOtazka < otazky.length) {
        zobrazOtazku();
    } else {
        zobrazVyhodnoceni()
    } 
}

//Tohle by mi dávalo větší smysl, kdybych měla set "moznostiOdpovedi", ale s tím mi to nějak nefunguje..
function spravnaOdpoved() {
    if (spravne === moznostiOdpovedi[a]) {
        console.log('Tohle je správně') 
    } else {
        console.log('Tohle je špatně')
    }
}

/*function spravnaOdpoved2() {
    if (spravne === odpoved2) {
        console.log('Tohle je správně') 
    } else {
        console.log('Tohle je špatně')
    }
}


function spravnaOdpoved3() {
    if (spravne === odpoved3) {
        console.log('Tohle je správně') 
    } else {
        console.log('Tohle je špatně')
    }
} */


// Když už mám odpovězeno na vše (řídí se velikosí objektu otazky na řádku 3), tak mohu zobrazi výsledky
// Vypočítám skóre a nageneruje nové elementy do HTML
// Touto funkcí končí můj program (budu se rozhodovat, zda ji zavolat v rámci klikNaOdpoved())
function zobrazVyhodnoceni() {

for (let i =0; i < otazky.length; i = i+1) {

}

}