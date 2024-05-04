{
    // generic interface type
    interface Developer<T> {
        name: string,
        computer: {
            brand: string,
            model: string,
            releaseYear: number
        },
        smartWatch: T
    }

    // type alias for smartwatch
    type SmartWatchType = {
        brand: string,
        model: string,
        display: string,
        heartCheck?: boolean,
        staminaCheck?: boolean
    }



    // object 1
    const developer1: Developer<SmartWatchType> = {
        name: "Nahid",
        computer: {
            brand: "HP",
            model: "Hj587",
            releaseYear: 2018
        },
        smartWatch: {
            brand: "Osaka",
            model: "41fdj",
            display: "LED"
        }
    }

    // object 2
    const developer2: Developer<SmartWatchType> = {
        name: "Nahid",
        computer: {
            brand: "HP",
            model: "Hj587",
            releaseYear: 2018
        },
        smartWatch: {
            brand: "Osaka",
            model: "41fdj",
            display: "LED",
            heartCheck: true,
            staminaCheck: true
        }
    }











}