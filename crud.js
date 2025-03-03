let fetchData= async()=>{
    let url='http://localhost:3000/Flight'

    let res = await fetch(url,{method:"GET"})

    let data= await res.json()
    console.log(data);
    



let Show=document.querySelector("#show")



    data.map((e)=>{
        Show.innerHTML+=
        `
        <tr>
        <td> ${e.name}   </td>
        <td> ${e.age}  </td>
        <td> ${e.Adhar}   </td>
        <td>${e.Mobileno}    </td>
        <td> ${e.date}   </td>
        <td> ${e.destination}   </td>
        <td> ${e.person}   </td>
        <td> ${e.price}   </td>
        <td> ${e.price*e.person}   </td>

        <td onclick="del('${e.id}')"> Cancel </td>
        <td  onclick="formfill('${e.id}')" > Update </td>
        </tr>      `
    })
}
 
let del=(id)=>{

    let url=`http://localhost:3000/Flight/${id}`

    fetch(url,{method:"DELETE"})

}


let ins=()=>{

    let inpname=document.querySelector("#name").value
    let inpage=document.querySelector("#age").value
    let inpadhar=document.querySelector("#adhar").value
    let inpnumber=document.querySelector("#number").value
    let inpdate=document.querySelector("#date").value
    let inpdestination=document.querySelector("#destination").value
    let inpperson=document.querySelector("#person").value

    let url=`http://localhost:3000/Flight`

    fetch(url,{

        method:"POST",
        headers:{
            "Content-type":"application/json"

        },
        body:JSON.stringify(

            {
                "name":inpname,
                "age":inpage,
                "Adhar":inpadhar,
                "Mobileno":inpnumber,
                "date":inpdate,
                "destination":inpdestination,
                "person":inpperson,
                "price":500
            }
        )
    })

    location.href="crud.html"
    return false

    
}

    let formfill= async(id)=>{
        let url=`http://localhost:3000/Flight/${id}`

        let res=await fetch(url,{method:"GET"})

        let data = await res.json()

        console.log(data);

        let formdata =`
        
        
        Enter Name : <input type ="text" id="upname=" value="${data.name}"   > <br> <br>
        Enter Age : <input type ="number" id="upage=" value="${data.age}"    > <br> <br>
        Enter Adharno : <input type ="number" id="upadhar=" value="${data.Adhar}"    > <br> <br>
        Enter Mobile : <input type ="number" id="upnumber=" value="${data.Mobileno}"   >  <br> <br>
        Enter Date : <input type ="date" id="update=" value="${data.date}"   > <br> <br> 
            
            Destination : <select id="updestination"> 
            <option value="Bhopal">London</option>
            <option value="London">London</option>
            <option value="UK">UK</option>
            <option value="Paris">Paris</option>
            <option value="Dubai">Dubai</option>
            </select> <br><br>
               
               Enter Person: <input type="number" id="upperson" value=" ${data.person}"> <br> <br>
               
               <input type="submit" value="Update" onclick="return finalupdate(${data.id})
               
               ` 

        document.querySelector("#formdata").innerHTML=formdata
        
    }


    let finalupdate=(id)=>{

        let inpname=document.querySelector("#upname").value
        let inpage=document.querySelector("#upage").value
        let inpadhar=document.querySelector("#upadhar").value
        let inpnumber=document.querySelector("#upnumber").value
        let inpdate=document.querySelector("#update").value
        let inpdestination=document.querySelector("#updestination").value
        let inpperson=document.querySelector("#upperson").value
    
        let url=`http://localhost:3000/Flight/${id}`
    
        fetch(url,{
    
            method:"PUT",
            headers:{
                "Content-type":"application/json"
    
            },
            body:JSON.stringify(
    
                {
                    "name":inpname,
                    "age":inpage,
                    "Adhar":inpadhar,
                    "Mobileno":inpnumber,
                    "date":inpdate,
                    "destination":inpdestination,
                    "person":inpperson,
                    "price":500
                }
            )
        })

        return false
    }
