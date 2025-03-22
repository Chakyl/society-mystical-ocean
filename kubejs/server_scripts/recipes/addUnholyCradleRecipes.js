console.info("[SOCIETY] addUnholyCradleProcesses.js loaded");

ServerEvents.recipes((e) => {
  e.recipes.custommachinery
    .custom_machine("society:unholy_cradle", 1000)
    .produceItem(Item.of("biomancy:flesh_blob_spawn_egg", 1), "output")
    .requireItem(Item.of("biomancy:primordial_heart", 1))
    .requireFluidPerTick(Fluid.of("biomancy:blood", 1), "fluidInput")
    .requireStructure(
      [
        ["wbbbw", "bbbbb", "bbbbb", "bbbbb", "wbbbw", "  m  "],
        ["wghgw", "gjjjg", "hjjjh", "gjjjg", "wghgw", "     "],
        [" bbb ", "b   b", "b p b", "b   b", " bbb ", "     "],
        [" w w ", "w   w", "     ", "w   w", " w w ", "     "],
        [" o o ", "o   o", "     ", "o   o", " o o ", "     "],
      ],
      {
        w: "biomancy:packed_flesh_wall",
        b: "biomancy:packed_flesh",
        g: "biomancy:ornate_flesh",
        h: "biomancy:bloomlight",
        j: "biomancy:malignant_flesh",
        o: "biomancy:flesh_spike",
        p: "biomancy:primordial_cradle",
      }
    );

  e.recipes.custommachinery
    .custom_machine("society:unholy_cradle", 1000)
    .produceItem(Item.of("biomancy:hungry_flesh_blob_spawn_egg", 1), "output")
    .requireItem(Item.of("biomancy:primordial_heart"))
    .requireFluidPerTick(Fluid.of("biomancy:blood", 2), "fluidInput")
    .requireItem(Item.of("minecraft:spider_eye", 4))
    .requireStructure(
      [
        ["wbbbw", "bbbbb", "bbbbb", "bbbbb", "wbbbw", "  m  "],
        ["wghgw", "gjjjg", "hjjjh", "gjjjg", "wghgw", "     "],
        [" bbb ", "b   b", "b p b", "b   b", " bbb ", "     "],
        [" w w ", "w   w", "     ", "w   w", " w w ", "     "],
        [" o o ", "o   o", "     ", "o   o", " o o ", "     "],
      ],
      {
        w: "biomancy:packed_flesh_wall",
        b: "biomancy:packed_flesh",
        g: "biomancy:ornate_flesh",
        h: "biomancy:bloomlight",
        j: "biomancy:malignant_flesh",
        o: "biomancy:flesh_spike",
        p: "biomancy:primordial_cradle",
      }
    );

  e.recipes.custommachinery
    .custom_machine("society:unholy_cradle", 1000)
    .produceItem(
      Item.of("biomancy:primordial_flesh_blob_spawn_egg", 1),
      "output"
    )
    .requireItem(Item.of("biomancy:primordial_heart"))
    .requireFluidPerTick(Fluid.of("biomancy:blood", 4), "fluidInput")
    .requireItem(Item.of("biomancy:living_flesh", 2))
    .requireStructure(
      [
        ["wbbbw", "bbbbb", "bbbbb", "bbbbb", "wbbbw", "  m  "],
        ["wghgw", "gjjjg", "hjjjh", "gjjjg", "wghgw", "     "],
        [" bbb ", "b   b", "b p b", "b   b", " bbb ", "     "],
        [" w w ", "w   w", "     ", "w   w", " w w ", "     "],
        [" o o ", "o   o", "     ", "o   o", " o o ", "     "],
      ],
      {
        w: "biomancy:packed_flesh_wall",
        b: "biomancy:packed_flesh",
        g: "biomancy:ornate_flesh",
        h: "biomancy:bloomlight",
        j: "biomancy:malignant_flesh",
        o: "biomancy:flesh_spike",
        p: "biomancy:primordial_cradle",
      }
    );

  e.recipes.custommachinery
    .custom_machine("society:unholy_cradle", 1000)
    .produceItem(
      Item.of("biomancy:primordial_hungry_flesh_blob_spawn_egg", 1),
      "output"
    )
    .requireItem(Item.of("biomancy:primordial_heart"))
    .requireFluidPerTick(Fluid.of("biomancy:blood", 8), "fluidInput")
    .requireItem(Item.of("biomancy:living_flesh", 2))
    .requireItem(Item.of("minecraft:spider_eye", 4))
    .requireStructure(
      [
        ["wbbbw", "bbbbb", "bbbbb", "bbbbb", "wbbbw", "  m  "],
        ["wghgw", "gjjjg", "hjjjh", "gjjjg", "wghgw", "     "],
        [" bbb ", "b   b", "b p b", "b   b", " bbb ", "     "],
        [" w w ", "w   w", "     ", "w   w", " w w ", "     "],
        [" o o ", "o   o", "     ", "o   o", " o o ", "     "],
      ],
      {
        w: "biomancy:packed_flesh_wall",
        b: "biomancy:packed_flesh",
        g: "biomancy:ornate_flesh",
        h: "biomancy:bloomlight",
        j: "biomancy:malignant_flesh",
        o: "biomancy:flesh_spike",
        p: "biomancy:primordial_cradle",
      }
    );
});
