async function searchByCountry(e){

    let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${e}`
    let data =await fetch(url)
    let data1 = await data.json()
    let res = data1.articles
    appendData(res)
}

function appendData(res){
  
    let newsResult= document.getElementById("news_result")
    newsResult.innerHTML=null 

    res.forEach(function(ele,ind){
         
        let card = document.createElement("div")
        card.setAttribute("class","news")
        card.addEventListener("click",function(){
            localStorage.setItem("newsItem",JSON.stringify(ele))
            window.location.href="news.html"
        })
     
        let imgDiv = document.createElement("div")
        imgDiv.setAttribute("class","img")

        let restDiv = document.createElement("div")
        restDiv.setAttribute("class","restDiv")

        let img = document.createElement("img")
        img.src=ele.urlToImage
        img.setAttribute("class","imgnews")

        imgDiv.append(img)

        let title = document.createElement("h3")
        title.innerText=ele.title

        let author = document.createElement("h3")
        author.innerText=ele.author




        restDiv.append(title,author)
        card.append(imgDiv,restDiv)
        newsResult.append(card)
    });
}


async function searchByInput(e){

    let url = `https://masai-mock-api.herokuapp.com/news?q=${e}`
    let data =await fetch(url)
    let data1 = await data.json()
    // console.log(data1)
    let res = data1.articles
    appendData(res)
}


function SearchFunc(e){
    let value  = document.getElementById("search_box").value
    if(e.key=="Enter"){
        searchByInput(value)
    }
}


let defaultNews = JSON.parse(localStorage.getItem("user"))
searchByCountry(defaultNews.country)
// console.log(defaultNews.country)