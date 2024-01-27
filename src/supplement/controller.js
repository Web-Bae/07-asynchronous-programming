class QuoteController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.getNewQuoteButtonHandler(this.getAndDisplayNewQuote.bind(this));
    this.view.addQuoteFormHandler(this.addQuote.bind(this));
  }

  async getAndDisplayNewQuote() {
    try {
      const data = await this.model.fetchQuotes();
      const random = Math.floor(Math.random() * data.length);
      this.view.displayQuote(data[random].quote);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async addQuote(quote) {
    try {
      await this.model.postQuote(quote);
      this.getAndDisplayNewQuote();
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

export default QuoteController;
