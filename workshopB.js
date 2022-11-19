const user =[
    {
    nickname : "May", hobby : "read book",postcode: "10250"},
    
    {nickname : "jin", hobby : "sleep",postcode: "10250"},
    
    
    {nickname : "nin", hobby : "eat",postcode: "10250"},
]

for (const u of user){
let info =` my nickname is ${u.nickname},My hobby is ${u.hobby}, and my postcode is ${u.postcode}
`
    console.log(info)
}