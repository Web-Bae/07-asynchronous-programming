// The QuoteModel class represents the 'Model' component in the Model-View-Controller (MVC) architectural pattern.

import { fetchQuotes, postNewQuote } from "./api.js";

// The model acts as the data layer.
class QuoteModel {
  // Method to fetch quotes data from the API.
  // This method communicates with the external data source (API) to retrieve quotes.
  async fetchQuotes() {
    return await fetchQuotes(); // Delegates the actual fetching to the API functions.
  }

  // Method to post a new quote to the API.
  // This method sends a new quote to the external data source (API) for storage.
  async postQuote(quote) {
    return await postNewQuote(quote); // Delegates the actual posting to the API functions.
  }
}

export default QuoteModel;
