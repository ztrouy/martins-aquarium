import { getTips } from "../database.js";

export const tipsList = () => {
    // Gets array of tips from the database
    const tips = getTips()

    // Starts the HTML that will be returned
    let htmlString = `<article class="tips-list">
        <div class="tips__header">Tips for Tanks</div>`

    // Iterates over each type of tip in the array
    for (const tip of tips) {
        htmlString += `<section class="tips__item">
            <div class="tips__title">${tip.name}</div>
            <ul class="tips__content">
                <li>`
        
        htmlString += tip.tips.map(tip => tip).join("</li><li>")

        htmlString += `</ul></section>\n`
    }

    htmlString += `</article>`

    return htmlString
}