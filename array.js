function array()
{
    let arr1=["apple", "banana", "mango","orange"]
    let arr2=["shake", "juiice"]
    console.log(arr1.length)
    arr1.pop() // removes last value
    console.log(arr1.join("and")); // join all elements
    console.log(arr1)

    let a= arr1.push(56); // add element at last
    console.log;

    console.log(arr1.shift()) // removes the fisrt element
    console.log(arr1.unshift(21)) // adds the element at first position
    
    // document.write(arr1.length)
    // document.write(arr1.slice(0,3))
    document.write(arr1.concat(arr2))
}
array();