// 1. Let's build a Teacher interface
// Creating Teacher Interface
interface Teacher {
  readonly firstName: string;      
  readonly lastName: string;       
  fullTimeEmployee: boolean;       
  yearsOfExperience?: number;      
  location: string;             
  [key: string]: any;              
}

// Using the Teacher Interface
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // extra property allowed
};

console.log(teacher3);

// Add teacher to an array
const teacherList: Teacher[] = [teacher3];

// Render a table
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

// Loop through teacher3 and create rows
teacherList.forEach((teacher3) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = teacher3.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = teacher3.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);


// 2. Extending the Teacher class
// Extending the Teacher Interface
interface Director extends Teacher {
  numberOfReports: number; // new required property
}

// Using the Directors Interface
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);


// 3. Printing teachers
// Print Teacher Function Interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implementing the Print Teacher Function
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

// Example usage
console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // J. Doe


// 4. Writing a class
// Defining the constructor interface
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Defining the class interface
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Creating the StudentClass
class StudentClass {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass({ firstName: "John", lastName: "Doe" });
console.log(student.displayName());   // John
console.log(student.workOnHomework()); // Currently working

