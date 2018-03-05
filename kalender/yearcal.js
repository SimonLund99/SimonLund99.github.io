// @ts-check

function setup() {
    let divRamme = document.querySelector("#ramme");
    for (let i = 1; i < 13; i++) {
        let div = document.createElement("div");
        div.className = "minical";
        divRamme.appendChild(div);
        tegnKalender(div,2018,i);
    }

    function tegnKalender(divMonth, year, month) {
        let monthNames="Jan,Feb,Mar,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Des".split(",");
        let maanedsNavn = monthNames[month-1];
        let d = document.createElement("div");
        d.className = "maaned";
        d.innerHTML = maanedsNavn;
        divMonth.appendChild(d);

        d = document.createElement("div");
        d.className = "ukedager";
        for (let i=0; i < 7; i++) {
            
        }
        divMonth.appendChild(d);
    }
}