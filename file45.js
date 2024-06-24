let students  = [
    {name : "piyush",rollno: 31,marks: 23},
    {name : "yash",rollno: 11,marks: 93},
    {name : "harh",rollno: 9,marks: 83},
    {name : "kaushal",rollno: 16,marks: 35},

]
// Question 1: Return only name of students in Capital 

const result  = students.map((student)=>student.name.toUpperCase())
console.log(result)

// QUESTION 2: Return only details of those who scored more than 60

const ans = students.filter((student) => student.marks>60)
console.log(ans)

// Question 3: Return more than marks 60 and rollnumber  less than 15 
const answer  = students.filter((student) =>student.marks > 60 && student.rollno<15) 
console.log(answer)

// Question 4 : Sum of marks of all students

const  marks  = students.reduce((acc,curr)=>acc + curr.marks ,0)
console.log(marks)

// Question 5 - Return only names of students who scored more than 60.
const  names = students.filter((stu)=>stu.marks>60).map((stu)=>stu.name)
console.log(names)

// Question 6 - Return total marks for students with marks  greater than 60 after 20 marks have 
// been added to those who  scored less than 60.
const answers = students.map((stu)=>stu.marks + 20).filter((stu)=>stu.marks>60)
console.log(answers)

// const totalMarks = students.map((stu)=>{
//     if(stu.marks<60){
//         stu.marks = stu.marks + 20
//     }
//     return stu
// }).filter((stu)=> stu.marks>60).reduce((acc,curr)=>acc+curr.marks,0)

// console.log(totalMarks)
