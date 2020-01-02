// Normal function
// const square = function(x){
//     return x * x
// }

//arrow function
//const function_name = (arguments) =>  {}
// const square = (x) => 
// {
//     return x * x
// }

//single line without curly brackets arrow funciton
// const square = (x) => x * x
// console.log(square(3))


// this.name references "name" value inside same object
// we can create functions with out "function" keyword with arrow function features
const event = {
    name: 'Birthday Party',
    guestList: ["Mahmut", "Serhat", "Ali"],
    printGuestList() {
        console.log('Guest list for ' + this.name),
        
        //  forEach doing same thing in brackets for every array value
        //  you can access parent object values with arrow function
        this.guestList.forEach((guest) => {

            console.log(guest + ' is attending '+ this.name)
        })
    }
}

event.printGuestList()