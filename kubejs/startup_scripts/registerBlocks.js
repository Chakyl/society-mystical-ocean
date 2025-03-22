StartupEvents.registry("block", (e) => {
  Platform.mods.kubejs.name = "Society";
  let createFlowerBag = (type, displayName) => {
    e.create(`society:${type}_bag`)
      .displayName(`${displayName} Bag`)
      .texture("up", `society:block/bag_top_${type}`)
      .texture("down", "society:block/bag_bottom")
      .texture("north", "society:block/bag_side")
      .texture("east", "society:block/bag_side")
      .texture("south", "society:block/bag_side")
      .texture("west", "society:block/bag_side")
      .mapColor("sand")
      .soundType("sand")
      .hardness(1.0)
      .resistance(1.0)
      .requiresTool(false)
      .texture('particle', `society:block/bag_top_${type}`);
  };
  createFlowerBag("poppy", "Poppy");
  createFlowerBag("dandelion", "Dandelion");
  createFlowerBag("white_tulip", "White Tulip");
  createFlowerBag("orange_tulip", "Orange Tulip");
  createFlowerBag("pink_tulip", "Pink Tulip");
  createFlowerBag("allium", "Allium");
  createFlowerBag("blue_orchid", "Blue Orchid");

  e.create(`eidolon:crimson_gem_block`)
    .displayName('Crimson Gem Block')
    .texture("up", 'society:block/crimson_gem_block')
    .texture("down", 'society:block/crimson_gem_block')
    .texture("north", 'society:block/crimson_gem_block')
    .texture("east", 'society:block/crimson_gem_block')
    .texture("south", 'society:block/crimson_gem_block')
    .texture("west", 'society:block/crimson_gem_block')
    .mapColor("netherrack")
    .soundType("netherite_block")
    .hardness(2.0)
    .resistance(2.0)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .texture('particle', 'society:block/crimson_gem_block');
});
