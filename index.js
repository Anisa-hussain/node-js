const readline = require('readline');

// Function to calculate earnings for a specific day
function calculateEarningsForSpecificDay(year, month, day, monthlySalary) {
    const date = new Date(year, month - 1, day);
    
    // Check if the day is a Friday (Friday is 5 in JavaScript)
    if (date.getDay() === 5) {
        return 0;
    }

    // Get the total number of days in the month
    const daysInMonth = new Date(year, month, 0).getDate();
    
    // Calculate how many Fridays are in the month
    let fridays = 0;
    for (let d = 1; d <= daysInMonth; d++) {
        const tempDate = new Date(year, month - 1, d);
        if (tempDate.getDay() === 5) {
            fridays++;
        }
    }
    
    // Calculate the total number of working days (excluding Fridays)
    const workingDays = daysInMonth - fridays;
    
    // Calculate the daily earnings
    const dailyEarnings = monthlySalary / workingDays;
    
    // Return the earnings for the specific day
    return dailyEarnings;
}

// Setup readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Main function to get input and calculate earnings
function main() {
    rl.question("Enter the year (e.g., 2024): ", (yearInput) => {
        const year = parseInt(yearInput);
        
        rl.question("Enter the month (e.g., 10 for October): ", (monthInput) => {
            const month = parseInt(monthInput);
            
            rl.question("Enter the day (e.g., 10): ", (dayInput) => {
                const day = parseInt(dayInput);
                const monthlySalary = 435;  // Monthly salary is fixed at $435
                
                // Calculate the earnings for the specific day
                const earnings = calculateEarningsForSpecificDay(year, month, day, monthlySalary);
                
                if (earnings === 0) {
                    console.log(`The employee does not earn anything on ${day}/${month}/${year} (it's a Friday).`);
                } else {
                    console.log(`The earnings for the employee on ${day}/${month}/${year} is: $${earnings.toFixed(2)}`);
                }
                
                rl.close();
            });
        });
    });
}

// Start the program
main();
