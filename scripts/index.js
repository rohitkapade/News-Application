/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

class user {
    constructor(p,n,m,c){
        this.profile=p,
        this.name=n,
        this.mail=m,
        this.country=c

    }
}


function userData(e){
    e.preventDefault()

    let p = document.getElementById("user_pic").value
    let n = document.getElementById("user_name").value
    let m = document.getElementById("user_email").value
    let c = document.getElementById("user_country").value

    let user1 = new user(p,n,m,c)
    localStorage.setItem("user",JSON.stringify(user1))
}
