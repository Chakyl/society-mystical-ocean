console.info("[SOCIETY] addBreweryProcesses.js loaded");

const whiskies = [
  "whiskey_jojannik",
  "whiskey_lilitusinglemalt",
  "whiskey_maggoallan",
  "whiskey_carrasconlabel",
  "whiskey_cristelwalker",
];
const whiskyRecipes = {
  whiskey_jojannik: [
    "brewery:dried_barley",
    "brewery:dried_barley",
    "minecraft:brown_mushroom",
  ],
  whiskey_lilitusinglemalt: [
    "brewery:dried_barley",
    "brewery:dried_wheat",
    "minecraft:brown_mushroom",
  ],
  whiskey_maggoallan: [
    "brewery:dried_wheat",
    "brewery:dried_wheat",
    "minecraft:brown_mushroom",
  ],
  whiskey_carrasconlabel: [
    "brewery:dried_wheat",
    "brewery:dried_corn",
    "minecraft:brown_mushroom",
  ],
  whiskey_cristelwalker: [
    "brewery:dried_corn",
    "brewery:dried_corn",
    "minecraft:brown_mushroom",
  ],
};
const beers = ["beer_barley", "beer_wheat", "beer_hops", "beer_haley"];
const beerRecipes = {
  beer_barley: ["brewery:dried_barley", "brewery:dried_barley", "brewery:hops"],
  beer_wheat: ["brewery:dried_wheat", "brewery:dried_wheat", "brewery:hops"],
  beer_hops: ["brewery:hops", "brewery:hops", "brewery:hops"],
  beer_haley: [
    "minecraft:popped_chorus_fruit",
    "minecraft:popped_chorus_fruit",
    "brewery:hops",
  ],
};
const driedCrops = ["dried_corn", "dried_wheat", "dried_barley"];
const driedCropsRecipes = {
  dried_corn: "brewery:corn",
  dried_wheat: "minecraft:wheat",
  dried_barley: "brewery:barley",
};

console.info("[SOCIETY] addBreweryProcesses.js loaded");

ServerEvents.recipes((e) => {
  const createIndustrialBrewerProcess = (inputs, output) => {
    const priority = inputs[0] === inputs[1] ? -5 : 1
    e.recipes.custommachinery
      .custom_machine("society:industrial_brewer", 500)
      .requireItem(Item.of(inputs[0]))
      .requireItem(Item.of(inputs[1]))
      .requireItem(Item.of(inputs[2]))
      .requireFluidPerTick(Fluid.of("minecraft:water", 1), "fluidInput")
      .requireFuel()
      .produceFluid(Fluid.of(`brewery:${output}`, 60), "output")
      .priority((output == "beer_hops" ? -10 : priority))
      .requireStructure(
        [
          ["aca", "ccc", "c c", " m "],
          ["efe", "ghf", "ij ", "   "],
          ["k k", "gho", "ij ", "   "],
          ["k k", "foo", "   ", "   "],
        ],
        {
          a: "bakery:deepslate_stove",
          c: "candlelight:deepslate_counter",
          e: "handcrafted:kitchen_hood",
          f: "embers:fluid_vessel",
          g: "brewery:barrel_main_head",
          h: "brewery:barrel_head_right",
          i: "brewery:barrel_main",
          j: "brewery:barrel_right",
          k: "handcrafted:kitchen_hood_pipe",
          o: "embers:fluid_pipe",
        }
      );
  };

  const createBottlerProcess = (input, bottle, output) => {
    e.recipes.custommachinery
      .custom_machine("society:bottler", 20)
      .requireItem(Item.of(bottle), "input")
      .requireFluid(Fluid.of(input, 20), "fluidInput")
      .produceItem(Item.of(`brewery:${output}`), "output")
      .requireStructure(
        [
          ["aba", " m "],
          [" c ", " d "],
          [" e ", " e "],
        ],
        {
          a: "embers:sealed_wood_keg",
          b: "littlelogistics:fluid_hopper",
          c: "embers:fluid_vessel",
          d: "aetherworks:forge_metal_former",
          e: "embers:fluid_pipe",
        }
      );
  };
  const createDehydratorProcess = (input, output) => {
    e.recipes.custommachinery
      .custom_machine("society:dehydrator", 120)
      .requireItem(Item.of(input), "input")
      .produceItem(Item.of(`brewery:${output}`), "output")
      .requireStructure(
        [
          ["aaa", "aba", "aaa", " m "],
          ["sss", "sss", "sss", "   "],
          ["sss", "sss", "sss", "   "],
          ["sss", "sss", "sss", "   "],
        ],
        {
          a: "minecraft:bricks",
          b: "embers:dawnstone_block",
          s: "brewery:silo_copper",
        }
      );
  };
  whiskies.forEach((whisky) => {
    createBottlerProcess(
      `brewery:${whisky}_fluid`,
      "minecraft:glass_bottle",
      whisky
    );
    createIndustrialBrewerProcess(whiskyRecipes[whisky], `${whisky}_fluid`);
  });
  beers.forEach((beer) => {
    createBottlerProcess(`brewery:${beer}_fluid`, "brewery:beer_mug", beer);
    createIndustrialBrewerProcess(beerRecipes[beer], `${beer}_fluid`);
  });
  driedCrops.forEach((driedCrop) => {
    createDehydratorProcess(driedCropsRecipes[driedCrop], driedCrop);
  });
});
