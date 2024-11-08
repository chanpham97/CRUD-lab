const prompt = require('prompt-sync')()
// ARRAY SECTION
// Task 1 [1.5]
// Create an array called truths and store 3 true facts about yourself
let truths = ["I love raccoons", "I enjoy cooking", "I like to run"]
// Create a second array called lies and store 3 fake facts about yourself
let lies = ["I hate animals", "I like staying indoors", "I love the winter"]
// Task 2 [1.5]
// Console log the 1st element of the truths array (element is not same as index!)
console.log(truths[0])
// Change the value of the last element in the truths to another fact
truths[2] = "I love to travel"
// Console log the last element to check that it's changed
console.log(truths[2])
// Task 3 [1.5]
// Delete the first value from the lies array
lies.shift()
// Add a new lie to the end of the lies array
lies.push("I am American")
// Console log the lies list to confirm the changes
console.log(lies)
// Task 4 [1.4]
// Use string concatenation or template literals to print "I have [number] facts." 
// You should plug in the length of truths in the square brackets for number
console.log(`I have ${truths.length} facts.`)
// Task 5 [1.5]
// Prompt the user to enter 0, 1, or 2 and save it in a variable called index
let index = prompt("Enter 0, 1, or 2: ")
// Cast index to be a number
index = parseInt(index)
// Task 5 [1.5]
let randomNumber = Math.random()

if (randomNumber < 0.5){
    // console log the element at index from the truths array
    console.log(truths[index])
} else {
    // console log the element at index from the lies array
    console.log(lies[index])
}
// Prompt the user to guess if it's true or false
let guess = prompt("Truth or lie? ")

if (randomNumber < 0.5){
   console.log("It was the truth!")
} else {
    console.log("It was not the truth!")
}
// Commit your changes with an appropriate message.
// ----------------------------------
// OBJECTS SECTION
// Task 7 [1.5]
// Create a variable called user1 with the keys username (any string), password (any string), friendCount (any number), and isOnline (false).
let user1 = {
    username: "mspham",
    password: "softwarerocks",
    friendCount: 18,
    isOnline: false
}
// Console log the profile's username
console.log(user1.username)

// Task 8 [1.5]
// Make the friend count go up by 1
user1.friendCount++

// Console log the profile's friendCount to check if the value updated
console.log(user1.friendCount)

// Task 9 [1.6]
// Prompt the user to enter their password
let userGuess = prompt("Enter your password: ")

// If the user's password is correct, console log "Welcome " + username and set their isOnline to true
if (userGuess === user1.password) {
    console.log(`Welcome ${user1.username}`)
    user1.isOnline = true
}
// Task 10 [1.5]
// Add a status key to the user1 object and set it to null
user1.status = null
// Prompt the user to enter a status and save it in a variable
let userStatus = prompt("Enter your status: ")
// Set the status key to be the user's input
user1.status = userStatus

// Commit your changes with an appropriate message.
// Push the changes if you are ready to submit.
// ----------------------------------
// EXTRA CREDIT
// Add a truths key to the user1 object and set it equal to an empty array

// Do the same for the lies key

// Ask the user for a fact about them and add it to the user1 truths key (not the array above!)

// Ask the user for a fake fact about them and add it to the user1 truths key (not the array above!)

// Set up a similar guessing game as in the array section. 
// Note, you can skip the prompt about picking 0-2 since you only have 1 truth/lie.



