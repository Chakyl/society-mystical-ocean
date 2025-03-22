console.info('[SOCIETY] antiqueInk.js loaded')

ItemEvents.rightClicked((e) => {
  let inkItems = [
    "minecraft:ink_sac",
    "minecraft:glow_ink_sac",
    "eidolon:magic_ink",
    "irons_spellbooks:common_ink",
    "irons_spellbooks:common_ink",
    "irons_spellbooks:common_ink",
    "irons_spellbooks:common_ink",
    "irons_spellbooks:common_ink",
    "irons_spellbooks:uncommon_ink",
    "irons_spellbooks:uncommon_ink",
    "irons_spellbooks:uncommon_ink",
    "irons_spellbooks:uncommon_ink",
    "irons_spellbooks:rare_ink",
    "irons_spellbooks:rare_ink",
    "irons_spellbooks:rare_ink",
    "irons_spellbooks:epic_ink",
    "irons_spellbooks:epic_ink",
    "irons_spellbooks:legendary_ink",
  ];
  if (
    e.player.getHeldItem("main_hand") == Item.of("supplementaries:antique_ink")
  ) {
    e.item.count--;
    e.player.give(inkItems[Math.floor(Math.random() * inkItems.length)]);
  }
});
