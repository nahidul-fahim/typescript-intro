{
    // type guard using instance of
    class Person {
        name: string;
        city: string;

        constructor(name: string, city: string) {
            this.name = name;
            this.city = city;
        }

        makeIntro() {
            console.log(`${this.name} is from ${this.city}`)
        }
    }


    // child class of person - 1
    class Student extends Person {
        constructor(name: string, city: string) {
            super(name, city)
        }

        makeRead() {
            console.log("The student is reading a book")
        }
    }

    // child class of person - 2
    class Teacher extends Person {
        constructor(name: string, city: string) {
            super(name, city)
        }

        makeTeach() {
            console.log("The teacher is teaching math to the students")
        }
    }

    // creating instance for these classes
    const student1 = new Student("Nahidul Islam", "Chattogram");
    student1.makeRead();
    const teacher1 = new Teacher("Mr. Azhar Uddin", "Dhaka");
    teacher1.makeTeach()

    // instanceof
    const getPerson = (person: Person) => {
        if (person instanceof Student) {
            // as I have checked if person is instance of Student, that's why it is allowing me to do the following. Otherwise, it would show error.
            person.makeRead();
        }
        else if (person instanceof Teacher) {
            person.makeTeach()
        }
        else {
            person.makeIntro();
        }
    }

    // to handle the upper code in a smart way, we can use function
    function isStudent(person: Person): person is Student {
        // here i am using 'person is Student'. But the return of this function is boolean. And if we keep this boolean return instead of 'person is Student', then it will catch error in 'getPerson1'.
        return person instanceof Student;
    }

    function isTeacher(person: Person): person is Teacher {
        return person instanceof Teacher;
    }

    const getPerson1 = (person: Person) => {
        if (isStudent(person)) {
            person.makeRead();
        }
        else if (isTeacher(person)) {
            person.makeTeach()
        }
        else {
            person.makeIntro();
        }
    }










}