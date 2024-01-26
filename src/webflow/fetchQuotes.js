import { GET_API_URL } from "./constants.js";

export async function fetchQuotes() {
  try {
    const response = await fetch(GET_API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
