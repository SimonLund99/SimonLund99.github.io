// @flow

function setup() {
    let selFra = document.getElementById("fra");
    let selTil = document.getElementById("til");
    let inpAntall = document.getElementById("antall");
    let chkRetur = document.getElementById("retur");
    let chkLeiebil = document.getElementById("leiebil");
    let btnBestill = document.getElementById("bestill");
    let divMelding = document.getElementById("melding");

    let priser = {
        "OSL": { "SVG": 399, "BGO": 419, "HAU": 580 },
        "SVG": { "BGO": 299, "HAU": 199 },
        "BGO": { "HAU": 349 }
    }

    let leiepris = 1000;

    // $FlowFixMe
    btnBestill.addEventListener("click", bestillFlight);

    function bestillFlight() {
        let fra = selFra.value;
        let til = selTil.value;
        let pris = 0;
        if (priser[fra] && priser[fra][til]) {
            pris = priser[fra][til];
        } else {
            pris = priser[til][fra];
        }

        if (inpAntall.value) {
            pris *= inpAntall.valueAsNumber;
        }

        if (chkRetur.checked) {
            pris *= 2;
        }

        if (chkLeiebil.checked) {
            pris += leiepris;
        }


        // $FlowFixMe
        divMelding.innerHTML = `Dinn flyvning fra ${fra} til ${til} koster ${pris} `;
    }


}