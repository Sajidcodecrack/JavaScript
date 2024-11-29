// Prompt the user to enter the number of elements they want in the array
let numElements = parseInt(prompt("How many numbers do you want to enter?"));

// Initialize an empty array to store the numbers
let numbers = [];

// Variable to store the sum of the numbers
let sum = 0;

// Loop to take input from the user, store it in the array, and calculate the sum
for (let i = 0; i < numElements; i++) {
    let num = parseFloat(prompt("Enter number " + (i + 1) + ":"));
    numbers.push(num); // Store the number in the array
    sum += num; // Add the number to the sum
}

// Calculate the average
let average = sum / numbers.length;

// Display the average to the user
alert("The average of the numbers is: " + average);
