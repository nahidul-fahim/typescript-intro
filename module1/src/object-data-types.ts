const newPerson: {
    firstName: string,
    middleName?: string, // optional type. It means it can be in the object or it can't be.
    lastName: string,
    isMarried: boolean,
    nationality: 'Bangladeshi' // here, the value 'Bangladeshi' is now acting as type. When a value acts as a type this is called, "Literal types"
} = {
    firstName: 'Nahidul',
    lastName: 'Islam',
    isMarried: false,
    nationality: 'Bangladeshi'
};


// Read only property (Access modifier)
const city: {
    name: string,
    language: string,
    readonly country: string
} = {
    name: 'Chittagong',
    language: 'Chittagonian',
    country: 'Bangladesh'
}

// city.country = "Turkey" // we cannot do this. Because city.country is a "readonly" property.