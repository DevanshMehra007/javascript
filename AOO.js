// Array of object

// [{
//     key:"value",
//     age:"21"
// },{
//     key:"value",
// },{

// }]

// MAP method ===== 1) it returns new array   


// let a=[2,3,4,5,6,7,8]

// let ans=a.map((e)=>{
//     return e*2                  // <- MAP method ==== we have to make a parameterise function inside it
// })

// console.log(ans);


// Filter Method   ==== it is also same as map , the diffrence is it filter the data
// let filt=a.filter((e)=>{
//     // return e>5
//     return e%2==0
// })
// console.log(filt);


// ForEach Method  ===== it can work both like Map & Filter but it returns string

// let FE=a.forEach((e)=>{
//     console.log(e*2)
// })

let AOO=[{
    name:"Dev ",
    age:19,
    city:"Bhopal"
},{
    name:"Ansh ",
    age:20,
    city:"Bhopal"
},{
    name:"Isha",
    age:50,
    city:"Delhi"
},
{
    name:"raj",
    age:23,
    city:"Gujrat"
},{
    name:"Rohit",
    age:24,
    city:"Mumbai"
},{
    name:"Mohit",
    age:24,
    city:"Odhisa"
},{
    name:"Abhishek",
    age:24,
    city:"Mumbai"
},{
    name:"Rishi",
    age:24,
    city:"Bhopal"
}]

 let Show=document.querySelector("#show")
let s=AOO.map((e)=>{        //call back function: Asia function jo kisi parameter ke andar diya gaya ho
                           //higher order function : Aisa function jiske andar parameter mein function liya gaya ho

    Show.innerHTML+=`<div><h1> &nbsp ${e.name} &nbsp<h1>
                     <h1> &nbsp ${e.age} &nbsp</h1>
                     <h1> &nbsp ${e.city} </h1> </div>`

    
    // Show.innerHTML+=`<tr><td> ${e.name} </td>
    //                  <td>  ${e.age} </td>
    //                  <td>  ${e.city} </td> </tr>`
    
    
})

console.log(s);

