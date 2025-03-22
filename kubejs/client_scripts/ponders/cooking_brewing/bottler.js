Ponder.registry((e) => {
    e.create("society:bottler").scene("bottler_build", "Building the Bottler", (scene) => {

        scene.showBasePlate();
        scene.world.setBlocks([2, 1, 2], "custommachinery:custom_machine_block");
        scene.world.modifyBlockEntityNBT([2, 1, 2],(nbt) => {
            nbt.machineID = "society:bottler";
         });
        scene.world.showSection([2, 1, 2], Facing.DOWN);

        scene.idle(10);

        scene.text(80, "The Bottler is a multiblock machine for putting fluids in Bottles or Buckets.")

        scene.idle(90);

        scene.addLazyKeyframe();

        scene.text(60, "Its base layer is made up of Sealed Wood Kegs and a fluid hopper.", [2, 1, 2])

        scene.idle(20);

        scene.showControls(60, [3, 2, 3], "right").rightClick().withItem("embers:sealed_wood_keg");
        scene.showControls(60, [2, 2, 3], "down").rightClick().withItem("littlelogistics:fluid_hopper");
        scene.idle(80);

        scene.world.setBlocks([3, 1, 3], "embers:sealed_wood_keg", true);
        scene.world.setBlocks([2, 1, 3], "littlelogistics:fluid_hopper", true);
        scene.world.setBlocks([1, 1, 3], "embers:sealed_wood_keg", true);
        scene.world.showSection([3, 1, 3], Facing.DOWN);
        scene.world.showSection([2, 1, 3], Facing.DOWN);
        scene.world.showSection([1, 1, 3], Facing.DOWN);

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(60, "Its second layer is made up of a Metal Former and a Fluid Vessel.", [2, 2, 2])

        scene.showControls(60, [2, 3, 2], "down").rightClick().withItem("aetherworks:forge_metal_former");

        scene.idle(80);

        scene.world.setBlocks([2, 2, 2], "aetherworks:forge_metal_former", true);
        scene.world.showSection([2, 2, 2], Facing.DOWN);

        scene.idle(20);

        scene.showControls(60, [2, 3, 3], "down").rightClick().withItem("embers:fluid_vessel");

        scene.idle(80);

        scene.world.setBlocks([2, 2, 3], "embers:fluid_vessel", true);   
        scene.world.showSection([2, 2, 3], Facing.DOWN);

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(60, "Its final layer is made up of Fluid Pipes.", [2, 3, 2])

        scene.showControls(60, [2, 4, 2], "down").rightClick().withItem("embers:fluid_pipe");

        scene.idle(80);

        scene.world.setBlocks([2, 3, 2], "embers:fluid_pipe", true);
        scene.world.modifyBlockEntityNBT([2, 3, 2], (nbt) => {
            nbt.connection3 = 2
            nbt.connection0 = 3
        });
        scene.world.setBlocks([2, 3, 3], "embers:fluid_pipe", true);
        scene.world.modifyBlockEntityNBT([2, 3, 3], (nbt) => {
            nbt.connection2 = 2
            nbt.connection0 = 3
        });
        scene.world.showSection([2, 3, 2], Facing.DOWN);
        scene.world.showSection([2, 3, 3], Facing.DOWN);

        scene.idle(80);
    });
}); 