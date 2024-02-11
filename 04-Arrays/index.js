const fruits=["oranges", "Mangoes","Bananas","pineaples","sugarcane"];
fruits.push("apples")//add a new element at the end of the array
fruits.forEach(element => {
    console.log(element)
});
fruits.pop(); //removes the last element
fruits.forEach(element => {
    console.log(element)
});
//an array of objects
const students=[
    {
        name:"Milly",
        age:21,
        course: "IT"
    },
    {
        name:"Ken",
        age:21,
        course: "IT"
    }, {
        name:"Teddy",
        age:21,
        course: "IT"
    }
]
console.log(students[2])

const paragraph = "The quick fox jumps over the lazy dog because it was just sleeping like a dog."
console.log(paragraph)
let newArray = paragraph.split(' ') //learn more on string methods
newArray.forEach(element =>{
    console.log(element)
})
//Research more on arrays and array methods 
