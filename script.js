// Select elements
const btn = document.getElementById("btn");
const input = document.getElementById("birthday");
const result = document.getElementById("result");

// Add event listener to the button
btn.addEventListener("click", () => {
    // Get the value of the input (date of birth)
    let dobValue = input.value;

    // Check if the user has entered a date
    if (dobValue === "") {
        alert("Please enter your date of birth");
    } 
    else {
        // Create date objects for today and the entered date of birth
        let dob = new Date(dobValue);
        let today = new Date();

        // Calculate the age by subtracting the years
        let age = today.getFullYear() - dob.getFullYear();

        // If the birthdate hasn't occurred yet this year, subtract 1 from age
        let monthDiff = today.getMonth() - dob.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            age--;
        }

        // Display the result
        result.innerText = `Your age is ${age} years old`;
    }
});
