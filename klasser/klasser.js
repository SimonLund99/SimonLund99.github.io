// @ts-check

function setup() {
    class Ting {

        constructor(navn, masse, volum) {
            this.navn = navn;
            this.masse = masse;
            this.volum = volum;
        }

        // beregner tettheten til denne tingen
        tetthet() {
            return this.masse / this.volum;
        }
    }
    class SalgbarTing extends Ting {

        constructor(navn, masse, volum, kilopris) {
            // må lage den vanlige tingen først
            super(navn, masse, volum);
            this.kilopris = kilopris;
            this.solgt = false;  // vi har ikke solgt den ennå
        }

        // hva koster denne tingen
        pris() {
            return this.masse * this.kilopris;
        }

        // selg tingen
        selg() {
            this.solgt = true;
        }
    }
    // nå kan vi lage instanser av klassene
    // husk at klassedefinsjonene bare er en oppskrift
    // vi må lage forekomster (variable) av klassen

    let a = new Ting("Gråstein", 2.3, 0.9);
    let b = new SalgbarTing("Sølvklump", 7, 1.1, 1450)
    let c = new SalgbarTing("Bly", 70, 10, 1000)

    a.tetthet()  // skriver ut tettheten
    //a.pris()  // feil - ting har ikke pris
    b.tetthet() // ok
    b.pris()  // ok

    // vi kan sjekke hvilken klasse en ting er med følgende kode
    a.name === "Ting"
    b.name === "SalgbarTing"

    // vi kan også legge ting inn i en Array
    var tingeneMine = [];
    tingeneMine.push(a);
    tingeneMine.push(b);

    let btnBeregn = document.getElementById("lagre");
    btnBeregn.addEventListener("click", beregn);
    function beregn() {
        let navn = inpNavn.value;
        let masse = inpMasse.valueAsNumber;
        let volum = inpVolum.valueAsNumber;
        let pris = inpPris.valueAsNumber;
        console.log(navn, masse, volum, pris);
        if (navn && masse && volum && pris) {
            let newObj = new SalgbarTing(navn, masse, volum, pris);
            tingeneMine.push(newObj);
            console.log(tingeneMine);
        }
    }
    let inpNavn = document.getElementById("navn");
    let inpMasse = document.getElementById("masse");
    let inpVolum = document.getElementById("volum");
    let inpPris = document.getElementById("pris");
}