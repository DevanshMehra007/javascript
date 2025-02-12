let count=0;
let inter;

let cout=()=>{
    let show=document.querySelector("#show")
   let num= document.querySelector("#count").value
    inter= setInterval(()=>{
    show.innerHTML=num;
    num++;
   
    
},1000)
}

let stop=()=>
{
    clearInterval(inter)

}

