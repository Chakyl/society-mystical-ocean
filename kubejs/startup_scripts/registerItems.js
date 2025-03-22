StartupEvents.registry("item", (e) => {
  Platform.mods.kubejs.name = "Society";
  const createMastery = (type, trophy) => {
    e.create(`society:${type}_mastery${trophy ? '_trophy' : ''}`).texture(`society:item/${type}_mastery`);
  };
  const masteries = ['blacksmith', 'cultivator', 'fisher', 'florist', 'gourmand', 'plunderer', 'shady_wizard', 'sifter', 'trapper', 'shipping', 'eidolon', 'irons_spells', 'embers', 'biomancy', 'ars_nouveau'];
  masteries.forEach(mastery => {
    createMastery(mastery);
    createMastery(mastery, true);
  });

  e.create("society:seed_of_evil").texture("society:item/seed_of_evil").displayName("Seed of Desire");
  e.create("society:archmage_clippings").texture("society:item/archmage_clippings");
  
  // Sea coins
  e.create("society:iron_sea_coin").texture("society:item/iron_sea_coin");
  e.create("society:gold_sea_coin").texture("society:item/gold_sea_coin");
  e.create("society:neptunium_sea_coin").texture("society:item/neptunium_sea_coin").glow(true);

  // Modpack progression
  e.create("society:unholy_contract").texture("society:item/unholy_contract");
  e.create("biomancy:primordial_heart").texture("society:item/primordial_heart").glow(true);

  e.create("society:gourmand_contract").texture(
    "society:item/gourmand_contract"
  );
  e.create("society:aquamagical_dust")
    .texture("society:item/aquamagical_dust")
    .glow(true);
  e.create("society:aquamagical_essence")
    .texture("society:item/aquamagical_essence")
    .glow(true);
  e.create("society:aquamagical_crystal")
    .texture("society:item/aquamagical_crystal")
    .glow(true);
  e.create("society:sea_coin_fragments").texture(
    "society:item/sea_coin_fragments"
  );
  e.create("herbalbrews:water_cup")
    .texture("society:item/water_cup")
    .maxStackSize(16);
  e.create("society:message_in_a_bottle")
    .texture("society:item/message_in_a_bottle")
    .glow(true);
  e.create("aquaculture:neptuna")
    .food((food) => {
      food.hunger(20).saturation(2).meat();
    })
    .texture("society:item/neptuna")
    .glow(true);
  e.create("society:fading_aquamagic")
    .texture("society:item/fading_aquamagic")
  e.create("society:heart_of_neptunium")
    .texture("society:item/heart_of_neptunium")
    .glow(true)
    .unstackable();
  e.create("society:empty_heart_of_neptunium")
    .texture("society:item/empty_heart_of_neptunium")
    .unstackable();
  e.create("society:primordial_neptunium")
    .texture("society:item/primordial_neptunium")
    .glow(true);
    
  // Chum
  e.create("society:bucket_of_black_tiger_shrimp_chum")
    .texture("society:item/bucket_of_black_tiger_shrimp_chum")
    .unstackable()
    .maxDamage(48);
  e.create("society:bucket_of_thrasher_chum")
    .texture("society:item/bucket_of_thrasher_chum")
    .unstackable()
    .maxDamage(48);
  e.create("society:bucket_of_book_chum")
    .texture("society:item/bucket_of_book_chum")
    .unstackable()
    .maxDamage(48);
  e.create("society:bucket_of_meat_chum")
    .texture("society:item/bucket_of_meat_chum")
    .unstackable()
    .maxDamage(48);
  e.create("society:bucket_of_nether_chum")
    .texture("society:item/bucket_of_nether_chum")
    .unstackable()
    .maxDamage(48);
});