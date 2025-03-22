ItemEvents.modification((e) => {
  e.modify("minecraft:flint_and_steel", (item) => {
    item.maxDamage = -1;
  });
  e.modify("aquaculture:neptunium_hoe", (item) => {
    item.maxDamage = -1;
  });
  e.modify("biomancy:despoil_sickle", (item) => {
    item.maxDamage = 3000;
  });
  e.modify("society:aquamagical_dust", (item) => {
    item.rarity = "rare";
  });
  e.modify("society:aquamagical_essence", (item) => {
    item.rarity = "rare";
  });
  e.modify("society:aquamagical_crystal", (item) => {
    item.rarity = "rare";
  });
  e.modify("society:fading_aquamagic", (item) => {
    item.rarity = "rare";
  });
  e.modify("society:heart_of_neptunium", (item) => {
    item.rarity = "epic";
  });
  e.modify("society:primordial_neptunium", (item) => {
    item.rarity = "epic";
    item.fireResistant = true;
  });
  const setMasteryRarity = (type) => {
    e.modify(`society:${type}_mastery`, (item) => {
      item.rarity = "epic";
    });
  };
  const masteries = [
    "blacksmith",
    "cultivator",
    "fisher",
    "florist",
    "gourmand",
    "plunderer",
    "shady_wizard",
    "sifter",
    "trapper",
    "shipping",
    "eidolon",
    "irons_spells",
    "embers",
    "biomancy",
    "ars_nouveau",
  ];
  masteries.forEach((mastery) => {
    setMasteryRarity(mastery);
  });

  const neptuniumArmor = [
    { item: "aquaculture:neptunium_helmet", armor: 4 },
    { item: "aquaculture:neptunium_chestplate", armor: 9 },
    { item: "aquaculture:neptunium_leggings", armor: 7 },
    { item: "aquaculture:neptunium_boots", armor: 4 },
  ];
  neptuniumArmor.forEach((armor) => {
    e.modify(armor.item, (item) => {
      item.setArmorProtection(armor.armor);
      item.rarity = "epic";
      item.fireResistant = true;
    });
  });
  const cataclysmArmor = [
    { item: "cataclysm:cursium_helmet", armor: 4 },
    { item: "cataclysm:cursium_chestplate", armor: 9 },
    { item: "cataclysm:cursium_leggings", armor: 7 },
    { item: "cataclysm:cursium_boots", armor: 4 },
    { item: "cataclysm:bone_reptile_helmet", armor: 5 },
    { item: "cataclysm:bone_reptile_chestplate", armor: 10 },
    { item: "cataclysm:monstrous_helm", armor: 2 },
    { item: "cataclysm:ignitium_helmet", armor: 5 },
    { item: "cataclysm:ignitium_chestplate", armor: 10 },
    { item: "cataclysm:ignitium_leggings", armor: 8 },
    { item: "cataclysm:ignitium_boots", armor: 5 },
    { item: "cataclysm:bloom_stone_pauldrons", armor: 6 },
  ];
  cataclysmArmor.forEach((armor) => {
    e.modify(armor.item, (item) => {
      item.setArmorProtection(armor.armor);
    });
  });
});
