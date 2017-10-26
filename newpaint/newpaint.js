function setup() {
    let canvas = document.getElementById("tegning");
    let ctx = canvas.getContext("2d");

    let width: 30;
    let height: 30;

    canvas.addEventListener("click", go);

    function go(e) {
        console.log(e);
    }
}