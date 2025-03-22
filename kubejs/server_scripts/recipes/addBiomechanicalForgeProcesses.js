console.info("[SOCIETY] addBiomechanicalForgeProcesses.js loaded");

let bioForgeRecipes = [];

ServerEvents.recipes((se) => {
  se.forEachRecipe({ type: "biomancy:bio_forging" }, (r) => {
    bioForgeRecipes.push({
      input: r.originalRecipeIngredients,
      output: r.originalRecipeResult,
    });
  });
  return bioForgeRecipes;
});

ServerEvents.recipes((e) => {
  const createProcess = (inputs, output) => {
    if (!inputs || !inputs[0]) return;
    const recipeTicks = 200;
    let baseRecipe = e.recipes.custommachinery
      .custom_machine("society:biomechanical_forge", recipeTicks)
      .produceItem(Item.of(output.get("item"), output.get("count")), "output")
      .requireFluidPerTick(
        Fluid.of("biomancy:digested_nutrients", inputs.length),
        "fluidInput"
      )
      .requireItem(Item.of(inputs[0].item, inputs[0].count))
      .priority(inputs.length +  inputs[0].count)
      .requireStructure(
        [
          ["aaa", "aaa", "aaa", " m "],
          ["bcb", "ccc", "bcb", "   "],
          ["bhb", "hch", "bhb", "   "],
          ["i i", " j ", "i i", "   "],
        ],
        {
          a: "biomancy:primal_flesh",
          b: "biomancy:primal_flesh_wall",
          c: "biomancy:bloomlight",
          h: "biomancy:primal_flesh_slab",
          i: "biomancy:flesh_spike",
          j: "biomancy:bio_forge",
        }
      );
    inputs.forEach((input, index) => {
      if (index === 0) return;
      if (input && input.item) {
        baseRecipe = baseRecipe.requireItem(Item.of(input.item, input.count));
      }
    });
  };

  bioForgeRecipes.forEach((recipe) => {
    const disbledRecipes = [
      "society:unholy_contract",
      "dimdungeons:item_blank_build_key",
      "embers:lead_crystal_seed",
      "sophisticatedbackpacks:gold_backpack",
      "biomancy:acolyte_armor_boots",
      "biomancy:acolyte_armor_leggings",
      "biomancy:acolyte_armor_chestplate",
      "biomancy:acolyte_armor_helmet",
      "biomancy:injector",
      "biomancy:extractor",
      "biomancy:caustic_gunblade",
      "biomancy:thorn_shield",
      "artifacts:everlasting_beef",
      "artifacts:digging_claws",
      "artifacts:kitty_slippers",
      "artifacts:feral_claws",
      "artifacts:plastic_drinking_hat",
      "artifacts:rooted_boots",
      "irons_spellbooks:netherite_spell_book",
      "biomancy:flesh_wall",
      "biomancy:flesh_slab",
      "biomancy:flesh_stairs",
      "biomancy:packed_flesh_wall",
      "biomancy:packed_flesh_slab",
      "biomancy:packed_flesh_stairs",
      "biomancy:packed_flesh_stairs",
      "biomancy:full_flesh_door",
      "dramaticdoors:tall_flesh_door",
      "minecraft:air",
      "biomancy:fibrous_flesh_slab",
      "biomancy:fibrous_flesh_wall",
      "biomancy:fibrous_flesh_stairs",
      "minecraft:player_head",
      "minecraft:piglin_head",
    ];
    const inputItems = [];

    if (
      !disbledRecipes.includes(
        recipe.output.toJson().get("item").toString().split('"').join("")
      )
    ) {
      recipe.input.forEach((input) => {
        const inputItem = input.toJson().get("item");
        let itemExists = false;
        inputItems.forEach((i) => {
          if (i.item.equals(inputItem)) {
            itemExists = true;
            i.count++;
          }
        });
        if (!itemExists) inputItems.push({ item: inputItem, count: 1 });
      });
      createProcess(inputItems, recipe.output.toJson());
    }
  });
  e.recipes.custommachinery
    .custom_machine("society:biomechanical_forge", 200)
    .produceItem(Item.of("biomancy:primordial_heart"), "output")
    .requireFluidPerTick(
      Fluid.of("biomancy:digested_nutrients", 2),
      "fluidInput"
    )
    .requireItem(Item.of("eidolon:zombie_heart"))
    .requireItem(Item.of("society:aquamagical_dust", 4))
    .requireStructure(
      [
        ["aaa", "aaa", "aaa", " m "],
        ["bcb", "ccc", "bcb", "   "],
        ["bhb", "hch", "bhb", "   "],
        ["i i", " j ", "i i", "   "],
      ],
      {
        a: "biomancy:primal_flesh",
        b: "biomancy:primal_flesh_wall",
        c: "biomancy:bloomlight",
        h: "biomancy:primal_flesh_slab",
        i: "biomancy:flesh_spike",
        j: "biomancy:bio_forge",
      }
    );
});
