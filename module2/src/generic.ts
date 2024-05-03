{
    // generic type
    /*
    In TypeScript, a generic data type allows us to define a type or function that can work with a variety of data types while still maintaining type safety. This means we can create reusable components that work with different data types without sacrificing type checking.
    */


    // const rollNumbers: number[] = [1, 2, 5, 10];
    const rollNumbers: Array<number> = [1, 2, 5, 10]; //generic type array
    // const personNames: string[] = ["Fahim", "Nahid", "Imtiaz", "Nafim"]
    const personNames: Array<string> = ["Fahim", "Nahid", "Imtiaz", "Nafim"] //generic type array

    /* =========================== */

    // Dynamic generic type array
    type GenericArray<T> = Array<T>;
    const rollNumbers1: GenericArray<number> = [1, 2, 5, 10]; // dynamic generic type array
    const personNames1: GenericArray<string> = ["Fahim", "Nahid", "Imtiaz", "Nafim"] // dynamic generic array

    // Array of objects
    const user: GenericArray<{ name: string, age: number, country?: string }> = [
        {
            name: "Nahid",
            age: 20,
            country: "Bangladesh"
        },
        {
            name: "Fahim",
            age: 22
        }
    ]


    // generic tuple
    type GenericTuple<X, Y> = [X, Y]
    const twoFriends: GenericTuple<string, string> = ["Fahim", "Nahid"]
    const uniqueUser: GenericTuple<number, { name: string, city: string }> = [123, { name: "Fahim", city: "Chattogram" }]



}