
let basicSalary = 25000

let DA ,HRA ,PF ,NetSalary

if(basicSalary<10000){

    DA = 0.25* basicSalary
    HRA = 0.30* basicSalary
    PF = 0.8* basicSalary
}else if(basicSalary> 10000 && basicSalary<20000){
    
    DA = 0.20* basicSalary
    HRA = 0.25* basicSalary
    PF = 0.6* basicSalary

}else if(basicSalary> 20000 && basicSalary<30000){

    DA = 0.15* basicSalary
    HRA = 0.20* basicSalary
    PF = 0.04* basicSalary

}else{

    DA = 0.10* basicSalary
    HRA = 0.15* basicSalary
    PF = 0.02* basicSalary

}


    

    

NetSalary=basicSalary+DA+HRA-PF
console.log('BasicSalary', basicSalary)
console.log('DA', DA)
console.log('HRA', HRA)
console.log('PF', PF)
console.log('NetSalary', NetSalary)
