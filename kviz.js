// Nejdříve si vytvoř objekt, který bude držet tvoje super otázky :-)

const otazky = [{
    /*cisloOtazky: 1,*/
    otazka: "Jaká je Žanety oblíbená pohádková princezna?",
    obrazek: "snehurka.jpg",
    odpovedi: ['Sněhurka', 'Popelka', 'Malá mořská víla Ariel'],
    /*moznost[0]:'Sněhurka',
    moznost[1]:'Popelka',
    moznost[2]:'Malá mořská víla Ariel',*/
    spravna: 0,
    },

    {   
    /*cisloOtazky: 2,*/
    otazka: "Jaká je Žanety nejoblíbenější ovoce?",
    obrazek: "ovoce.jpg",
    odpovedi: ['Jahody', 'Třešně', 'Meloun'],
    /*moznost[0]:'Jahody',
    moznost[1]:'Třešně',
    moznost[2]:'Meloun',*/
    spravna: 1,
    },

    {
    /*cisloOtazky: 3,*/
    otazka: "Která evrpská země má největší spotřebu piva na hlavu?",
    obrazek: "pivo.jpg",
    odpovedi: ['Česká republika', 'Belgie', 'Německo'],
    /*moznost[0]:'Česká republika',
    moznost[1]:'Belgie',
    moznost[2]:'Německo',*/
    spravna: 0,
    },

    {
    /*cisloOtazky: 4,*/
    otazka: "Co je ikonická hračka z 80. let?",
    obrazek: "moncicak.jpg",
    odpovedi: ['Kočičák', 'Mončičák', 'Opičák'],
    /*moznost[0]:'Kočičák',
    moznosz[1]:'Mončičák',
    moznost[2]:'Opičák',*/
    spravna: 1,
    },

];

// Dále budeš potřebovat další proměnné - jaké?

/*let kviz = document.querySelector('.kviz')*/
const poradi = document.querySelector('#poradi');
const otazka = document.querySelector('#otazka');
/*let obsah = document.querySelector('.obsah')
let foto = document.querySelector('.foto')*/
const obrazek = document.querySelector('#obrazek');
const moznosti = document.querySelector('#moznosti');
/*let odpovedi = document.querySelector('#odpovedi');*/
/*let vysledek = document.querySelector('.vysledek');*/

// Tato funkce se postará o vygenerování otázky
// Zavoláme ji jednou na začátku a poté vždy po odpovězení

 let aktualniOtazka = 0;
 let mojeOdpovedi = [];

 zobrazOtazku();

 function zobrazOtazku() {
     poradi.textContent = 'Otázka ' + (aktualniOtazka + 1) + ' / ' + otazky.length;
     otazka.textContent = otazky[aktualniOtazka].otazka;
     obrazek.src = 'obrazky/' + otazky[aktualniOtazka].obrazek;
 
 
     let odpovedi = otazky[aktualniOtazka].odpovedi;
 
     let seznam = document.createElement('ul');
     seznam.id = 'odpovedi';
 
     for (let i = 0; i < odpovedi.length; i=i+1) {
         let polozka = document.createElement('li');
         polozka.dataset.odpoved = i;
         polozka.textContent = odpovedi[i];
         polozka.onclick = klikNaOdpoved;
         seznam.appendChild(polozka);
     }
 
     document.querySelector('#odpovedi').remove();
     moznosti.appendChild(seznam);
 }

 /*zobrazOtazku();*/

// Funkce se postará o obsluhu kliknutí na odpověď
// Musíme ji navázat na kokrétní odpovědi každé otázky (to uděláme v rámci funkce zobrazOtazku())


/*function klikNaOdpoved() {

    a = a + 1;
 
     if (a < otazky[a].poleOdpovedi.length) {
         console.log('Otázka');
         zobrazOtazku();
     } else {
         console.log('Vyhodnocení')
         zobrazVyhodnoceni()
     } 
 }*/

 function klikNaOdpoved() {

	let odpoved = event.target.dataset.odpoved;

	mojeOdpovedi.push(odpoved);

	aktualniOtazka = aktualniOtazka + 1;

	if (aktualniOtazka === otazky.length) {
		zobrazVyhodnoceni();
	} else {
		zobrazOtazku();
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



/*function zobrazVyhodnoceni() {

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

} */

/*
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
}); */

function zobrazVyhodnoceni() {
	// skryjeme div s otazkami
	document.querySelector('.kviz').style.display = 'none';
	// a objevime div s vyhodnocenim
	document.querySelector('.vysledek').style.display = 'block';
	// najdeme si div, do ktereho budeme vypisovat text
	const hodnoceni = document.querySelector('#hodnoceni');
	// vypiseme pole - to je jen prechodne, takhle to delat nebudeme
	console.log(mojeOdpovedi);

	let pocetSpravnych = 0;

	for (let i = 0; i < otazky.length; i= i+1) {
		let nadpis = document.createElement('h3');
		nadpis.textContent = (i + 1) + '. ' + otazky[i].otazka;
		hodnoceni.appendChild(nadpis);

		let moje = document.createElement('p');
		moje.textContent = 'Tvoje odpověď: ' + otazky[i].odpovedi[mojeOdpovedi[i]];
		hodnoceni.appendChild(moje);

		let spravne = document.createElement('p');
		if (parseInt(mojeOdpovedi[i]) === otazky[i].spravna) {
			pocetSpravnych++;
			spravne.textContent = 'To je SPRÁVNĚ.';
		} else {
			spravne.textContent = 'Správná odpověď: ' + otazky[i].odpovedi[otazky[i].spravna];
		}
		hodnoceni.appendChild(spravne);
	}

	let procenta = document.createElement('h2');
	procenta.textContent += 'Správně ' + pocetSpravnych + ' ze ' + otazky.length + ' otázek. Úspěšnost ' + Math.round(pocetSpravnych / otazky.length * 100) + ' %.';
	hodnoceni.appendChild(procenta); 

}
