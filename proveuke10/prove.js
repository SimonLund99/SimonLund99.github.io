// @ts-check


class Salg { //klasse med ting til salgs
    constructor(navn, ting, antall) {
        this.navn = navn;
        this.ting = ting;
        this.antall = antall
    }


}
class SalgbarTing extends Salg { //utvidelse av klassen Salg

    constructor(navn, ting, antall, pris) {
        // må lage den vanlige tingen først
        super(navn, ting, antall);
        this.pris = pris;
        this.solgt = false;  // ikke solgt
    }

    // hva koster en enhet av denne tingen
    enhetspris() {
        return this.pris * this.antall;
    }

    // selg tingen
    selg() {
        this.solgt = true;
    }
}

function setup() {
    console.log("Du heter " + this.navn + ' ' + "og selger " + this.antall + ' ' + "av " + this.ting + ' ' + "til " + this.pris + "kr");

    let inpNavn = document.getElementById("navn");
    let inpTing = document.getElementById("ting");
    let inpAnt = document.getElementById("antall");
    let inpPris = document.getElementById("pris");
    let btnBeregn = document.getElementById("lagre");
    btnBeregn.addEventListener("click", beregn);

    let a = new Salg("Stian", "Flatskjerm", 3); //legger til ting i klassen Salg
    let b = new SalgbarTing("Svein", "Ostehøvel", 2, 300); //legger til ting i klassen SalgbarTing

    var tingTilSalgs = [];

    function beregn() {
        let navn = inpNavn.value;
        let ting = inpTing.value;
        let antall = inpAnt.valueAsNumber;
        let pris = inpPris.valueAsNumber;
        console.log(navn, ting, antall, pris);
        if (navn && ting && antall && pris) {
            let newObj = new SalgbarTing(navn, ting, antall, pris);
            tingTilSalgs.push(newObj);
            console.log(tingTilSalgs);
            alert("Du har lagt ut annonsen");
        }
    }


}