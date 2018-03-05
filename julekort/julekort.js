function setup() {
    let main = document.getElementById("main");
    let santa = document.getElementById("santa");

    let sledeX = 200;
    let sledeY = 100;

    setInterval(bevegSlede, 20);

    santa.addEventListener("click", dropPresent);

    function bevegSlede() {
        sledeX -= 8;
        santa.style.left = sledeX + "px";

        if (sledeX <= -500) {
            sledeX = 1500;
        }
        for (let present of manyPresent) {
            if (parseFloat(present.style.top) <= 680) {
                present.style.top = parseFloat(present.style.top) + 3 + "px";
            } else {
                present.style.opacity -= 0.002;
                if (present.style.opacity <= 0) {
                    manyPresent.splice(manyPresent.indexOf(present), 1);
                }
            }
        }
    }


    let manyPresent = [];

    function dropPresent() {
        let newPresent = document.createElement("div");
        newPresent.className = "present";
        newPresent.style.left = sledeX + 300 + "px";
        newPresent.style.top = sledeY + 180 + "px";
        newPresent.style.opacity = 1;
        main.appendChild(newPresent);
        manyPresent.push(newPresent);
    }

    setInterval(playsound, 1000);
    let soundcount = 0;
    function playsound() {
        soundcount++;
        if (soundcount === 1) {
            var audio = new Audio("trump.mp3");
            audio.volume = 1.0;
            audio.play();
        }
        if (soundcount === 112) {
            soundcount = 0;
        }
    }
}