/**
 * Created by koyexes on 1/12/2017.
 */


var basicSalary = {
    'intern': 22000,
    'associate' : 30000,
    'manager' : 50000,
    'executive': 75000,
    'director': 100000
};
var taxRates = {
    'intern': 0.09,
    'associate' : 0.1,
    'manager' : 0.13,
    'executives': 0.18,
    'director': 0.25
};
var overtimeRate = {
    'intern': 1000,
    'associate' : 1500,
    'manager' : 2000,
    'executives': 2500,
    'director': 3000
};
var experienceBenefits = {
    'associate' : [1000, 1500, 2000, 2500],
    'manager' : [1500, 2000 , 2500, 3000],
    'executives': [2000, 2500, 3000, 3500],
    'director': [2500, 3000, 3500, 4000]
};

var salaryCalculator = (employeeName, employeeType, experience, overtimeHours) => {
    var output = {};
    var error = [];
    (employeeName === "") ? error.push("Employee name can't be empty") : output.employeeName = employeeName;
    (employeeType === "") ? error.push("Employee Type can't be empty") : output.employeeType = employeeType;
    (experience === "" ) ? error.push("Experience level can,t be empty") : output.experience = experience;
    (overtimeHours === "") ? error.push("Overtime hours can't be empty") : output.overtimeHours = overtimeHours;

    switch (error.length === 0 ) {
        case true:
            var overtimePay, tax, benefit, netSalary;
            overtimePay = overtimeHours * overtimeRate[employeeType];
            tax = basicSalary[employeeType] * taxRates[employeeType];
            benefit = experienceBenefits[employeeType][experience];
            netSalary = (basicSalary[employeeType] - tax) + overtimePay + benefit;
            output.basicSalary = basicSalary[employeeType];
            output.netSalary = netSalary;
            output.tax = tax;
            break;
        default:
            return {"error" : error };
            break;
    }

    return output;

}

module.exports = salaryCalculator;