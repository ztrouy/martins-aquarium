import { navList } from "./nav/navList.js"
import { fishList, filteredFishList } from "./fish/fishList.js"
import { tipsList } from "./tips/tipList.js"
import { quotesList } from "./quotes/quotesList.js"
import { locationsList } from "./locations/locationsList.js"

const navHTMLElement = document.querySelector("#nav")
navHTMLElement.innerHTML = navList()

const fishHTMLElement = document.querySelector("#fish")
// fishHTMLElement.innerHTML = fishList()
fishHTMLElement.innerHTML = filteredFishList()

const tipsHTMLElement = document.querySelector("#tips")
tipsHTMLElement.innerHTML = tipsList()

const quotesHTMLElement = document.querySelector("#quotes")
quotesHTMLElement.innerHTML = quotesList()

const locationsHTMLElement = document.querySelector("#locations")
locationsHTMLElement.innerHTML = locationsList()