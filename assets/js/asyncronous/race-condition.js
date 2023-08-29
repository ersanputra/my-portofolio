class Hewan {
    constructor(jenis, name){
        this.jenis = jenis;
        this.name = name;
    }

    suara(){
        console.log("Meraung");
        return this;
    }

    memakan(param){
        this.makanan = param;
        return this;
    }

    memakanWithProssesLama(param){
        setTimeout(() => {
            this.makanan = param;
        })
    }

    memakanWithProssesLamaCallback(param, callback){
        setTimeout(() => {
            this.makanan = param;
            callback();
        }, 100);
    }

    tampilkanMakanannya(){
        console.log(`${this.name} memakan ${this.makanan}`);
        return this
    }
}

function main() {
    //syscronous
    const ayam = new Hewan("Unggas", "Ayam")
    .memakan("Gabah")
    .tampilkanMakanannya();

    //race condition
    console.log("Race Condition");
    const sapi = new Hewan("Mamalia","Sapi")
    sapi.memakanWithProssesLama("Rumput")
    sapi.tampilkanMakanannya();

    //Fix race condition with callback
    console.log("Fix Race Condition With Callback");
    const singa = new Hewan("Mamalia", "Singa");
    singa.memakanWithProssesLamaCallback("Daging", () => { singa.tampilkanMakanannya(); });
}

main();