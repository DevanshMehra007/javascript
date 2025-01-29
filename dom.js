function dom()
{
    let text="hello cybron"
    document.write(text);
    console.log(document.body)
    // document.body.style.background = "yellow";
    document.write("<h1> helloworld <h1>")
}
dom();

function textchange()
{
   let change= document.querySelector("#box");
   change.innerHTML="hello Cybron"
   // change.textContent="hello Cybron"  we can't use h1 and all it will print that
   change.style.color="red"
   change.style.background="black"
    
}

function colorchange1()
{
    let green=document.querySelector("#body")
    document.body.style.background="green"
}

function colorchange2()
{
    let green=document.querySelector("#body")
    document.body.style.background="red"
}

function removetext()
{
    let remove=document.querySelector("#text")
    if(remove.style.display=="none")
    {
        document.style.display="block"
    }
    (remove.style.display=="block")
    {
        document.style.display="none"
    }
}