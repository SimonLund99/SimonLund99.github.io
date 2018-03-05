// @ts-check
function setup() {

    let divText = document.getElementById("tekst");
    let divAlternativer = document.getElementById("alternativ");
    let divKontroll = document.getElementById("kontroll");

    let spraak = [];

    let amerikansk = [];

    let total = 0;


    spraak.push(amerikansk);
    //legger til sprsml til amerikansk
    amerikansk.push("Hva er potet på amerikansk:Potet,+Potato,Carrotes,Coal");
    amerikansk.push("Hva er ost på amerikansk:chz,+cheese,gauda");
    amerikansk.push("Hva er fisk på amerikansk:fshz,+fish,pescado");

    let riktigsvar = "";
    let index = 0;
    let valgtSpraak = spraak[0];
    // dette er en forenkla løsning da vi bare har amerikansk
    // senere bør dette endres slik at bruker kan velge språk

    function visNeste() {
        visSporsmaal(index);
    }

    function vurder() {
        let valgte = Array.from(document.querySelectorAll("input:checked"));
        let riktig = 0;
        let feil = 0;
        for (let valg of valgte) {
            if (valg.value === riktigsvar) {
                console.log(valg.value, riktigsvar);
                riktig++;
            } else {
                feil++;
            }
        }
        total += riktig - feil;
        if (valgtSpraak.length > index + 1) {
            index++;
            visNeste()
        } else {
            visResultat();
        }
    }

    function visResultat() {
        console.log("Du har " + total + " poeng!");
    }

    function visSporsmaal(index) {
        let sprmsl = valgtSpraak[index];
        // bruker nye funksjoner fra es7, destructuring assignment
        let [ledetekst, resten] = sprmsl.split(":");
        let alternativer = resten.split(",");
        divText.innerHTML = ledetekst;

        let liste = '';
        for (let valg of alternativer) {
            if (valg.charAt(0) === "+") {
                valg = valg.substr(1);
                riktigsvar = valg;
            }
            liste += `<br><input value="${valg}" type="checkbox">` + valg;
        }
        liste += `<div><button type="button">Vurder</button></div>`

        divAlternativer.innerHTML = liste;
        divAlternativer.querySelector("button").addEventListener("click", vurder);
    }

    visNeste();


}