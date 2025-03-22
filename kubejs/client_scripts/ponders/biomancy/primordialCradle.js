Ponder.registry((e) => {
    e.create("biomancy:primordial_cradle").scene("primordial_cradle_scene_one", "Creating Life", (scene, util) => {

        scene.showStructure();
        scene.world.setBlocks([2, 1, 2], "biomancy:primordial_cradle");

        scene.idle(10);

        scene.text(80, "The Primordial Cradle births Flesh Blobs that can be cultivated and slain for Living Flesh.", [2, 2, 2])

        scene.idle(90);

        scene.text(60, "Right click or toss raw meat into the cradle to feed it.", [2, 2, 2])

        scene.idle(20);

        scene.showControls(50, [2, 2, 2], "down").rightClick().withItem('minecraft:beef')

        scene.idle(50);

        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.SacrificeHandler.Biomass = 20;
        });
        scene.idle(5);
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.SacrificeHandler.Biomass = 20;
        });
        scene.idle(5);
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.SacrificeHandler.Biomass = 40;
        });
        scene.idle(5);
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.SacrificeHandler.Biomass = 60;
        });
        scene.idle(5);
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.SacrificeHandler.Biomass = 80;
        });
        scene.idle(5);
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.SacrificeHandler.Biomass = 100;
        });
        
        scene.idle(30);

        scene.addLazyKeyframe();

        scene.text(80, "Once filled with flesh, the cradle needs a Potion of Health, Regeneration or Golden Apple to digest.", [2, 2, 2])

        scene.idle(20);

        scene.showControls(60, [2, 2, 2], "down").rightClick().withItem('minecraft:potion')
   
        scene.idle(70);

        scene.text(80, "If successful, the cradle will birth a Flesh Blob!", [2, 2, 2])

        scene.idle(20);
        
        const fleshBlob = scene.world.createEntity("biomancy:flesh_blob", [2.5, 1, 2.5]);
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.SacrificeHandler.Biomass = 0;
        });
        for (let height = 1; height < 3; height = height + 0.3) {
            let h = height;
            scene.world.modifyEntity(fleshBlob, (e) => {
                e.setY(h);
            });
            scene.idle(1);
        }
        scene.idle(60);

        scene.addLazyKeyframe();

        scene.text(80, "They can be fattened up by feeding them with raw meat...")

        scene.idle(40);

        scene.showControls(60, [2, 4, 2], "down").rightClick().withItem('minecraft:beef')

        scene.idle(60);

        scene.world.removeEntity(fleshBlob);
        const centerBlockPos = util.grid.at(2, 3, 2);
        const centerTop = util.vector.topOf(centerBlockPos);

        scene.world.createItemEntity(centerTop.add(0, 0.5, 0), util.vector.of(-0.07, 0, 0), "biomancy:living_flesh");

        scene.text(40, "And then killed for their living flesh!")

        scene.idle(80);
        
        scene.addLazyKeyframe();

        scene.text(80, "There is a chance, however, that the birthing fails and primordial energy leaks out from the cradle...", [2, 2, 2])

        scene.idle(40);
        
        scene.world.setBlocks([2, 0, 3], "biomancy:malignant_flesh_veins", true);
        scene.world.setBlocks([1, 0, 2], "biomancy:malignant_flesh_veins", true);
        scene.world.setBlocks([3, 0, 2], "biomancy:malignant_flesh_veins", true);
        scene.world.setBlocks([2, 0, 1], "biomancy:malignant_flesh_veins", true);
        
        scene.idle(40);

        scene.world.setBlocks([1, 0, 1], "biomancy:malignant_flesh_veins", true);
        scene.world.setBlocks([3, 0, 1], "biomancy:malignant_flesh_veins", true);
        scene.world.setBlocks([3, 0, 3], "biomancy:malignant_flesh_veins", true);
        scene.world.setBlocks([1, 0, 3], "biomancy:malignant_flesh_veins", true);

        scene.idle(40);

        scene.world.setBlocks([0, 0, 2], "biomancy:malignant_flesh_veins", true);
        scene.world.setBlocks([2, 0, 0], "biomancy:malignant_flesh_veins", true);
        scene.world.setBlocks([4, 0, 2], "biomancy:malignant_flesh_veins", true);
        scene.world.setBlocks([2, 0, 4], "biomancy:malignant_flesh_veins", true);

        scene.text(80, "Cull the flesh before it spreads, or let it run wild and reap the rewards.", [2, 2, 2])

        scene.idle(20);

        scene.showControls(60, [1, 0, 2], "down").leftClick().withItem('minecraft:diamond_hoe')
   
        scene.idle(70);

    });

    e.create("biomancy:primordial_cradle").scene("primordial_cradle_scene_two", "Primordial Cradle Modifiers", (scene) => {

        scene.showStructure();
        scene.world.setBlocks([2, 1, 2], "biomancy:primordial_cradle");
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.SacrificeHandler.Biomass = 100;
        });

        scene.idle(10);
        
        scene.text(60, "When fed, the Primordial Cradle has a set chance to create a Flesh Blob.")

        scene.idle(70);

        scene.text(60, "This behavior can be modified by feeding it various items!")

        scene.idle(70);

        scene.addLazyKeyframe();

        scene.text(80, "For example, feeding the cradle Spider Eyes will give it a chance to create a Hungry Flesh Blob.", [2, 2, 2])

        scene.idle(20);

        scene.showControls(60, [2, 2, 2], "down").rightClick().withItem('minecraft:spider_eye')

        scene.idle(70);

        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.SacrificeHandler.Biomass = 0;
        });
        const hungryFleshBlob = scene.world.createEntity("biomancy:hungry_flesh_blob", [2.5, 1, 2.5]);

        for (let height = 1; height < 3; height = height + 0.3) {
            let h = height;
            scene.world.modifyEntity(hungryFleshBlob, (e) => {
                e.setY(h);
            });
            scene.idle(1);
        }
        scene.idle(30);

        scene.text(80, "Hungry Flesh Blobs actively seek out mobs to kill and grow in size", [2.5, 3.5, 2.5])

        scene.idle(80);

        scene.world.removeEntity(hungryFleshBlob);
        
        scene.idle(20);
        
        scene.addLazyKeyframe();

        scene.text(80, "Adding living flesh may birth something more primordial...", [2, 2, 2])
        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.SacrificeHandler.Biomass = 100;
        });
        scene.idle(20);

        scene.showControls(60, [2, 2, 2], "down").rightClick().withItem('biomancy:living_flesh')

        scene.idle(70);

        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.SacrificeHandler.Biomass = 0;
        });
        const primordialFleshBlob = scene.world.createEntity("biomancy:primordial_flesh_blob", [2.5, 1, 2.5]);

        for (let height = 1; height < 3; height = height + 0.3) {
            let h = height;
            scene.world.modifyEntity(primordialFleshBlob, (e) => {
                e.setY(h);
            });
            scene.idle(1);
        }
        scene.idle(50);

        scene.world.removeEntity(primordialFleshBlob);
        
        scene.idle(20);
        
        scene.addLazyKeyframe();

        scene.text(80, "If you're looking to force the cradle to fail and grow, toss in some rotten flesh." )

        scene.idle(20);

        scene.showControls(60, [2, 2, 2], "down").rightClick().withItem('minecraft:rotten_flesh')

        scene.idle(70);

        scene.text(80, "Experiment with different items, like that fleshcrafter you are..." )
        
        scene.idle(40);
    });

}); 