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
    /*moznost[0]:'Jahody',
    moznost[1]:'Třešně',
    moznost[2]:'Meloun',*/
    spravne: 1,
    },

    {cisloOtazky: 3,
    otazka: "Která evrpská země má největší spotřebu piva na hlavu?",
    obrazek: "obrazky/pivo.jpg",
    poleOdpovedi: ['Česká republika', 'Belgie', 'Německo'],
    /*moznost[0]:'Česká republika',
    moznost[1]:'Belgie',
    moznost[2]:'Německo',*/
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
/*let vysledek = document.querySelector('.vysledek');*/

// Tato funkce se postará o vygenerování otázky
// Zavoláme ji jednou na začátku a poté vždy po odpovězení

 let a =0;

 function zobrazOtazku() {
    poradi.innerHTML = 'Otázka č. ' + otazky[a].cisloOtazky;
    obrazek.src = otazky[a].obrazek;
    otazka.innerHTML = otazky[a].otazka;

    for (let i=0; i < otazky[a].poleOdpovedi.length; i=i+1) {

    let volba = document.createElement('li');
    odpovedi.appendChild(volba);


    volba.dataset.poleOdpovedi = i;
    volba.innerHTML = otazky[a].poleOdpovedi[i];
   

    volba.addEventListener("click", klikNaOdpoved)
    
     }

 }

 /*zobrazOtazku();*/

// Funkce se postará o obsluhu kliknutí na odpověď
// Musíme ji navázat na kokrétní odpovědi každé otázky (to uděláme v rámci funkce zobrazOtazku())


function klikNaOdpoved() {

    a = a + 1;
 
     if (a < otazky[a].poleOdpovedi.length) {
         console.log('Otázka');
         zobrazOtazku();
     } else {
         console.log('Vyhodnocení')
         zobrazVyhodnoceni()
     } 
 }

 //Odstranění předchozích odpovědí ze setu - nefunguje mi - odstraní mi všechny odpovědi

/*
 
     if (otazky[a].cisloOtazky[2] === otazky[a].length)  {
        odpovedi.remove(otazky[a].poleOdpovedi[0]);
        console.log('Funguješ, ale blbě')
     } else if (otazky[a].cisloOtazky[3] === otazky[a].length) {
        odpovedi.remove(otazky[a].poleOdpovedi[1]);
         console.log("Funguješ, ale blbě2")
     } else if (otazky[a].cisloOtazky[4] === otazky[a].length) {
        odpovedi.remove(otazky[a].poleOdpovedi[2]);
         console.log("Funguješ!, ale blbě3")
     } else {
        console.log("Nefunguješ")
    }

*/

 /*for(a=0; a < otazky[a].poleOdpovedi.length; a=a+1) {
         odpovedi.remove(poleOdpovedi[i]);
 }*/
 


// Když už mám odpovězeno na vše (řídí se velikosí objektu otazky na řádku 3), tak mohu zobrazi výsledky
// Vypočítám skóre a nageneruje nové elementy do HTML
// Touto funkcí končí můj program (budu se rozhodovat, zda ji zavolat v rámci klikNaOdpoved())

function zobrazVyhodnoceni() {

for (i=0; i < otazky[a].length; i=i+1) {
let volbaOdpovedi = otazky[a].poleOdpovedi[i];
let spravneOdpovezeno = 0;
    
if (volbaOdpovedi[i] == otazky[a].spravne) {
        spravneOdpovezeno = spravneOdpovezeno + 1;
        console.log('Tohle je správně');
        } else {
        console.log('Tohle je špatně');
        }
    }

vypocitejVypisVysledek()

}

function vypocitejVysledek() {
    let sto = 100;
    let pocetOtazek = 4;
    spravneOdpovezeno =+ 1;

    return Math.round((spravneOdpovezeno * sto) / pocetOtazek );
}

function vypisVysledek(vysledek) {
    document.querySelector('.vysledek > span').innerHTML = vysledek;
}

function vypocitejVypisVysledek() {
    let vysledek = vypocitejVysledek();
    vypisVysledek(vysledek);
}

document.querySelectorAll('input').forEach((element) => {
    element.addEventListener('change', vypocitejVypisVysledek);
});