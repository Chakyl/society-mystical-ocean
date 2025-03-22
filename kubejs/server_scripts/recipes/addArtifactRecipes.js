console.info("[SOCIETY] addArtifactRecipes.js loaded");

ServerEvents.recipes((e) => {
  e.shaped("artifacts:universal_attractor", ["l s", "SLS", "ISI"], {
    l: "oreganized:lead_ingot",
    s: "oreganized:silver_ingot",
    S: "irons_spellbooks:shriving_stone",
    L: "irons_spellbooks:lightning_bottle",
    I: "irons_spellbooks:legendary_ink",
  });

  e.shaped("artifacts:crystal_heart", ["GZG", "ICI", "GJG"], {
    J: "vinery:jo_special_mixture",
    Z: "eidolon:zombie_heart",
    G: "irons_spellbooks:greater_healing_potion",
    C: "irons_spellbooks:upgrade_orb",
    I: "irons_spellbooks:legendary_ink",
  });

  e.shaped("artifacts:whoopee_cushion", ["LLL", "RBR", "LLL"], {
    R: "irons_spellbooks:blood_rune",
    L: "minecraft:leather",
    B: "supplementaries:bellows",
  });

  e.shaped("artifacts:scarf_of_invisibility", ["MLM", "RIR", "MLM"], {
    R: "irons_spellbooks:evocation_rune",
    L: "irons_spellbooks:greater_evasion_elixir",
    I: "irons_spellbooks:invisibility_ring",
    M: "irons_spellbooks:magic_cloth",
  });

  e.shaped("artifacts:superstitious_hat", ["MLM", "RGR", "MFM"], {
    R: "irons_spellbooks:ender_rune",
    L: Item.of(
      "minecraft:potion",
      '{Potion:"buzzier_bees:strong_luck"}'
    ).weakNBT(),
    G: "minecraft:raw_gold_block",
    M: "irons_spellbooks:magic_cloth",
    F: "minecraft:rabbit_foot",
  });

  e.shaped("artifacts:running_shoes", ["MMM", "RBR", "MMM"], {
    R: "irons_spellbooks:fire_rune",
    B: Item.of(
      "minecraft:leather_boots",
      '{Damage:0,ISBUpgrades:[{id:"irons_spellbooks:fire_power",slot:"feet",upgrades:10}]}'
    ).weakNBT(),
    M: "irons_spellbooks:magic_cloth",
  });

  e.shaped("artifacts:cloud_in_a_bottle", ["ALA", "RCR", "ALA"], {
    R: "irons_spellbooks:lightning_rune",
    L: "irons_spellbooks:lightning_bottle",
    C: "quark:bottled_cloud",
    A: "irons_spellbooks:arcane_essence",
  });

  e.shaped("artifacts:aqua_dashers", ["MKM", "RBR", "MKM"], {
    R: "irons_spellbooks:ice_rune",
    B: Item.of(
      "minecraft:leather_boots",
      '{Damage:0,ISBUpgrades:[{id:"irons_spellbooks:ice_power",slot:"feet",upgrades:5}]}'
    ).weakNBT(),
    M: "irons_spellbooks:magic_cloth",
    K: "vinery:kelp_cider",
  });

  e.shaped("artifacts:panic_necklace", ["L L", " P ", " W "], {
    P: "eidolon:sanguine_amulet",
    L: "eidolon:raven_feather",
    W: "eidolon:arcane_seal",
  });

  e.shaped("artifacts:thorn_pendant", [" H ", "CPC", " H "], {
    P: "eidolon:basic_amulet",
    C: "minecraft:cactus",
    H: "eidolon:withered_heart",
  });

  e.shaped("artifacts:steadfast_spikes", [" L ", " W ", " S "], {
    L: "eidolon:lesser_soul_gem",
    W: "eidolon:warlock_boots",
    S: "eidolon:resolute_belt",
  });

  e.shaped("artifacts:flippers", ["FWF"], {
    F: "aquamirae:fin",
    W: "eidolon:warlock_boots",
  });

  e.shaped("artifacts:flame_pendant", ["FPF", " E "], {
    P: "eidolon:basic_amulet",
    F: "irons_spellbooks:fire_rune",
    E: "embers:ember_crystal_cluster",
  });

  e.shaped("artifacts:snowshoes", [" A ", "FDF", " A "], {
    D: "artifacts:aqua_dashers",
    F: "embers:ashen_fabric",
    A: "embers:adhesive",
  });

  e.shaped("artifacts:obsidian_skull", ["OSO", "SWS", "OSO"], {
    W: "minecraft:wither_skeleton_skull",
    O: "minecraft:obsidian",
    S: "embers:shifting_scales",
  });

  e.shaped("artifacts:pocket_piston", [" P ", " H "], {
    P: "minecraft:piston",
    H: "artifacts:power_glove",
  });

  e.shaped("artifacts:antidote_vessel", [" C ", "RVE", " H "], {
    V: "biomancy:vial",
    C: "biomancy:cleansing_serum",
    R: "biomancy:rejuvenation_serum",
    E: "biomancy:exotic_compound",
    H: "biomancy:healing_additive",
  });

  e.shaped("artifacts:onion_ring", ["BON", "OPO", "NOB"], {
    P: "biomancy:primordial_core",
    B: "biomancy:bloomberry",
    O: "farmersdelight:onion",
    N: "biomancy:nutrient_bar",
  });

  e.shaped("artifacts:villager_hat", [" V ", " S ", " T "], {
    V: "irons_spellbooks:villager_spell_book",
    S: "vinery:straw_hat",
    T: "ars_nouveau:ritual_restoration",
  });

  e.shaped("artifacts:cowboy_hat", [" L ", " G ", " H "], {
    L: Item.of(
      "minecraft:lingering_potion",
      '{Potion:"minecraft:strong_swiftness"}'
    ).weakNBT(),
    G: "ars_elemental:earth_hat",
    H: "ars_nouveau:glyph_summon_steed",
  });

  e.shaped("artifacts:umbrella", [" S ", " U "], {
    S: "ars_nouveau:enchanters_shield",
    U: "beachparty:beach_parasol",
  });

  e.shaped("artifacts:lucky_scarf", ["CMC", "MSM", "CMC"], {
    S: "artifacts:scarf_of_invisibility",
    M: "ars_nouveau:magebloom_fiber",
    C: "buzzier_bees:four_leaf_clover",
  });

  e.shaped("artifacts:helium_flamingo", [" O ", "PLP", " P "], {
    P: "handcrafted:pink_sheet",
    O: "nightlights:octopus_pink",
    L: "ars_nouveau:belt_of_levitation",
  });

  e.shaped("artifacts:bunny_hoppers", ["MMM", "RFR", "MMM"], {
    R: "minecraft:rabbit_foot",
    F: "grapplemod:longfallboots",
    M: "ars_nouveau:thread_feather",
  });

});
