function salaryDetails(basicSalary) {
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
    
    console.log(`Basic Salary: ${basicSalary}`);
    console.log(`DA: ${DA}`);
    console.log(`HRA: ${HRA}`);
    console.log(`PF: ${PF}`);
    console.log(`Net Salary: ${netSalary}`);
}

let salary = parseFloat(prompt("Enter the basic salary: "));
salaryDetails(salary);
