{
    // OOP - class
    class Person {
        name: string;
        city: string;
        country: string;

        constructor(name: string, city: string, country: string) {
            this.name = name;
            this.city = city;
            this.country = country;
        }

        makeIntro() {
            // we have to use normal function here. Because 'this' keyword doesn't work in arrow function
            console.log(`${this.name} is from ${this.city}`)
        }
    }

    // creating object instance from the 'Person' class
    const person1 = new Person("Nahid", "Chattogram", "Bangladesh");
    const person2 = new Person("Nafim", "Rajshahi", "Bangladesh");
    person1.makeIntro();

    /* =================================== */

    // In the upper code, I have to assign all the data types multiple times. But we can do it more easily by defining the data type only once.

    // Here is the second method:
    class NewPerson {
        // name: string;
        // city: string;
        // country: string;

        // by using parameter properties

        // here only using the 'public' keyword, we can define the data types only for once and also we don't have to use 'this' keyword here. In a sentence,by using 'Public' parameter, we can remove code repeat and can make our code cleaner  

        constructor(public name: string, public city: string, public country: string) {
            // this.name = name;
            // this.city = city;
            // this.country = country;
        }

        makeIntro() {
            // we have to use normal function here. Because 'this' keyword doesn't work in arrow function
            console.log(`${this.name} is from ${this.city}`)
        }
    }

    // creating object instance from the 'Person' class
    const person3 = new Person("Nahid", "Chattogram", "Bangladesh");
    const person4 = new Person("Nafim", "Rajshahi", "Bangladesh");
    person1.makeIntro();





}