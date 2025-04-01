//  auther mohammed
//  date 22/3/25

// Implement a program that takes basic salary as input. Calculate and print Basic Salary,
//  DA, HRA, PF, and Net Salary with the following rules.
//
//  If the Basic Salary is less than 10000
//   then DA is 25% of the Basic Salary. HRA is 30% of Basic Salary. PF is 8% of the Basic Salary.

//   If the Basic Salary is in between 10000 and 20000 then DA is 20% of the Basic Salary.
//    HRA is 25% of Basic Salary. PF is 6% of the Basic Salary.

//     If the Basic Salary is in between 20000 and 30000 then DA is 15% of the Basic Salary.
//      HRA is 20% of the Basic Salary. PF is 4% of the Basic Salary.

//       If the Basic Salary is greater than or equal to 30000 then DA is 10% of the Basic Salary.
//       HRA is 15% of Basic Salary. PF is 2% of the Basic Salary.

//        Net Salary is the total of Basic Salary, DA, and HRA and subtract the PF.

let amnt = 25000;

if (amnt <= 10000) {
  let DA = (25 * amnt) / 100;
  let HRA = (30 * amnt) / 100;
  let PF = (8 * amnt) / 100;

  let n = DA + HRA;

  let total = amnt + n - PF;

  console.log("DA is" + -DA);
  console.log("HRA is" + -HRA);
  console.log("PF is" + -PF);

  console.log("net salery is" + -total);
} 
else if (amnt >= 10000 && amnt <= 20000) {
  let DA = (20 * amnt) / 100;
  let HRA = (25 * amnt) / 100;
  let PF = (6 * amnt) / 100;

  let n = DA + HRA;

  let total = amnt + n - PF;

  console.log("DA is" + -DA);
  console.log("HRA is" + -HRA);
  console.log("PF is" + -PF);
  console.log("net salery is" + -total);
} 
else if (amnt >= 20000 && amnt <= 30000) {
  let DA = (15 * amnt) / 100;
  let HRA = (20 * amnt) / 100;
  let PF = (4 * amnt) / 100;

  let n = DA + HRA;

  let total = amnt + n - PF;

  console.log("DA is" + -DA);
  console.log("HRA is" + -HRA);
  console.log("PF is" + -PF);
  console.log("net salery is" + -total);
} 
else if (amnt >= 30000) {
  let DA = (10 * amnt) / 100;
  let HRA = (15 * amnt) / 100;
  let PF = (2 * amnt) / 100;

  let n = DA + HRA;

  let total = amnt + n - PF;

  console.log("DA is" + -DA);
  console.log("HRA is" + -HRA);
  console.log("PF is" + -PF);

  console.log("net salery is" + -total);
}
