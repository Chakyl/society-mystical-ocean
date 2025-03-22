console.info('[SOCIETY] addTierUpgradeRecipes.js loaded')

ServerEvents.recipes(e => {
    e.custom({
        type: 'biomancy:bio_forging',
        bio_forge_tab: 'biomancy:tools',
        ingredients: [
            {
                item: 'sophisticatedstorage:upgrade_base'
            },
            {
                count: 1,
                item: 'biomancy:fleshkin_chest'
            },
            {
                count: 2,
                item: 'biomancy:essence'
            },
            {
                count: 6,
                item: 'society:aquamagical_dust'
            },
            {
                count: 3,
                item: 'aquaculture:neptunium_nugget'
            }
        ],
        nutrientsCost: 450,
        result: {
            item: 'sophisticatedstorage:stack_upgrade_tier_1'
        }
    })
    e.custom({
        type: 'biomancy:bio_forging',
        bio_forge_tab: 'biomancy:tools',
        ingredients: [
            {
                item: 'sophisticatedstorage:stack_upgrade_tier_1'
            },
            {
                count: 1,
                item: 'biomancy:fleshkin_chest'
            },
            {
                count: 2,
                item: 'biomancy:essence'
            },
            {
                count: 12,
                item: 'society:aquamagical_dust'
            },
            {
                count: 6,
                item: 'aquaculture:neptunium_nugget'
            }
        ],
        nutrientsCost: 450,
        result: {
            item: 'sophisticatedstorage:stack_upgrade_tier_1_plus'
        }
    })
    e.custom({
        type: 'biomancy:bio_forging',
        bio_forge_tab: 'biomancy:tools',
        ingredients: [
            {
                item: 'sophisticatedstorage:stack_upgrade_tier_1_plus'
            },
            {
                count: 1,
                item: 'biomancy:fleshkin_chest'
            },
            {
                count: 2,
                item: 'biomancy:essence'
            },
            {
                count: 6,
                item: 'society:aquamagical_dust'
            },
            {
                count: 3,
                item: 'aquaculture:neptunium_nugget'
            }
        ],
        nutrientsCost: 450,
        result: {
            item: 'sophisticatedstorage:stack_upgrade_tier_2'
        }
    })
    e.custom({
        type: 'biomancy:bio_forging',
        bio_forge_tab: 'biomancy:tools',
        ingredients: [
            {
                item: 'sophisticatedstorage:stack_upgrade_tier_1'
            },
            {
                count: 2,
                item: 'biomancy:fleshkin_chest'
            },
            {
                count: 4,
                item: 'biomancy:essence'
            },
            {
                count: 18,
                item: 'society:aquamagical_dust'
            },
            {
                count: 1,
                item: 'aquaculture:neptunium_ingot'
            }
        ],
        nutrientsCost: 450,
        result: {
            item: 'sophisticatedstorage:stack_upgrade_tier_2'
        }
    })
    e.custom({
        type: 'biomancy:bio_forging',
        bio_forge_tab: 'biomancy:tools',
        ingredients: [
            {
                item: 'sophisticatedstorage:stack_upgrade_tier_2'
            },
            {
                count: 3,
                item: 'biomancy:fleshkin_chest'
            },
            {
                count: 6,
                item: 'biomancy:essence'
            },
            {
                count: 18,
                item: 'society:aquamagical_dust'
            },
            {
                count: 1,
                item: 'aquaculture:neptunium_ingot'
            }
        ],
        nutrientsCost: 450,
        result: {
            item: 'sophisticatedstorage:stack_upgrade_tier_3'
        }
    })
    e.custom({
        type: 'biomancy:bio_forging',
        bio_forge_tab: 'biomancy:tools',
        ingredients: [
            {
                item: 'sophisticatedstorage:stack_upgrade_tier_3'
            },
            {
                count: 4,
                item: 'biomancy:fleshkin_chest'
            },
            {
                count: 8,
                item: 'biomancy:essence'
            },
            {
                count: 54,
                item: 'society:aquamagical_dust'
            },
            {
                count: 3,
                item: 'aquaculture:neptunium_ingot'
            }
        ],
        nutrientsCost: 450,
        result: {
            item: 'sophisticatedstorage:stack_upgrade_tier_4'
        }
    })
    e.custom({
        type: 'biomancy:bio_forging',
        bio_forge_tab: 'biomancy:tools',
        ingredients: [
            {
                item: 'sophisticatedstorage:stack_upgrade_tier_4'
            },
            {
                count: 5,
                item: 'biomancy:fleshkin_chest'
            },
            {
                count: 10,
                item: 'biomancy:essence'
            },
            {
                count: 2,
                item: 'minecraft:netherite_block'
            },
            {
                count: 81,
                item: 'society:aquamagical_dust'
            }
            
        ],
        nutrientsCost: 450,
        result: {
            item: 'sophisticatedstorage:stack_upgrade_tier_5'
        }
    })
})