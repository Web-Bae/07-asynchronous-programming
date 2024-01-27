// QuoteView class represents the View in the MVC pattern.
// The view acts as the user interface
// View should handle... (1. View quote 2. Get new quote 3. Add new quote)
class QuoteView {
  constructor() {
    // DOM elements used for rendering and user interaction.
    this.quoteTextElement = document.querySelector(".quote-text"); // Display area for quotes.
    this.addQuoteForm = document.querySelector("#add-quote-form"); // Form for adding new quotes.
    this.addQuoteInput = document.querySelector("#add-quote-input"); // Input field for new quotes.
    this.getQuoteButton = document.querySelector("#get-quote-button"); // Button to fetch new quotes.
  }

  // Method to display a quote in the UI.
  displayQuote(quote) {
    this.quoteTextElement.textContent = quote;
  }

  // Method to set up a click event handler for the "Get Quote" button.
  getNewQuoteButtonHandler(callback) {
    this.getQuoteButton.addEventListener("click", callback);
  }

  // Method to set up a form submit event handler for adding new quotes.
  addQuoteFormHandler(callback) {
    this.addQuoteForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the default form submission behavior.
      event.stopPropagation(); // Stop event propagation to avoid unnecessary interactions.
      callback(this.addQuoteInput.value); // Invoke the provided callback with the input value.
      this.addQuoteInput.value = ""; // Clear the input field after submission.
    });
  }
}

export default QuoteView;
