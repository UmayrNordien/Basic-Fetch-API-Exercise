console.log('LAPTOPS:')                 //heading

fetch("../data/data.json", {            //fetches data from json file
    method: 'get'
})

.then((lap)=>{
    return lap.json();                  //returns the response
})

.then((data)=>{
    console.table(data.laptop);         //displays data in table format
})

.catch(()=>{
    console.log('error')                //if an error occurs in the try block
})                                      //catch statement allows you to define a block of code to be executed