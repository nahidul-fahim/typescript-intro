{
    // access modifier
    class BankAccount {
        public readonly id: number;
        public name: string;
        private _balance: number; // As it is private now, so we can't change the balance number out of this class. [NOTE: It is a convention to add '_' before private property. We should follow this.]

        // this private property isn't visible outside of this class. Sp, if we create a child instance from this 'BankAccount' class, then we cannot find the 'private' property there. To avoid this we can use 'protected' keyword to get the property in child instance.
        protected _fixedDeposit: number;

        constructor(id: number, name: string, balance: number, fixedDeposit: number) {
            this.id = id;
            this.name = name;
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
    const account1 = new BankAccount(154, "Nahid", 10000, 6700);
    // account1.balance = 0 // It will not work here. As, the 'balance' property is private.
    // Instead to change the balance, what we can call the addDeposit function.
    account1.addDeposit(2000);
    console.log(account1.getBalance());








}