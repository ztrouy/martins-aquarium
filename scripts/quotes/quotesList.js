import { getQuotes } from "../database";

export const quotesList = () => {
    // Invoke the imported function to get array of quote objects
    const quotes = getQuotes()
    
    // Start building a string of each quote
    let htmlString = `<article class="quotes-list">`

    // Create HTML representations of each quote here
    for (const quote of quotes) {
        
    }
}