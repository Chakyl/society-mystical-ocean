Ponder.registry((e) => {
    e.create("eidolon:crucible").scene("crucible_scene", "Crucible crafting", (scene) => {

        scene.showBasePlate();
        
        scene.world.setBlocks([2, 2, 2], "eidolon:crucible");
        scene.world.showSection([2, 2, 2], Facing.DOWN);

        scene.idle(10);

        scene.text(140, "The crucible is an interactive way to craft items. It needs to be placed over a heat source and filled with water.", [2, 3, 2])
        
        scene.idle(60);
        
        scene.world.setBlocks([2, 1, 2], "minecraft:campfire", true);
        scene.world.showSection([2, 1, 2], Facing.SOUTH);
        
        scene.showControls(60, [2, 4, 2], "down").rightClick().withItem('minecraft:water_bucket')

        scene.world.modifyBlockEntityNBT([2, 2, 2], (nbt) => {
            nbt.FluidName = "minecraft:water";
            nbt.Amount = 1000;
        });

        scene.idle(100);
        
        scene.addLazyKeyframe();
        
        scene.text(80, "Each recipe is broken down into steps. After tossing in your items, if a step is completed correctly the Crucible water color will change and a sound will play.")

        scene.idle(30);
        
        scene.showControls(60, [2, 4, 2], "down").withItem('eidolon:soul_shard')

        scene.idle(30);
        scene.world.modifyBlockEntityNBT([2, 2, 2], (nbt) => {
            nbt.steps = [
                { stirs: 0, contents: [{id: "eidolon:soul_shard", Count: 1}]}
            ];
        });
        scene.idle(80);
        
        scene.addLazyKeyframe();
        scene.text(160, "Some recipes will require stirring during steps. This can be done by right clicking with an empty hand.")
        
        scene.showControls(60, [2, 4, 2], "down").rightClick();

        scene.idle(60);
    });

});