console.info("[SOCIETY] lootManager.js loaded");

LootJS.modifiers((e) => {
  // Add Sea Coins to ore blocks
  e.addBlockLootModifier("minecraft:iron_ore").pool((p) => {
    p.not((n) =>
      n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
    );
    p.randomChance(0.2).addLoot("society:iron_sea_coin");
  });
  e.addBlockLootModifier("minecraft:deepslate_iron_ore").pool((p) => {
    p.not((n) =>
      n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
    );
    p.randomChance(0.2).addLoot("society:iron_sea_coin");
  });
  e.addBlockLootModifier("minecraft:gold_ore").pool((p) => {
    p.not((n) =>
      n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
    );
    p.randomChance(0.1).addLoot("society:gold_sea_coin");
  });
  e.addBlockLootModifier("minecraft:deepslate_gold_ore").pool((p) => {
    p.not((n) =>
      n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
    );
    p.randomChance(0.1).addLoot("society:gold_sea_coin");
  });

  // Chest Loot tables
  e.addLootTableModifier("minecraft:chests/simple_dungeon")
    .randomChance(0.3)
    .addLoot("society:iron_sea_coin")
    .limitCount([1, 4], [5, 9]);

  e.addLootTableModifier("minecraft:chests/abandoned_mineshaft")
    .randomChance(0.2)
    .addLoot("society:iron_sea_coin")
    .limitCount([1, 4], [5, 9]);

  e.addLootTableModifier("minecraft:chests/buried_treasure")
    .randomChance(0.9)
    .addLoot("society:gold_sea_coin")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/buried_treasure")
    .randomChance(1)
    .addLoot("society:neptunium_sea_coin")
    .limitCount([1, 2]);

  e.addLootTableModifier("minecraft:chests/underwater_ruin_small")
    .randomChance(0.5)
    .addLoot("society:iron_sea_coin")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/underwater_ruin_small")
    .randomChance(0.2)
    .addLoot("society:gold_sea_coin")
    .limitCount([1, 2]);
  e.addLootTableModifier("minecraft:chests/underwater_ruin_big")
    .randomChance(0.6)
    .addLoot("society:iron_sea_coin")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/underwater_ruin_big")
    .randomChance(0.3)
    .addLoot("society:gold_sea_coin")
    .limitCount([1, 2]);

  e.addLootTableModifier("minecraft:chests/shipwreck_supply")
    .randomChance(0.5)
    .addLoot("society:iron_sea_coin")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/shipwreck_supply")
    .randomChance(0.1)
    .addLoot("society:gold_sea_coin")
    .limitCount([1, 2]);
  e.addLootTableModifier("minecraft:chests/shipwreck_treasure")
    .randomChance(0.9)
    .addLoot("society:iron_sea_coin")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/shipwreck_treasure")
    .randomChance(0.4)
    .addLoot("society:gold_sea_coin")
    .limitCount([1, 2]);

  e.addLootTableModifier("minecraft:chests/woodland_mansion")
    .randomChance(0.2)
    .addLoot("society:gold_sea_coin")
    .limitCount([1, 2]);

  e.addLootTableModifier("minecraft:chests/jungle_temple")
    .randomChance(0.3)
    .addLoot("society:iron_sea_coin")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/jungle_temple")
    .randomChance(0.1)
    .addLoot("society:gold_sea_coin")
    .limitCount([1, 2]);

  e.addLootTableModifier("minecraft:chests/desert_pyramid")
    .randomChance(0.3)
    .addLoot("society:iron_sea_coin")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/desert_pyramid")
    .randomChance(0.1)
    .addLoot("society:gold_sea_coin")
    .limitCount([1, 2]);

  e.addLootTableModifier("minecraft:chests/pillager_outpost")
    .randomChance(0.3)
    .addLoot("society:gold_sea_coin")
    .limitCount([1, 4], [5, 9]);

  e.addLootTableModifier("minecraft:chests/ancient_city")
    .randomChance(0.6)
    .addLoot("society:gold_sea_coin")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/ancient_city")
    .randomChance(0.3)
    .addLoot("society:neptunium_sea_coin")
    .limitCount([1, 2]);

  e.addLootTableModifier("minecraft:chests/ruined_portal")
    .randomChance(0.7)
    .addLoot("society:gold_sea_coin")
    .limitCount([1, 2]);

  e.addLootTableModifier("minecraft:chests/nether_bridge")
    .randomChance(0.3)
    .addLoot("society:gold_sea_coin")
    .limitCount([1, 4], [5, 9]);

  e.addLootTableModifier("minecraft:chests/bastion_bridge")
    .randomChance(0.9)
    .addLoot("society:gold_sea_coin")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/bastion_hoglin_stable")
    .randomChance(0.3)
    .addLoot("society:gold_sea_coin")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/bastion_other")
    .randomChance(0.5)
    .addLoot("society:gold_sea_coin")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/bastion_treasure")
    .randomChance(0.6)
    .addLoot("society:gold_sea_coin")
    .limitCount([1, 4], [5, 9]);

  e.addLootTableModifier("minecraft:chests/stronghold_corridor")
    .randomChance(0.9)
    .addLoot("society:iron_sea_coin")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/stronghold_corridor")
    .randomChance(0.4)
    .addLoot("society:gold_sea_coin")
    .limitCount([1, 2]);
  e.addLootTableModifier("minecraft:chests/stronghold_crossing")
    .randomChance(0.9)
    .addLoot("society:iron_sea_coin")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/stronghold_crossing")
    .randomChance(0.4)
    .addLoot("society:gold_sea_coin")
    .limitCount([1, 2]);

  e.addLootTableModifier("minecraft:chests/end_city_treasure")
    .randomChance(0.7)
    .addLoot("society:gold_sea_coin")
    .limitCount([1, 4], [5, 9]);
  e.addLootTableModifier("minecraft:chests/end_city_treasure")
    .randomChance(0.4)
    .addLoot("society:neptunium_sea_coin")
    .limitCount([1, 1]);
  e.addLootTableModifier("minecraft:chests/ruined_portal")
    .randomChance(1)
    .replaceLoot("minecraft:flint_and_steel", "society:gold_sea_coin", true);
});
