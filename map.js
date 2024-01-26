/**
 * To run this file in Gitpod, use the
 * command node map.js in the terminal
 */

// Using a for loop

// Using map()

// Simplified w/ map()

// Simplfied w/ map() + arrow function

// With objects:
const students = [
  {
    id: 1,
    name: "Mark",
    profession: "Developer",
    skill: "JavaScript",
  },
  {
    id: 2,
    name: "Ariel",
    profession: "Developer",
    skill: "HTML",
  },
  {
    id: 3,
    name: "Jason",
    profession: "Designer",
    skill: "CSS",
  },
];

let nums = [1, 2, 3, 4, 5];

let multiplyByTwo = nums.map((num) => num * 2);
console.log(multiplyByTwo);
