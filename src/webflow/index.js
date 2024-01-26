import { postNewQuote } from "./postNewQuote.js";
import { fetchQuotes } from "./fetchQuotes.js";

async function init() {
  getAndDisplayNewQuote();

  const getQuoteButton = document.querySelector("#get-quote-button");
  getQuoteButton.addEventListener("click", async () => {
    getAndDisplayNewQuote();
  });

  const addQuoteForm = document.querySelector("#add-quote-form");
  addQuoteForm.addEventListener("submit", async (event) => {
    console.log("Form submitted!");
    event.preventDefault();
    event.stopPropagation();
    await addQuote();
  });
}
init();

async function getAndDisplayNewQuote() {
  try {
    const data = await fetchQuotes();
    console.log(data);
    const quoteTextElement = document.querySelector(".quote-text");
    const random = Math.floor(Math.random() * data.length);
    quoteTextElement.textContent = data[random].quote;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function addQuote() {
  try {
    const quoteInputElement = document.querySelector("#add-quote-input");
    const quote = quoteInputElement.value;
    const data = await postNewQuote(quote);
    console.log(data);
    quoteInputElement.value = "";
  } catch (error) {
    console.error("Error:", error);
  }
}
