const penjuals = [];
const products = [];

class Product {
    constructor(id, namaProduct, stock) {
        this.id = id;
        this.namaProduct = namaProduct;
        this.stock = stock;
    }


    tambahProduct(idPenjual, product) {

        return new Promise((resolve, reject) => {

            if (typeof idPenjual !== "string") {
                return reject(`Maaf ID tidak sama dengan Sring`);
            }
            
            // Argunment resolve nya?
            const productNew = {
                ...product,
                idPenjual
            }
            products.push(productNew);
            resolve();

            
        })
    }
}

class Penjual {
    constructor(id, name, jenisUsaha, penghasilan) {
        this.id = id;
        this.name = name;
        this.jenisUsaha = jenisUsaha;
        this.penghasilan = penghasilan;
    }

    registrasi(penjual) {

        return new Promise((resolve, reject) => {

            if (typeof this.id !== "string") {
                return reject(`Maaf ID tidak sama dengan Sring`);
            }
            
            // Argunment resolve nya?
            penjuals.push(penjual);
            resolve(`penjual berhasil registrasi`);

            
        })

    }

    tampilPenjual(){
        
        console.log("Ini List Penjual : ");
        return new Promise((resolve) => {
            
            console.log(penjuals);

            
        })
    }
    
}

async function main() {
    const idPenjual = "1";
    const penjual = new Penjual(idPenjual, "James Alibaba", "Jual Ayam", 0);

    penjual.registrasi(penjual)
    .then(() => {        
        
    })
    .catch(error => {
        console.error("Failed :", error);
    });

    const coba = await penjual.registrasi(penjual)
    try {
        console.log("Success : " + coba);
        // Anaggap proses lainnya
        console.log("Success2 : " + await coba.tampilPenjual());

    } catch (error) {
        console.error("Failed : " + error);
    }

    const product = new Product("1", "Ayam Fressh", 100);
    product.tambahProduct(idPenjual, product)
    .then(() => {
        console.log("product berhasil ditambahkan");
        console.log("Ini List Product : ");
        console.log(products);
    })
    .catch(error => {
        console.error("Failed :", error);
    });
        
}

main();