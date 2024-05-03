{
    // Interface 
    /* Interface works like type alias. But in terms of all primitive data type, we'll use type alias and in terms of object, we can use both interface and type alias */


    // interface
    // As interface's structure is like object, so in terms of primitive data types we cannot use interface.
    interface Student1 {
        name: string,
        age: number
    }


    // type alias
    type Student = {
        name: string,
        age: number
    };

    // object
    const student1: Student1 = {
        name: "Nahidul Islam",
        age: 20
    }

    /* ============================== */

    // intersection in type alias
    type StudentWithClass = Student & { class: number }
    const student2: StudentWithClass = {
        name: "Karib Shahriar",
        age: 25,
        class: 12
    }


    // extends in interface which is as same as intersection in type alias
    interface StudentWithCity extends Student1 {
        class?: number, // optional
        city: string
    }
    const student3: StudentWithCity = {
        name: "Imtiaz Hossain",
        age: 25,
        city: "Chattogram"
    }

    /* =========================================== */

    // Interface in Array
    interface RollNumber {
        [index: number]: number
        // here index number in an array are numbers. And the below 'rollNumber' is an array that contains number
    };

    const rollNumber: RollNumber = [1, 2, 3]

    /* =========================================== */
    
    // Interface in Function
    interface AddNumbers {
        (num1: number, num2: number): number;
    }

    const add: AddNumbers = (num1, num2) => num1 + num2;


}