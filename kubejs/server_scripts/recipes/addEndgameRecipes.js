console.info("[SOCIETY] addEndgameRecipes.js loaded");

ServerEvents.recipes((e) => {
  // Mastery Decrees
  let createMasteryRecipe = (type) => {
    e.shapeless(
      Item.of(
        "bountiful:decree",
        `{"bountiful:decree_data":\'{"ids":["${type}_shipping_master"]}\'}`
      ),
      [
        `society:${type}_mastery`,
        Item.of(
          "bountiful:decree",
          `{"bountiful:decree_data":\'{"ids":["${type}_shipping"]}\'}`
        ).weakNBT(),
        "2x aquaculture:neptunium_block",
      ]
    );
  };
  // Challenge Decrees
  let createChallengeRecipe = (type) => {
    e.smithing(
      Item.of(
        "bountiful:decree",
        `{"bountiful:decree_data":\'{"ids":["${type}_shipping_challenge"]}\'}`
      ),
      Item.of(
        "bountiful:decree",
        `{"bountiful:decree_data":\'{"ids":["${type}_shipping"]}\'}`
      ).weakNBT(),
      "society:gold_sea_coin"
    );
  };
  const professions = [
    "blacksmith",
    "cultivator",
    "fisher",
    "florist",
    "gourmand",
    "plunderer",
    "shady_wizard",
    "sifter",
    "trapper",
  ];
  professions.forEach((profession) => {
    createMasteryRecipe(profession);
    createChallengeRecipe(profession);
  });
  e.shapeless(
    "society:shipping_mastery",
    professions.map((profession) => {
      return `society:${profession}_mastery`;
    })
  );

  // Magic Mastery
  e.shaped("society:irons_spells_mastery", ["NIN", "ASB", "NIN"], {
    I: "irons_spellbooks:legendary_ink",
    N: "aquaculture:neptunium_block",
    S: Item.of(
      "irons_spellbooks:netherite_spell_book",
      '{ISBUpgrades:[{id:"irons_spellbooks:cooldown",slot:"spellbook",upgrades:10}],ISB_Spells:{data:[],maxSpells:12,mustEquip:1b,spellWheel:1b}}'
    ).weakNBT(),
    A: Item.of(
      "irons_spellbooks:amethyst_resonance_charm",
      '{ISBUpgrades:[{id:"irons_spellbooks:mana",slot:"necklace",upgrades:10}]}'
    ).weakNBT(),
    B: Item.of(
      "irons_spellbooks:blood_staff",
      '{ISBUpgrades:[{id:"irons_spellbooks:blood_power",slot:"mainhand",upgrades:10}]}'
    ).weakNBT(),
  });
  e.custom({
    type: "eidolon:worktable",
    pattern: ["SrP", "mHm", "CaA"],
    reagents: "UNEN",
    key: {
      S: {
        item: "eidolon:shadow_gem_block",
      },
      C: {
        item: "eidolon:crimson_gem_block",
      },
      A: {
        item: "eidolon:arcane_gold_block",
      },
      P: {
        item: "eidolon:pewter_block",
      },
      m: {
        item: "eidolon:magic_candlestick",
      },
      a: {
        item: "eidolon:soulbone_amulet",
      },
      r: {
        item: "eidolon:completed_research",
      },
      H: {
        item: "eidolon:holy_symbol",
      },
      U: {
        item: "eidolon:unholy_symbol",
      },
      N: {
        item: "aquaculture:neptunium_block",
      },
      E: {
        item: "eidolon:soul_enchanter",
      },
    },
    result: {
      item: "society:eidolon_mastery",
    },
  });

  e.custom({
    type: "eidolon:worktable",
    pattern: ["SnE", "IaB", "eHA"],
    reagents: "NNNN",
    key: {
      S: {
        item: "society:shipping_mastery",
      },
      E: {
        item: "society:embers_mastery",
      },
      I: {
        item: "society:irons_spells_mastery",
      },
      B: {
        item: "society:biomancy_mastery",
      },
      e: {
        item: "society:eidolon_mastery",
      },
      A: {
        item: "society:ars_nouveau_mastery",
      },
      n: {
        item: "aquaculture:neptuna",
      },
      H: {
        item: "minecraft:heart_of_the_sea",
      },
      a: {
        item: "eidolon:basic_amulet",
      },
      N: {
        item: "society:fading_aquamagic",
      },
    },
    result: {
      item: "society:heart_of_neptunium",
    },
  });
  e.shaped("society:fading_aquamagic", ["nNn", "cEc", "nNn"], {
    N: "aquaculture:neptunium_block",
    n: "aquaculture:neptunium_ingot",
    E: "society:aquamagical_essence",
    c: "society:neptunium_sea_coin",
  });
  e.shapeless(
    Item.of(
      "bountiful:decree",
      '{"bountiful:decree_data":\'{"ids":["professor_master"]}\'}'
    ),
    [
      "society:seed_of_evil",
      "society:unholy_contract",
      "aquaculture:neptunium_block",
    ]
  );
  e.shaped("society:heart_of_neptunium", [" f ", "fEf", " f "], {
    E: "society:empty_heart_of_neptunium",
    f: "society:fading_aquamagic",
  });
  e.shaped("society:embers_mastery", ["NBN", "LCL", "NbN"], {
    B: "embers:tyrfing",
    N: "aquaculture:neptunium_block",
    C: Item.of(
      "aetherworks:aether_crown",
      '{Damage:0,"embers:heat_tag":{augments:[{items:[{Count:1b,id:"embers:ancient_motive_core"}],level:1,name:"embers:core"},{items:[{Count:1b,id:"embers:intelligent_apparatus"},{Count:1b,id:"embers:intelligent_apparatus"},{Count:1b,id:"embers:intelligent_apparatus"},{Count:1b,id:"embers:intelligent_apparatus"},{Count:1b,id:"embers:intelligent_apparatus"}],level:5,name:"embers:intelligent_apparatus"}],heat:0.0f,heat_level:5}}'
    ).weakNBT(),
    L: "embers:winding_gears",
    b: "embers:dawnstone_block",
  }).keepIngredient("aetherworks:aether_crown");

  e.shaped("society:biomancy_mastery", ["NBN", "LSL", "NbN"], {
    B: "artifacts:everlasting_beef",
    N: "aquaculture:neptunium_block",
    S: "society:seed_of_evil",
    L: "biomancy:living_flesh",
    b: "biomancy:bloomberry",
  });
  e.shaped("society:archmage_clippings", ["GCG", "CAC", "GCG"], {
    A: "ars_nouveau:archmage_spell_book",
    G: "society:gold_sea_coin",
    C: "society:aquamagical_crystal",
  }).keepIngredient("ars_nouveau:archmage_spell_book");

  e.shaped("society:ars_nouveau_mastery", ["CWC", "NMN", "CAC"], {
    A: "ars_nouveau:arcane_core",
    W: "ars_nouveau:stable_warp_scroll",
    M: "ars_elemental:mark_of_mastery",
    C: "society:archmage_clippings",
    N: "aquaculture:neptunium_block",
  });

  e.shaped("cataclysm:abyssal_sacrifice", [" C ", " H ", " A "], {
    A: "cataclysm:athame",
    C: "cataclysm:coral_chunk",
    H: "society:heart_of_neptunium",
  }).replaceIngredient(
    "society:heart_of_neptunium",
    "society:empty_heart_of_neptunium"
  );
  e.shaped("cataclysm:abyssal_sacrifice", [" C ", " H ", " A "], {
    A: "cataclysm:athame",
    C: "cataclysm:crystallized_coral",
    H: "society:heart_of_neptunium",
  }).replaceIngredient(
    "society:heart_of_neptunium",
    "society:empty_heart_of_neptunium"
  );
});
