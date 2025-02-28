let fetchdata= async()=>{
    let url='http://localhost:3000/Flight'

    let res = await fetch(url,{method:"GET"})

    let data= await res.json()
    console.log(data);
    

}

let displayData=()=>{
    let data=JSON.parse(data);
    let finaldata='';
    data.array.forEach( element => {
        finaldata= `<tr><td>${element.name}</td>
                    <td> ${element.age}</td>
                    <td> ${element.Adhar}</td>
                    <td>${element.Mobileno} </td>
                    <td>${element.date} </td>
                    <td>${element.destination} </td> </tr>`
        
        
    });


    let formfill= async(id)=>{
        let url=`http://localhost:3000/Flight${id}`

        let res=await fetch(url,{method:"GET"})

        let data = await res.json()

        console.log(data);

        let formdata =`
        
        
        enter name : <input type ="text" id="upname=" value="${data.name}"   > ` 

        document.querySelector("#formdata").innerHTML=formdata
        
    }
}