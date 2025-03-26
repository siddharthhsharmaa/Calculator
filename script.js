// Get references to elements
let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let string = "";
let nightModeToggle = document.getElementById('nightModeToggle'); // Declare the night mode toggle button

// Loop through all buttons and add event listeners
buttons.forEach(button => {
    // Avoid adding click event listener to the nightModeToggle button
    if (button.id !== "nightModeToggle") {
        button.addEventListener('click', (e) => {
            let buttonText = e.target.innerHTML;
            
            // Handle button clicks
            if (buttonText === '=') {
                try {
                    string = eval(string); // Evaluate the expression
                    input.value = string; // Display result in input box
                } catch (error) {
                    input.value = "Error"; // Handle error in eval
                    string = ""; // Reset string for new input
                }
            } else if (buttonText === 'AC') {
                string = ""; // Clear the string
                input.value = string;
            } else if (buttonText === 'DEL') {
                string = string.substring(0, string.length - 1); // Remove last character
                input.value = string;
            } else {
                string += buttonText; // Add character to string
                input.value = string;
            }
        });
    }
});

// Handle the night mode toggle
nightModeToggle.addEventListener('click', () => {
    // Toggle night mode
    document.body.classList.toggle('night-mode');
    document.querySelector('.calculator').classList.toggle('night-mode');
    input.classList.toggle('night-mode');
    
    buttons.forEach(button => {
        button.classList.toggle('night-mode');
    });

    // Change the night mode toggle icon based on the current mode
    if (document.body.classList.contains('night-mode')) {
        nightModeToggle.innerHTML = '&#9789;'; // Moon icon for night mode
    } else {
        nightModeToggle.innerHTML = '&#x2600;'; // Sun icon for day mode
    }
});
