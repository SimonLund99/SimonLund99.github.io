function setup() {
    let canvas = document.getElementById("tegning");
    let ctx = canvas.getContext("2d");
    let valg = "rektangel";

    canvas.addEventListener("mousemove", go);
    canvas.addEventListener("click", go);

    let rekt = document.getElementById("rektangel");
    rekt.addEventListener("click", changebrush);
    let tri = document.getElementById("trekant");
    tri.addEventListener("click", changebrush);
    let cir = document.getElementById("sirkel");
    cir.addEventListener("click", changebrush);
    let visk = document.getElementById("visk");
    visk.addEventListener("click", changebrush);

    document.getElementById("size").value = 10;

    function go(e) {
        let strokesize = document.getElementById("size").value;
        let color = document.getElementById("color").value;
        if (e.buttons === 1 || e.type === "click") {
            if (valg === "rektangel") {
                ctx.fillStyle = color;
                ctx.fillRect(e.layerX - strokesize / 2, e.layerY - strokesize / 2, strokesize, strokesize);
            }
            if (valg === "visk") {
                ctx.clearRect(e.layerX - strokesize / 2, e.layerY - strokesize / 2, strokesize, strokesize);
            }
            if (valg === "sirkel") {
                ctx.beginPath();
                ctx.arc(e.layerX, e.layerY, Math.ceil(strokesize / 2), 0, 2 * Math.PI, false);
                ctx.fillStyle = color;
                ctx.fill();
            }
        }
    }
    function changebrush(e) {
        valg = e.path[0].id;
    }
}