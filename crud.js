let fetchdata= async()=>{
    let url='http://localhost:3000/Flight'

    let res = await fetch(url,{method:"GET"})

    let data= await res.json()
    console.log(data);
    

}

let Show=document.querySelector("#show")

let fetchData= async ()=>{

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


    let formfill= async(id)=>{
        let url=`http://localhost:3000/Flight${id}`

        let res=await fetch(url,{method:"GET"})

        let data = await res.json()

        console.log(data);

        let formdata =`
        
        
        enter name : <input type ="text" id="upname=" value="${data.name}"   > ` 

        document.querySelector("#formdata").innerHTML=formdata
        
    }
