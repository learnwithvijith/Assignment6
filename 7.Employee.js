let basicSalary = 25000, DA, HRA, PF, netSalary
if (basicSalary < 10000) {
    DA = 25/100 * basicSalary
    HRA = 30/100 * basicSalary
    PF = 8/100 * basicSalary
} 
else if (basicSalary >= 10000 && basicSalary < 20000) {
    DA = 20/100 * basicSalary
    HRA = 25/100 * basicSalary
    PF = 6/100 * basicSalary
} 
else if (basicSalary >= 20000 && basicSalary < 30000) {
    DA = 15/100 * basicSalary
    HRA = 20/100 * basicSalary
    PF = 4/100 * basicSalary
} 
else {  
    DA = 10/100 * basicSalary
    HRA = 15/100 * basicSalary
    PF = 2/100 * basicSalary
}
netSalary = basicSalary + DA + HRA - PF
console.log("Basic Salary: ", basicSalary)
console.log("DA: ", DA)
console.log("HRA: ", HRA)
console.log("PF: ", PF)
console.log("Net Salary: ", netSalary)