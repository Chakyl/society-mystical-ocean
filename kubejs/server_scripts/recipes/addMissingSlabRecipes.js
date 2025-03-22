console.info("[SOCIETY] addMissingSlabRecipes.js loaded");

ServerEvents.recipes((e) => {
  const recipes = [
    { plank: "autumnity:maple_planks", slab: "autumnity:maple_slab" },
    { plank: "atmospheric:kousa_planks", slab: "atmospheric:kousa_slab" },
    { plank: "atmospheric:aspen_planks", slab: "atmospheric:aspen_slab" },
    { plank: "atmospheric:yucca_planks", slab: "atmospheric:yucca_slab" },
    { plank: "atmospheric:rosewood_planks", slab: "atmospheric:rosewood_slab" },
    { plank: "atmospheric:morado_planks", slab: "atmospheric:morado_slab" },
    { plank: "beachparty:palm_planks", slab: "beachparty:palm_slab" },
    { plank: "atmospheric:grimwood_planks", slab: "atmospheric:grimwood_slab" },
    { plank: "atmospheric:laurel_planks", slab: "atmospheric:laurel_slab" },
    { plank: "vinery:dark_cherry_planks", slab: "vinery:dark_cherry_slab" },
    { plank: "alexscaves:pewen_planks", slab: "alexscaves:pewen_slab" },
    { plank: "alexscaves:thornwood_planks", slab: "alexscaves:thornwood_slab" },
    { plank: "ars_nouveau:archwood_planks", slab: "ars_nouveau:archwood_slab" },
    { plank: "gardens_of_the_dead:whistlecane_planks", slab: "gardens_of_the_dead:whistlecane_slab" },
    { plank: "gardens_of_the_dead:soulblight_planks", slab: "gardens_of_the_dead:soulblight_slab" },
    { plank: "upgrade_aquatic:driftwood_planks", slab: "upgrade_aquatic:driftwood_slab" },
    { plank: "upgrade_aquatic:river_planks", slab: "upgrade_aquatic:river_slab"}
  ];
  recipes.forEach((recipe) => {
    const { plank, slab } = recipe;
    e.shaped(`6x ${slab}`, ["   ", "ppp", "   "], {
      p: plank,
    });
  });
});