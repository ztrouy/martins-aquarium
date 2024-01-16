# Data Design

### Fish Properties
- Id `number`
- Image `image`
- Species `string`
- Length `number`
- Name `string`
- Harvest Location `string`
    - OR `object` with a name `string` and a coordinates `array` with 2 `numbers` inside
    - OR Id `number` of Harvest Location, which pulls relevant data from `object`
- Food `array` of `strings`

### Aside Properties
- Tank Cleaning Tips `array` of `strings`
- Maintaining Salinity Tips `array` of `strings`
- Maintaining Temperature Tips `array` of `strings`

### Quote Properties
- Id `number`
- Text `string`
- Author `string`
- Date `number`

### Locations Properties
- Id `number`
- Image `image`
- Harvest Location `string`
    - OR `object` with a name `string` and a coordinates `array` with 2 `numbers` inside
- Fish Harvested `array` of `objects` of Fish name `string` and Id `number`

---

# Page Design

### Fishes
Class Names
- fishes__header
    - fishes__item
        - fishes__textContent
            - fishes__name
            - fishes__foodContent
        - fishes__imageContent

Semantic Tags
- <section> around all fishes
    - <h2> above all fishes
    - <section> around each set of fish content
        - <section> around image content
        - <section> around all text content
            - <h3> for name of fish
            - <ul> around all text content other than name of fish
                - <li> for each text content other than name of fish
                - <ul> around text content of food for fish
                    - <li> for each text content of food for fish

### Locations
Class Names
- locations__header
    - locations__item
        - locations__imageContent
        - locations__textContent
            - locations__name
            - locations__listHeader
                - locations__listContent
Semantic Tags
- <section> around all locations
    - <h2> above all locations
    - <section> around each set of location content
        - <section> around image content
        - <section> around all text content
            - <h3> for name of location
            - <ul> around all fish harvested
                - <li> for each text content of fish harvested

### Quotes
Class Names
- quotes__header
    - quotes__item
        - quotes__textContent
        - quotes__name
Semantic Tags
- <section> around all quotes
    - <h2> above all quotes
    - <section> around each set of quotes content
        - <p> for all text content 

### Aside
Class Names
- care__header
    - care__subheader
    - care__textContent
Semantic Tags
- <aside> around all care information
    - <h2> above all care information
    - <section> around each category of care information
        - <h3> at top of a category of care information
        - <ol> around main text content
            - <li> for main text content