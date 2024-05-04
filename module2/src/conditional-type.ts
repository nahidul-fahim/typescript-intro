{
    // conditional type
    /*
    In TypeScript, conditional types allow us to perform type transformations based on the relationships between types. They are particularly useful when we want to express types that depend on other types. 
    */

    type a1 = string;
    type b1 = number;

    type x = a1 extends string ? true : false // here, if a1 is null, then it will true otherwise false.

    // more complex
    type y = a1 extends null ? true : b1 extends number ? number : any










}