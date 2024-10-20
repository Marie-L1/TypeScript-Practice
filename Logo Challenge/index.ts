import { showReviewTotal,populateUser } from "./utils";

let isOpen: boolean;

const propertyContainer = document.querySelector(".properties");

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
        image: "images/columbia-image.jpg",
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
        image: "images/newyork-apartment.webp",
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
        image: "images/poland-cottage.avif",
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

// add the properties
for (let i = 0; i < properties.length; i++) {
    const card =document.createElement("div");

    card.classList.add("card");
    card.innerHTML = properties[i].title;
    
    const image = document.createElement("img");
    image.setAttribute("src", properties[i].image);
    card.appendChild(image);
    
    propertyContainer?.appendChild(card);
}