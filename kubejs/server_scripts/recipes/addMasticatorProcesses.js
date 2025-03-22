console.info("[SOCIETY] addMasticatorProcesses.js loaded");

ServerEvents.recipes((e) => {
  e.recipes.custommachinery
    .custom_machine("society:masticator", 20)
    .requireItem(Item.of("biomancy:flesh_bits"))
    .produceFluid(Fluid.of("biomancy:blood", 150), "output")
    .requireStructure(
      [
        ["aaa", " m "],
        ["bcd", "   "],
      ],
      {
        a: "biomancy:ornate_flesh",
        b: "biomancy:bio_lantern_yellow",
        c: "biomancy:modular_larynx",
        d: "biomancy:bio_lantern_blue",
      }
    );
  e.recipes.custommachinery
    .custom_machine("society:masticator", 20)
    .requireItem(Item.of("biomancy:creator_mix"))
    .produceFluid(Fluid.of("biomancy:blood", 1200), "output")
    .requireStructure(
      [
        ["aaa", " m "],
        ["bcd", "   "],
      ],
      {
        a: "biomancy:ornate_flesh",
        b: "biomancy:bio_lantern_yellow",
        c: "biomancy:modular_larynx",
        d: "biomancy:bio_lantern_blue",
      }
    );

  e.recipes.custommachinery
    .custom_machine("society:masticator", 20)
    .requireItem(Item.of("biomancy:flesh"))
    .produceFluid(Fluid.of("biomancy:blood", 450), "output")
    .requireStructure(
      [
        ["aaa", " m "],
        ["bcd", "   "],
      ],
      {
        a: "biomancy:ornate_flesh",
        b: "biomancy:bio_lantern_yellow",
        c: "biomancy:modular_larynx",
        d: "biomancy:bio_lantern_blue",
      }
    );

  e.recipes.custommachinery
    .custom_machine("society:masticator", 20)
    .requireItem(Item.of("biomancy:fibrous_flesh"))
    .produceFluid(Fluid.of("biomancy:blood", 450), "output")
    .requireStructure(
      [
        ["aaa", " m "],
        ["bcd", "   "],
      ],
      {
        a: "biomancy:ornate_flesh",
        b: "biomancy:bio_lantern_yellow",
        c: "biomancy:modular_larynx",
        d: "biomancy:bio_lantern_blue",
      }
    );

  e.recipes.custommachinery
    .custom_machine("society:masticator", 20)
    .requireItem(Item.of("biomancy:packed_flesh"))
    .produceFluid(Fluid.of("biomancy:blood", 1000), "output")
    .requireStructure(
      [
        ["aaa", " m "],
        ["bcd", "   "],
      ],
      {
        a: "biomancy:ornate_flesh",
        b: "biomancy:bio_lantern_yellow",
        c: "biomancy:modular_larynx",
        d: "biomancy:bio_lantern_blue",
      }
    );

  e.recipes.custommachinery
    .custom_machine("society:masticator", 20)
    .requireItem(Item.of("biomancy:toxin_extract"))
    .produceFluid(Fluid.of("biomancy:acid", 250), "output")
    .requireStructure(
      [
        ["aaa", " m "],
        ["bcd", "   "],
      ],
      {
        a: "biomancy:ornate_flesh",
        b: "biomancy:bio_lantern_yellow",
        c: "biomancy:modular_larynx",
        d: "biomancy:bio_lantern_blue",
      }
    );

  e.recipes.custommachinery
    .custom_machine("society:masticator", 60)
    .requireItem(Item.of("biomancy:nutrient_bar"))
    .produceFluid(Fluid.of("biomancy:digested_nutrients", 300), "output")
    .requireStructure(
      [
        ["aaa", " m "],
        ["bcd", "   "],
      ],
      {
        a: "biomancy:ornate_flesh",
        b: "biomancy:bio_lantern_yellow",
        c: "biomancy:modular_larynx",
        d: "biomancy:bio_lantern_blue",
      }
    );

  e.recipes.custommachinery
    .custom_machine("society:masticator", 20)
    .requireItem(Item.of("biomancy:nutrient_paste"))
    .produceFluid(Fluid.of("biomancy:digested_nutrients", 20), "output")
    .requireStructure(
      [
        ["aaa", " m "],
        ["bcd", "   "],
      ],
      {
        a: "biomancy:ornate_flesh",
        b: "biomancy:bio_lantern_yellow",
        c: "biomancy:modular_larynx",
        d: "biomancy:bio_lantern_blue",
      }
    );

  e.recipes.custommachinery
    .custom_machine("society:masticator", 20)
    .requireItem(Item.of("biomancy:enlargement_serum"))
    .produceFluid(Fluid.of("biomancy:enlargement_fluid", 1000), "output")
    .requireStructure(
      [
        ["aaa", " m "],
        ["bcd", "   "],
      ],
      {
        a: "biomancy:ornate_flesh",
        b: "biomancy:bio_lantern_yellow",
        c: "biomancy:modular_larynx",
        d: "biomancy:bio_lantern_blue",
      }
    );
});
