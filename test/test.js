function setup() {
    let beregn = document.getElementById("lagre");
    beregn.addEventListener("click", beregn)

    class Elev {
        constructor(fn,en,klasse,kontakt) {
         this.fornavn = fn;
         this.etternavn = en;
         this.klasse = klasse;
         this.kontakt = kontakt;
        }
      
        navn() {
          return (this.fornavn + " " + this.etternavn);
        }
      }

      let elev1 = new Elev("ole","olsen","3a","KRIN");
      let elev2 = new Elev("anne","bø","3b","KRIN");
}