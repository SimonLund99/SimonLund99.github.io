//@flow

function setup() {

    let inpKm = document.getElementById("km");
    let inpNaut = document.getElementById("naut");

    let btnK2n = document.getElementById("k2n");
    btnK2n.addEventListener("click", k2n);
    let btnN2k = document.getElementById("n2k");
    btnN2k.addEventListener("click", n2k);

    km.addEventListener("keydown", k2n);
    naut.addEventListener("keydown", n2k);

    function k2n(event) {
        if (event.type === "click" || event.keyCode === 13) {
            let km = inpKm.valueAsNumber;
            let naut = km / 1.852;
            inpNaut.value = naut.toFixed(2);
        }
    }
    function n2k(event) {
        if (event.type === "click" || event.keyCode === 13) {
            let naut = inpNaut.valueAsNumber;
            let km = naut * 1.852;
            inpKm.value = km.toFixed(2);
        }
    }
}