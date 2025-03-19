const employee = {
    name:"harriet",
    streetAddress:"11 Broadway",
};

function updateEmployeeWithKeyAndValue(employee,key,value){
    return{
    ...employee,
    [key]:value,
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value;
    return employee;
}
function deleteFromEmployeeByKey(employee,key){
    let newEmployee = {...employee};
    delete newEmployee [key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(Employee,key){
    delete Employee [key];
    return Employee;
}

const updatedEmployee = updateEmployeeWithKeyAndValue(employee,"name","sam")
const updatedEmployeeaddress = destructivelyUpdateEmployeeWithKeyAndValue(updatedEmployee, "streetAddress", "12 Broadway");
const newEmployee = deleteFromEmployeeByKey( employee,"sam");
const updatedNewEmployee = destructivelyUpdateEmployeeWithKeyAndValue (employee,"sam");
console.log(updatedNewEmployee);


