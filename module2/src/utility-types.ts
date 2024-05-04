{
    // Utility types
    /*
    In TypeScript, utility types are built-in generic types that provide convenient ways to manipulate and transform other types. They are incredibly useful for creating new types based on existing ones without having to write complex type definitions from scratch. TypeScript utility types leverage the power of TypeScript's type system to ensure type safety and correctness at compile time.
    */

    // Pick utility type

    /* 
    This utility type constructs a type by picking the set of properties Keys from Type.
    */

    type User = {
        name: string,
        age: number,
        email?: string,
        contact: number
    }

    type NameAge = Pick<User, "name" | "age"> // picking name and age from 'User' type.

    /* ====================================================== */

    // Omit utility type
    /* This is opposite of 'Pick'. Using 'Pick', we can pick something and using omit, we can leave something */

    type ContactInfo = Omit<User, "name" | "age">

    /* ====================================================== */

    // Partial utility type
    /* This utility type constructs a type with all properties of the given type set to optional. It allows us to create new types by omitting certain properties from existing types. */

    type PartialTYpe = Partial<User>

    /* ====================================================== */

    // Required utility type
    /* This utility type constructs a type with all properties of the given type set to required. It essentially does the opposite of Partial. */

    type AllRequired = Required<User>

    /* ====================================================== */

    // Readonly utility type
    /* This utility type constructs a type with all properties of the given type set to readonly, meaning the properties cannot be reassigned. */

    type AllReadOnly = Readonly<User>

    /* ====================================================== */

    // Record utility type
    /* This utility type constructs an object type whose property keys are Keys and whose property values are Type. */

    type MyObj = Record<string, string> // Here I am declaring the key as string and the value as string. So, I can add as many key-value pair in the object as I want.

    const obj1: MyObj = {
        name: "Nahid",
        city: "Chattogram",
        country: "Bangladesh"
    }

    // Use of 'Record' in terms of empty object
    const EmptyObj: Record<string, unknown> = {}; // here I know the first (index) key will always be string but the value can be anything, so it's unknown









}