import { fetchQuotes, postNewQuote } from "./api.js";

class QuoteModel {
  async fetchQuotes() {
    return await fetchQuotes();
  }

  async postQuote(quote) {
    return await postNewQuote(quote);
  }
}

export default QuoteModel;
