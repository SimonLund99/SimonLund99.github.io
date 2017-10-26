function setup() {

    let liste = [];
    let inpNavn = document.getElementById("navn");
    let divVisListe = document.getElementById("visliste");

    inpNavn.addEventListener("keydown", lagreData);

    function lagreData(event) {
        if (event.keyCode === 13) {
            let navn = inpNavn.value;
            if (navn === "") {
                event.preventDefault();
                return;
            }
            liste.push(navn);
            liste.sort();
            let uListe = "<ul>";
            for (let n of liste) {
                uListe += "<li>" + n + "</li>";
            }
            uListe += "</ul>";
            divVisListe.innerHTML = uListe;
            inpNavn.value = "";
            event.preventDefault();
        }
    }

}
