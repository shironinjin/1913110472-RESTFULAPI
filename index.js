//const datefns = require('date-fns')

//console.log(datefns.format(new Date(),"mm/dd/yyyy"))

//console.log("Hello world");

/*et firstname = "Jiraporn"
let age = 23

console.log(firstname + age)*/

/*let into =`
my name is ${firstname}
my age is ${age}
`
console.log(into)*/

const user ={
    name :"jiraporn",
    salary:30000,
    address:{
        province:"bankkok",
        postcode:10250,
    }
}
//console.log(user.address.postcode)

//const showData = () => `${user.name}`

/*const showData2 = () => {
    let info = 'my name is'
    return `${info} ${user.name}`
}*/

//console.log(showData2())

//const sumNumber = (a,b) => a+b;

//console.log(sumNumber(9,1))

const {name,salary,address:{postcode}} = user

console.log(user)
