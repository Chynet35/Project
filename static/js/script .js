const quote = document.getElementById("quote")
const author = document.getElementById("author")
const apiUrl = "https://api.quotable.io/random"

async function getQuote(url){
    const response = await fetch(url)
    let data = await response.json()
    quote.innerHTML = data.content
    author.innerHTML = data.author
}

getQuote(apiUrl)

// Function to generate random quote
function generateQuote() {
    //Make an AJAX request to the server
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/random-quote", true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const quoteData = JSON.parse(xhr.responseText);
            document.getElementById("quote").textContent = quoteData.quote;
            document.getElementById("author").textContent = quoteData.author;
        }
    };
}

// Event listener for the "New Quote" button
document.getElementById("newQuoteBtn").addEventListener("click", generateQuote);

// Generate an initial quote on page load
generateQuote();
