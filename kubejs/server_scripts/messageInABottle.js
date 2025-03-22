console.info("[SOCIETY] messageInABottle.js loaded");

ItemEvents.rightClicked((e) => {
  let messages = [
    "Having nine different level 25 Bounty Boards with each of the shop Decrees makes shopping easy!",
    "Despite what the UI says, Bounty Boards discount caps out at reputation level 30.",
    "Sometimes it's better to not level a bounty board if you're looking for specific Common/Uncommon rewards.",
    "Bulk Shipping Decrees are the best way to make Sea Coins. Find out what the Decree is asking for, and automate it!",
    "The Hunter hidden Decree rewards Sea Coins for killing specific mobs.",
    "The Gatekeeper hidden Decree sells Dimensional Dungeon keys and Key Inscribers.",
    "Hunting for Ghast Tears? Craft a Magnet so they don't fall in lava.",
    "If you aren't progressing with your Eidolon patron, you may have missed something in the Theurgy tab of your book you need to do...",
    "Crab Traps can be automated, though you'll need a way to filter out the empty buckets only and not the chum buckets.",
    "Struggling with the Embers alchemy minigame? Look up a Mastermind solver online and cheat your way through it.",
    "The Aquamagical Resonance Charm can be upgraded with orbs, giving you an additional 10 slots.",
    "Embers Alchemy recipes and Ars Nouveau Enchanting Apparatus recipes can be automated with enough effort.",
    "The Dawnstone anvil can break down items into their repair material. This works with Netherite and Neptunium tools (outside of the unbreakable ones).",
    "Decomposers can break down junk enchanted books for experience.",
    "Drygmys can harvest hearts from Zombie Brutes.",
    "Unlike most water mobs, Drygmys can harvest from Fiddler Crabs.",
    "You'll need to fish in every kind of ocean biome to finish your Fishopedia.",
    "Ancient cities are an excellent source of high level spell scrolls.",
    "You'll need to automate resources from every bulk shipping decree to complete the modpack. The sooner you start, the less painful it is and the more coin you can make.",
    "I promise there is a point where Neptunium and Sea Coins become easy to acquire.",
    "You can do the magic mods in any order, but Biomancy requires the most saving up to do anything productive.",
    "Biomancy may have a high up-front Neptunium cost, but once you craft the Bio-Forge you'll make it all back in savings.",
    "How do you make fishing better? By crafting a radio and playing an album from Bandcamp.",
    "Finishing the modpack is not advised. Play until you stop having fun!",
    "Playing on a server? Try selling food for Sea Coins, or find a niche that other players haven't gotten to.",
    "Concrete can be automated using Dispensers to place the powder and an Iron Rod pushed by a Sticky Piston to destroy it.",
    "There are 30 Aquamagical Tips. Collect them all!",
    "Stuck waiting on Gold Sea Coins to decompose? Craft multiple Decomposers! It's worth the investment.",
    "You will need vast amounts of firepower and defence to beat the final boss. Become magically overpowered by any means necessary...",
    "If something costs Neptunium, that probably means it's worth the investment. Except for those Balenciaga Crocs, the pack author did that as a joke.",
  ];
  let authors = [
    "James Joyce",
    "Joan Didion",
    "Anton Chekhov",
    "Jean-Paul Sartre",
    "Mikhail Bulgakov",
    "Toni Morrison",
    "Purple Ocean",
    "Fish that Speaks",
    "Leo Tolstoy",
    "Kurt Vonnegut",
    "James Baldwin",
    "Fran Lebowitz",
    "Michel Foucault",
    "Georg Wilhelm Friedrich Hegel",
    "Nikolai Gogol",
    "Frantz Fanon",
    "Jane Eyre",
    "Emily Bronte",
    "Fyodor Dostoevsky",
    "Mark Fisher",
    "Alexander Pushkin",
    "Franz Kafka",
    "Jeff VanderMeer",
    "Cormac Mccarthy",
    "Frank Herbert",
    "Jenny Hval",
    "Guy Debord",
    "Malcom Gladwell",
    "Stendhal",
    "Jaded Clouds"
  ];
  let mappedMessages = [];
  mappedMessages = messages.map((message, index) =>
    Item.of(
      "candlelight:note_paper_written",
      `{author:"${authors[index]}",text:["  Aquamagical Tip #${index < 9 ? `0${index+1}` : index + 1 }                              ${message}"],title:"Aquamagical Tip #${index+1}"}`
    )
  );
  if (
    e.player.getHeldItem("main_hand") == Item.of("society:message_in_a_bottle")
  ) {
    e.item.count--;
    e.player.give(
      mappedMessages[Math.floor(Math.random() * mappedMessages.length)]
    );
  }
});
