import { getLocations } from "../database.js";

export const locationsList = () => {
    // Invoke the imported function to get array of locations objects
    const locations = getLocations()

    // Start building a string of each location
    let htmlString = `<div class="locations__header">Locations</div>
        <article class="locations-list">`
    
    // Create HTML representations of each location here
    for (const location of locations) {
        htmlString += `<div class="locations__item">`

        htmlString += `<div class="locations__title">${location.name}</div>`

        htmlString += `<div>${location.text}</div>`

        htmlString += `</div>`
    }

    htmlString += `</article>`

    return htmlString
}