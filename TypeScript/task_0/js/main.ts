interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Ali",
  lastName: "Ahmed",
  age: 20,
  location: "Riyadh",
};

const student2: Student = {
  firstName: "Sara",
  lastName: "Khan",
  age: 22,
  location: "Jeddah",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
document.body.appendChild(table);

// header
const header = document.createElement("tr");

const th1 = document.createElement("th");
th1.innerText = "First Name";

const th2 = document.createElement("th");
th2.innerText = "Location";

header.appendChild(th1);
header.appendChild(th2);
table.appendChild(header);

// rows
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstName = document.createElement("td");
  firstName.innerText = student.firstName;

  const location = document.createElement("td");
  location.innerText = student.location;

  row.appendChild(firstName);
  row.appendChild(location);

  table.appendChild(row);
});
