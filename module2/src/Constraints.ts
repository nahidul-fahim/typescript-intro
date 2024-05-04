{
    // Constraints
    /*
    In TypeScript, constraints, also known as type constraints or bounded polymorphism, refer to restrictions placed on the types that can be used in a generic type parameter. Constraints allow us to specify that a generic type parameter must extend or implement a particular type or set of types.
    */

    // function with generics and Constraints
    const addCityToCountry = <T extends { name: string, area: string, population: number }>(cityData: T) => {
        const country = "Bangladesh"
        return {
            ...cityData,
            country
        }
    }

    const city1 = addCityToCountry<{ name: string, area: string, population: number }>({ name: "New city 1", area: "14557 sq.km", population: 245667 })
    // const city2 = addCityToCountry({ nothing: "nothing" })
    // this object is not passing, as we have constraints the params.


}