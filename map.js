/**
 * To run this file in Gitpod, use the
 * command node map.js in the terminal
 */

// Using a for loop

// Using map()

// Simplified w/ map()

// Simplfied w/ map() + arrow function

// With objects:
// const students = [
//   {
//     id: 1,
//     name: "Mark",
//     profession: "Developer",
//     skill: "JavaScript",
//   },
//   {
//     id: 2,
//     name: "Ariel",
//     profession: "Developer",
//     skill: "HTML",
//   },
//   {
//     id: 3,
//     name: "Jason",
//     profession: "Designer",
//     skill: "CSS",
//   },
// ];

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

// let ageValues = [32, 26, 28];

// const addItem = students.map((eachObj, index) => {
//   return { ...eachObj, age: ageValues[index] };
// });

// console.log(addItem);

let students = [
  {
    name: "John",
    subjects: ["maths", "english", "cad"],
    teacher: { maths: "Harry", english: "Joan", cad: "Paul" },
    results: { maths: 90, english: 75, cad: 87 },
  },
  {
    name: "Emily",
    subjects: ["science", "english", "art"],
    teacher: { science: "Iris", english: "Joan", art: "Simon" },
    results: { science: 93, english: 80, art: 95 },
  },
  {
    name: "Adam",
    subjects: ["science", "maths", "art"],
    teacher: { science: "Iris", maths: "Harry", art: "Simon" },
    results: { science: 93, maths: 77, art: 95 },
  },
  {
    name: "Fran",
    subjects: ["science", "english", "art"],
    teacher: { science: "Iris", english: "Joan", art: "Simon" },
    results: { science: 93, english: 87, art: 95 },
  },
];

// const studentByResults = students.map((student) => {
//   return [student.name, student.results];
// });

// console.log(studentByResults);

const [john, ...rest] = students.map((student) => {
  return [student.name, student.results];
});

console.log(john);
console.log(rest);
