const user ={
    name : "jiraporn",
    nickname : "May",
    hobby : "read book",
    address : "Phatthanakan",
    province : {
        province: "bankkok",
        postcode: "10250",
    }
}
let info =`
my nickname is ${user.nickname},
Myhobby is ${user.hobby},
and my postcode is ${user.province.postcode}
`

console.log(info)