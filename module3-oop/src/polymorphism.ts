{
    // polymorphism in OOP

    // class 1
    class Person {
        getSleep() {
            console.log(`I am sleeping for 8 hours!`)
        }
    }

    // class 2
    class Student extends Person {
        getSleep() {
            console.log(`I am sleeping for 7 hours`)
        }
    }

    // class 3
    class Developer extends Person {
        getSleep() {
            console.log(`I am sleeping for 6 hours`)
        }
    }

    // creating a function
    const getSleepingHours =(param: Person) => {
        param.getSleep()
    }

    // creating instance
    const instance1 = new Person();
    const instance2 = new Student();
    const instance3 = new Developer();

    getSleepingHours(instance1);
    getSleepingHours(instance2);
    getSleepingHours(instance3);














}