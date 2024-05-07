{
    // encapsulation

    /*
    In TypeScript, encapsulation is a principle of object-oriented programming that involves bundling the data (properties) and the methods (functions) that operate on the data within a single unit, typically called a class. Encapsulation helps in hiding the internal state of an object and restricting direct access to it from outside the class. This way, the internal implementation details are hidden and can only be accessed through well-defined interfaces provided by the class.

    We can use 'protected' 'private' to do the encapsulation
    */


    // access modifier
    class BankAccount {
        private _balance: number; // As it is private now, so we can't change the balance number out of this class. [NOTE: It is a convention to add '_' before private property. We should follow this.]

        // this private property isn't visible outside of this class. Sp, if we create a child instance from this 'BankAccount' class, then we cannot find the 'private' property there. To avoid this we can use 'protected' keyword to get the property in child instance.
        protected _fixedDeposit: number;

        constructor(balance: number, fixedDeposit: number) {
            this._balance = balance;
            this._fixedDeposit = fixedDeposit;
        }

        addDeposit(amount: number) {
            this._balance = this._balance + amount;
        }

        getBalance() {
            return this._balance;
        }

    }

    // creating instance
    const account1 = new BankAccount(10000, 6700);
    // account1.balance = 0 // It will not work here. As, the 'balance' property is private.
    // Instead to change the balance, what we can call the addDeposit function.
    account1.addDeposit(2000);
    console.log(account1.getBalance());

















}