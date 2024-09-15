import Bank from '../src/bank'

// Check Account Balance User Story
//setup
const bank = new Bank();

//scenario 1: Successfully create a bank account
const acc = bank.createAccount('Jane Doe', 25, '123456');
if(acc.accountNumber == '123456'){
    console.log('scenario 1 passed.')
} else {
    console.log('scenario 1 failed')
}

//scenario 2: Attempt to create a duplicate bank account
try {
    bank.createAccount('Jane Doe', 25, '123456');
    console.log('scenario 2 failed');
}
catch (_) {
    console.log('Scenario 2 passed.');
}

