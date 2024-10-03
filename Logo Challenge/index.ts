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

const reviews: {
    name: string,
    stars: number,
    loyaltyUser: boolean,
    date: string
    age: number
    }[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021',
        age: 35
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021',
        age: 29
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021',
        age: 40
    },
]

function showReviewTotal(value: number, reviewer: string, isLoyal: boolean) {
    const iconDisplay = isLoyal ? "⭐️" : " ";
    reviewTotalDisplay.innerHTML = "review total " + value.toString() + "| last reviewed by " + reviewer + " " + iconDisplay;
}
console.log(reviews.length, reviews[0].name, reviews[0].loyaltyUser);


// objects
const you: { 
    firstName: string, 
    lastName: string,
     isReturning: boolean, 
     age: number 
     stayedAt: string[]
    } = {
    firstName: "Bobby",
    lastName: "Brown",
    isReturning: true,
    age: 24,
    stayedAt: ["florida-home", "oman-flat", "tokyo-flat"]
}
console.log(you.userName);

// function populateUser(isReturning: boolean, userName: string ) {
//     if (isReturning){
//         returningUserDisplay.innerHTML = 'back'
//     }
//     userNameDisplay.innerHTML = userName
// }

// populateUser(you.isReturning, you.userName)

const properties: {
    image: string,
    title: string,
    price: number,
    location: {
        address: string,
        town: string,
        postcode: number,
        country: string,
    }
    contact: string,
    status: boolean
    }[] = [
    {
        image: "",
        title:"Colombian Shack",
        price: 45,
        location: {
            address: "shack 37",
            town: "Bogota",
            postcode: 45632, 
            country: "Colombia",
        },
        contact: "example@email.com",
        status: true

    },
    {
        image: "",
        title: "Penthouse Apartment",
        price: 85,
        location: {
            address: "Apartment 49",
            town: "New York",
            postcode: 80200, 
            country: "United States",
        },
        contact: "example2@email.com",
        status: true

    },
    {
        image: "",
        title: "Polish Cottage",
        price: 55,
        location: {
            address: "no 23",
            town: "Gdnask",
            postcode: 34890, 
            country: "Poland",
        },
        contact: "example3@email.com",
        status: false

    },
]


// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)


