Ponder.registry((e) => {
    e.create('society:masticator').scene("masticator_build", "Building the Masticator", (scene) => {

        scene.showBasePlate();

        scene.world.setBlocks([2, 1, 2], "custommachinery:custom_machine_block");
        scene.world.modifyBlockEntityNBT([2, 1, 2],(nbt) => {
            nbt.machineID = "society:masticator";
         });
        scene.world.showSection([2, 1, 2], Facing.DOWN);


        scene.idle(10);

        scene.text(80, "The Masticator is a machine for processing items into fluids. It requires a multiblock behind it to function.")

        scene.idle(90);

        scene.addLazyKeyframe();

        scene.text(60, "Its base layer is made up of Ornamental Flesh.", [2, 1, 3])

        scene.idle(20);

        scene.showControls(60, [3, 2, 2], "down").rightClick().withItem("biomancy:ornate_flesh");

        scene.idle(80);

        scene.world.setBlocks([3, 1, 3], "biomancy:ornate_flesh", true);
        scene.world.setBlocks([1, 1, 3], "biomancy:ornate_flesh", true);
        scene.world.setBlocks([2, 1, 3], "biomancy:ornate_flesh", true);
        scene.world.showSection([3, 1, 3], Facing.DOWN);
        scene.world.showSection([1, 1, 3], Facing.DOWN);
        scene.world.showSection([2, 1, 3], Facing.DOWN);

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(60, "Its second layer is made up of Bio-Lanterns and a Modular Larynx.", [2, 2, 3])

        scene.showControls(60, [3, 3, 3], "down").rightClick().withItem("biomancy:bio_lantern_yellow");
        scene.showControls(60, [1, 3, 3], "down").rightClick().withItem("biomancy:bio_lantern_blue");

        scene.idle(80);

        scene.world.setBlocks([3, 2, 3], "biomancy:bio_lantern_yellow", true);
        scene.world.setBlocks([1, 2, 3], "biomancy:bio_lantern_blue", true);   
        scene.world.showSection([3, 2, 3], Facing.DOWN);
        scene.world.showSection([1, 2, 3], Facing.DOWN);

        scene.idle(20);

        scene.showControls(60, [2, 3, 3], "down").rightClick().withItem("biomancy:modular_larynx");

        scene.idle(80);

        scene.world.setBlocks([2, 2, 3], "biomancy:modular_larynx", true);    
        scene.world.showSection([2, 2, 3], Facing.DOWN);
        scene.idle(80);

    });
}); 