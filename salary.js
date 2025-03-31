function calculateSalary(basicSalary) {
    let da, hra, pf;

    
    if (basicSalary < 10000) {
        da = basicSalary * 0.25; 
        hra = basicSalary * 0.30; 
        pf = basicSalary * 0.08; 
    } else if 
    (basicSalary >= 10000 && basicSalary < 20000) {
        da = basicSalary * 0.20; 
        hra = basicSalary * 0.25;
        pf = basicSalary * 0.06; 
    } else if 
    (basicSalary >= 20000 && basicSalary < 30000) {
        da = basicSalary * 0.15; 
        hra = basicSalary * 0.20; 
        pf = basicSalary * 0.04; 
    } else {

        da = basicSalary * 0.10; 

        hra = basicSalary * 0.15; 
        
        pf = basicSalary * 0.02; 
    }

    let grossSalary = basicSalary + da + hra;
    let netSalary = grossSalary - pf;

    console.log("Basic Salary:", basicSalary);
    console.log("DA:", da)

    console.log("HRA:", hra)

    console.log("PF:", pf);
    console.log("Gross Salary:", grossSalary);
    
    console.log("Net Salary:", netSalary);
}


calculateSalary(25000);