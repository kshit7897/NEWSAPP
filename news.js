
var inputText = document.querySelector('.input_text');
var searchBtn = document.querySelector('.btn');
var container = document.querySelector('.container');

searchBtn.addEventListener('click',function(event){
    container.innerHTML =""

    fetch(`https://newsapi.org/v2/everything?q=${inputText.value}&from=2022-08-11&sortBy=publishedAt&apiKey=7689a33b160242fe868be519e87f7035
    `)
    .then(result=>result.json())
    .then(data=>{
        let articles = data["articles"]
        console.log(data)
        for(let i=0;i<10;i++){
            let article = articles[i]
            let display = `<div class="displayItem">
                <img src=${article["urlToImage"]}>
                <h1>${article["title"]} </h1>
                <p>${article["author"]}</p>
                <p>${article["description"]} <a href=${article["url"]}>Read more</a> </p>
              </div>`

            container.innerHTML+=display
          
            
        }
    }).catch(err=>alert("error"))
})












































// let btn = document.querySelector('.search')
// let input = document.querySelector('.newsinput')
// let headline = document.querySelector('.headline')
// let para = document.querySelector('.para')
// const displayItem=document.querySelector(".disply-item")

// btn.addEventListener("click", function () {
//     // GET https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY

//     // https://newsapi.org/v2/top-headlines?country=us&apiKey=7689a33b160242fe868be519e87f7035
//     fetch(`https://newsapi.org/v2/everything?q=${input.value}&from=2022-08-11&sortBy=publishedAt&apiKey=7689a33b160242fe868be519e87f7035`)

//     .then(result => result.json())
//     .then(data => {
//         console.log(data);
//         let articles=data["articles"];

//         // var para1 = data.articles[0].description
//         for(let i=0;i<10;i++){
//             // console.log(data[i].title)
//             let article=articles[i]
//             let html=`<div>
//             <h1${article["title"]}</h1>`
//             displayItem.innerHTML+=html;
//         }


//         // headline.textContent = head1
//         // para.textContent = para1
//     }).catch(err=>alert("Error"))
// })

