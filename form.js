
let sub=()=>{

    let inpname=document.querySelector("#name").value;
    let inpnum=document.querySelector("#number").value;
    let inpmail=document.querySelector("#email").value;
    let inppass=document.querySelector("#pass").value;
    let inpcpass=document.querySelector("#Cpass").value;


    let errorname=document.querySelector("#errorname")
    let errornum=document.querySelector("#errornum")
    let errormail=document.querySelector("#errormail")
    let errorpass=document.querySelector("#errorpass")
    let errorcpass=document.querySelector("#errorcpass")

    if(inpname=="")
    {
        errorname.innerHTML="Please enter your name"
        errorname.style.color="red"
        return false;
    }

    if(inpnum=="")
        {
            errornum.innerHTML="*Please enter your number"
            errornum.style.color="red"
            return false;
        }

    if(inpmail=="")
            {
                errormail.innerHTML="*Please enter your email"
                errormail.style.color="red"
                return false;
            }  
            
    if(inppass=="")
            {
                errorpass.innerHTML="*Please enter your password"
                errorpass.style.color="red"
                return false;
            }

    if(inpcpass=="")
    {
                errorcpass.innerHTML="*Confirm password"
                errorcpass.style.color="red"
                return false;
        }        
}