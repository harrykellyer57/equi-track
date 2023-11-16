// Filename: complex_app_code.js

// This code implements a sophisticated customer management application
// It stores customer information, allows for searching and sorting, and generates reports.

class Customer {
  constructor(id, name, email, phone) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  getInfo() {
    return `ID: ${this.id}\nName: ${this.name}\nEmail: ${this.email}\nPhone: ${this.phone}`;
  }
}

class CustomerManagementApp {
  constructor() {
    this.customers = [];
  }

  addCustomer(name, email, phone) {
    const id = this.customers.length + 1;
    const customer = new Customer(id, name, email, phone);
    this.customers.push(customer);
    console.log(`New customer "${customer.name}" added with ID ${customer.id}`);
  }

  searchCustomerByName(name) {
    const results = this.customers.filter(customer => customer.name.toLowerCase().includes(name.toLowerCase()));
    console.log(`Search results for name "${name}":`);
    results.forEach(customer => console.log(customer.getInfo()));
    console.log(`Found ${results.length} customer(s)`);
  }

  sortCustomersByName() {
    this.customers.sort((a, b) => a.name.localeCompare(b.name));
    console.log('Customers sorted by name:');
    this.customers.forEach(customer => console.log(customer.getInfo()));
  }

  generateReport() {
    console.log('Customer Report:');
    this.customers.forEach(customer => console.log(customer.getInfo()));
    console.log(`Total customers: ${this.customers.length}`);
  }
}

// Usage example:

const app = new CustomerManagementApp();

app.addCustomer('John Doe', 'johndoe@example.com', '1234567890');
app.addCustomer('Jane Smith', 'janesmith@example.com', '0987654321');
app.addCustomer('Mike Johnson', 'mikejohnson@example.com', '5678901234');

app.searchCustomerByName('john');

app.sortCustomersByName();

app.generateReport();