console.info("[SOCIETY] addCompactingRecipes.js loaded");

ServerEvents.recipes(e => {
  const compact = (output, compactInput) => {
    e.shapeless(`9x ${compactInput}`, [output]);
    e.shapeless(output, [`9x ${compactInput}`]);
  }

  compact('society:gold_sea_coin', 'society:iron_sea_coin')
  compact('society:neptunium_sea_coin', 'society:gold_sea_coin')
  compact('society:poppy_bag', 'minecraft:poppy')
  compact('society:dandelion_bag', 'minecraft:dandelion')
  compact('society:allium_bag', 'minecraft:allium')
  compact('society:blue_orchid_bag', 'minecraft:blue_orchid')
  compact('society:white_tulip_bag', 'minecraft:white_tulip')
  compact('society:orange_tulip_bag', 'minecraft:orange_tulip')
  compact('society:pink_tulip_bag', 'minecraft:pink_tulip')
  compact('eidolon:crimson_gem_block', 'eidolon:crimson_gem')
  
})