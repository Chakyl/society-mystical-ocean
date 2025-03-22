ItemEvents.tooltip((tooltip) => {
  const createMasteryTooltip = (type, displayName) => {
    tooltip.add(
      [`society:${type}_mastery`],
      Text.gold(`Reward from ${displayName} Bulk Shipping Decree. Board must have a Reputation level of at least 25.`)
    );
  };
  const createMasteryTrophyTooltip = (type) => {
    tooltip.add(
      [`society:${type}_mastery_trophy`],
      Text.gray(`Cheap replica for display only...`)
    );
  };
  const professions = ['blacksmith', 'cultivator', 'fisher', 'florist', 'gourmand', 'plunderer', 'shady_wizard', 'sifter', 'trapper'];
  const professionsDisplayName = ['Blacksmith', 'Cultivator', 'Fisher', 'Florist', 'Gourmand', 'Plunderer', 'Shady Wizard', 'Sifter', 'Trapper'];
  const magicMasteries = ['irons_spells', 'eidolon', 'embers', 'biomancy', 'ars_nouveau']
  for (let index = 0; index < professions.length; index++) {
    createMasteryTooltip(professions[index], professionsDisplayName[index]);
    createMasteryTrophyTooltip(professions[index]);
  }
  magicMasteries.forEach(mastery => {
    createMasteryTrophyTooltip(mastery);
  });
  const disabledWorkstations =['computercraft:computer_advanced', 'brewery:bar_counter', 'beachparty:tiki_bar', 'ars_nouveau:arcane_core', 'beachparty:lounge_chair', 'minecraft:lectern', 'candlelight:cooking_pot'];
  disabledWorkstations.forEach(workstation => {
    tooltip.add(
      [workstation],
      Text.gray(`Villager workstation disabled`)
    );
  });
  tooltip.add(
    ["aquaculture:neptunium_hoe"],
    Text.green("Unbreakable")
  );
  tooltip.add(
    ["supplementaries:antique_ink"],
    Text.darkPurple("May contain magic! Right click to identify")
  );
  tooltip.add(
    ["society:gourmand_contract"],
    Text.gold("Legendary reward from Gourmand decree")
  );
  tooltip.add(
    ["cookingforblockheads:cow_jar"],
    Text.gray("Not consumed in Cake Dough crafting recipe")
  );
  tooltip.add(
    ["ars_elemental:everfull_urn"],
    Text.gray("Not consumed in Dough crafting recipes")
  );
  tooltip.add(
    ["ars_nouveau:glyph_crush"],
    Text.gray("Not consumed in Grape Juice crafting recipes. Wixies will consume it anyways!")
  );
  tooltip.add(
    ["biomancy:acid_bucket"],
    Text.green("Harvested from Primal Orifices")
  );
  tooltip.add(
    ["autumnity:sap_bottle"],
    Text.gray("Harvested from Sappy Maple Logs uncovered from stripping Maple Logs")
  );
  tooltip.add(
    ["eidolon:withered_heart"],
    Text.darkPurple("Dropped by Zombie Brute affected by Wither")
  );
  tooltip.add(
    ["crabbersdelight:crab_claw"],
    Text.gray("Extends build reach when held")
  );
  tooltip.add(
    ["netherdepthsupgrade:lava_sponge"],
    Text.gray("Found in Nether lava lakes")
  );
  tooltip.add(
    ["irons_spellbooks:amethyst_resonance_charm"],
    Text.darkPurple("Can be Imbued and upgraded with orbs")
  );
  tooltip.add(
    ["ars_nouveau:archmage_spell_book"],
    Text.gold("Not consumed in Archmage Clippings crafting recipe")
  );
  tooltip.add(
    ["embers:solidified_metal"],
    Text.gray("Made by cooling molten metal with water in world")
  );
  tooltip.add(
    ["society:seed_of_evil"],
    Text.red(`Reward from Professor Decree. Board must have a Reputation level of at least 25.`)
  );
  tooltip.add(
    ["irons_spellbooks:scroll"],
    Text.gray("None scroll can be substituted for any scroll.")
  );
  tooltip.add(
    ["society:primordial_neptunium"],
    Text.darkAqua("From the master of the ocean...")
  );

  global.drygmy_blacklist.forEach(entity => {
    const checkEntity = entity.toString().split(":")[1]
    const modId = entity.toString().split(":")[0]
    if (checkEntity == 'citadel_keeper') {
      tooltip.add([`${modId}:keeper_spawn_egg`], Text.red("Blacklisted by Drygmy"));
    }
    if (checkEntity == 'fortressgrouper') {
      tooltip.add([`${modId}:fortress_grouper_bucket`], Text.red("Blacklisted by Drygmy"));
      tooltip.add([`${modId}:fortress_grouper_spawn_egg`], Text.red("Blacklisted by Drygmy"));
    }
    tooltip.add([`${entity}_bucket`], Text.red("Blacklisted by Drygmy"));
    tooltip.add([`${entity}_spawn_egg`], Text.red("Blacklisted by Drygmy"));
  })

});
