console.info("[SOCIETY] handleTags.js loaded");

ServerEvents.tags("item", (e) => {
  // Armors
  const armorDict = {
    helmets: "hat",
    chestplates: "robes",
    leggings: "leggings",
    boots: "boots",
  };
  const addArmorTags = (type, armor) => {
    const armorString = `ars_elemental:${type}_${armorDict[armor]}`;
    e.add(`embers:augmentables/armors/${armor}`, armorString);
    e.add("forge:armors", armorString);
    e.add(`forge:armors/${armor}`, armorString);
    e.add("embers:augmentables/armors", armorString);
    e.add("embers:augmentables", armorString);
  };
  const element = ["fire", "air", "earth", "aqua"];
  const armorTypes = ["helmets", "chestplates", "leggings", "boots"];
  element.forEach((element) => {
    armorTypes.forEach((armor) => {
      addArmorTags(element, armor);
    });
  });

  // Cradles
  e.add("biomancy:cannot_be_eaten_by_cradle", "@eidolon");
  e.add("biomancy:cannot_be_eaten_by_cradle", "@ars_nouveau");
  e.add("biomancy:cannot_be_eaten_by_cradle", "@starbunclemania");
  e.add("biomancy:cannot_be_eaten_by_cradle", "@ars_elemental");
  e.add("biomancy:cannot_be_eaten_by_cradle", "@embers");
  e.add("biomancy:cannot_be_eaten_by_cradle", "@aetherworks");
  e.add("biomancy:cannot_be_eaten_by_cradle", "@toms_storage");
  e.add("biomancy:cannot_be_eaten_by_cradle", "@irons_spellbooks");
  e.add("biomancy:cannot_be_eaten_by_cradle", "@sophisticatedstorage");
  e.add("biomancy:cannot_be_eaten_by_cradle", "@sophisticatedbackpacks");
  e.add("biomancy:cannot_be_eaten_by_cradle", "@tetra");
  e.remove("minecraft:flowers", "betterarcheology:growth_totem");
  e.remove("minecraft:small_flowers", "betterarcheology:growth_totem");
  e.remove("forge:chests", "aquaculture:neptunes_bounty");
  global.threads = e.get("society:threads").getObjectIds();
  // Bin Removals
  const binBans = [
    "society",
    "custommachinery",
    "aquaculture",
    "sophisticatedbackpacks",
    "sophisticatedstorage",
    "eidolon",
    "biomancy",
    "embers",
    "aetherworks",
    "ars_nouveau",
    "ars_elemental",
    "toms_storage",
    "irons_spellbooks",
    "tetra",
    "society",
    "starbunclemania",
    "dimdungeons",
    "cataclysm",
  ];
  binBans.forEach((tag) => {
    e.add("furniture:trash_bag_blacklist", `@${tag}`);
  });
  [
    "society:iron_sea_coin",
    "society:gold_sea_coin",
    "society:neptunium_sea_coin",
  ].forEach((coin) => {
    e.add("taverntokens:valid_currency", coin);
  });
  // JEI Crabbersdelight tags
  const jeiCrabbersPath = "crabbersdelight:jei_display_results";
  e.remove(`${jeiCrabbersPath}/minecraft/tropical_fish`, "crabbersdelight:can");
  e.remove(`${jeiCrabbersPath}/minecraft/pufferfish`, "crabbersdelight:can");
  e.remove(`${jeiCrabbersPath}/minecraft/salmon`, "crabbersdelight:can");
  e.remove(`${jeiCrabbersPath}/minecraft/cod`, "crabbersdelight:can");
  e.remove(`${jeiCrabbersPath}/minecraft/air`, "crabbersdelight:can");
  e.remove(`${jeiCrabbersPath}/minecraft/air`, "crabbersdelight:crab");
  e.remove(`${jeiCrabbersPath}/minecraft/air`, "crabbersdelight:shrimp");
  e.remove(`${jeiCrabbersPath}/minecraft/air`, "crabbersdelight:clam");
  e.remove(`${jeiCrabbersPath}/minecraft/air`, "crabbersdelight:clawster");
});

ServerEvents.tags("block", (e) => {
  e.remove("minecraft:flowers", "betterarcheology:growth_totem");
  e.remove("minecraft:small_flowers", "betterarcheology:growth_totem");
  e.add("society:cobblestone_boring", "quark:sturdy_stone");
  e.add("society:dirt_boring", "minecraft:soul_soil");
  e.add("society:uranium_boring", "alexscaves:acidic_radrock");
  e.add("society:quartz_boring", "minecraft:nether_quartz_ore");
});

ServerEvents.tags("entity_type", (e) => {
  e.add("ars_nouveau:drygmy_blacklist", "@aquaculture");
  e.add("ars_nouveau:drygmy_blacklist", "@unusualfishmod");
  e.add("ars_nouveau:drygmy_blacklist", "@aquamirae");
  e.add("ars_nouveau:drygmy_blacklist", "@balloonbox");
  e.add("ars_nouveau:drygmy_blacklist", "@biomancy");
  e.add("ars_nouveau:drygmy_blacklist", "@cataclysm");
  e.add("ars_nouveau:drygmy_blacklist", "@irons_spellbooks");
  e.add("ars_nouveau:drygmy_blacklist", "@netherdepthsupgrade");
  e.add("ars_nouveau:drygmy_blacklist", "@upgrade_aquatic");
  e.add("ars_nouveau:drygmy_blacklist", "@fishofthieves");
  e.add("ars_nouveau:drygmy_blacklist", "@crabbersdelight");
  e.add("ars_nouveau:drygmy_blacklist", "minecraft:salmon");
  e.add("ars_nouveau:drygmy_blacklist", "minecraft:tropical_fish");
  e.add("ars_nouveau:drygmy_blacklist", "minecraft:cod");
  e.add("ars_nouveau:drygmy_blacklist", "minecraft:pufferfish");
  e.add("ars_nouveau:drygmy_blacklist", "alexscaves:tripodfish");
  e.add("ars_nouveau:drygmy_blacklist", "alexscaves:lanternfish");

  global.drygmy_blacklist = e
    .get("ars_nouveau:drygmy_blacklist")
    .getObjectIds();
});
