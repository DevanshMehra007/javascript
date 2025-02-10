
// let sub=()=>{

    // let inpname=document.querySelector("#name").value;
    // let inpnum=document.querySelector("#number").value;
    // let inpmail=document.querySelector("#email").value;
    // let inppass=document.querySelector("#pass").value;
    // let inpcpass=document.querySelector("#Cpass").value;


    // let errorname=document.querySelector("#errorname")
    // let errornum=document.querySelector("#errornum")
    // let errormail=document.querySelector("#errormail")
    // let errorpass=document.querySelector("#errorpass")
    // let errorcpass=document.querySelector("#errorcpass")

    // if (inpname == "") {
    //     let inpname=document.querySelector("#name")
    //     inpname.placeholder="Please enter your name"
    //     inpname.style.border="1px solid red"
    //     errorname.innerHTML = "Please enter your name"
    //     errorname.style.color = "red"
    //     return false;
    // }

    // if (inpnum == "") {
    //     errornum.innerHTML = "*Please enter your number"
    //     errornum.style.color = "red"
    //     return false;
    // }

    // if (inpmail == "") {
    //     errormail.innerHTML = "*Please enter your email"
    //     errormail.style.color = "red"
    //     return false;
    // }

    // if (inppass == "") {
    //     errorpass.innerHTML = "*Please enter your password"
    //     errorpass.style.color = "red"
    //     return false;
    // }

    // if (inpcpass == "") {
    //     errorcpass.innerHTML = "*Confirm password"
    //     errorcpass.style.color = "red"
    //     return false;
    // }

    // if (inppass !== inpcpass) {
    //     errorcpass.innerHTML = "*Confirm password is wrong"
    //     errorcpass.style.color = "red"
    //     document.querySelector("#Cpass").value=""
    //     document.querySelector("#Cpass").focus()
    //     return false;
        
    // }
    // else if (isNaN(inpnum)) // If number than answer will be False
    // {
    //     errornum.innerHTML = "*Please Enter Number Only"
    //     errornum.style.color = "red"
    //     return false;
    // } 

    // else if (inpnum.length!==10)
    // {
    //     errornum.innerHTML = "*Please Enter 10 Digit Number "
    //     errornum.style.color = "red"
    //     return false;
        
    // }

    // else if(!(inpmail.includes('@') && inpmail.includes(".com")) )  {

    //     errormail.innerHTML="*Please Enter valid Email"
    //     errormail.style.color="red"
    //     return false;

    // }

    // else if(!(inppass.match([/1234567890/]) && inppass.match([/!@#$%^&*/]) && inppass.match([/a-z/]) && inppass.match([/A-Z/] )))
    // {
    //     errorpass.innerHTML="*Enter A Strong Password";
    //     errorpass.style.color="red"
    //     return false;
    // }

    // let box=document.querySelector("btn")
    // let box1=document.querySelector("#box")
    // box1.addEventListener("click",()=>{
    //     box1.style.backgroundColor="red"
    // })

    // let inpbox=document.querySelector("#inpbox")

    // inpbox.addEventListener("input",()=>{
    //     console.log(inpbox.value)
    // })

    let form=()=>{
        let inpname=document.querySelector("#name")
        let inpnum=document.querySelector("#number")
        let inpmail=document.querySelector("#email")
        let inppass=document.querySelector("#pass")
        let inpcpass=document.querySelector("Cpass")

        let errorname=document.querySelector("errorname")
        let errornum=document.querySelector("errornum")
        let errormail=document.querySelector("errormail")
        let errorpass=document.querySelector("errorpass")
        let errorcpass=document.querySelector("errorcpass")

        if(inpname=="")
        {
            errorname.innerHTML="*Please Enter Your Name"
            errorname.style.color="red"
            inpname.placeholder="Enter you name"

            return false;
        }
    }

        
        
       
// }