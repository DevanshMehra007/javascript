Object()
{
    // let objj={

    //     //keys:
    //     name:"dev",
    //     age:"19",
    //     city:"Bhopal",
    //     fruits:["mango", "orange" , "apple"],
    //     cybrom:function()
    //     {
    //         console.log(`hello ${this.name}`); //this used for current object

            
    //     },

    //     name:"ann"
    // }
    // console.log(objj.name) // access

    // objj.email="sdasdasda@gmail.com" // insert
    // console.log(objj.email)
    // objj.age=20; // update
    // console.log(objj.age);

    // delete objj.email; // delete
    // console.log(objj)

    // console.log(objj.fruits[1])

    // objj.cybrom();





    // Destructuring

    // let student={
    //     name:"sid",
    //     age:"25",
    //     city:"bhopal",
    //     rollno:"1"
    // }
    
    // let{name,age,city,rollno}=student
    // console.log(city);


    // Spread oprator

    const student1={name:"john",age:25};
    const student2={city:"new york", grade:"A"}
    const student3={rollno:"10",marks:100}

    const combinedstudent={...student1, ...student2, ...student3}

    const array1=["orange", "mango", "banana"]
    const array2=["apple", "blueberry"]

    const combinedarray=[...array1,...array2]

    console.log(combinedarray);
    
    
}


// Anonymus Function

let go=function()
{
    console.log("anonymus function");
    
}
go();


// imideatly invoked function expression (IIFE)

(
    function()
    {
        console.log("IIFE")
    }
)();


// Arrow function (=>)  Special typr of anonymus function

let goo=()=>{
    console.log("Arrow");
    
}    
goo();

