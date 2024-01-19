export const navList = () => {
    let htmlString = '<div class="nav__bar">'
    
    htmlString += `<div class="nav__element"><a href="#fish">Fish List</a></div>`

    htmlString += `<div class="nav__element"><a href="#quotes">Quotes</a></div>`

    htmlString += `<div class="nav__element"><a href="#locations">Locations</a></div>`

    htmlString += `</div>`

    return htmlString
}