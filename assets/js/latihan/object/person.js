const persons = [];

class Person {
    constructor(
        name,
        gender
    ) {
        this.name = name;
        this.gender = gender;
    }

    setTitle() {
        if(this.gender === "L"){
            this.name = `Tuan ${this.name}`;
        } else if (this.gender == "P") {
            this.name = `Nyonya ${this.name}`;
        }
        // 2. tambahkan argument untuk set title, jika gender L = "Tuan " apabila P = "Nyonya", maka nilai 
            // name nya menjadi contoh, 
            // name = Tuan Jhon
    }

    static find(name) {
        return persons.find((person) => person.name === name);
        // 6. tambahkan argument untuk pungsi pencarian dari array persons berdasarkan nama.
    } 
}

// 3. buat kan 2 object person
    // 1 person laki laki
    // panggil funsi setTittle dari object person 
    // 1 person perempuan
    // panggil funsi setTittle dari object person 

const laki = new Person("Hendar","L")
laki.setTitle();
const perempuan = new Person("Nurul","P")
perempuan.setTitle();

// 4. setiap object person nya ditambahkan ke array object persons
persons.push(laki);
persons.push(perempuan);


// 5. tampilkan object persons.
console.log(persons);

// 7. panggil fungsi Person.find(name) dan muncul kan object person berdasarkan nama yang di input.
console.log(Person.find("Tuan Hendar"));