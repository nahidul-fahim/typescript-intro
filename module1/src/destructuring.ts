{
    // destructuring

    // object destructuring
    const personInfo = {
        gender: 'male',
        name: {
            firstName: "Nahidul",
            lastName: "Islam"
        },
        city: "Chattogram",
        country: "Bangladesh"
    }

    const {
        gender,
        name: { lastName } // here we cannot declare data-types, as it will work like alias (name-alias)
    } = personInfo;



    // array destructuring
    const myFriends = ["Fahim", "Nahid", "Rasel", "Karib", "Imtiaz", "Masud"]

    const [, , third, ...rest] = myFriends; // here I am destructuring the array. First tow comma (,) will skip the first two names. Then I will the get the third value as 'third' and other names will be in an array for rest operator.

}