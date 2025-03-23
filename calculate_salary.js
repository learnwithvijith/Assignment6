// 7. Implement a program that takes basic salary as input. Calculate and print Basic Salary, DA, HRA, PF, and Net Salary with the following rules. If the Basic Salary is less than 10000 then DA is 25% of the Basic Salary. HRA is 30% of Basic Salary. PF is 8% of the Basic Salary. If the Basic Salary is in between 10000 and 20000 then DA is 20% of the Basic Salary. HRA is 25% of Basic Salary. PF is 6% of the Basic Salary. If the Basic Salary is in between 20000 and 30000 then DA is 15% of the Basic Salary. HRA is 20% of the Basic Salary. PF is 4% of the Basic Salary. If the Basic Salary is greater than or equal to 30000 then DA is 10% of the Basic Salary. HRA is 15% of Basic Salary. PF is 2% of the Basic Salary. Net Salary is the total of Basic Salary, DA, and HRA and subtract the PF.

let basicSalary = 15000

let da = 0  
let hra = 0  
let pf = 0  
let netSalary = 0  

if (basicSalary < 10000) {  
    da = basicSalary * 0.25  
    hra = basicSalary * 0.30  
    pf = basicSalary * 0.08  
} else if (basicSalary >= 10000 && basicSalary < 20000) {  
    da = basicSalary * 0.20  
    hra = basicSalary * 0.25  
    pf = basicSalary * 0.06  
} else if (basicSalary >= 20000 && basicSalary < 30000) {  
    da = basicSalary * 0.15  
    hra = basicSalary * 0.20  
    pf = basicSalary * 0.04  
} else {  
    da = basicSalary * 0.10  
    hra = basicSalary * 0.15  
    pf = basicSalary * 0.02  
}  

netSalary = (basicSalary + da + hra) - pf  

console.log("Basic Salary:", basicSalary)  
console.log("DA:", da)  
console.log("HRA:", hra)  
console.log("PF:", pf)  
console.log("Net Salary:", netSalary)  
