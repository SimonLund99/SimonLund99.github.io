function setup() {
    let canvas = document.getElementById("tegning");
    let ctx = canvas.getContext("2d");

    let xpos = 0;
    let vx = 2;

    function figur(xpos, ctx) {
        //xpos er avstand fra v.kart
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(xpos + 75, 75, 50, 0, Math.PI * 2, true); // Outer circle
        ctx.moveTo(xpos + 110, 75);
        ctx.arc(xpos + 75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
        ctx.moveTo(xpos + 65, 65);
        ctx.arc(xpos + 60, 65, 5, 0, Math.PI * 2, true);  // Left eye
        ctx.moveTo(xpos + 95, 65);
        ctx.arc(xpos + 90, 65, 5, 0, Math.PI * 2, true);  // Right eye
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;
        ctx.moveTo(xpos + 75, 140);
        ctx.lineTo(xpos + 150, 175);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;
        ctx.moveTo(xpos + 75, 140);
        ctx.lineTo(xpos + 0, 175);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;
        ctx.moveTo(xpos + 75, 125);
        ctx.lineTo(xpos + 75, 300);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;
        ctx.moveTo(xpos + 75, 300);
        ctx.lineTo(xpos + 150, 400);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;
        ctx.moveTo(xpos + 75, 300);
        ctx.lineTo(xpos + 0, 400);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 25;
        ctx.moveTo(xpos + 75, 25);
        ctx.lineTo(xpos + 75, 35);
        ctx.stroke();
    }

    setInterval(tegn, 40);

    function tegn() {
        ctx.clearRect(0, 0, 500, 500);
        figur(xpos, ctx);
        xpos += vx;
        if (xpos > 350) {
            vx = -2;
        }
        if (xpos < 0) {
            vx = 2;
        }
    }


}