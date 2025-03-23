//  Implement a program that takes basic salary as input. Calculate and print Basic Salary, DA, HRA, PF, 
// and Net Salary with the following rules. If the Basic Salary is less than 10000 then DA is 25% 
// of the Basic Salary. HRA is 30% of Basic Salary. PF is 8% of the Basic Salary. If the Basic Salary 
// is in between 10000 and 20000 then DA is 20% of the Basic Salary. HRA is 25% of Basic Salary. 
// PF is 6% of the Basic Salary. If the Basic Salary is in between 20000 and 30000 then DA is 15% of the Basic Salary.
//  HRA is 20% of the Basic Salary. PF is 4% of the Basic Salary. If the Basic Salary is greater than or equal to 30000 
// then DA is 10% of the Basic Salary. HRA is 15% of Basic Salary. 
// PF is 2% of the Basic Salary. Net Salary is the total of Basic Salary, DA, and HRA and subtract the PF.



let basicSalary = 25000;
let DA, HRA, PF;
if (basicSalary < 10000) {
    DA = basicSalary * 0.25;
    HRA = basicSalary * 0.30;
    PF = basicSalary * 0.08;
} else if (basicSalary < 20000) {
    DA = basicSalary * 0.20;
    HRA = basicSalary * 0.25;
    PF = basicSalary * 0.06;
} else if (basicSalary < 30000) {
    DA = basicSalary * 0.15;
    HRA = basicSalary * 0.20;
    PF = basicSalary * 0.04;
} else {
    DA = basicSalary * 0.10;
    HRA = basicSalary * 0.15;
    PF = basicSalary * 0.02;
}
let netSalary = basicSalary + DA + HRA - PF;
console.log("Net Salary:", netSalary);
