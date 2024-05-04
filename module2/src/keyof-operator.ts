{
    // generic constraints with keyof operator
    type Vehicle = {
        bike: string,
        car: string,
        privateJet: string
    }

    type Owner = "bike" | "car" | "privateJet" // manually
    type Owner2 = keyof Vehicle; // here both lines are the same. Just in this line, I'm using keyof operator of TypeScript

    const person1: Owner2 = "car";



    // keyof operator in object
    const getKeyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        // here by using keyof, I am indicating that Y's value is a property of X. No other value is accepted.
        return obj[key]
    }

    const person = {
        name: "Nahid",
        address: "Chattogram",
        country: "Bangladesh"
    }

    const result = getKeyValue(person, "address")













}