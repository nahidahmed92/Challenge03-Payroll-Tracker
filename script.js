// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesData = [];

// Collect employee data
const collectEmployees = function () {
  // Get Employees First Name
  function getFirstName() {
    const firstName = prompt('Add First Name');

    if (firstName === null) {
      return;
    }
    while (!firstName) {
      alert('First Name field cannot be empty');
      return getFirstName();
    }
    return firstName.toUpperCase();
  }

  // Get Employees Last Name
  function getLastName(firstName) {
    if (firstName === undefined) {
      return;
    }

    const lastName = prompt('Add Last Name');
    if (lastName === null) {
      return;
    }
    while (!lastName) {
      alert('Last Name field cannot be empty');
      return getLastName(firstName);
    }
    return lastName.toUpperCase();
  }

  // Get Employees Salary
  function getSalary(firstName, lastName) {
    if (lastName === undefined) {
      return;
    }

    const salaryInput = prompt('Add Employee Salary');
    if (salaryInput === null) {
      return;
    }
    const salary = parseInt(salaryInput);

    while (!salary) {
      alert('Salary field cannot be empty or must be numerical');
      return getSalary(firstName, lastName);
    }
    // while (!parseInt(salary)) {
    //   alert('Salary field must be numerical');
    //   return getSalary(firstName, lastName);
    // }
    return salary;
  }

  // Initiate here to use this information in getAnother
  const firstName = getFirstName();
  const lastName = getLastName(firstName);
  const salary = getSalary(firstName, lastName);

  // Object with empty field to be pushed to table
  const newEmployee = {
    firstName,
    lastName,
    salary,
  };

  // Prompt to add another employee and push if first name, last name, and salary is entered
  function getAnother(firstName, lastName, salary) {
    if (salary === undefined) {
      return;
    }

    alert(`${lastName}, ${firstName} added successfully.`);
    const addAnother = confirm('Add Another Employee');
    if (addAnother === false) {
      return;
    } else {
      while (addAnother === true) {
        const firstName = getFirstName();
        const lastName = getLastName(firstName);
        const salary = getSalary(firstName, lastName);

        const newEmployee = {
          firstName,
          lastName,
          salary,
        };
        if (firstName && lastName && salary) {
          employeesData.push(newEmployee);
        }
        return getAnother(firstName, lastName, salary);
      }
    }
  }

  // Initiating getAnother and if all fields are entered then push
  getAnother(firstName, lastName, salary);
  if (firstName && lastName && salary) {
    employeesData.push(newEmployee);
  }

  return employeesData;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // Created a for statement to check employeeData length and add the sum
  let sum = 0;
  for (let i = 0; i < employeesData.length; i++) {
    sum += employeesData[i].salary;
  }

  // Get average
  const average = sum / employeesData.length;
  console.log(`The average employee salary between our ${employeesData.length} is ${average}`);
  return average;
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // Here I am using math.flor and math.random times employeeData length to get a random index number
  const randomEmployee = Math.floor(Math.random() * employeesData.length);
  const employee = `${employeesData[randomEmployee].firstName} ${employeesData[randomEmployee].lastName}`;
  console.log(`Congratulations to ${employee}, our random drawing winner!`);
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
