/*function setup() {
    let buttons = document.getElementById("buttons");
    let divYear = document.getElementById("year");
    let divMonth = document.getElementById("month");

    let year = Number(divYear.innerHTML);
    let month = divMonth.innerHTML;

    let months = ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"];
    let monthN = months.indexOf(month);

    buttons.addEventListener("click", btnClick);

    function btnClick(e) {
        if (e.toElement.id === "buttons") {
            return;
        }
        let toDo = e.toElement.id.split(",");
        eval(toDo[1] + toDo[0] + toDo[0]);
        if (monthN === 12) {
            monthN = 0;
            year++;
        }
        if (monthN === -1) {
            monthN = 11;
            year--;
        }
        console.log(year, monthN);
        divYear.innerHTML = year;
        divMonth.innerHTML = months[monthN];
    }

} */

// @ts-check

function setup() {
    let spanYear = document.getElementById("year");
    let spanMonth = document.getElementById("month");
    let divUkedager = document.getElementById("ukedager");

    let btnNextYear = document.getElementById("nextYear");
    let btnPrevYear = document.getElementById("prevYear");
    let btnNextMonth = document.getElementById("nextMonth");
    let btnPrevMonth = document.getElementById("prevMonth");

    btnNextMonth.addEventListener("click", nextMonth);
    btnPrevMonth.addEventListener("click", prevMonth);

    let arrDato = [];

    function lagUkedager() {
        let dagNavn = ["Man", "Tir", "Ons", "Tor", "Fre", "Lør", "Søn"];
        for (let d of dagNavn) {
            let kort = d.substr(0, 3);
            let div = document.createElement('div');
            div.className = "ukedag";
            div.innerHTML = kort;
            divUkedager.appendChild(div);
        }
    }

    function lagDatoer() {
        for (let i = 1; i <= 42; i++) {
            let div = document.createElement('div');
            arrDato.push(div);
            div.className = "dato";
            div.innerHTML = String(i);
            divUkedager.appendChild(div);
        }
    }


    function nextMonth(e) {
        if (minDato.month < 12) {
            minDato.month++;
        } else {
            minDato.month = 1;
            minDato.year++;
        }
        visMonth(minDato);
    }
    function prevMonth(e) {
        if (minDato.month > 1) {
            minDato.month--;
        } else {
            minDato.month = 12;
            minDato.year--;
        }
        visMonth(minDato);
    }
    let minDato = {
        year: 2018,
        month: 2,
        day: 1
    };

    function visMonth(dato) {
        // trenger å vite hvilken dag 1. av denne måneden er
        let d = new Date(`${dato.year}/${dato.month}/1`)
        let start = (d.getDay() + 6) % 7;
        let mNavn = "Januar,Februar,Mars,April,Mai,Juni,Juli,August,September,Oktober,November,Desember".split(",");
        let mLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        spanYear.innerHTML = String(dato.year);
        spanMonth.innerHTML = mNavn[dato.month - 1];
        let lengde = mLength[dato.month - 1];
        for (let i=0; i < 42; i++) {
            let div = arrDato[i];
            div.classList.add("hidden");
        }
        for (let i = 0; i < lengde; i++) {
            let div = arrDato[i+start];
            div.innerHTML = String(i+1);
            div.classList.remove("hidden");
        }
    }
    lagUkedager();
    lagDatoer();
    visMonth(minDato);
}