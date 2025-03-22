console.info("[SOCIETY] addIncubatorRecipes.js loaded");

ServerEvents.recipes((e) => {
  e.recipes.custommachinery
    .custom_machine("society:incubator", 8000)
    .produceItem(Item.of("biomancy:living_flesh", 8))
    .requireItem(Item.of("biomancy:flesh_blob_spawn_egg", 1), "input")
    .requireFluidPerTick(Fluid.of("biomancy:enlargement_fluid", 1), "fluidInput")
    .requireStructure(
      [
        ["a", "m"],
        ["b", " "],
      ],
      { a: "biomancy:malignant_flesh", b: "biomancy:primal_bloom" }
    );

  e.recipes.custommachinery
    .custom_machine("society:incubator", 10000)
    .produceItem(Item.of("biomancy:living_flesh", 16))
    .requireItem(Item.of("biomancy:hungry_flesh_blob_spawn_egg", 1), "input")
    .requireFluidPerTick(Fluid.of("biomancy:enlargement_fluid", 1), "fluidInput")
    .requireStructure(
      [
        ["a", "m"],
        ["b", " "],
      ],
      { a: "biomancy:malignant_flesh", b: "biomancy:primal_bloom" }
    );

  e.recipes.custommachinery
    .custom_machine("society:incubator", 12000)
    .produceItem(Item.of("biomancy:living_flesh", 24))
    .requireItem(
      Item.of("biomancy:primordial_flesh_blob_spawn_egg", 1),
      "input"
    )
    .requireFluidPerTick(Fluid.of("biomancy:enlargement_fluid", 1), "fluidInput")
    .requireStructure(
      [
        ["a", "m"],
        ["b", " "],
      ],
      { a: "biomancy:malignant_flesh", b: "biomancy:primal_bloom" }
    );

  e.recipes.custommachinery
    .custom_machine("society:incubator", 14000)
    .produceItem(Item.of("biomancy:living_flesh", 32))
    .requireItem(
      Item.of("biomancy:primordial_hungry_flesh_blob_spawn_egg", 1),
      "input"
    )
    .requireFluidPerTick(Fluid.of("biomancy:enlargement_fluid", 1), "fluidInput")
    .requireStructure(
      [
        ["a", "m"],
        ["b", " "],
      ],
      { a: "biomancy:malignant_flesh", b: "biomancy:primal_bloom" }
    );
});
