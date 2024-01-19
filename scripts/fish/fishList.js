import { getFish } from "../database.js";

export const fishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fish-list">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {
        const fishFood = fish.food.map(fish => fish).join(", ")
        
        htmlString += `<section class="fish-card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__text">
                <div class="fish__name">${fish.name}</div>
                <div class="fish__species">${fish.species}</div>
                <div class="fish__length">Length (inches): ${fish.length}</div>
                <div class="fish__location">${fish.location}</div>
                <div class="fish__diet">Diet: ${fishFood}</div>
            </div>
        </section>
`
    }
    htmlString += "</article>"

    return htmlString
}