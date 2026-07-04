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

const box = document.getElementById("announcement-box");
const box2 = document.getElementById("new-announcement-box")
const button = document.getElementById("update-btn");
//const button = document.getElementById("update-btn2");


button.addEventListener("click", () => {


    const newElement = document.createElement("h1");

   
    newElement.innerText = "JS Practice";


    newElement.style.color = "black";
    newElement.style.background = "red";
    newElement.style.fontSize = "100px";
    newElement.style.textAlign = "center";
    newElement.style.display = "block";


    box.appendChild(newElement);
});

const newButton = document.getElementById("update-btn2");
newButton.addEventListener("click", () => {
    newButton.style.color = "white";
    newButton.style.backgroundColor = "blue";
    pushButton.innerHTML = "Greetings"

})

