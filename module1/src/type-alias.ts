{
    // type alias


    // we can declare type in the following way for all the objects
    type Student = {
        // we should start the type name in capital letters
        name: string,
        age: number,
        class: number,
        gender: string,
        address: string,
        phoneNo?: string // it is an optional type. It is available in the second object only
    }

    // student 2
    const student1: Student = {
        name: "Nahidul Islam",
        age: 20,
        class: 12,
        gender: "Male",
        address: "Chattogram, Bangladesh"
    }

    // student 2
    const student2: Student = {
        name: "Karib Shahriar",
        age: 18,
        class: 10,
        gender: "Male",
        address: "Dhaka, Bangladesh",
        phoneNo: "012457822545"
    }


    // type alias in function
    type Add = (num1: number, num2: number) => number;

    const add: Add = (num1, num2) => {
        return num1 + num2
    }








}