// The QuoteController class represents the 'Controller' component in the Model-View-Controller (MVC) architectural pattern.
// The controller acts as an intermediary between the Model and the View components.
class QuoteController {
  constructor(model, view) {
    this.model = model; // Reference to the Model component.
    this.view = view; // Reference to the View component.

    // Register event handlers for user interactions in the View.

    // Register a click event handler for the "Get Quote" button.
    // Using .bind(this) ensures that the context (value of 'this') remains the QuoteController instance
    // when the event handler is called. This allows access to controller methods and properties.
    this.view.getNewQuoteButtonHandler(this.getAndDisplayNewQuote.bind(this));

    // Register a form submit event handler for adding new quotes.
    // Similarly, .bind(this) maintains the correct context for the addQuote method.
    this.view.addQuoteFormHandler(this.addQuote.bind(this));
  }

  // Method to fetch and display a new random quote.
  async getAndDisplayNewQuote() {
    try {
      const data = await this.model.fetchQuotes(); // Fetch quotes data from the Model.
      const random = Math.floor(Math.random() * data.length);
      this.view.displayQuote(data[random].quote); // Display a randomly selected quote in the View.
    } catch (error) {
      console.error("Error:", error);
    }
  }

  // Method to add a new quote to the Model and update the View.
  async addQuote(quote) {
    try {
      await this.model.postQuote(quote); // Post the new quote to the Model.
      this.getAndDisplayNewQuote(); // Fetch and display a new random quote after adding.
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

export default QuoteController;
