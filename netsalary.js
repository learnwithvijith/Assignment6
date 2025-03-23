let basicsalary = 20000
let DA, HRA, PF, netsalary

if(basicsalary<10000)
{DA= 0.25* basicsalary
HRA = 0.30* basicsalary
PF =  0.08* basicsalary
}

else if(basicsalary> 10000 &&basicsalary<20000 )
    {DA= 0.20* basicsalary
     HRA = 0.25* basicsalary
     PF =  0.06* basicsalary
        }

       
        else if(basicsalary>=20000 &&basicsalary<30000 )
            {DA= 0.15* basicsalary
             HRA = 0.20* basicsalary
             PF =  0.04* basicsalary
                }  

                else{DA= 0.10* basicsalary
                    HRA = 0.15* basicsalary
                    PF =  0.02* basicsalary
                       }  
       
               
                
netsalary =basicsalary+DA+HRA-PF

console.log("basicsalary",basicsalary)
console.log("DA", DA)
console.log("HRA", HRA)
console.log("PF", PF)
console.log("netsalary", netsalary)