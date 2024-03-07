// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesData = [];

//confirm uses true for okay and false for cancel

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  function getFirstName() {
    const firstName = prompt('Add First Name').toUpperCase();
    if (firstName === null) {
      console.log('Cancel Prompt');
      return;
    }
    while (!firstName) {
      alert('First Name field cannot be empty');
      const firstName = prompt('Add First Name').toUpperCase();
      console.log('in while loop - ', firstName);
      if (firstName) {
        console.log('in if statement - ', firstName);
        return firstName;
      }
    }
    return firstName;
  }

  function getLastName() {
    const lastName = prompt('Add Last Name').toUpperCase();
    if (lastName === null) {
      console.log('Cancel Prompt');
      return;
    }
    while (!lastName) {
      alert('Last Name field cannot be empty');
      const lastName = prompt('Add Last Name').toUpperCase();
      console.log('in while loop - ', lastName);
      if (lastName) {
        console.log('in if statement - ', lastName);
        return lastName;
      }
    }
    return lastName;
  }

  function getSalary() {
    const salary = prompt('Add Employee Salary');
    if (salary === null) {
      console.log('Cancel Prompt');
      return;
    }
    while (!salary) {
      alert('Salary field cannot be empty');
      const salary = prompt('Add Employee Salary');
      console.log('in while loop - ', salary);
      if (salary) {
        console.log('in if statement - ', salary);
        return salary;
      }
    }
    return salary;
  }

  function getAnother() {
    const addAnother = confirm('Add Another Employee');
    if (addAnother === false) {
      return;
    } else {
      while (addAnother === true) {
        const firstName = getFirstName();
        const lastName = getLastName();
        const salary = getSalary();

        const newEmployee = {
          firstName,
          lastName,
          salary,
        };

        employeesData.push(newEmployee);
        const addAnother = confirm('Add Another Employee');
        if (addAnother === false) {
          return;
        }
      }
    }
  }

  const firstName = getFirstName();
  const lastName = getLastName();
  const salary = getSalary();
  alert(`${lastName}, ${firstName} added successfully.`);
  console.log(`${lastName}, ${firstName} is making $${salary}/hr`);
  getAnother();

  const newEmployee = {
    firstName,
    lastName,
    salary,
  };

  employeesData.push(newEmployee);

  console.log(employeesData);
  return employeesData;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
