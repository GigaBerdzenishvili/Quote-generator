"use strict";

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];
// Show Loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

//Hide Loading
function complete() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

//Show new Quote
function newQuote() {
  loading();

  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  //Settin Text and author
  authorText.textContent = quote.author;
  quoteText.textContent = quote.text;

  complete();
}

//Get quotes from api
async function getQuotes() {
  loading();
  const api = "https://type.fit/api/quotes";

  try {
    const res = await fetch(api);
    apiQuotes = await res.json();
    newQuote();
  } catch (error) {
    //Alert error
    console.log(error);
  }
}

newQuoteBtn.addEventListener("click", newQuote);

getQuotes();
