import sidebar from "../components/sidebar.js"
document.getElementById("sidebar").innerHTML=sidebar()



function profile(){
    let profileData= JSON.parse(localStorage.getItem("user"))
console.log(profileData)
    document.getElementById("user_img").src=profileData.profile
    document.getElementById("user_name").innerText=profileData.name
    document.getElementById("user_email").innerText=profileData.mail
    document.getElementById("user_country").innerText=profileData.country
}

profile()







