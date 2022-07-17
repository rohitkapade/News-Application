

let news = JSON.parse(localStorage.getItem("newsItem"))


function newsfuc(){

    let detail = document.getElementById("newsDetail")

    let img = document.createElement("img")
    img.setAttribute("class","img")
    img.src=news.urlToImage

    let h2 = document.createElement("h2")
    h2.innerText=news.title

    let h3 = document.createElement("h3")
    h3.innerText=news.description

    detail.append(img,h2,h3)

}

newsfuc()
