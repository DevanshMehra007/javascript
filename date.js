 console.log(new Date());

 let time= new Date()
 console.log(time.getFullYear());
 console.log(time.getMonth());
 console.log(time.getDay());
 console.log(time.getHours());
 console.log(time.getMinutes());
 console.log(time.getSeconds());
 console.log(time.toLocaleString());

 let day=["Sunday", "Monday", "Thusday", "Wednesday" , "Thusday" , "Friday" , "Saturday"]

 console.log(day[time.getDay()])

 let abc =()=>{
 let a=(day[time.getDay()])
 let show=document.querySelector("#show")
 show.innerHTML=a;
 }
 

 
 
 
 
 
 
 