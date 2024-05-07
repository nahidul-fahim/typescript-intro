{
    // Abstraction
    /* In TypeScript, abstraction refers to the concept of hiding the implementation details of a piece of code, exposing only the necessary functionality to the outside world. This allows for building more modular, maintainable, and scalable codebase. */

    // Abstraction can be don in two ways.
    // 1. Using interface 2. Using 'abstract' class

    // Here we will get some idea only
    interface Vehicle1 {
        // Here we are not getting any ideas about the functions here. For example, we are getting no idea about the return from those functions.
        startEngine(): void
        stopEngine(): void
        move(): void
    };

    // Real implementation will be here
    class Car implements Vehicle1 {
        startEngine(): void {
            console.log('I am starting the car engine')
        }
        stopEngine(): void {
            console.log('I am stopping the car engine')
        }
        move(): void {
            console.log('I am moving the car')
        }
        // if we want, we can more classes
        test(): void {
            console.log('I am testing the car')
        }
    }

    // creating instance
    const toyotaCar = new Car();
    toyotaCar.stopEngine();


    //===========================================//

    // abstract class

    /*
    In TypeScript, an abstract class is a class that cannot be directly instantiated. It's designed to be used as a base class for other classes and may contain abstract methods, which are methods without a default implementation. Abstract classes allow us to define a common interface for a group of subclasses while providing some default behavior that those subclasses can inherit and override.
    */


    abstract class Vehicle2 {

        /*
        startEngine(): void {
            console.log('I am starting the car engine')
        } */
        // this is not possible in abstract class. As we will only get only idea from abstract class. No implementation here
        abstract startEngine(): void
        abstract stopEngine(): void
        abstract move(): void
    }

    // instance
    /*
    const hondaCar = new Vehicle2();
    hondaCar.test();
    */ // This instance creation is possible if don't use 'abstract' before the Vehicle2 class. [NOTE: We cannot crete instance from abstract class. But we can follow it.]


    // creating child class from Vehicle2
    class AudiCar extends Vehicle2 {
        startEngine(): void {
            console.log('I am starting the engine')
        }
        stopEngine(): void {
            console.log('I am stopping the engine')
        }
        move(): void {
            console.log('I am moving the car')
        }
    }












}