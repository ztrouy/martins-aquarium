import { getFish } from "../database.js";

// Generates HTML for the fish section
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






// Returns only the fish that are a multiple of 3
export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    const originalFish = getFish()

    // Only pushes fish objects into the holyFish array if they are a multiple of 3
    for (const fish of originalFish) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }

    return holyFish
}



// Returns only the fish that are a multiple of 5
export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    const originalFish = getFish()
    
    // Only pushes fish objects into the soldiers array if they are a multiple of 5
    for (const fish of originalFish) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish)
        }
    }

    return soldiers
}



// Returns only the fish that are not a multiple of 3 OR 5
export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    const originalFish = getFish()

    for (const fish of originalFish) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            regularFish.push(fish)
        }
    }
    
    return regularFish
}



// Generates HTML for the filtered fish section
export const filteredFishList = () => {
    const holyFish = mostHolyFish()
    const soldiers = soldierFish()
    const regularFish = nonHolyFish()

    // Merges the three filtered arrays into a single array
    const fishes = holyFish.concat(soldiers, regularFish)

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