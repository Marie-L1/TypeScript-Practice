// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number
// Boolean Types mini-challenge
// if the last reviewer is a loyalty User, can you add a star to the end of their name?
// please do so in the existing function, and make sure to declare what type of 
// parameters the function takes.
// : boolean

export const reviewTotalDisplay = document.querySelector('#reviews')

let isOpen: boolean;

const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

function showReviewTotla(value: number, reviewer: string, isLoyal: boolean) {
    const iconDisplay = isLoyal ? "⭐️" : " ";
    reviewTotalDisplay.innerHTML = "review total " + value.toString() + "| last reviewed by " + reviewer + " " + iconDisplay;
}
console.log(reviews.length, reviews[0].name, reviews[0].loyaltyUser);


const you = {
    userName: "Bobby",
    isReturning: true,
}

function populateUser(isReturning: boolean, userName: string ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

populateUser(you.isReturning, you.userName)