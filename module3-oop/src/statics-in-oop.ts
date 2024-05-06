{
    // static
    class Counter {
        count: number = 0;
        increment() {
            return (this.count = this.count + 1)
        }
        decrement() {
            return (this.count = this.count - 1)
        }
    }

    // creating instance
    const instance1 = new Counter();
    console.log(instance1.increment()); // This is tracking different memory than instance2

    const instance2 = new Counter();
    console.log(instance2.decrement()); // This is tracking different memory than instance1

    //==================================//

    // As the both instance are tracking different memory, so if we want to track them in the same memory (statically) then we can rewrite the code as the following.

    class Counter1 {
        static count: number = 0;
        static increment1() {
            return Counter1.count = Counter1.count + 1 // when we declare static property, we cannot use 'this' keyword anymore
        }
        static decrement1() {
            return (Counter1.count = Counter1.count - 1)
        }
    }

    // creating instance
    // const instance3 = new Counter1(); // we don't have to make instance anymore while working with 'static' keyword
    console.log(Counter1.increment1())

    // const instance4 = new Counter1();
    console.log(Counter1.decrement1()); // This is tracking different memory than instance1












}