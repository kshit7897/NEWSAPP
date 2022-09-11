
let btn = document.querySelector('.search')
let input = document.querySelector('.newsinput')
let headline = document.querySelector('.headline')
let para = document.querySelector('.para')

btn.addEventListener("click", function () {
    // GET https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY

    // https://newsapi.org/v2/top-headlines?country=us&apiKey=7689a33b160242fe868be519e87f7035
    fetch(`https://newsapi.org/v2/everything?q=${input.value}&from=2022-08-11&sortBy=publishedAt&apiKey=7689a33b160242fe868be519e87f7035`)

    .then(result => result.json())
    .then(data => {
        console.log(data);

        var head1 = data [articles][0][title]



        headline.textContent = head1
    })
})