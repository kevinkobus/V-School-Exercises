var employees = []

function Employee (name, jobTitle, salary, status) {
  this.name = name;
  this.jobTitle = jobTitle;
  this.salary = salary;
  this.status = status;
  
  // const printEmployeeForm = function() {
  //   console.log(function(name, jobTitle, salary, status))
  // }
}

var george = new Employee("George", "1st President", 25000, "Full Time")
var teddy = new Employee("Teddy", "26th President", 50000, "Full Time")
var john = new Employee("John F Kennedy", "35th President", 100000, "Full Time")