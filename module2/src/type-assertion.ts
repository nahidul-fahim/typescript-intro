{
    // Type Assertion
    /* In TypeScript, type assertion is a way to tell the compiler about the type of a variable when the compiler cannot infer it automatically. */
    let anything: any;
    anything = "This is a string";
    (anything as string).length;

    // Type assertion example
    const kmToM = (value: string | number): string | number | undefined => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is ${convertedValue}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    }

    const result1 = kmToM(1000) as number; // As I know it will return a number-type value;
    const result2 = kmToM('1000') as string; //Here I have denoted 'as string'.


    /* =========================================== */


    // Type assertion in try-catch
    // denoting error message type
    type CustomError = {
        message: string
    }
    // try-catch
    try {
        // something to do here
    } catch (error) {
        console.log((error as CustomError).message)
    }







}