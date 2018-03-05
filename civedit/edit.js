
class Perk {
    constructor(perks) {
        this.economy = perks.economy;
        this.military = perks.military;
        this.society = perks.society;
    }

    render() {
        let s = `
        <ul>
            <li>Economy: ${this.economy}
            <li>Military: ${this.military}
            <li>Society: ${this.society}
        </ul>
        `;
    }
}


class Nation {
    constructor(navn, info) {
        this.navn = navn;
        this.title = info.title;
        this.leader = info.leader;
        this.capital = info.capital;
        this.picture = info.picture;
    }
    render() {
        let s = `
    <ul>
        <li>Name: ${this.navn}
        <li>Leader: ${this.title} ${this.leader}
        <li>Capital: ${this.capital}
        <li>Picture: <img src="${this.navn}">
        <li>Perks: ${this.perk.render()}
    </ul>
    `;
        return s;

    }
}


function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBglomBq_AsPwvVAO539YWRP4XDgfrvCZ0",
        authDomain: "civedit-7d4f6.firebaseapp.com",
        databaseURL: "https://civedit-7d4f6.firebaseio.com",
        projectId: "civedit-7d4f6",
        storageBucket: "",
        messagingSenderId: "339917401821"
    };
    firebase.initializeApp(config);
    const database = firebase.database;

    let divListe = document.querySelector("#liste");
    let ref = database().ref("nations");

    ref.once("value").
        then(function (snapshot) {
            let landene = snapshot.val();
            if (landene) {
                for (let l in landene) {
                    let info = landene[l];
                    divListe.innerHTML += `
                    <div>
                        <h4>${l}</h4>
                        <ul>
                            <li> Hovedstad: ${info.capital}
                            <li> Leder: ${info.title} ${info.leader}
                            <li> Fordeler: 
                                <ul>
                                    <li> Økonomi: ${info.perks.economy}
                                    <li> Militær: ${info.perks.military}
                                    <li> Samfunn: ${info.perks.society}
                                </ul>
                        </ul>
                    </div>`;
                }
            }
        }
        );
}