"use strict";
{
    /*
    TOPICS: Spread operator, rest operator, destructuring
    */
    // spread operator
    const friends1 = ["Rasel", "Karib", "Imtiaz", "Masud"];
    const friends2 = ["Hasan", "Sahid"];
    friends1.push(...friends2);
    // spread operator in terms of object
    const mentors1 = {
        typescript: "Tinko",
        mongoose: "pinko",
        redux: "minko"
    };
    const mentors2 = {
        prisma: "zinko",
        docker: "tinda",
        postgresql: "minda"
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    /* This is the result for 'mentorList'
    {
     typescript: 'Tinko',
     mongoose: 'pinko',
     redux: 'minko',
     prisma: 'zinko',
     docker: 'tinda',
     postgresql: 'minda'
   }
    */
    // Rest operator
    const greetMessage = (...friends) => {
        // if we use a rest operator like that in parameter, then it will cause a problem for the number of parameter we are passing while invoking the function
        friends.forEach((friend) => console.log(`Hi there, ${friend}`)); // as friends here is an array, so I had to destructure it using forEach method
    };
    greetMessage("Abul", "Babul", "Kabul", "Sabul", "Pibul");
}
