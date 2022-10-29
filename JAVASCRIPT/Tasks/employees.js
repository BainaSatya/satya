

// ****************** employee1 ******************************
function employee1(data) {
  function employeeDetails1() {
    const details = ["name : A", "id : 1", "mobile : 123", "exp : 2 yrs"];
    console.log("employee1 details : ");
    data();
    console.log(details);
  }
  return employeeDetails1;
}
// ****************** employee2 ******************************
function employee2(data) {
  function employeeDetails2() {
    const details = ["name : B", "id : 2", "mobile : 234", "exp : 3 yrs"];
    console.log("employee2 details : ");
    data();
    console.log(details);
  }
  return employeeDetails2;
}
// ****************** employee3 ******************************

function employee3(data) {
  function employeeDetails3() {
    const details = ["name : C", "id : 3", "mobile : 345", "exp : 4 yrs"];
    console.log("employee3 details : ");
    data();
    console.log(details);
  }
  return employeeDetails3;
}
// ****************** employee4 ******************************

function employee4(data) {
  function employeeDetails4() {
    const details = ["name : D", "id : 4", "mobile : 456", "exp : 1 yr"];
    console.log("employee4 details : ");
    data();
    console.log(details);
  }
  return employeeDetails4;
}
// ************** Main Function **********************
function employeeData() {
  console.log("INKPROG");
}
// ****************  Closure   ***********************
const Data1 = employee1(employeeData);
const Data2 = employee3(employeeData);
Data1();    // employee1 data
Data2();    // employee3 data
