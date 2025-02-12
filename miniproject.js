

let inter;
   
let a=()=>{
    
    let show=document.querySelector("#show")
    let input=document.querySelector("#inp").value
    inter= setInterval(()=>{
    show.innerHTML=input
    input--;
    if(input<0)
        {
            clearInterval(inter)
        }
     
   
    
},1000)
}

