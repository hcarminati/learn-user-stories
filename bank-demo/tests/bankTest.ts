import Bank from '../src/bank'
console.log("test")
// Check Account Balance User Story
//setup
const bank = new Bank();

//scenario 1: Successfully create a bank account
const acc = bank.createAccount('Jane Doe', 25, '123456');
if(acc.accountNumber === '123456'){
    console.log('✓ Create a bank account passed.')
} else {
    console.log('x Create a bank account failed')
}

//scenario 2: Attempt to create a duplicate bank account
try {
    bank.createAccount('Jane Doe', 25, '123456');
    console.log('x Create a duplicate bank account failed');
}
catch (_) {
    console.log('✓ Create a duplicate bank account passed.');
}

// Deposit Money User Story

// Scenario 1: Successfully deposit money into an existing account
try {
    bank.depositMoney(100, '123456');
    console.log('✓ Deposit money passed.');
} catch (error) {
    console.log('x Deposit money failed.');
}

// Scenario 2: Try to deposit a negative amount
try {
    bank.depositMoney(-100, '123456');
    console.log('x Deposit negative amount scenario failed.');
} catch (error) {
    console.log('✓ Deposit negative amount scenario passed.');
}

// Scenario 3: Try to deposit into a non-existent account
try {
    bank.depositMoney(100, '999999');
    console.log('x Deposit to non-existent account scenario failed.');
} catch (error) {
    console.log('✓ Deposit to non-existent account scenario passed.');
}

// Withdraw Money User Story

// Scenario 1: Successfully withdraw money from an existing account
try {
    bank.withdrawMoney(10, '123456');
    console.log('✓ Withdraw money passed.');
} catch (error) {
    console.log('x Withdraw money failed.');
}

// Scenario 2: Attempt to withdraw money with insufficient funds
try {
    bank.withdrawMoney(999, '123456');
    console.log('x Withdraw insufficient money failed.');
} catch (error) {
    console.log('✓ Withdraw insufficient money passed.');
}


// Scenario 3: Attempt to withdraw invalid amount
try {
    bank.withdrawMoney(-999, '123456');
    console.log('x Withdraw invalid amount failed.');
} catch (error) {
    console.log('✓ Withdraw invalid amount money passed.');
}

// Scenario 4: Try to withdraw into a non-existent account
try {
    bank.depositMoney(100, '999999');
    console.log('x Withdraw from non-existent account scenario failed.');
} catch (error) {
    console.log('✓ Withdraw from non-existent account scenario passed.');
}

// Check Account Balance User Story

// Scenario 1: Successfully check balance of account
const acc_2 = bank.createAccount('John Smith', 30, '000');
try {
    const bal = bank.checkBalance('000');
    if(bal == acc_2.balance) {
        console.log('✓ Withdraw money passed.');
    } else {
        console.log('x Withdraw money failed.');
    }
} catch (error) {
    console.log('x Withdraw money failed.');
}

// Scenario 2: Check Balance of Invalid Account
try {
    bank.checkBalance('99999');
    console.log('x Check balance of invalid account failed.');
} catch (error) {
    console.log('✓ Check balance of invalid account passed.');
}