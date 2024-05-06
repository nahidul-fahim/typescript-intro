{
    // getter
    class BankAccount {
        public readonly id: number;
        public name: string;
        private _balance: number;
        protected _fixedDeposit: number;

        constructor(id: number, name: string, balance: number, fixedDeposit: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
            this._fixedDeposit = fixedDeposit;
        }

        /*
        addDeposit(amount: number) {
            this._balance = this._balance + amount;
        }
        */
        // same functionality using 'set'
        set addDeposit(amount: number) {
            this._balance = this._balance + amount;
        }

        // using 'get'
        get myBalance() {
            return this._balance;
        }

    }

    // creating instance
    const account1 = new BankAccount(154, "Nahid", 10000, 6700);


    // accessing from 'get'
    const myTotalBalance = account1.myBalance;
    console.log(myTotalBalance);


    // account1.addDeposit(2000); // old method using function
    // set modifier
    account1.addDeposit = 5000;









}