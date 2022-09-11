
let btn = document.querySelector('.search')
let input = document.querySelector('.input')
let headline = document.querySelector('.headline')
let para = document.querySelector('.para')

btn.addEventListener("click", function () {
    // https://newsapi.org/v2/top-headlines?country=us&apiKey=7689a33b160242fe868be519e87f7035
    fetch("https://newsapi.org/v2/top-headlines?country="+ input.value 
    +"7689a33b160242fe868be519e87f7035")

    .then(result => result.json())
    .then(data => {
        console.log(data)
    })
})