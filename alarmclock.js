// let time=()=>{
//     let x=document.querySelector("#time");
//     let tme=new Date()
//     // let timee=tme.toLocaleString();
//     x.innerHTML=`${tme.getHours()} : ${ tme.getMinutes()} `
// }
//     let clock= setInterval(time,1000)


// let almtime = document.querySelector("#clock").value
//    if(clock== almtime)
//    {
//     let ring=document.querySelector("#ringing")
//     ring.innerHTML="Alarm is Ringing......"
//    }

let sett=()=>{
    let inptime=document.querySelector("#inp").value
    let show=document.querySelector("#show")
    let music=document.querySelector("#music")

    let alarm=setInterval(()=>{
        let time= new Date()

        let currenttime=`${time.getHours().toString().padStart(2,"0")}:${time.getMinutes().toString().padStart(2,"0")}`

        if(currenttime==inptime)
        {
            show.innerHTML="Alarm is ringing......"
            music.play();

        }
        else
        {
            show.innerHTML="Alarm is set"
        }


        setTimeout(()=>{
             clearInterval(alarm)
             show.innerHTML="Alarm is paused"
             music.pause;
        },5000)

    },1000)

    
}