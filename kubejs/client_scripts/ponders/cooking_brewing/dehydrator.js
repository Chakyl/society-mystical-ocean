Ponder.registry((e) => {

    const createSiloLayer = (scene, bottom, top, height) => {
        scene.world.setBlocks([3, height, 1], 'brewery:silo_copper');
        scene.world.setBlocks([2, height, 1], 'brewery:silo_copper');
        scene.world.setBlocks([1, height, 1], 'brewery:silo_copper');

        scene.world.setBlocks([3, height, 2], 'brewery:silo_copper');
        scene.world.setBlocks([2, height, 2], 'brewery:silo_copper');
        scene.world.setBlocks([1, height, 2], 'brewery:silo_copper');

        scene.world.setBlocks([3, height, 3], 'brewery:silo_copper');
        scene.world.setBlocks([2, height, 3], 'brewery:silo_copper');
        scene.world.setBlocks([1, height, 3], 'brewery:silo_copper');

        scene.world.modifyBlock([3, height, 3], () => Block.id('brewery:silo_copper').with("shape", "south_east").with("facing", "north").with("bottom", bottom).with("top", top), false);
        scene.world.modifyBlock([2, height, 3], () => Block.id('brewery:silo_copper').with("shape", "south").with("facing", "north").with("bottom", bottom).with("top", top), false);
        scene.world.modifyBlock([1, height, 3], () => Block.id('brewery:silo_copper').with("shape", "south_west").with("facing", "north").with("bottom", bottom).with("top", top), false);
        scene.world.modifyBlock([3, height, 2], () => Block.id('brewery:silo_copper').with("shape", "east").with("facing", "north").with("bottom", bottom).with("top", top), false);
        scene.world.modifyBlock([2, height, 2], () => Block.id('brewery:silo_copper').with("shape", "none").with("facing", "north").with("bottom", bottom).with("top", top), false);
        scene.world.modifyBlock([1, height, 2], () => Block.id('brewery:silo_copper').with("shape", "west").with("facing", "north").with("bottom", bottom).with("top", top), false);
        scene.world.modifyBlock([3, height, 1], () => Block.id('brewery:silo_copper').with("shape", "north_east").with("facing", "north").with("bottom", bottom).with("top", top), false);
        scene.world.modifyBlock([2, height, 1], () => Block.id('brewery:silo_copper').with("shape", "north").with("facing", "north").with("bottom", bottom).with("top", top), false);
        scene.world.modifyBlock([1, height, 1], () => Block.id('brewery:silo_copper').with("shape", "north_west").with("facing", "north").with("bottom", bottom).with("top", top), false);
    }
    e.create(["society:dehydrator"]).scene("dehydrator_build", "Building The Dehydrator", (scene) => {

        scene.showBasePlate();

        scene.world.setBlocks([2, 1, 0], "custommachinery:custom_machine_block");
        scene.world.modifyBlockEntityNBT([2, 1, 0],(nbt) => {
            nbt.machineID = "society:dehydrator";
         });
        scene.world.showSection([2, 1, 0], Facing.DOWN);

        scene.idle(10);

        scene.text(80, "The Dehydrator is a multiblock machine for automating Silo recipes. It requires a multiblock behind it to function.")

        scene.idle(90);

        scene.addLazyKeyframe();

        scene.text(60, "Its base layer is made up of Bricks and a Block of Dawnstone.", [2, 1, 2])

        scene.idle(20);

        scene.showControls(60, [3, 2, 1], "down").rightClick().withItem("minecraft:bricks");
        scene.showControls(60, [2, 2, 2], "down").rightClick().withItem("embers:dawnstone_block");

        scene.idle(80);


        scene.world.setBlocks([3, 1, 1], "minecraft:bricks", true);
        scene.world.setBlocks([2, 1, 1], "minecraft:bricks", true);
        scene.world.setBlocks([1, 1, 1], "minecraft:bricks", true);
        scene.world.setBlocks([3, 1, 2], "minecraft:bricks", true);
        scene.world.setBlocks([2, 1, 2], "embers:dawnstone_block", true);
        scene.world.setBlocks([1, 1, 2], "minecraft:bricks", true);
        scene.world.setBlocks([3, 1, 3], "minecraft:bricks", true);
        scene.world.setBlocks([2, 1, 3], "minecraft:bricks", true);
        scene.world.setBlocks([1, 1, 3], "minecraft:bricks", true);

        global.showPonderLayer(scene, 3, 1, {x: 2, z: 0});

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(60, "The next three layers are made up entirely of Copper Silos.", [2, 2, 2])

        scene.showControls(60, [2, 3, 2], "down").rightClick().withItem("brewery:silo_copper");

        scene.idle(80);

        createSiloLayer(scene, true, false, 2);
        createSiloLayer(scene, false, false, 3);
        createSiloLayer(scene, false, true, 4);

        global.showPonderLayer(scene, 0, 2);
        global.showPonderLayer(scene, 0, 3);
        global.showPonderLayer(scene, 0, 4);

        scene.idle(80);

    });
}); 