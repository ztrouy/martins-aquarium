import { getQuotes } from "../database";

export const quotesList = () => {
    // Invoke the imported function to get array of quote objects
    const quotes = getQuotes()
    
    // Start building a string of each quote
    let htmlString = `<article class="quotes-list">
        <div class="quotes__header">Quotes</div>`

    // Create HTML representations of each quote here
    for (const quote of quotes) {
        htmlString += `<div class="quotes__item">`

        htmlString += `<div class="quotes__name">${quote.name}</div>`

        htmlString += `<div class="quotes__text">${quote.quote}</div>`

        htmlString += `</div>`
    }

    htmlString += `</article>`

    return htmlString
}