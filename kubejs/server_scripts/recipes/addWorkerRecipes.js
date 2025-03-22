console.info("[SOCIETY] addWorkerRecipes.js loaded");

ServerEvents.recipes((e) => {
  e.shaped("workers:cattle_farmer_block", ["ABA", "CDC", "AEA"], {
    A: "minecraft:oak_planks",
    B: "minecraft:wheat",
    C: "aquaculture:neptunium_nugget",
    D: "minecraft:beef",
    E: "minecraft:diamond_axe",
  });
  e.shaped("workers:miner_block", ["ABA", "CDC", "AEA"], {
    A: "minecraft:oak_planks",
    B: "aquaculture:neptunium_ingot",
    C: "aquaculture:neptunium_nugget",
    D: "minecraft:lantern",
    E: "minecraft:diamond_pickaxe",
  });
  e.shaped("workers:merchant_block", ["ABA", "CDC", "AEA"], {
    A: "minecraft:oak_planks",
    B: "aquaculture:neptunium_nugget",
    C: "smallships:sail",
    D: "minecraft:book",
    E: "minecraft:emerald",
  });
  e.shaped("workers:farmer_block", ["ABA", "BCB", "ADA"], {
    A: "minecraft:oak_planks",
    B: "aquaculture:neptunium_nugget",
    C: "minecraft:composter",
    D: "minecraft:diamond_hoe",
  });
  e.shaped("workers:lumberjack_block", ["ABA", "BCB", "ADA"], {
    A: "minecraft:oak_planks",
    B: "aquaculture:neptunium_nugget",
    C: "aquaculture:driftwood",
    D: "minecraft:diamond_axe",
  });
  e.shaped("workers:swineherd_block", ["ABA", "CDC", "AEA"], {
    A: "minecraft:oak_planks",
    B: "minecraft:carrot",
    C: "aquaculture:neptunium_nugget",
    D: "minecraft:porkchop",
    E: "minecraft:diamond_axe",
  });
  e.shaped("workers:fisherman_block", ["ABA", "BCB", "ABA"], {
    A: "minecraft:oak_planks",
    B: "aquaculture:neptunium_nugget",
    C: "littlelogistics:fishing_barge",
  });
  e.shaped("workers:shepherd_block", ["ABA", "CDC", "AEA"], {
    A: "minecraft:oak_planks",
    B: "minecraft:wheat",
    C: "aquaculture:neptunium_nugget",
    D: "minecraft:mutton",
    E: "minecraft:diamond_axe",
  });
  e.shaped("workers:chicken_farmer_block", ["ABA", "CDC", "AEA"], {
    A: "minecraft:oak_planks",
    B: "minecraft:wheat_seeds",
    C: "aquaculture:neptunium_nugget",
    D: "minecraft:chicken",
    E: "minecraft:diamond_axe",
  });
});
