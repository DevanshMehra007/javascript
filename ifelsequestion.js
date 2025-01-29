// let a= prompt(console.log("Enter students marks"))

// if(a <=100 && a>=90)
//     {
//         console.log("A");
        
//     }
// if(a <=89 && a>=70)
// {
//      console.log("B");
            
// }
// if(a <=69 && a>=60)
// {
//     console.log("C");
        
// }
// if(a <=59 && a>=50)
// {
//     console.log("D");
        
// }
// if(a <=49 && a>=0)
//     {
//         console.log("F");
            
//     }

let tog=()=>{
    let Text =document.querySelector("#text")
    let Btn=document.querySelector("#button")
    if(Text.style.display=="block" )
    {
        Text.style.display="none"
        Btn.innerHTML.change="show"
    }
    else(
        Text.style.display="block"
        
    )
}