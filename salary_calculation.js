function salaryCalculation(sal){
    let bsal = sal;
    let  DA, HRA, PF, nsal;

    if(bsal < 10000){
        DA = 0.25*bsal;
        HRA = 0.30*bsal;
        PF = 0.08*bsal;
    } else if(bsal >= 10000 && bsal < 20000){
        DA = 0.20*bsal;
        HRA = 0.25*bsal;
        PF = 0.06*bsal;
    } else if(bsal >= 20000 && bsal < 30000){
        DA = 0.15*bsal;
        HRA = 0.20*bsal;
        PF = 0.04*bsal;
    } else{
        DA = 0.10*bsal;
        HRA = 0.15*bsal;
        PF = 0.02*bsal;
    }
    let netSal = bsal + DA + HRA -PF;
    console.log("Basic Salary: ",bsal);
    console.log("DA: ",DA);
    console.log("HRA: ",HRA);
    console.log("PF: ",PF);
    console.log("Net Salary: ",netSal);
    
}
salaryCalculation(15000);
