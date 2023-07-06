let quotenum = document.getElementsByClassName('advice-title')
let quote = document.getElementsByClassName('quote-para')
let btn = document.getElementById('randomize-btn')

function fetchQuote(url) {
    fetch(url).then((res) => res.json()).then((data) => {
        quotenum[0].innerHTML = `Advice #${data.slip.id}`
        quote[0].innerHTML = `${data.slip.advice}`
    })
}


fetchQuote('https://api.adviceslip.com/advice')

function randomizeQuote() {
    fetchQuote('https://api.adviceslip.com/advice')
}


btn.addEventListener('click', randomizeQuote)