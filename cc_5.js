// Corporate Employees 

const employees = [
  { name: "Spongebob",   hourlyRate: 15,    hoursWorked: 40 },
  { name: "Patrick",         hourlyRate: 100,    hoursWorked: 40 },
  { name: "Squidward", hourlyRate: 40,    hoursWorked: 40},
  { name: "Sandy",      hourlyRate: 50,    hoursWorked: 45 },
  { name: "Krabs",  hourlyRate: 35,    hoursWorked: 40 }
];


function calculateBasePay(hourlyRate, hoursWorked) {
     let validHours;
     if (hoursWorked > 40) {
        validHours = 40;
     } else {
        validHours = hoursWorked;
     }
     return hourlyRate * validHours;
}

function calculateOvertimePay(hourlyRate, hoursWorked) {
  if (hoursWorked > 40) {
    const overtimeHours = hoursWorked - 40;
    return overtimeHours * hourlyRate * 1.5;
  }
  return 0;
}

function calculateTaxes(grossPay) {
    const taxRate = 0.15;
    return grossPay * taxRate;
}

function processPayroll(employees) {
    const basePay = calculateBasePay(employees.hourlyRate, employees.hoursWorked);
    const overtimePay = calculateOvertimePay(employees.hourlyRate, employees.hoursWorked);
    const grossPay = basePay + overtimePay;
    const netPay = grossPay - calculateTaxes(grossPay);

    return {
        name: employees.name,
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay: grossPay,
        netPay: netPay
    };

    }


employees.forEach(emp => {
    console.log(processPayroll(emp));
});