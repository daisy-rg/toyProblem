
function calculateNetSalary(basicSalary, benefits) {
  
    //tax deductions
    const taxRate = 0.2
    const nhifRate = 0.1
    const nssfRate = 0.2
  
    //GrossSalary calculation by basic salary and benefits addition
    const grossSalary = basicSalary + benefits;

    const tax = grossSalary * taxRate; //tax deduction calculation from grossalary
    const nhif = grossSalary * nhifRate;//NHIF tax calculation from grossSalry
    const nssf = grossSalary * nssfRate;//NSSF tax decduction 
  

    const netSalary = grossSalary - (tax + nhif + nssf);
  
    return {
      grossSalary,
      tax,
      nhif,
      nssf,
      netSalary};
     }