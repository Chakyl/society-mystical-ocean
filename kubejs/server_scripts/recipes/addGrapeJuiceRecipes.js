console.info("[SOCIETY] addGrapeJuiceRecipes.js loaded");

const grapeJuices = [
  "red",
  "red_savanna",
  "red_jungle",
  "red_taiga",
  "white",
  "white_savanna",
  "white_jungle",
  "white_taiga",
  "crimson",
  "warped",
];
const grapes = [
  "red_grape",
  "savanna_grapes_red",
  "jungle_grapes_red",
  "taiga_grapes_red",
  "white_grape",
  "savanna_grapes_white",
  "jungle_grapes_white",
  "taiga_grapes_white",
  "crimson_grape",
  "warped_grape",
];
const nether = ["crimson", "warped"];

ServerEvents.recipes((e) => {
  const juiceFromBucket = (juice) => {
    e.shapeless(
      `4x ${nether.includes(juice) ? "nethervinery" : "vinery"
      }:${juice}_grapejuice`,
      [
        `${nether.includes(juice) ? "nethervinery" : "vinery"
        }:${juice}_grape_juice_bucket`,
        "4x vinery:wine_bottle",
      ]
    ).replaceIngredient(
      `${nether.includes(juice) ? "nethervinery" : "vinery"
      }:${juice}_grape_juice_bucket`,
      "minecraft:bucket"
    );
  };

  const juiceBucketFromCrush = (juice, grape) => {
    e.shapeless(
      `${nether.includes(juice) ? "nethervinery" : "vinery"
      }:${juice}_grape_juice_bucket`,
      [
        "minecraft:bucket",
        `4x ${nether.includes(juice) ? "nethervinery" : "vinery"}:${grape}`,
        "ars_nouveau:glyph_crush",
      ]
    ).keepIngredient("ars_nouveau:glyph_crush");
  };

  const juiceBottleEnchantingApparatus = (juice, grape) => {
    e.custom({
      type: "ars_nouveau:enchanting_apparatus",
      keepNbtOfReagent: true,
      output: {
        item: `${nether.includes(juice) ? "nethervinery" : "vinery"
          }:${juice}_grapejuice`,
      },
      pedestalItems: [
        {
          item: "vinery:wine_bottle",
        },
      ],
      reagent: [
        {
          item: `${nether.includes(juice) ? "nethervinery" : "vinery"
            }:${grape}`,
        },
      ],
      sourceCost: 10,
    });
  };

  const grapeMelting = (juice, grape) => {
    e.custom({
      type: "embers:melting",
      input: {
        item: `${nether.includes(juice) ? "nethervinery" : "vinery"}:${grape}`,
      },
      output: {
        amount: 20,
        fluid: `${nether.includes(juice) ? "nethervinery" : "vinery"
          }:${juice}_grape_juice`,
      },
    });
  };

  const stamperBottling = (juice) => {
    e.custom({
      type: "embers:stamping",
      fluid: {
        amount: 20,
        tag: `${nether.includes(juice) ? "nethervinery" : "vinery"
          }:${juice}_grape_juice`,
      },
      input: {
        item: "vinery:wine_bottle",
      },
      output: {
        item: `${nether.includes(juice) ? "nethervinery" : "vinery"
          }:${juice}_grapejuice`,
      },
      stamp: {
        item: "embers:flat_stamp",
      },
    });
  };

  grapeJuices.forEach((juice, index) => {
    juiceFromBucket(juice);
    juiceBucketFromCrush(juice, grapes[index]);
    grapeMelting(juice, grapes[index]);
    stamperBottling(juice);
    juiceBottleEnchantingApparatus(juice, grapes[index]);
  });

  // Sourceberry melting
  e.custom({
    type: "embers:melting",
    input: {
      item: "ars_nouveau:sourceberry_bush",
    },
    output: {
      amount: 20,
      fluid: "starbunclemania:sourceberry_juice",
    },
  });

  const createJuiceProcess = (juice) => {
    e.recipes.custommachinery
      .custom_machine("society:bottler", 20)
      .requireItem(Item.of("vinery:wine_bottle"), "input")
      .requireFluid(
        Fluid.of(
          `${nether.includes(juice) ? "nethervinery" : "vinery"
          }:${juice}_grape_juice`,
          20
        ),
        "fluidInput"
      )
      .produceItem(
        Item.of(
          `${nether.includes(juice) ? "nethervinery" : "vinery"
          }:${juice}_grapejuice`
        ),
        "output"
      )
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
  grapeJuices.forEach((juice) => {
    createJuiceProcess(juice);
  });
});
