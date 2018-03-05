function setup() {
    let main = document.getElemenyById("main");
    let inpBy = document.getElemenyById("byer");
    let btnBestill = document.getElemenyById("button");
    let inpEnkel = document.getElemenyById("enkel");
    let inpDobbel = document.getElemenyById("dobbel");

    let byer = [];
    let peter = [];
    let amster = [];
    let nYork = [];
    let roma = [];

    byer.push(peter);
    byer.push(amster);
    byer.push(nYork);
    byer.push(roma);

    nYork.push("Hotell1");
    nYork.push("Hotell2");
    nYork.push("Hotell3");
    nYork.push("Hotell4");

    function update() {
        let byvalgt = inpBy.value;
        for(let i=0; i < byer.length; i++) {
            let byOption = byer[i]
        }
    }
}