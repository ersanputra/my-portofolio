const persons = [];

class Person {
    constructor(
        name,
        gender
    ) {
        this.name = name;
        // 1. Tambahkan di constructor untuk set value genger
        this.gender = gender;
    }

    setName(name) {
        this.name = name;
        return this;
    }

    setGender(gender) {
        const genders = ["L", "P"];
        if (genders.includes(gender)) {
            this.gender = gender;
        } else {
            console.error("Maaf gender yg di input hanya L atau P");
        }

        return this;
    }

    setTitle() {
        // 2. tambahkan argument untuk set title, jika gender L = "Tuan " apabila P = "Nyonya", maka nilai 
            // name nya menjadi contoh, 
            // name = Tuan Jhon
            (this.gender === "L") ? this.name = `Tuan ${this.name}` : this.name =`Nyonya ${this.name}`;
    }

    static find(name) {
        // 6. tambahkan argument untuk pungsi pencarian dari array persons berdasarkan nama.
        return persons.find(item => item.name = name)
    } 
}

// 3. buat kan 2 object person
    // 1 person laki laki
    // panggil funsi setTittle dari object person 
    const person1 = new Person("Hendar", "L");
    person1.setTitle();

    //|key|value|
    //|name|Hendar|
    //|gender|L|

    console.log(person1.name);
    console.log(person1["name"]);

    // 1 person perempuan
    // panggil funsi setTittle dari object person 
    const person2 = new Person("Nurul", "P");
    person2.setTitle();

    const person3 = new Person();
    person3.name = "Agung";
    person3.gender = "L";
    person3.setTitle();

    // Builder Pattern
    const person4 = new Person();
    person4.setName("Fajar").setGender("L").setTitle();

// 4. setiap object person nya ditambahkan ke array object persons
    persons.push(person1);
    persons.push(person2);
    persons.push(person3);
    persons.push(person4);

// 5. tampilkan object persons.
    console.log("List Array Person : ");
    console.log(persons);

// 7. panggil fungsi Person.find(name) dan muncul kan object person berdasarkan nama yang di input.
    const personFind = Person.find("Hendar");

    console.log("Hasil Pencarian dengan inputan name : ");
    console.log(personFind);

    // Latihan OOP

    class Student extends Person {
        setClass(param) {            
            //1. argumant set nilai class
            this.kelas = param;
            return this;
        }
        
        // 4. tambahkan method setSekolah
        setSekolah(param) {
            this.sekolah = param;
            return this;
        }
    }
    
    // 2. Set class dengan bentuk builder pattern
    const student = new Student();
    student
    .setName("Ersan")
    .setGender("L")
    .setClass("12 IPA 2")
    .setSekolah("SMA Negeri 1")
    .setTitle();

    // 3. Tampilkan student
    console.log(student);