function setup() {
    let divHalden1 = document.getElementById("haldensirkel");
    let divHalden2 = document.getElementById("popuphalden")
    let divFredrikstad1 = document.getElementById("fredrikstadsirkel");
    let divFredrikstad2 = document.getElementById("popupfredrikstad");

    divHalden2.addEventListener("click", fjernHalden);
    divFredrikstad2.addEventListener("click", fjernFredrikstad);

    divHalden1.addEventListener("click", visFilmHalden);
    divFredrikstad1.addEventListener("click", visFilmFredrikstad);

    function visFilmHalden(e) {
        console.log(e.toElement);
        divHalden2.classList.add("vis");
        divHalden2.classList.remove("skjul");
    }

    function visFilmFredrikstad() {
        divFredrikstad2.classList.add("vis");
        divFredrikstad2.classList.remove("skjul");
    }

    function fjernHalden() {
        divHalden2.classList.add("skjul");
        divHalden2.classList.remove("vis");
    }

    function fjernFredrikstad() {
        divFredrikstad2.classList.add("skjul");
        divFredrikstad2.classList.remove("vis");
    }


}