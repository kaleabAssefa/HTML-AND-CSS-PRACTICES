let employee= {
name:"Sabin",
dept:"IT",
salary: 10000,
id:101
}

employee.salary = 22000;

employee.city = "New York";

delete employee.dept;

console.log("Updated Employee:", employee);

console.log(Object.keys(employee));

console.log(Object.values(employee));
 
 console.log(Object.entries(employee));
 
 console.log(employee.hasOwnProperty("dept"));
