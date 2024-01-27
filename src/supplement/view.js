// view.js
class QuoteView {
  constructor() {
    this.quoteTextElement = document.querySelector(".quote-text");
    this.addQuoteForm = document.querySelector("#add-quote-form");
    this.addQuoteInput = document.querySelector("#add-quote-input");
    this.getQuoteButton = document.querySelector("#get-quote-button");
  }

  displayQuote(quote) {
    this.quoteTextElement.textContent = quote;
  }

  getNewQuoteButtonHandler(callback) {
    this.getQuoteButton.addEventListener("click", callback);
  }

  addQuoteFormHandler(callback) {
    this.addQuoteForm.addEventListener("submit", (event) => {
      event.preventDefault();
      event.stopPropagation();
      callback(this.addQuoteInput.value);
      this.addQuoteInput.value = "";
    });
  }
}

export default QuoteView;
