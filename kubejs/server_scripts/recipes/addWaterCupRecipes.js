console.info('[SOCIETY] addWaterCupRecipes.js loaded')

ServerEvents.recipes(e => {

    // Bakery
    e.custom({
        type: 'bakery:stove',
        ingredients: [
            {
                tag: 'bakery:dough'
            },
            {
                item: 'bakery:yeast'
            },
            {
                item: 'herbalbrews:water_cup'
            }
        ],
        item: 'bakery:crusty_bread',
        count: 4,
        experience: 0.35
    })
    e.custom({
        type: 'bakery:stove',
        ingredients: [
            {
                tag: 'bakery:dough'
            },
            {
                item: 'minecraft:sugar'
            },
            {
                item: 'herbalbrews:water_cup'
            }
        ],
        item: 'bakery:bread',
        count: 3,
        experience: 0.15
    })
})