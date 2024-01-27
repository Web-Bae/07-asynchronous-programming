import QuoteModel from "./model.js";
import QuoteView from "./view.js";
import QuoteController from "./controller.js";

async function init() {
  const model = new QuoteModel();
  const view = new QuoteView();
  const controller = new QuoteController(model, view);

  await controller.getAndDisplayNewQuote(); // Fetch and display an initial quote
}

init();
