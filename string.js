function string()
{
    let name = "harry"
    console.log(name.length)
    console.log(name.toLowerCase());
    console.log(name.toUpperCase());
    console.log(name.slice(2,3));
    console.log(name.replace("Her", "per"));

    let friend="raj";
    console.log(name.concat( "is a friend of ", friend , " ok"))

    let a="           don           "
    console.log(a.trim()); // to remove spaces

    console.log(name.substring(2,4));

    console.log(name.charAt(2));

    console.log(name.charCodeAt(1));

    console.log(name.split(0,2));

    console.log(name.indexOf("y"));
    
    
    
    
    
    
    
    
    

    
     
}
string();