console.info("[SOCIETY] addCustomMachineRecipes.js loaded");

ServerEvents.recipes((e) => {
  e.shaped("society:masticator", ["Dfd", "bCb", "fpf"], {
    b: "biomancy:bloomberry",
    f: "biomancy:flesh",
    C: "computercraft:computer_advanced",
    p: "biomancy:primordial_core",
    d: "biomancy:digester",
    D: "biomancy:decomposer",
  });

  e.shaped("society:biomechanical_forge", ["fBf", "bCb", "fpf"], {
    b: "biomancy:bloomberry",
    f: "biomancy:primal_flesh",
    C: "computercraft:computer_advanced",
    p: "biomancy:primordial_core",
    B: "biomancy:bio_forge",
  });

  e.shaped("society:unholy_cradle", ["fPf", "bCb", "fsf"], {
    b: "biomancy:bloomberry",
    f: "biomancy:packed_flesh",
    C: "computercraft:computer_advanced",
    s: "society:seed_of_evil",
    P: "biomancy:primordial_cradle",
  });

  e.shaped("society:incubator", ["iii", "ipi", "mCm"], {
    i: "biomancy:impermeable_membrane",
    C: "computercraft:computer_advanced",
    p: "biomancy:primordial_cradle",
    m: "biomancy:malignant_flesh",
  });

  e.shaped("society:dehydrator", ["bDb", "DCD", "bDb"], {
    b: "minecraft:bricks",
    D: "embers:dawnstone_plate",
    C: "embers:hearth_coil",
  });

  e.shaped("society:bottler", ["bDb", "DCD", "bDb"], {
    b: "embers:reinforced_sealed_planks",
    D: "embers:dawnstone_plate",
    C: "embers:reservoir",
  });

  e.shaped("society:industrial_brewer", ["bDb", "DCD", "bDb"], {
    b: "candlelight:deepslate_counter",
    D: "embers:dawnstone_plate",
    C: "brewery:netherite_brewingstation",
  });

  e.shaped("society:source_terrarium", ["bnb", "gCg", "bbb"], {
    b: "ars_nouveau:sourcestone_large_bricks",
    n: "society:aquamagical_crystal",
    g: "ars_nouveau:glyph_grow",
    C: "ars_elemental:earth_turret",
  });
});
