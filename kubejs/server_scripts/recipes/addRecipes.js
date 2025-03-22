console.info("[SOCIETY] addRecipes.js loaded");

ServerEvents.recipes((e) => {
  e.shapeless("2x aquaculture:neptunium_nugget", [
    "society:neptunium_sea_coin",
    "minecraft:flint",
  ]).keepIngredient("minecraft:flint");
  e.shapeless("6x aquaculture:neptunium_nugget", [
    "society:neptunium_sea_coin",
    "society:primordial_neptunium",
  ]).keepIngredient("society:primordial_neptunium");

  // Chum
  e.shaped("society:bucket_of_thrasher_chum", ["bfb", "fBf", "bfb"], {
    f: "fishofthieves:splashtail",
    B: "minecraft:bucket",
    b: "minecraft:bone_meal",
  });
  e.shaped("society:bucket_of_book_chum", ["bfb", "fBf", "bfb"], {
    f: "eidolon:shadow_gem",
    B: "minecraft:bucket",
    b: "irons_spellbooks:epic_ink",
  });
  e.shaped("society:bucket_of_meat_chum", ["bfb", "fBf", "bfb"], {
    f: "biomancy:nutrient_bar",
    B: "biomancy:blood_bucket",
    b: "minecraft:bone_meal",
  });
  e.shaped("society:bucket_of_black_tiger_shrimp_chum", ["bfb", "fBf", "bfb"], {
    f: "fishofthieves:wildsplash",
    B: "minecraft:bucket",
    b: "minecraft:bone_meal",
  });

  e.shaped("society:bucket_of_nether_chum", ["bfb", "fBf", "bfb"], {
    f: "netherdepthsupgrade:searing_cod",
    B: "minecraft:bucket",
    b: "eidolon:warped_sprouts",
  })

  // Decrees
  e.shapeless(
    Item.of(
      "bountiful:decree",
      '{"bountiful:decree_data":\'{"ids":["professor"]}\'}'
    ),
    ["society:unholy_contract", "biomancy:primordial_core"]
  );

  e.shapeless(
    Item.of(
      "bountiful:decree",
      '{"bountiful:decree_data":\'{"ids":["hunter"]}\'}'
    ),
    [
      "irons_spellbooks:hogskin",
      "dimdungeons:block_portal_crown",
      "irons_spellbooks:rare_ink",
    ]
  );

  e.shaped(
    Item.of(
      "bountiful:decree",
      '{"bountiful:decree_data":\'{"ids":["gatekeeper"]}\'}'
    ),
    ["rsr", "cGc", "rNr"],
    {
      r: "eidolon:crimson_essence",
      s: Item.of(
        "irons_spellbooks:artificer_cane",
        '{ISBUpgrades:[{id:"irons_spellbooks:ender_power",slot:"mainhand",upgrades:3}]}'
      ).weakNBT(),
      c: "dimdungeons:block_portal_crown",
      G: "dimdungeons:block_portal_keyhole",
      N: "eidolon:notetaking_tools",
    }
  );

  e.shaped(
    Item.of(
      "bountiful:decree",
      '{"bountiful:decree_data":\'{"ids":["sushi_chef"]}\'}'
    ),
    ["rdf", "mGn", "csl"],
    {
      r: "aquaculture:neptunium_fishing_rod",
      d: "alexscaves:deep_sea_sushi_roll",
      f: "aquaculture:neptunium_fillet_knife",
      m: "farmersdelight:rice_roll_medley_block",
      G: "society:gourmand_contract",
      n: "netherdepthsupgrade:nether_rice_roll_medley_block",
      c: "sushigocrafting:cleaver_knife",
      s: "sushigocrafting:salmon_gunkan",
      l: "netherdepthsupgrade:lava_fishing_rod",
    }
  );

  e.shaped(
    Item.of(
      "bountiful:decree",
      '{"bountiful:decree_data":\'{"ids":["baker"]}\'}'
    ),
    [" b ", "pGp", " k "],
    {
      b: "bakery:bakery_standard",
      k: "herbalbrews:herbalbrews_standard",
      p: "endersdelight:chorus_pie_slice",
      G: "society:gourmand_contract",
    }
  );

  e.shaped(
    Item.of(
      "bountiful:decree",
      '{"bountiful:decree_data":\'{"ids":["bartender"]}\'}'
    ),
    ["nbn", "pGs", "nkn"],
    {
      b: "brewery:beer_standard",
      k: "vinery:vinery_standard",
      s: "brewery:netherite_brewingstation",
      p: "brewery:breathalyzer",
      G: "society:gourmand_contract",
      n: "nethervinery:netherite_nectar",
    }
  );

  e.shaped(
    Item.of(
      "bountiful:decree",
      '{"bountiful:decree_data":\'{"ids":["chef"]}\'}'
    ),
    ["abc", "dGe", "fgh"],
    {
      G: "society:gourmand_contract",
      a: "farmersdelight:roast_chicken_block",
      b: "farmersdelight:honey_glazed_ham_block",
      c: "farmersdelight:shepherds_pie_block",
      d: "nethersdelight:stuffed_hoglin",
      e: "farmersdelight:rice_roll_medley_block",
      f: "endersdelight:stuffed_shulker",
      g: "oceansdelight:guardian_soup",
      h: "farmersdelight:stuffed_pumpkin_block",
    }
  );
  // Misc
  e.shaped("obscure_api:astral_dust", [" E ", "nDn", " E "], {
    E: "irons_spellbooks:epic_ink",
    n: "aquaculture:neptunium_ingot",
    D: "society:aquamagical_dust",
  });

  e.smoking(
    "quark:bottled_cloud",
    Item.of("minecraft:potion", { Potion: "minecraft:water" }).weakNBT()
  );
  e.shapeless("upgrade_aquatic:driftwood_planks", ["aquaculture:driftwood"]);
  e.shapeless("2x minecraft:dragon_egg", [
    "minecraft:dragon_egg",
    "quark:dragon_scale",
  ]);
  e.shapeless("8x minecraft:calcite", [
    "minecraft:smooth_basalt",
    "biomancy:mineral_fragment",
  ]);
  e.shaped("8x upgrade_aquatic:coralstone", ["SSS", "SNS", "SSS"], {
    S: "minecraft:stone_bricks",
    N: "minecraft:nautilus_shell",
  });

  // Compat
  e.shaped("supplementaries:sack", ["csc", "c c", "ccc"], {
    s: "minecraft:string",
    c: "farmersdelight:canvas",
  });

  // Lead/Silver management
  e.shapeless("eidolon:lead_block", [
    "oreganized:lead_block",
    "eidolon:soul_shard",
  ]);
  e.shapeless("eidolon:silver_block", [
    "oreganized:silver_block",
    "eidolon:soul_shard",
  ]);
  e.shapeless("embers:lead_block", [
    "oreganized:lead_block",
    "embers:ember_shard",
  ]);
  e.shapeless("embers:silver_block", [
    "oreganized:silver_block",
    "embers:ember_shard",
  ]);
  e.shapeless("oreganized:lead_block", ["eidolon:lead_block"]);
  e.shapeless("oreganized:silver_block", ["eidolon:silver_block"]);
  e.shapeless("oreganized:lead_block", ["embers:lead_block"]);
  e.shapeless("oreganized:silver_block", ["embers:silver_block"]);

  // Dramatic Doors
  e.shapeless("dramaticdoors:short_silver_door", [
    "dramaticdoors:short_iron_door",
    "oreganized:silver_ingot",
  ]);
  e.shapeless("dramaticdoors:tall_silver_door", [
    "dramaticdoors:tall_iron_door",
    "oreganized:silver_ingot",
  ]);

  e.stonecutting(
    "2x dramaticdoors:short_quark_blossom_door",
    "quark:blossom_door"
  );

  // Bakery
  e.shapeless("bakery:cake_dough", [
    "#bakery:wheat",
    "minecraft:egg",
    "minecraft:sugar",
    "cookingforblockheads:cow_jar",
  ]).keepIngredient("cookingforblockheads:cow_jar");
  e.shapeless("bakery:sweet_dough", [
    "#bakery:wheat",
    "minecraft:egg",
    "minecraft:sugar",
    "ars_elemental:everfull_urn",
  ]).keepIngredient("ars_elemental:everfull_urn");
  e.shapeless("3x farmersdelight:wheat_dough", [
    "3x minecraft:wheat",
    "ars_elemental:everfull_urn",
  ]).keepIngredient("ars_elemental:everfull_urn");
  e.shaped("4x candlelight:dough", ["   ", "WUW", "WWW"], {
    U: "ars_elemental:everfull_urn",
    W: "#brewery:wheat",
  }).keepIngredient("ars_elemental:everfull_urn");
  e.shapeless("4x herbalbrews:water_cup", ["minecraft:water_bucket"]);
  e.shapeless("herbalbrews:milk_coffee", [
    "herbalbrews:coffee",
    "farmersdelight:milk_bottle",
  ]);

  e.custom({
    type: "farmersdelight:cutting",
    ingredients: [{ item: "herbalbrews:lavender" }],
    tool: { tag: "forge:tools/knives" },
    result: [{ item: "herbalbrews:lavender_blossom", count: 2 }],
  });
  e.custom({
    type: "farmersdelight:cutting",
    ingredients: [{ item: "overweight_farming:overweight_nether_wart_block" }],
    tool: { tag: "minecraft:hoes" },
    result: [{ item: "minecraft:nether_wart", count: 10 }],
  });

  // Neptuna
  e.custom({
    type: "farmersdelight:cutting",
    ingredients: [{ item: "aquaculture:neptuna" }],
    tool: { tag: "forge:tools/knives" },
    result: [{ item: "aquaculture:neptunium_nugget", count: 1 }],
  });

  // Scrolls
  e.shaped(
    Item.of(
      "irons_spellbooks:scroll",
      '{ISB_Spells:{data:[{id:"irons_spellbooks:recall",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}'
    ),
    ["nTn", "ESE", "nLn"],
    {
      T: "oreganized:silver_mirror",
      S: Item.of(
        "irons_spellbooks:scroll",
        '{ISB_Spells:{data:[{id:"irons_spellbooks:black_hole",index:0,level:5,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}'
      ).weakNBT(),
      L: "irons_spellbooks:legendary_ink",
      n: "aquaculture:neptunium_ingot",
      E: "irons_spellbooks:ender_upgrade_orb",
    }
  );

  e.shaped(
    Item.of(
      "irons_spellbooks:scroll",
      '{ISB_Spells:{data:[{id:"irons_spellbooks:portal",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}'
    ),
    ["nTn", "ESE", "nLn"],
    {
      T: "ars_nouveau:warp_scroll",
      S: Item.of(
        "irons_spellbooks:scroll",
        '{ISB_Spells:{data:[{id:"irons_spellbooks:black_hole",index:0,level:5,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}'
      ).weakNBT(),
      L: "irons_spellbooks:legendary_ink",
      n: "aquaculture:neptunium_ingot",
      E: "irons_spellbooks:ender_upgrade_orb",
    }
  );

  e.shaped(
    Item.of(
      "irons_spellbooks:scroll",
      '{ISB_Spells:{data:[{id:"irons_spellbooks:teleport",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}'
    ),
    ["nTn", "ESE", "nLn"],
    {
      T: "artifacts:chorus_totem",
      S: Item.of(
        "irons_spellbooks:scroll",
        '{ISB_Spells:{data:[{id:"irons_spellbooks:black_hole",index:0,level:5,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}'
      ).weakNBT(),
      L: "irons_spellbooks:legendary_ink",
      n: "aquaculture:neptunium_ingot",
      E: "irons_spellbooks:ender_upgrade_orb",
    }
  );

  global.threads.forEach((thread) => {
    e.custom({
      type: "ars_nouveau:enchanting_apparatus",
      keepNbtOfReagent: true,
      output: {
        item: "ars_nouveau:blank_thread",
      },
      pedestalItems: [
        {
          item: "ars_nouveau:bombegranate_pod",
        },
        {
          item: "ars_nouveau:bombegranate_pod",
        },
        {
          item: "ars_nouveau:bombegranate_pod",
        },
        {
          item: "ars_nouveau:bombegranate_pod",
        },
      ],
      reagent: [
        {
          item: thread.toString(),
        },
      ],
    }).id(
      `ars_nouveau:shapeless/uncraft_spell_${thread.toString().split(":")[1]}`
    );
  });
  // Misc
  e.shapeless("candlelight:rose", [
    "minecraft:rose_bush",
    "minecraft:shears",
  ]).keepIngredient("minecraft:shears");
  e.shapeless(
    Item.of(
      "eccentrictome:tome",
      '{"eccentrictome:mods":{advancedperipherals:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"advancedperipherals:manual"}}},alexscaves:{0:{Count:1b,id:"alexscaves:cave_book"}},ars_nouveau:{0:{Count:1b,id:"ars_nouveau:worn_notebook"}},buildinggadgets2:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"buildinggadgets2:buildinggadgets2book"}}},dimdungeons:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"dimdungeons:guide_book"}}},eidolon:{0:{Count:1b,id:"eidolon:codex"}},embers:{0:{Count:1b,id:"embers:ancient_codex"}},ftbquests:{0:{Count:1b,id:"ftbquests:book"}},irons_spellbooks:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"irons_spellbooks:iss_guide_book"}}},littlelogistics:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"littlelogistics:guide"}}},securitycraft:{0:{Count:1b,id:"securitycraft:sc_manual"}},solcarrot:{0:{Count:1b,id:"solcarrot:food_book"}},sushigocrafting:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"sushigocrafting:sushigocrafting"}}},tis3d:{0:{Count:1b,id:"tis3d:manual"}}},"eccentrictome:version":1}'
    ),
    ["minecraft:book", "#forge:bookshelves"]
  );
  e.shaped("cataclysm:bone_reptile_chestplate", ["A A", "BCB", "ABA"], {
    A: "cataclysm:ancient_metal_ingot",
    B: "cataclysm:koboleton_bone",
    C: "biomancy:primordial_cradle",
  });
  e.shaped("cataclysm:bulwark_of_the_flame", ["ABA", "CDC", "EBE"], {
    A: "embers:archaic_brick",
    B: "cataclysm:ignitium_ingot",
    C: "embers:flame_barrier",
    D: "minecraft:shield",
    E: "aquaculture:neptunium_ingot",
  });
  e.shaped("cataclysm:bone_reptile_helmet", ["ABA", "CDC", "EFE"], {
    A: "cataclysm:ancient_metal_ingot",
    B: "aquaculture:neptunium_ingot",
    C: "cataclysm:koboleton_bone",
    D: "cataclysm:kobolediator_skull",
    E: "biomancy:tough_fibers",
    F: "biomancy:living_flesh",
  });
  e.shaped("cataclysm:the_incinerator", ["ABC", "DCB", "EDA"], {
    A: "aquaculture:neptunium_ingot",
    B: "embers:cinder_jet",
    C: "cataclysm:ignitium_ingot",
    D: "embers:wildfire_core",
    E: "aquaculture:neptunium_sword",
  });
  e.shaped("cataclysm:wither_assault_shoulder_weapon", ["AB ", "BCD", " DA"], {
    A: "cataclysm:witherite_ingot",
    B: "embers:dawnstone_ingot",
    C: "embers:intelligent_apparatus",
    D: "embers:cinder_jet",
  });
  e.shaped("cataclysm:laser_gatling", ["AB ", "BCD", " DB"], {
    A: "embers:diffraction_barrel",
    B: "embers:dawnstone_ingot",
    C: "embers:intelligent_apparatus",
    D: "cataclysm:witherite_ingot",
  });
  e.shaped("cataclysm:meat_shredder", [" AB", " CA", "C  "], {
    A: "embers:intelligent_apparatus",
    B: "embers:dawnstone_block",
    C: "cataclysm:witherite_ingot",
  });
  e.shaped("cataclysm:cursed_bow", [" AB", "ACB", " DB"], {
    A: "cataclysm:cursium_ingot",
    B: "ars_nouveau:magebloom_fiber",
    C: "ars_elemental:anima_bangle",
    D: "cataclysm:black_steel_ingot",
  });
  e.shaped("cataclysm:soul_render", ["AA ", "AB ", " C "], {
    A: "cataclysm:cursium_ingot",
    B: "ars_elemental:necrotic_focus",
    C: "cataclysm:black_steel_ingot",
  });
  e.shaped("cataclysm:the_annihilator", [" A ", "BAB", " C "], {
    A: "cataclysm:cursium_ingot",
    B: "ars_elemental:anima_bangle",
    C: "cataclysm:black_steel_ingot",
  });
});
