import { API_URL } from "https://cdn.jsdelivr.net/gh/Web-Bae/07-asynchronous-programming@0/src/webflow/constants.js";

export async function fetchQuotes() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
