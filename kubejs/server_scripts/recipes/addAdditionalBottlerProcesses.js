console.info("[SOCIETY] addAdditionalBottlerProcesses.js loaded");

const buckets = [
  "brewery:whiskey_cristelwalker_fluid_bucket",
  "brewery:whiskey_lilitusinglemalt_fluid_bucket",
  'brewery:whiskey_jojannik_fluid_bucket',
  'brewery:whiskey_maggoallan_fluid_bucket',
  "brewery:whiskey_carrasconlabel_fluid_bucket",
  "brewery:beer_haley_fluid_bucket",
  "oreganized:molten_lead_bucket",
  "aquaculture:molten_neptunium_bucket",
  "embers:molten_electrum_bucket",
  "alexscaves:acid_bucket",
  "biomancy:digested_nutrients_bucket",
  "minecraft:water_bucket",
  "minecraft:milk_bucket",
  "embers:molten_silver_bucket",
  "embers:molten_dawnstone_bucket",
  "minecraft:lava_bucket",
  "biomancy:acid_bucket",
  "aetherworks:alchemic_precursor_bucket",
  "aetherworks:aether_gas_painful_bucket",
  "embers:molten_iron_bucket",
  "brewery:beer_barley_fluid_bucket",
  "embers:molten_copper_bucket",
  "embers:molten_uranium_bucket",
  "biomancy:blood_bucket",
  "embers:steam_bucket",
  "embers:soul_crude_bucket",
  "brewery:beer_wheat_fluid_bucket",
  "starbunclemania:source_fluid_bucket",
  "starbunclemania:sourceberry_juice_bucket",
  "embers:molten_gold_bucket",
  "brewery:beer_hops_fluid_bucket",
  "embers:dwarven_oil_bucket",
  "aetherworks:aether_gas_bucket",
  "aetherworks:aether_gas_impure_bucket",
  "embers:dwarven_gas_bucket",
  "nethervinery:warped_grape_juice_bucket",
  "vinery:red_taiga_grape_juice_bucket",
  "vinery:white_jungle_grape_juice_bucket",
  "vinery:red_jungle_grape_juice_bucket",
  "vinery:red_savanna_grape_juice_bucket",
  "vinery:white_savanna_grape_juice_bucket",
  "vinery:white_grape_juice_bucket",
  "vinery:white_taiga_grape_juice_bucket",
  "nethervinery:crimson_grape_juice_bucket",
  "vinery:red_grape_juice_bucket",
  "society:source_gro_bucket",
  "biomancy:enlargement_fluid_bucket",
];

ServerEvents.recipes((e) => {
  const createBottlerProcess = (input, bottle, output) => {
    e.recipes.custommachinery
      .custom_machine("society:bottler", 20)
      .requireItem(Item.of(bottle), "input")
      .requireFluid(Fluid.of(input, 1000), "fluidInput")
      .produceItem(Item.of(output), "output")
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
  buckets.forEach((bucket) => {
    createBottlerProcess(
      bucket.split("_bucket")[0],
      "minecraft:bucket",
      bucket
    );
  });
  createBottlerProcess(
    "biomancy:enlargement_fluid",
    "biomancy:vial",
    "biomancy:enlargement_serum"
  );
});
