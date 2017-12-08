const mongoose = require('mongoose');

// Map to the global promise
mongoose.Promise = global.Promise;

// Connect to the database
const db = mongoose.connect('mongodb://localhost:27017/customercli', {
  useMongoClient: true
});

// Import the customer model
const Customer = require('./models/customer');

// Add customer
const addCustomer = (customer) => {
  Customer.create(customer).then(customer => {
    console.info('New customer added');
    db.close();
  });
}

// Find customer
const findCustomer = (name) => {
  // Make the name case-insensitive
  const search = new RegExp(name, 'i');
  Customer.find({$or: [{firstName: search}, {lastName: search}]})
    .then(customer => {
      console.info(customer);
      console.info(`${customer.length} matches`);
      db.close();
    });
}

// Update customer
const updateCustomer = (_id, customer) => {
  Customer.update({ _id }, customer)
    .then(customer => {
      console.info('Customer updated');
      db.close();
    });
}

// Remove customer
const removeCustomer = (_id) => {
  Customer.remove({ _id })
    .then(customer => {
      console.info('Customer removed');
      db.close();
    });
}

// List all customers
const listCustomers = () => {
  Customer.find()
    .then(customers => {
      console.info(customers);
      console.info(`${customers.length} customers`);
      db.close();
    });
}

// Export all methods
module.exports = {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomers
}