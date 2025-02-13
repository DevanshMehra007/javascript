let time=()=>{
    let x=document.querySelector("#time");
    let tme=new Date()
    let min=
    x.innerHTML=`${tme.getHours()} : ${ tme.getMinutes()} `
}
    let clock= setInterval(time,1000)

let almtime = document.querySelector("#clock").value
   if(clock== almtime)
   {
    let ring=document.querySelector("#ringing")
    ring.innerHTML="Alarm is Ringing......"

   }