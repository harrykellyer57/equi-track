/*  sophisticated_code.js */

// This code is a simulation of a virtual banking system
// It includes features like creating accounts, performing transactions, and generating reports

// Class to represent a Bank Account
class BankAccount {
  constructor(accountNumber, accountHolder, accountBalance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.accountBalance = accountBalance;
  }

  // Method to deposit money into the account
  deposit(amount) {
    if (amount > 0) {
      this.accountBalance += amount;
      console.log("Deposit successful.");
    } else {
      console.log("Invalid deposit amount.");
    }
  }

  // Method to withdraw money from the account
  withdraw(amount) {
    if (amount <= this.accountBalance) {
      this.accountBalance -= amount;
      console.log("Withdrawal successful.");
    } else {
      console.log("Insufficient funds.");
    }
  }
}

// Class to represent a Virtual Bank
class VirtualBank {
  constructor(bankName) {
    this.bankName = bankName;
    this.accounts = [];
  }

  // Method to create a new account
  createAccount(accountNumber, accountHolder, initialDeposit) {
    if (!this.getAccountByNumber(accountNumber)) {
      const newAccount = new BankAccount(accountNumber, accountHolder, initialDeposit);
      this.accounts.push(newAccount);
      console.log("Account created successfully.");
    } else {
      console.log("Account number already exists.");
    }
  }

  // Method to get an account by its account number
  getAccountByNumber(accountNumber) {
    return this.accounts.find((account) => account.accountNumber === accountNumber);
  }

  // Method to perform a transfer between two accounts
  performTransfer(senderAccountNumber, receiverAccountNumber, amount) {
    const senderAccount = this.getAccountByNumber(senderAccountNumber);
    const receiverAccount = this.getAccountByNumber(receiverAccountNumber);

    if (!senderAccount) {
      console.log("Sender account not found.");
      return;
    }

    if (!receiverAccount) {
      console.log("Receiver account not found.");
      return;
    }

    if (senderAccount.accountBalance < amount) {
      console.log("Insufficient funds in the sender account.");
      return;
    }

    senderAccount.withdraw(amount);
    receiverAccount.deposit(amount);
    console.log("Transfer successful.");
  }

  // Method to generate a report of all accounts and their balances
  generateAccountReport() {
    console.log("Account Report");
    console.log("--------------");
    this.accounts.forEach((account) => {
      console.log(`Account Number: ${account.accountNumber}`);
      console.log(`Account Holder: ${account.accountHolder}`);
      console.log(`Account Balance: ${account.accountBalance}`);
      console.log("--------------");
    });
  }
}

// Create a new virtual bank instance
const bank = new VirtualBank("My Virtual Bank");

// Create some accounts
bank.createAccount(1001, "John Doe", 5000);
bank.createAccount(1002, "Jane Smith", 10000);
bank.createAccount(1003, "Bob Johnson", 7500);

// Perform transactions
bank.performTransfer(1001, 1002, 2500);
bank.performTransfer(1003, 1001, 500);
bank.performTransfer(1002, 1003, 3000);

// Generate the account report
bank.generateAccountReport();