// Types in JavaScript

// function response(a, b ){
//     return a + b;
// };

// console.log(response(1, 2));

// Using typeof

const button = document.querySelector(".button");
const firstInput = document.querySelector("#first-input") as HTMLInputElement;
const secondInput = document.querySelector("#second-input") as HTMLInputElement;
export const screen = document.querySelector(".screen");

// Very vanilla JS
// function addNumbers(a,b) {
//     if (typeof a === 'number' && typeof b === 'number') {
//         screen.innerHTML = a + b
//     } else screen.innerHTML = parseInt(a) + parseInt(b)
// }

function addNumbers(a: number, b: number) {
    screen.innerHTML = (a + b).toString();
}

button.addEventListener("click", () => 
    addNumbers(parseInt(firstInput.value), parseInt(secondInput.value)));
