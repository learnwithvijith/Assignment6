let basicSalary = 25000; 
let DA = 0, HRA = 0, PF = 0;


if (basicSalary < 10000) {
    DA = 0.25 * basicSalary;
    HRA = 0.30 * basicSalary;
    PF = 0.08 * basicSalary;
} else if (basicSalary >= 10000 && basicSalary < 20000) {
    DA = 0.20 * basicSalary;
    HRA = 0.25 * basicSalary;
    PF = 0.06 * basicSalary;
} else if (basicSalary >= 20000 && basicSalary < 30000) {
    DA = 0.15 * basicSalary;
    HRA = 0.20 * basicSalary;
    PF = 0.04 * basicSalary;
} else {
    DA = 0.10 * basicSalary;
    HRA = 0.15 * basicSalary;
    PF = 0.02 * basicSalary;
}


let netSalary = basicSalary + DA + HRA - PF;

console.log("Basic Salary:", basicSalary);
console.log("DA (Dearness Allowance):", DA);
console.log("HRA (House Rent Allowance):", HRA);
console.log("PF (Provident Fund):", PF);
console.log("Net Salary:", netSalary);
