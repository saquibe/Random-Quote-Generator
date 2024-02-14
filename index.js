const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiUrl = "https://api.quotable.io/random"

async function getQuote(){

    try {

        //untill quote loading make button as loading and disable
        btnEl.innerText = "Loading...";
        btnEl.disabled = true;

        quoteEl.innerText = "Updating...";
        authorEl.innerText = "Updating...";

        const response = await fetch(apiUrl);
        //convert response to json and we make function async and data as await while request loading wait till that time
        const data = await response.json();
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        quoteEl.innerText = quoteContent;
        authorEl.innerText = "~ "+quoteAuthor;
        
        //after loading the content make button in its orignal and make availabe for next request
        btnEl.innerText = "get a quote";
        btnEl.disabled = false;
    } catch (error) {
        console.log(error);
        quoteEl.innerText = "An error happend please try again later";
        quoteEl.style.color = "red";
        authorEl.innerText = "An error happend please try again later"
        authorEl.style.color = "red";
        btnEl.innerText = "get a quote";
        btnEl.disabled = false;
    }
    
}
//call the function one time when user come to website showing only Quote after that he/she can request futher
getQuote();

btnEl.addEventListener("click", getQuote);