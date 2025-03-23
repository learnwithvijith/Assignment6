// Implement a program that takes basic salary as input. Calculate and print Basic Salary, DA, HRA, PF, and Net Salary with the following rules.//  If the Basic Salary is less than 10000 then DA is 25% of the Basic Salary. 
// // HRA is 30% of Basic Salary. PF is 8% of the Basic Salary. If the Basic Salary is in between 10000 and 20000 then DA is 20% of the Basic Salary. 
// HRA is 25% of Basic Salary. PF is 6% of the Basic Salary. If the Basic Salary is in between 20000 and 30000 then DA is 15% of the Basic Salary. 
// HRA is 20% of the Basic Salary. PF is 4% of the Basic Salary.If the Basic Salary is greater than or equal to 30000 then DA is 10% of the Basic Salary.
//HRA is 15% of Basic Salary. PF is 2% of the Basic Salary.Net Salary is the total of Basic Salary, DA, and HRA and subtract the PF.

const basicsalary = 1000
let DA, HRA, PF, netSalary

switch (true) {
    case (basicsalary <= 10000):
        DA = basicsalary *25/100
        HRA = basicsalary*30/100
        PF =basicsalary*8/100
        break;

    case (basicsalary >= 10000 && basicsalary <= 20000):
        DA = basicsalary *20/100
        HRA = basicsalary*25/100
        PF =basicsalary*6/100
        break;

    case (basicsalary >= 20000 && basicsalary <= 30000):
        DA = basicsalary *15/100
        HRA = basicsalary*20/100
        PF =basicsalary*4/100
        break;

    case (basicsalary >= 30000):
        DA = basicsalary *10/100
        HRA = basicsalary*15/100
        PF =basicsalary*2/100
        
        break;
}

netSalary = basicsalary + PF + HRA + DA

console.log("Basic salary", basicsalary)
console.log("DA", DA)
console.log("HRA", HRA)
console.log("Net Salary", netSalary)
