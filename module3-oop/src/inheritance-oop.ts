{
    // Inheritance in OOP

    // Here the class of Student and Teacher is the same. So, we can make a Parent class using this same class.

    // Parent class
    class Person {
        name: string;
        goodIn: string;
        address: string;

        constructor(name: string, goodIn: string, address: string) {
            this.name = name;
            this.goodIn = goodIn;
            this.address = address;
        }

        intro() {
            console.log(`Our very own, ${this.name} is good in ${this.goodIn}.`)
        }
    }


    // class - student
    class Student extends Person {
        constructor(name: string, goodIn: string, address: string) {
            super(name, goodIn, address); // as we will send value from child to parent, so need a way to send that value. Which is 'super()'
        }
    }

    const student1 = new Student("Nahidul Islam", "Programming", "Chattogram");
    student1.intro();


    // another class - teacher
    class Teacher extends Person {
        designation: string;

        constructor(name: string, goodIn: string, address: string, designation: string) {
            super(name, goodIn, address)
            this.designation = designation;
        }

    }

    const teacher1 = new Teacher("Mr. Nurul Absar", "math", "Chattogram", "Head Teacher");
    teacher1.intro();











    /* ==================================== */










}