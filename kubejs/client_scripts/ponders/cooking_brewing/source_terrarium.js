Ponder.registry((e) => {

    e.create("society:source_terrarium").scene("source_terrarium_build", "Building The Source Terrarium", (scene) => {

        scene.showBasePlate();

        scene.world.setBlocks([2, 1, 0], "custommachinery:custom_machine_block");
        scene.world.modifyBlockEntityNBT([2, 1, 0],(nbt) => {
            nbt.machineID = "society:source_terrarium";
         });
        scene.world.showSection([2, 1, 0], Facing.DOWN);

        scene.idle(10);

        scene.text(80, "The Source Terrarium is a machine for automating crop growth. It requires a multiblock behind it to function.")

        scene.idle(90);

        scene.addLazyKeyframe();

        scene.text(60, "Its base layer is made up of Sourcestone: Large Bricks and a Planter.", [2, 1, 2])

        scene.idle(20);

        scene.showControls(60, [3, 2, 3], "down").rightClick().withItem("ars_nouveau:sourcestone_large_bricks");
        scene.showControls(60, [2, 2, 2], "down").rightClick().withItem("supplementaries:planter");

        scene.idle(80);

        scene.world.setBlocks([3, 1, 1], "ars_nouveau:sourcestone_large_bricks", true);
        scene.world.setBlocks([2, 1, 3], "ars_nouveau:sourcestone_large_bricks", true);
        scene.world.setBlocks([1, 1, 1], "ars_nouveau:sourcestone_large_bricks", true);
        scene.world.setBlocks([3, 1, 2], "ars_nouveau:sourcestone_large_bricks", true);
        scene.world.setBlocks([1, 1, 2], "ars_nouveau:sourcestone_large_bricks", true);
        scene.world.setBlocks([2, 1, 2], "supplementaries:planter", true);
        scene.world.setBlocks([3, 1, 3], "ars_nouveau:sourcestone_large_bricks", true);
        scene.world.setBlocks([1, 1, 3], "ars_nouveau:sourcestone_large_bricks", true);
        scene.world.setBlocks([2, 1, 1], "ars_nouveau:sourcestone_large_bricks", true);

        global.showPonderLayer(scene, 3, 1, {x: 2, z: 0});

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(60, "The second layer contains an Agronomic Sourcelink and Depth Glass.", [2, 2, 2])

        scene.showControls(60, [3, 3, 3], "down").rightClick().withItem("alexscaves:depth_glass");
        scene.showControls(60, [2, 3, 2], "down").rightClick().withItem("ars_nouveau:agronomic_sourcelink");

        scene.idle(80);

        scene.world.setBlocks([3, 2, 1], "alexscaves:depth_glass", true);
        scene.world.setBlocks([2, 2, 3], "alexscaves:depth_glass", true);
        scene.world.setBlocks([1, 2, 1], "alexscaves:depth_glass", true);
        scene.world.setBlocks([3, 2, 2], "alexscaves:depth_glass", true);
        scene.world.setBlocks([1, 2, 2], "alexscaves:depth_glass", true);
        scene.world.setBlocks([2, 2, 2], "ars_nouveau:agronomic_sourcelink", true);
        scene.world.setBlocks([3, 2, 3], "alexscaves:depth_glass", true);
        scene.world.setBlocks([2, 2, 1], "alexscaves:depth_glass", true);
        scene.world.setBlocks([1, 2, 3], "alexscaves:depth_glass", true);

        global.showPonderLayer(scene, 3, 2);

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(60, "The third layer is filled with Depth Glass.", [2, 3, 2])

        scene.showControls(60, [2, 4, 2], "down").rightClick().withItem("alexscaves:depth_glass");

        scene.idle(80);

        scene.world.setBlocks([3, 3, 1], "alexscaves:depth_glass", true);
        scene.world.setBlocks([2, 3, 3], "alexscaves:depth_glass", true);
        scene.world.setBlocks([1, 3, 1], "alexscaves:depth_glass", true);
        scene.world.setBlocks([3, 3, 2], "alexscaves:depth_glass", true);
        scene.world.setBlocks([1, 3, 2], "alexscaves:depth_glass", true);
        scene.world.setBlocks([2, 3, 2], "alexscaves:depth_glass", true);
        scene.world.setBlocks([3, 3, 3], "alexscaves:depth_glass", true);
        scene.world.setBlocks([2, 3, 1], "alexscaves:depth_glass", true);
        scene.world.setBlocks([1, 3, 3], "alexscaves:depth_glass", true);

        global.showPonderLayer(scene, 3, 3);

        scene.idle(80);
        
        scene.addLazyKeyframe();

        scene.text(60, "The final layer is made up of Sourcestone: Large Bricks Slabs.", [2, 4, 2])

        scene.showControls(60, [2, 5, 2], "down").rightClick().withItem("ars_nouveau:sourcestone_large_bricks_slab");

        scene.idle(80);

        scene.world.setBlocks([3, 4, 1], "ars_nouveau:sourcestone_large_bricks_slab", true);
        scene.world.setBlocks([2, 4, 3], "ars_nouveau:sourcestone_large_bricks_slab", true);
        scene.world.setBlocks([1, 4, 1], "ars_nouveau:sourcestone_large_bricks_slab", true);
        scene.world.setBlocks([3, 4, 2], "ars_nouveau:sourcestone_large_bricks_slab", true);
        scene.world.setBlocks([1, 4, 2], "ars_nouveau:sourcestone_large_bricks_slab", true);
        scene.world.setBlocks([2, 4, 2], "ars_nouveau:sourcestone_large_bricks_slab", true);
        scene.world.setBlocks([3, 4, 3], "ars_nouveau:sourcestone_large_bricks_slab", true);
        scene.world.setBlocks([2, 4, 1], "ars_nouveau:sourcestone_large_bricks_slab", true);
        scene.world.setBlocks([1, 4, 3], "ars_nouveau:sourcestone_large_bricks_slab", true);

        global.showPonderLayer(scene, 3, 4);

        scene.idle(80);
    });
}); 