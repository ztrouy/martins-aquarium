/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            id: 1,
            name: "Kronos",
            species: "Spottail Pinfish",
            length: 7,
            location: "Chesapeake Bay",
            food: ["small invertebrates", "plants"],
            image: "https://i0.wp.com/mexican-fish.com/wp-content/uploads/F809-Spottail-Pinfish-5.jpg?resize=570%2C381&ssl=1"
        },
        {
            id: 2,
            name: "Nemo",
            species: "Clownfish",
            length: 4,
            location: "Great Barrier Reef",
            food: ["algae", "plankton"],
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Clown_fish_in_the_Andaman_Coral_Reef.jpg/1200px-Clown_fish_in_the_Andaman_Coral_Reef.jpg"
        },
        {
            id: 3,
            name: "Dory",
            species: "Blue Tang",
            length: 12,
            location: "Indo-Pacific Ocean",
            food: ["algae", "coral"],
            image: "https://upload.wikimedia.org/wikipedia/commons/1/13/Paletten-Doktorfisch_M%C3%BCnster.JPG"
        },
        {
            id: 4,
            name: "Bubbles",
            species: "Yellow Tang",
            length: 8,
            location: "Hawaii",
            food: ["algae", "seaweed"],
            image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Zebrasoma_flavescens_Luc_Viatour.jpg"
        },
        {
            id: 5,
            name: "Flounder",
            species: "Summer Flounder",
            length: 15,
            location: "North Atlantic Ocean",
            food: ["worms", "crustaceans"],
            image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Summer_flounder_photo4.jpg"
        },
        {
            id: 6,
            name: "Spike",
            species: "Green Spotted Puffer",
            length: 6,
            location: "Southeast Asia",
            food: ["snails", "shrimp"],
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Tetraodon_nigroviridis_1.jpg/640px-Tetraodon_nigroviridis_1.jpg"
        },
        {
            id: 7,
            name: "Goldie",
            species: "Goldfish",
            length: 10,
            location: "China",
            food: ["flakes", "pellets"],
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Common_goldfish.JPG/800px-Common_goldfish.JPG"
        },
        {
            id: 8,
            name: "Betta",
            species: "Betta Fish",
            length: 3,
            location: "Southeast Asia",
            food: ["flakes", "frozen food"],
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/HM_Orange_M_Sarawut.jpg/220px-HM_Orange_M_Sarawut.jpg"
        },
        {
            id: 9,
            name: "Coral",
            species: "Coral Beauty Angelfish",
            length: 4,
            location: "Indo-Pacific Ocean",
            food: ["algae", "brine shrimp"],
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Centropyge_bispinosa_1.jpg/1200px-Centropyge_bispinosa_1.jpg"
        },
        {
            id: 10,
            name: "Blu",
            species: "Blue Gourami",
            length: 6,
            location: "Southeast Asia",
            food: ["flakes", "vegetables"],
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Blue_dwarf_gourami_1.jpg/800px-Blue_dwarf_gourami_1.jpg"
        },
        {
            id: 11,
            name: "Pearl",
            species: "Pearl Gourami",
            length: 5,
            location: "Southeast Asia",
            food: ["flakes", "worms"],
            image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Fadenfisch_mosaik_m%C3%A4nnlich.jpg"
        },
        {
            id: 12,
            name: "Lily",
            species: "Lionhead Goldfish",
            length: 6,
            location: "China",
            food: ["flakes", "pellets"],
            image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/LionheadGoldfishSideviewRodsan18b.jpg"
        }
    ],
    locations: [
        {
            id: 1,
            name: "Chesapeake Bay",
            text: "I always loved fishing in the Chesapeake Bay. It was where I learned how to fish from my grandfather, who taught me everything he knew. He also taught me to respect the fish, and to harvest them only when I needed to. He called it harvesting, not catching, because he said it was more than just a sport. It was a way of life, a way of connecting with nature, and a way of honoring our ancestors.\n\nOne day, I decided to go fishing in the bay, hoping to catch some striped bass or blue crabs. I took my boat out to the water, and cast my line. I waited patiently, enjoying the breeze and the sun. After a while, I felt a tug on my line. I reeled it in, expecting to see a bass or a crab. But to my surprise, I saw a spottail pinfish. It was a small fish, with a silver body and a black spot on its tail. It looked at me with curious eyes, as if asking me what I was doing.\n\nI had never seen a spottail pinfish before. I wondered how it got here, since it was a saltwater fish that usually lived in warmer waters. Maybe it was a stray, or maybe it was part of a new population that was adapting to the bay. I admired its beauty, and felt a connection with it. I decided to keep it, and name it Kronos, after the Greek god of time. I thought it was a fitting name, since it reminded me of my grandfather, and the time we spent together fishing in the bay.",
            quote: "Cheapeake Bay is home to some of the most diverse and delicious fish in the world. You can find blue crabs, striped bass, oysters, and more. The key to harvesting fish here is to respect the local regulations and seasons, and to use the right bait and gear for each species."
        },
        {
            id: 2,
            name: "Great Barrier Reef",
            text: "I always dreamed of visiting the Great Barrier Reef. It was one of the most amazing places on Earth, with thousands of species of fish, coral, and other marine life. I wanted to see it for myself, and to experience its beauty and diversity. I saved up enough money to go on a diving trip, and booked a flight to Australia.\n\nI arrived at the reef, and put on my diving gear. I was ready to explore the underwater wonderland. I jumped into the water, and was greeted by a colorful array of fish. I saw parrotfish, butterflyfish, angelfish, and many more. I swam along the coral, and marveled at its shapes and colors. I felt like I was in a fairy tale, and I wanted to stay there forever.\n\nAs I was swimming, I noticed a clownfish hiding in an anemone. It was a bright orange fish, with white stripes and black outlines. It looked like a cartoon character, and I smiled. I remembered watching Finding Nemo as a kid, and how much I loved that movie. I decided to get closer, and see if I could make friends with the clownfish. I approached it slowly, and waved my hand. The clownfish peeked out of the anemone, and looked at me. It seemed friendly, and not afraid. I reached out my hand, and gently touched its fin. It didn't flinch, and instead, nuzzled my finger. I felt a warm feeling in my heart, and decided to name it Nemo, after the movie character. I thought it was a perfect name, since it was a clownfish, and it made me happy.",
            quote: "The Great Barrier Reef is a wonder of nature and a paradise for fish lovers. You can see colorful coral, exotic fish, turtles, sharks, and dolphins. The best way to harvest fish here is to go snorkeling or diving, and to use a spear or a net. But be careful not to damage the reef or disturb the marine life."
        },
        {
            id: 3,
            name: "Indo-Pacific Ocean",
            text: "I always enjoyed sailing in the Indo-Pacific Ocean. It was one of the largest and most diverse oceans in the world, with many islands, cultures, and ecosystems. I wanted to see as much as I could, and to learn from the people and the nature. I bought a sailboat, and set off on an adventure.\n\nI sailed from island to island, and met many friendly and hospitable people. They welcomed me into their homes, and shared their stories, traditions, and food. They also showed me their fishing techniques, and invited me to join them. I learned how to use nets, spears, traps, and hooks. I caught many different kinds of fish, and tasted many different kinds of dishes. I was grateful for their generosity, and their wisdom.\n\nOne day, I sailed to a remote island, where I met a group of fishermen. They told me they were going to fish for blue tangs, a type of surgeonfish that had a bright blue body and a yellow tail. They said they were very popular in the aquarium trade, and that they could sell them for a good price. They asked me if I wanted to join them, and I agreed. I was curious to see the blue tangs, and to learn more about them.\n\nWe took a boat to a nearby reef, where the blue tangs lived. We put on our masks and snorkels, and jumped into the water. We saw a school of blue tangs, swimming among the coral. They were very beautiful, and very fast. They darted in and out of the coral, and avoided our nets and hooks. They were very smart, and very elusive. I decided to try a different approach. I took a piece of coral, and held it in my hand. I swam slowly, and calmly, towards the blue tangs. I pretended to be interested in the coral, and not in the fish. I hoped to trick them, and to catch them off guard.\n\nAs I got closer, I saw a blue tang that was bigger and brighter than the others. It seemed to be the leader of the school, and the others followed its movements. It noticed me, and swam towards me. It looked at me, and at the coral in my hand. It seemed curious, and not afraid. It came closer, and closer, until it was within my reach. I waited for the right moment, and then, I grabbed it. I caught it, and put it in a bag. I felt a rush of adrenaline, and a sense of accomplishment. I decided to name it Dory, after the character from Finding Nemo. I thought it was a fitting name, since it was a blue tang, and it was adventurous.",
            quote: "The Indo-Pacific Ocean is a vast and rich area that covers many regions and cultures. You can find tuna, marlin, swordfish, mahi-mahi, and more. The best way to harvest fish here is to go deep-sea fishing, and to use a rod and a reel. But be prepared for a long and challenging fight."
        },
        {
            id: 4,
            name: "Hawaii",
            text: "I always wanted to visit Hawaii. It was one of the most beautiful and exotic places on Earth, with volcanoes, waterfalls, rainforests, and beaches. I wanted to see it for myself, and to experience its culture and history. I won a lottery, and got a free trip to Hawaii.\n\nI arrived at Hawaii, and checked into my hotel. I was excited to explore the island, and to try new things. I signed up for a surfing lesson, a hiking tour, a luau, and a snorkeling trip. I had a lot of fun, and learned a lot. I saw amazing sights, and met amazing people.\n\nOn the last day of my trip, I went snorkeling in a bay, where I heard there were many tropical fish. I put on my mask and fins, and jumped into the water. I was amazed by the variety and abundance of fish. I saw triggerfish, wrasse, damselfish, and many more. I swam along the rocks, and admired the fish. I felt like I was in a paradise, and I wanted to take a souvenir.\n\nAs I was snorkeling, I spotted a yellow tang, a type of surgeonfish that had a bright yellow body and a white spine. It was a very attractive and popular fish, and I wanted to have it. I followed it, and tried to catch it. It was very agile, and very slippery. It dodged my hands, and escaped my grasp. It was very clever, and very stubborn. I decided to use a different tactic. I took a piece of seaweed, and held it in my hand. I swam slowly, and gently, towards the yellow tang. I pretended to be friendly, and not hostile. I hoped to lure it, and to catch it by surprise.\n\nAs I approached, I saw the yellow tang look at me, and at the seaweed in my hand. It seemed hungry, and not wary. It came closer, and closer, until it was within my reach. I waited for the right moment, and then, I grabbed it. I caught it, and put it in a bag. I felt a thrill of joy, and a pang of guilt. I decided to name it Bubbles, after the character from Finding Nemo. I thought it was a suitable name, since it was a yellow tang, and it liked seaweed.",
            quote: "Hawaii is a beautiful and relaxing place to enjoy the sun, the sand, and the sea. You can find wahoo, ono, ahi, and more. The best way to harvest fish here is to go trolling, and to use a lure or a live bait. But be respectful of the Hawaiian traditions and customs."
        },
        {
            id: 5,
            name: "North Atlantic Ocean",
            text: "I always hated fishing in the North Atlantic Ocean. It was one of the most cold and harsh oceans in the world, with strong winds, big waves, and dangerous icebergs. I didn't want to fish there, but I had to. It was my job, and my livelihood. I worked on a fishing boat, and caught fish for a living.\n\nI left the port, and headed to the fishing grounds. I prepared my gear, and waited for the signal. I hoped to catch some cod, haddock, or halibut. They were the most valuable and tasty fish, and the most in demand. I also hoped to avoid some flounder, skate, or dogfish. They were the least desirable and nasty fish, and the most abundant.\n\nOne day, I got the signal, and cast my net. I pulled it in, expecting to see some cod, haddock, or halibut. But to my dismay, I saw a flounder. It was a flat fish, with both eyes on one side of its head. It looked at me with a dull expression, as if mocking me.\n\nI had caught a flounder before, and I hated it. It was a boring and bland fish, with no flavor or texture. It was also a pain to clean and cook, with its slimy skin and bony flesh. I wanted to throw it back into the water, and forget about it. But I couldn't. I had to keep it, and sell it. It was part of my job, and my duty. I decided to name it Flounder, after the character from The Little Mermaid. I thought it was an ironic name, since it was a flounder, and it was miserable.",
            quote: "The North Atlantic Ocean is a cold and stormy place that tests the skills and courage of any fisherman. You can find cod, haddock, halibut, and more. The best way to harvest fish here is to go trawling, and to use a net or a hook. But be ready for any weather and any danger."
        },
        {
            id: 6,
            name: "Southeast Asia",
            text: "I always admired fishing in South and Southeast Asia. It was one of the most rich and diverse regions in the world, with many rivers, lakes, and ponds. I wanted to fish there, and to learn from the locals. I was a researcher, and a student. I studied fish, and their behavior.\n\nI traveled to Southeast Asia, and visited many places. I met many fishermen, and fish farmers. They taught me how to fish, and how to breed fish. They showed me their methods, and their secrets. I caught many different kinds of fish, and observed many different kinds of behaviors. I was fascinated by their knowledge, and their skill.\n\nOne day, I went to a fish farm, where I met a fish farmer. He told me he was breeding green spotted puffers, a type of pufferfish that had green spots and black stripes. He said they were very popular as pets, and that they could sell them for a high price. He asked me if I wanted to see them, and I agreed. I was curious to see the green spotted puffers, and to learn more about them.\n\nWe went to a pond, where the green spotted puffers were kept. We put on our gloves and nets, and scooped some water. We saw a few green spotted puffers, swimming in the water. They were very cute, and very spiky. They puffed up their bodies, and showed their teeth. They were very playful, and very aggressive. I decided to try a different experiment. I took a snail, and held it in my hand. I dipped it into the water, and waited for the reaction. I hoped to test their intelligence, and their appetite.\n\nAs I did that, I saw a green spotted puffer that was bigger and greener than the others. It seemed to be the dominant one, and the others followed its lead. It noticed me, and the snail in my hand. It seemed interested, and not scared. It swam towards me, and bit the snail. It cracked the shell, and ate the flesh. It looked at me, and smiled. It seemed satisfied, and not hungry. I decided to name it Spike, after the character from Buffy the Vampire Slayer. I thought it was a fitting name, since it was a green spotted puffer, and it was fierce.",
            quote: "Southeast Asia is a vibrant and diverse place that offers a variety of flavors and experiences. You can find tilapia, catfish, carp, and more. The best way to harvest fish here is to go freshwater fishing, and to use a line or a trap. But be aware of the local laws and customs."
        },
        {
            id: 7,
            name: "China",
            text: "I always respected fishing in China. It was one of the most ancient and influential civilizations in the world, with many philosophies, arts, and sciences. I wanted to fish there, and to appreciate its culture and history. I was a traveler, and a seeker. I explored fish, and their meaning.\n\nI went to China, and visited many sites. I saw many temples, gardens, and palaces. I learned about many religions, traditions, and legends. I also saw many ponds, where fish were kept and admired. I learned that fish were symbols of luck, prosperity, and harmony. I wanted to have some fish, and to share their blessings.\n\nOne day, I went to a market, where I saw a vendor selling fish. He had many kinds of fish, but the most common and popular ones were goldfish. He said they were very easy to keep and care for, and that they could bring good fortune and happiness. He asked me if I wanted to buy one, and I said yes. I was curious to see the goldfish, and to learn more about them.\n\nHe showed me a tank, where the goldfish were swimming. They were very beautiful, and very colorful. They had different shapes and sizes, and different patterns and markings. They swam gracefully, and peacefully. They were very elegant, and very serene. I decided to choose one. I picked a goldfish that had a round body, and a long tail. It was a bright orange, with a black spot on its head. It looked at me, and blinked. It seemed friendly, and not shy. I decided to name it Goldie, after the character from Goldilocks and the Three Bears. I thought it was a suitable name, since it was a goldfish, and it was just right.",
            quote: "China is a ancient and modern place that blends tradition and innovation. You can find sturgeon, salmon, trout, and more. The best way to harvest fish here is to go aquaculture fishing, and to use a cage or a pond. But be respectful of the Chinese culture and history."
        }
    ],
    tips: [
        {
            id: 1,
            name: "Keeping it Clean",
            tips: [
                "Use a good filter and clean/change it often",
                "Change 20%-30% water every two weeks and vacuum the gravel",
                "Don’t overfeed and remove leftover food and dead plants",
                "Scrape off algae from glass and decorations",
                "Test and adjust water quality regularly"
            ]
        },
        {
            id: 2,
            name: "Maintaining Salinity",
            tips: [
                "Measure salinity with a refractometer or hydrometer and keep it in the right range",
                "Prepare and match saltwater in a bucket before adding it to the tank",
                "Top off evaporation with fresh water only, not salt water",
                "Use an auto top off or water exchange system to automate water addition",
                "Wipe off salt creep and add fresh water to the tank"
            ]
        },
        {
            id: 3,
            name: "Maintaining Temperature",
            tips: [
                "Monitor temperature with a thermometer and keep it in the right range",
                "Use a heater or chiller with a thermostat to control temperature",
                "Avoid placing the tank near sunlight, drafts, or temperature sources",
                "Use a fan, cooler, or ice packs to lower temperature if too hot",
                "Change temperature gradually, no more than 2 degrees per hour"
            ]
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getQuotes = () => {
    return database.locations.map(quote => ({...quote}))
}

export const getLocations = () => {
    return database.locations.map(location => ({...location}))
}

export const getTips = () => {
    return database.tips.map(tip => ({...tip}))
}