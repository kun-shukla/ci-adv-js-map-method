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

// let nums = [1, 2, 3, 4, 5];

// let multiplyByTwo = nums.map((num) => num * 2);
// console.log(multiplyByTwo);

// let studentNameId = students.map((student) => [student.name, student.id]);

// console.log(studentNameId);

// let studentsByNameIds = students.map((student) => {id: student.id, fName: student.name});
// console.log(studentsByNameIds);

// const studentObjects = students.map((student) => {
//   return {
//     id: student.id,
//     name: student.name,
//   };
// });

// console.log(studentObjects);

let ageValues = [32, 26, 28];

const addItem = students.map((eachObj, index) => {
  return { ...eachObj, age: ageValues[index] };
});

console.log(addItem);
