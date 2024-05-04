{
    // function with generics

    // function with normal data type
    const createArray = (param: string) => {
        return [param]
    }

    const result1 = createArray("Bangladesh")

    // function with generic data type
    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }
    const result2 = createArrayWithGeneric<string>("Bangladesh")

    // function with generic data type object parameters
    const createArrayWithGeneric1 = <T>(param: T): T[] => {
        return [param]
    }

    type ObjectType = {
        name: string,
        city: string
    }

    const result3 = createArrayWithGeneric1<ObjectType>({ name: "Mr. Nahid", city: "Chattogram" })










}