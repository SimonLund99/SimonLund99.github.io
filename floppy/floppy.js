function setup() {

    let spiller = { fornavn: "idiot" };

    try {
        let spillerData = localStorage.getItem("spiller");
        let spiller = JSON.parse(spillerData);
    } catch (error) {
        console.log("uregistrert spiller");
    }

    let divSpiller = document.getElementById("spiller");
    divSpiller.innerHTML = spiller.fornavn;



    let divFuggel = document.getElementById("bird");
    let divPoeng = document.getElementById("poeng")
    setInterval(flytt, 60);
    let fart = 0;
    let top = 255;
    let soylepos = 650;
    const PXperMS = 27;

    let poeng = 0;

    let melding = "Du har vunnet";

    /*
        Regner ut hvor mye søylene flytter seg på 60ms:
        900px på 2000ms
        60 * 900/2000 = 27px = PXperMS
    */

    addEventListener("keydown", giFart);

    function flytt() {
        divFuggel.style.top = top + "px";
        top = top - fart;
        fart = fart - 10
        if (top > 510) {
            fart = 0;
        }
        if (top < 0) {
            fart = 0;
            top = 0;
        }
        if (fart < -10) {
            divFuggel.style.transform = "rotate(25deg)"
        }
        if (fart > -15) {
            divFuggel.style.transform = "rotate(-15deg)"
        }
        soylepos = soylepos - PXperMS;

        // dersom vi har fullført en runde
        if (soylepos < -250) {
            soylepos = 650;
            poeng += 1;
            crashed = false;
        }
        //oppdaterer posisjon til søyler
        if (soylepos < 255 + 90 && soylepos > 255 - 50) {
            if (top < 130 || top > 410) {
                divFuggel.style.top = "510px";
                top = 510;
                poeng -= 2;
                crashed = true;
            }
        }
        divPoeng.innerHTML = String(poeng);
        if (poeng > 20) {
            divPoeng.innerHTML = melding;
        }
    }

    function giFart(e) {
        var key = e.keyCode;
        if (key === 32) {
            fart = 54;
        }
    }
}