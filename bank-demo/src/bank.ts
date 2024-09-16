// This is a type for all bank accounts in the bank
interface BankAccount {
    name: string;
    age: number;
    accountNumber: string;
    balance: number;
}

/**
 * This class represent a simple bank with the ability to create new accounts
 */
export default class Bank {
    // This is a private field that holds all the accounts in the bank
    private accounts: BankAccount[] = [];

    /**
     *  This method checks if an account with the given account number exists
     * @param {string} -- accountNumber The account number to check
     * @returns {BankAccount | undefined} The account if it exists, otherwise undefined
     */
    private isAccountExists(accountNumber: string): BankAccount | undefined {
        return this.accounts.find(acc => acc.accountNumber == accountNumber);
    }

    /**
     * This method creates a new account with the given name, age and account
     * @param {string} -- name The name of the account holder
     * @param {number} -- age The age of the account holder
     * @param {string} -- accountNumber The account number of the account holder
     * @returns {BankAccount} -- The created account
     */
    public createAccount(name: string, age: number, accountNumber: string): BankAccount {
        const isAccExists = this.isAccountExists(accountNumber);
        if (isAccExists) {
            throw new Error('Account already exists');
        }
        const account: BankAccount = { name, age, accountNumber, balance: 0 };
        this.accounts.push(account);
        return account;
    }

    /**
     * This method deposits money into account with the given amount and account
     * @param {number} -- depositAmount The amount of money to deposit
     * @param {string} -- accountNumber The account number of the account holder
     * @returns {BankAccount} -- The created account
     */
    public depositMoney(depositAmount: number, accountNumber: string): BankAccount {
        if (depositAmount <= 0) {
            throw new Error('Deposit amount must be greater than zero');
        }
        const account = this.isAccountExists(accountNumber);
        if (!account) {
            throw new Error('Account not found');
        }
        account.balance += depositAmount;
        return account;
    }
}