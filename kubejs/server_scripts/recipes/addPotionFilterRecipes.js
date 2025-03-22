console.info("[SOCIETY] addPotionFilterRecipes.js loaded");

ServerEvents.recipes((e) => {
  const potions = [
    { effect: "minecraft:speed", catalyst: ['artifacts:running_shoes'], hasAmplifier: true },
    { effect: "minecraft:jump_boost", catalyst: ['artifacts:bunny_hoppers'], hasAmplifier: true },
    { effect: "minecraft:invisibility", catalyst: ['artifacts:scarf_of_invisibility'], hasAmplifier: false },
    { effect: "minecraft:night_vision", catalyst: ['artifacts:night_vision_goggles'], hasAmplifier: false },
    { effect: "minecraft:fire_resistance", catalyst: ['artifacts:obsidian_skull', 'artifacts:flame_pendant'], hasAmplifier: false },
    { effect: "minecraft:water_breathing", catalyst: ['artifacts:snorkel'], hasAmplifier: false },
    { effect: "minecraft:haste", catalyst: ['artifacts:digging_claws', Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:haste",index:0,level:11,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').weakNBT()], hasAmplifier: true },
    { effect: "minecraft:strength", catalyst: ['artifacts:power_glove', 'artifacts:pocket_piston'], hasAmplifier: true },
    { effect: "minecraft:luck", catalyst: ['candlelight:gold_ring'], hasAmplifier: true },
    { effect: "minecraft:slow_falling", catalyst: ['artifacts:umbrella'], hasAmplifier: false },
    { effect: "minecraft:glowing", catalyst: ['vinery:glowing_wine'], hasAmplifier: false },
    { effect: "alexscaves:deepsight", catalyst: ['artifacts:night_vision_goggles', 'minecraft:conduit'], hasAmplifier: false },
    { effect: "ars_nouveau:spell_damage", catalyst: ['society:archmage_clippings', 'ars_elemental:mark_of_mastery', 'ars_nouveau:thread_spellpower'], hasAmplifier: true },
    { effect: "ars_nouveau:mana_regen", catalyst: ['society:archmage_clippings', 'ars_elemental:mark_of_mastery', 'ars_nouveau:thread_magic_capacity'], hasAmplifier: true },
    { effect: "ars_nouveau:shielding", catalyst: ['society:archmage_clippings', 'ars_elemental:mark_of_mastery', 'ars_nouveau:thread_warding'], hasAmplifier: true },
    { effect: "alexscaves:magnetizing", catalyst: ['artifacts:universal_attractor'], hasAmplifier: false },
    { effect: "eidolon:anchored", catalyst: ['eidolon:shadow_gem', 'eidolon:warped_sprouts'], hasAmplifier: false },
    { effect: "eidolon:reinforced", catalyst: ['eidolon:shadow_gem_block', 'eidolon:resolute_belt'], hasAmplifier: true },
    { effect: "netherdepthsupgrade:lava_vision", catalyst: ['netherdepthsupgrade:eyeball_fish_bucket'], hasAmplifier: false },
    { effect: "quark:resilience", catalyst: ['quark:crab_shell', 'artifacts:antidote_vessel'], hasAmplifier: false },
    { effect: "upgrade_aquatic:repellence", catalyst: ['artifacts:thorn_pendant', 'overweight_farming:overweight_poisonous_potato_block'], hasAmplifier: true },
    { effect: "upgrade_aquatic:vibing", catalyst: ['artifacts:cross_necklace', 'artifacts:crystal_heart'], hasAmplifier: true },
  ];
  potions.forEach((potion) => {
    const { effect, catalyst, hasAmplifier } = potion
    const filterCard = Item.of('pylons:potion_filter', `{pylons:{amplifier:0,duration:2000,effect:"${effect}"}}`)
    e.shapeless(filterCard, ['pylons:potion_filter'].concat(catalyst));
    if (hasAmplifier) e.shapeless(Item.of('pylons:potion_filter', `{pylons:{amplifier:1,duration:2000,effect:"${effect}"}}`), [filterCard.weakNBT(), filterCard.weakNBT()])
  });
});
