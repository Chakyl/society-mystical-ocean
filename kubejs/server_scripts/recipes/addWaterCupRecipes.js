console.info('[SOCIETY] addWaterCupRecipes.js loaded')

ServerEvents.recipes(e => {
    e.custom({
        type: 'herbalbrews:kettle_brewing',
        experience: 0.8,
        ingredients: [
            {
                item: 'herbalbrews:dried_black_tea'
            },
            {
                item: 'herbalbrews:water_cup'
            },
            {
                item: 'minecraft:sugar'
            }
        ],
        result: {
            item: 'herbalbrews:black_tea'
        }
    })
    e.custom({
        type: 'herbalbrews:kettle_brewing',
        experience: 0.8,
        ingredients: [
            {
                item: 'herbalbrews:coffee_beans'
            },
            {
                item: 'herbalbrews:water_cup'
            }
        ],
        result: {
            item: 'herbalbrews:coffee'
        }
    })
    e.custom({
        type: 'herbalbrews:kettle_brewing',
        experience: 0.8,
        ingredients: [
            {
                item: 'herbalbrews:dried_green_tea'
            },
            {
                item: 'herbalbrews:water_cup'
            }
        ],
        result: {
            item: 'herbalbrews:green_tea'
        }
    })
    e.custom({
        type: 'herbalbrews:kettle_brewing',
        experience: 0.8,
        ingredients: [
            {
                item: 'herbalbrews:hibiscus'
            },
            {
                item: 'herbalbrews:water_cup'
            },
            {
                item: 'minecraft:sugar'
            }
        ],
        result: {
            item: 'herbalbrews:hibiscus_tea'
        }
    })
    e.custom({
        type: 'herbalbrews:kettle_brewing',
        experience: 0.8,
        ingredients: [
            {
                item: 'herbalbrews:lavender_blossom'
            },
            {
                item: 'herbalbrews:water_cup'
            },
            {
                item: 'minecraft:sugar'
            }
        ],
        result: {
            item: 'herbalbrews:lavender_tea'
        }
    })
    e.custom({
        type: 'herbalbrews:kettle_brewing',
        experience: 0.8,
        ingredients: [
            {
                item: 'herbalbrews:dried_oolong_tea'
            },
            {
                item: 'herbalbrews:water_cup'
            }
        ],
        result: {
            item: 'herbalbrews:oolong_tea'
        }
    })
    e.custom({
        type: 'herbalbrews:kettle_brewing',
        experience: 0.8,
        ingredients: [
            {
                item: 'herbalbrews:rooibos_leaf'
            },
            {
                item: 'herbalbrews:water_cup'
            }
        ],
        result: {
            item: 'herbalbrews:rooibos_tea'
        }
    })
    e.custom({
        type: 'herbalbrews:kettle_brewing',
        experience: 0.8,
        ingredients: [
            {
                item: 'herbalbrews:yerba_mate_leaf'
            },
            {
                item: 'herbalbrews:water_cup'
            },
            {
                item: 'minecraft:sugar'
            }
        ],
        result: {
            item: 'herbalbrews:yerba_mate_tea'
        }
    })

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