console.info("[SOCIETY] addSourceTerrariumProcesses.js loaded");

ServerEvents.recipes((e) => {
  const createSourceTerrariumProcess = (seed, soil, crop, efficient) => {
    e.recipes.custommachinery
      .custom_machine("society:source_terrarium", efficient ? 20 : 60)
      .requireItem(Item.of(seed), "crop")
      .chance(0)
      .requireItem(Item.of(soil), "soil")
      .chance(0)
      .requireFluidPerTick(
        Fluid.of(
          efficient ? "society:source_gro" : "starbunclemania:source_fluid",
          5
        ),
        "fluidInput"
      )
      .produceItem(Item.of(crop, efficient ? 2 : 1), "output")
      .requireStructure(
        [
          ["aaa", "aba", "aaa", " m "],
          ["ddd", "dgd", "ddd", "   "],
          ["ddd", "ddd", "ddd", "   "],
          ["ttt", "ttt", "ttt", "   "],
        ],
        {
          a: "ars_nouveau:sourcestone_large_bricks",
          b: "supplementaries:planter",
          d: "alexscaves:depth_glass",
          g: "ars_nouveau:agronomic_sourcelink",
          t: "ars_nouveau:sourcestone_large_bricks_slab",
        }
      );
  };
  const setupProcess = (seed, soil, crop) => {
    createSourceTerrariumProcess(seed, soil, crop, false);
    createSourceTerrariumProcess(seed, soil, crop, true);
  };
  const seedlessDirtCrops = [
    "farmersdelight:onion",
    "minecraft:carrot",
    "minecraft:potato",
    "minecraft:sweet_berries",
    "minecraft:glow_berries",
    "autumnity:foul_berries",
    "ars_nouveau:sourceberry_bush",
    "minecraft:bamboo",
    "minecraft:sugar_cane",
    "herbalbrews:coffee_beans",
    "herbalbrews:yerba_mate_leaf",
    "herbalbrews:rooibos_leaf",
    "herbalbrews:lavender",
    "herbalbrews:hibiscus",
  ];
  seedlessDirtCrops.forEach((crop) => {
    setupProcess(crop, "minecraft:dirt", crop);
  });

  const seedlessWaterCrops = ["minecraft:kelp", "minecraft:seagrass"];
  seedlessWaterCrops.forEach((crop) => {
    setupProcess(
      crop,
      "ars_elemental:everfull_urn",
      crop
    );
  });

  const seedlessSoulSandCrops = [
    "minecraft:nether_wart",
    "gardens_of_the_dead:soulblight_fungus",
    "nethersdelight:propelplant_cane",
    "nethersdelight:propelpearl",
  ];
  seedlessSoulSandCrops.forEach((crop) => {
    setupProcess(crop, "minecraft:soul_sand", crop);
  });

  const seedlessCrimsonNyliumCrops = [
    "gardens_of_the_dead:whistlecane",
    "minecraft:crimson_fungus",
  ];
  seedlessCrimsonNyliumCrops.forEach((crop) => {
    setupProcess(crop, "minecraft:crimson_nylium", crop);
  });

  setupProcess(
    "minecraft:warped_fungus",
    "minecraft:warped_nylium",
    "minecraft:warped_fungus"
  );
  setupProcess(
    "minecraft:cocoa_beans",
    "minecraft:jungle_log",
    "minecraft:cocoa_beans"
  );

  const seedlessMyceliumCrops = [
    "minecraft:red_mushroom",
    "minecraft:brown_mushroom",
  ];
  seedlessMyceliumCrops.forEach((crop) => {
    setupProcess(crop, "minecraft:mycelium", crop);
  });
  const seededDirtCrops = [
    "bakery:strawberry_seeds",
    "bakery:oat_seeds",
    "ars_nouveau:magebloom_crop",
    "farmersdelight:tomato_seeds",
    "farmersdelight:cabbage_seeds",
    "minecraft:beetroot_seeds",
    "minecraft:melon_seeds",
    "minecraft:pumpkin_seeds",
    "minecraft:wheat_seeds",
    "candlelight:tomato_seeds",
    "candlelight:lettuce_seeds",
    "brewery:corn_seeds",
    "brewery:hops_seeds",
    "brewery:barley_seeds",
    "herbalbrews:tea_blossom",
    "sushigocrafting:cucumber_seeds",
    "sushigocrafting:soy_seeds",
    "sushigocrafting:wasabi_seeds",
    "vinery:jungle_grape_seeds_white",
    "vinery:jungle_grape_seeds_red",
    "vinery:taiga_grape_seeds_white",
    "vinery:taiga_grape_seeds_red",
    "vinery:savanna_grape_seeds_white",
    "vinery:savanna_grape_seeds_red",
    "vinery:white_grape_seeds",
    "vinery:red_grape_seeds",
    "supplementaries:flax_seeds",
  ];

  const seededDirtCropsRecipes = {
    "bakery:strawberry_seeds": "bakery:strawberry",
    "bakery:oat_seeds": "bakery:oat",
    "ars_nouveau:magebloom_crop": "ars_nouveau:magebloom",
    "farmersdelight:tomato_seeds": "farmersdelight:tomato",
    "farmersdelight:cabbage_seeds": "farmersdelight:cabbage",
    "minecraft:beetroot_seeds": "minecraft:beetroot",
    "minecraft:melon_seeds": "minecraft:melon_slice",
    "minecraft:pumpkin_seeds": "minecraft:pumpkin",
    "minecraft:wheat_seeds": "minecraft:wheat",
    "candlelight:tomato_seeds": "candlelight:tomato",
    "candlelight:lettuce_seeds": "candlelight:lettuce",
    "brewery:corn_seeds": "brewery:corn",
    "brewery:hops_seeds": "brewery:hops",
    "brewery:barley_seeds": "brewery:barley",
    "herbalbrews:tea_blossom": "herbalbrews:green_tea_leaf",
    "sushigocrafting:cucumber_seeds": "sushigocrafting:cucumber",
    "sushigocrafting:soy_seeds": "sushigocrafting:soy_bean",
    "sushigocrafting:wasabi_seeds": "sushigocrafting:wasabi_root",
    "vinery:jungle_grape_seeds_white": "vinery:jungle_grapes_white",
    "vinery:jungle_grape_seeds_red": "vinery:jungle_grapes_red",
    "vinery:taiga_grape_seeds_white": "vinery:taiga_grapes_white",
    "vinery:taiga_grape_seeds_red": "vinery:taiga_grapes_red",
    "vinery:savanna_grape_seeds_white": "vinery:savanna_grapes_white",
    "vinery:savanna_grape_seeds_red": "vinery:savanna_grapes_red",
    "vinery:white_grape_seeds": "vinery:white_grape",
    "vinery:red_grape_seeds": "vinery:red_grape",
    "supplementaries:flax_seeds": "supplementaries:flax",
  };
  seededDirtCrops.forEach((crop) => {
    setupProcess(
      crop,
      "minecraft:dirt",
      seededDirtCropsRecipes[crop]
    );
  });
  setupProcess(
    "farmersdelight:rice",
    "ars_elemental:everfull_urn",
    "farmersdelight:rice_panicle"
  );
  setupProcess(
    "nethervinery:warped_grape_seeds",
    "minecraft:warped_nylium",
    "nethervinery:warped_grape"
  );
  setupProcess(
    "nethervinery:crimson_grape_seeds",
    "minecraft:crimson_nylium",
    "nethervinery:crimson_grape"
  );
  setupProcess(
    "minecraft:chorus_flower",
    "minecraft:end_stone",
    "minecraft:chorus_fruit"
  );

  // Ars cocoa beans
  setupProcess(
    "ars_nouveau:bombegranate_pod",
    "ars_nouveau:red_archwood_log",
    "ars_nouveau:bombegranate_pod"
  );
  setupProcess(
    "ars_nouveau:frostaya_pod",
    "ars_nouveau:blue_archwood_log",
    "ars_nouveau:frostaya_pod"
  );
  setupProcess(
    "ars_nouveau:mendosteen_pod",
    "ars_nouveau:green_archwood_log",
    "ars_nouveau:mendosteen_pod"
  );
  setupProcess(
    "ars_nouveau:bastion_pod",
    "ars_nouveau:purple_archwood_log",
    "ars_nouveau:bastion_pod"
  );
  setupProcess(
    "ars_elemental:flashpine_pod",
    "ars_elemental:yellow_archwood_log",
    "ars_elemental:flashpine_pod"
  );
  setupProcess(
    "vinery:dark_cherry_sapling",
    "minecraft:dirt",
    "vinery:cherry"
  );
  setupProcess(
    "vinery:apple_tree_sapling",
    "minecraft:dirt",
    "minecraft:apple"
  );
});
