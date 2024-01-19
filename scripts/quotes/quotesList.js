import { getQuotes } from "../database.js";

export const quotesList = () => {
    // Invoke the imported function to get array of quote objects
    const quotes = getQuotes()
    
    // Start building a string of each quote
    let htmlString = `<div class="quotes__header">Quotes</div>
        <article class="quotes-list">`

    // Create HTML representations of each quote here
    for (const quote of quotes) {
        htmlString += `<div class="quotes__item">`

        htmlString += `<div class="quotes__title">${quote.name}</div>`

        htmlString += `<div class="quotes__text">${quote.quote}</div>`

        htmlString += `</div>`
    }

    htmlString += `</article>`

    return htmlString
}