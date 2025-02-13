let time=()=>{
let x=document.querySelector("#time");
let tme=new Date()
let min=
x.innerHTML=`${tme.getHours()} : ${ tme.getMinutes()} : ${tme.getSeconds()}`
}
setInterval(time,1000)