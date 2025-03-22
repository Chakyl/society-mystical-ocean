console.info("[SOCIETY] removeRecipes.js loaded");

ServerEvents.recipes((e) => {
  const removeByOutput = [
    // Cataclysm
    "cataclysm:abyssal_sacrifice",
    "cataclysm:bone_reptile_chestplate",
    "cataclysm:bulwark_of_the_flame",
    "cataclysm:the_incinerator",
    "cataclysm:wither_assault_shoulder_weapon",
    "cataclysm:meat_shredder",
    "cataclysm:cursed_bow",
    "cataclysm:laser_gatling",
    "cataclysm:the_annihilator",
    "cataclysm:soul_render",
    "cataclysm:bone_reptile_helmet",
    // Op items
    "ars_nouveau:annotated_codex",
    "ars_nouveau:annotated_codex",
    "dimdungeons:item_key_build",
    "shoppy:shop_block",
    // Silver unification
    "eidolon:silver_sword",
    "eidolon:silver_pickaxe",
    "eidolon:silver_axe",
    "eidolon:silver_shovel",
    "eidolon:silver_hoe",
    "eidolon:silver_boots",
    "eidolon:silver_leggings",
    "eidolon:silver_chestplate",
    "eidolon:silver_helmet",
    "eidolon:raw_silver",
    "eidolon:raw_silver_block",
    "eidolon:silver_nugget",
    "eidolon:silver_ingot",
    "eidolon:silver_block",
    "embers:silver_sword",
    "embers:silver_pickaxe",
    "embers:silver_axe",
    "embers:silver_shovel",
    "embers:silver_hoe",
    "embers:raw_silver",
    "embers:raw_silver_block",
    "embers:silver_nugget",
    "embers:silver_ingot",
    "embers:silver_block",
    // Lead unification
    "eidolon:raw_lead",
    "eidolon:raw_lead_block",
    "eidolon:lead_nugget",
    "eidolon:lead_ingot",
    "eidolon:lead_block",
    "embers:lead_sword",
    "embers:lead_pickaxe",
    "embers:lead_axe",
    "embers:lead_shovel",
    "embers:lead_hoe",
    "embers:raw_lead",
    "embers:raw_lead_block",
    "embers:lead_nugget",
    "embers:lead_ingot",
    "embers:lead_block",
    "candlelight:beetroot_crate",
    "candlelight:potato_crate",
    "candlelight:carrot_crate",
    "quark:blackstone_furnace",
    "quark:dirty_glass",
    // Decree
    "bountiful:decree",
    "bountiful:bountyboard",
    // Furniture dupes
    "#upgrade_aquatic:bedrolls",
    "vinery:apple_bag",
    "candlelight:dark_oak_cabinet",
    "candlelight:spruce_cabinet",
    "candlelight:birch_cabinet",
    "candlelight:oak_cabinet",
    "candlelight:acacia_cabinet",
    "candlelight:jungle_cabinet",
    "candlelight:mangrove_cabinet",
    "candlelight:warped_cabinet",
    "candlelight:crimson_cabinet",
    "candlelight:cherry_cabinet",
    "candlelight:bamboo_cabinet",
    "candlelight:red_nether_bricks_stove",
    "candlelight:quartz_stove",
    "candlelight:end_stove",
    "candlelight:cobblestone_stove",
    "candlelight:sandstone_stove",
    "candlelight:mud_stove",
    "herbalbrews:stove",
    "candlelight:granite_stove",
    "candlelight:deepslate_stove",
    "candlelight:stone_bricks_stove",
    "rehooked:wood_chain",
  ];

  const removeById = [
    // Electrum
    "oreganized:electrum_ingot",
    "functionalstorage:oak_drawer_alternate_x1",
    // DIMDUNS
    "dimdungeons:recipe_item_blank_build_key",
    // Toms Simple storage
    "toms_storage:adv_wireless_terminal",
    // Conflicts
    "eidolon:enchanted_ash_from_block",
    "quark:tweaks/smelting/bone_meal_utility",
    "farmersdelight:nether_salad",
    "farmersdelight:rice_roll_medley_block",
    "vinery:stripped_oak_log",
    "aquaculture:planks_from_driftwood",
    "candlelight:rose",
    "minecraft:lead",
    "minecraft:sticky_piston",
    "minecraft:cake",
    "luphieclutteredmod:floweringpurpleplanksrecipe",
    "luphieclutteredmod:stripped_f_lowering_purple_wood_recipe",
    "luphieclutteredmod:luphie_glow_wood_set_stick_recipe",
    "luphieclutteredmod:luphie_purple_plank_set_stick_recipe",
    "eccentrictome:tome",
    // Starbunclemania
    "starbunclemania:fluid/milk_to_source",
    // Translocators
    "translocators:diamond",
    "translocators:diamond_nugget",
    // Storage Upgrade conversions
    "sophisticatedstorage:storage_stack_upgrade_tier_1_plus_from_backpack_stack_upgrade_starter_tier",
    "sophisticatedstorage:storage_stack_upgrade_tier_2_from_backpack_stack_upgrade_tier_1",
    "sophisticatedstorage:storage_stack_upgrade_tier_3_from_backpack_stack_upgrade_tier_2",
    "sophisticatedstorage:storage_stack_upgrade_tier_4_from_backpack_stack_upgrade_tier_3",
    "sophisticatedstorage:storage_stack_upgrade_tier_5_from_backpack_stack_upgrade_tier_4",
    "sophisticatedstorage:backpack_stack_upgrade_starter_tier_from_storage_stack_upgrade_tier_1_plus",
    "sophisticatedstorage:backpack_stack_upgrade_tier_1_from_storage_stack_upgrade_tier_2",
    "sophisticatedstorage:backpack_stack_upgrade_tier_2_from_storage_stack_upgrade_tier_3",
    "sophisticatedstorage:backpack_stack_upgrade_tier_3_from_storage_stack_upgrade_tier_4",
    "sophisticatedstorage:backpack_stack_upgrade_tier_4_from_storage_stack_upgrade_tier_5",
    "sophisticatedstorage:backpack_feeding_upgrade_from_storage_feeding_upgrade",
    "sophisticatedstorage:storage_feeding_upgrade_from_backpack_feeding_upgrade",
    "sophisticatedstorage:storage_advanced_feeding_upgrade_from_backpack_advanced_feeding_upgrade",
    "sophisticatedstorage:backpack_advanced_feeding_upgrade_from_storage_advanced_feeding_upgrade",
  ];

  removeByOutput.forEach((item) => {
    e.remove({ output: item });
  });

  removeById.forEach((recipeId) => {
    e.remove({ id: recipeId });
  });
});
