{

    /*
    In JavaScript '||' = In TypeScript '|'
    In JavaScript '&&' = In TypeScript '&'
    */

    // Union types (|)
    type FrontendDeveloper = 'juniorDeveloper' | 'seniorDeveloper'; // here it is a string literal type as the values are acting as data-types. And there are two types. '|' - it is a union operator.

    const newDeveloper: FrontendDeveloper = "juniorDeveloper";


    // union operator in an object
    type User = {
        name: string;
        email: string;
        gender: 'male' | 'female'
    }

    const user1: User = {
        name: "Nahidul Islam",
        email: "nahid@fahim.com",
        gender: "male"
    }



    // Intersection (&)
    type FrontendDev = {
        skills: string[],
        designation1: 'Frontend Developer'
    }
    type BackendDev = {
        skills: string[],
        designation2: 'Backend Developer'
    }
    // intersection type
    type FullstackDeveloper = FrontendDev & BackendDev;

    // object with intersection type
    const fullStackDev: FullstackDeveloper = {
        skills: ["React", "Redux", "Express", "Node", "AWS"],
        designation1: "Frontend Developer",
        designation2: "Backend Developer",
    }









}