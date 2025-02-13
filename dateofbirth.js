let date=()=>{
    let y=document.querySelector("#age")
    let a=document.querySelector("#date").value 
    let time= new Date()
    let x=time.getFullYear();
    let z=x-a;
    y.innerHTML=z;

}