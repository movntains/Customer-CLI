#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomers
} = require('./index');

// Questions for adding a new customer
const questions = [
  {
    type: 'input',
    name: 'firstName',
    message: 'Customer First Name:'
  },
  {
    type: 'input',
    name: 'lastName',
    message: 'Customer Last Name:'
  },
  {
    type: 'input',
    name: 'phone',
    message: 'Customer Phone Number:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Customer E-mail Address:'
  }
];

program
  .version('1.0.0')
  .description('Client Management System')

// Add customer command
program
  .command('add')
  .alias('a')
  .description('Add a customer')
  .action(() => {
    prompt(questions).then(answers => addCustomer(answers));
  });

// Find customer command
program
  .command('find <name>')
  .alias('f')
  .description('Find a customer')
  .action(name => findCustomer(name));

// Update customer command
program
  .command('update <_id>')
  .alias('u')
  .description('Update a customer')
  .action(_id => {
    prompt(questions).then(answers => updateCustomer(_id, answers));
});

// Remove customer command
program
  .command('remove <_id>')
  .alias('r')
  .description('Remove a customer')
  .action(_id => removeCustomer(_id));

// List all customers command
program
  .command('list')
  .alias('l')
  .description('List all customers')
  .action(() => listCustomers());

program.parse(process.argv);