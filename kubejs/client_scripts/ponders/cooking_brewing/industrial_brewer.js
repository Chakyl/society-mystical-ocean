Ponder.registry((e) => {
    e.create("society:industrial_brewer").scene("industrial_brewer_build", "Building The Industrial Brewer", (scene) => {

        scene.showBasePlate();

        scene.world.setBlocks([2, 1, 0], "custommachinery:custom_machine_block");
        scene.world.modifyBlockEntityNBT([2, 1, 0],(nbt) => {
            nbt.machineID = "society:industrial_brewer";
         });
        scene.world.showSection([2, 1, 0], Facing.DOWN);

        scene.idle(10);

        scene.text(80, "The Industrial Brewer is machine for automating Brewingstation recipes. It requires a multiblock behind it to function.")

        scene.idle(90);

        scene.addLazyKeyframe();

        scene.text(60, "Its base layer is made up of Deepslate Counters and Deepslate Stoves.", [2, 1, 2])

        scene.idle(20);

        scene.showControls(60, [3, 2, 3], "down").rightClick().withItem("candlelight:deepslate_stove");
        scene.showControls(60, [1, 2, 1], "down").rightClick().withItem("candlelight:deepslate_counter");

        scene.idle(80);

        scene.world.setBlocks([3, 1, 3], "candlelight:deepslate_stove", true);
        scene.world.setBlocks([1, 1, 3], "candlelight:deepslate_stove", true);
        scene.world.setBlocks([3, 1, 2], "candlelight:deepslate_counter", true);
        scene.world.setBlocks([2, 1, 3], "candlelight:deepslate_counter", true);
        scene.world.setBlocks([2, 1, 1], "candlelight:deepslate_counter", true);
        scene.world.setBlocks([1, 1, 2], "candlelight:deepslate_counter", true);
        scene.world.setBlocks([3, 1, 1], "candlelight:deepslate_counter", true);
        scene.world.setBlocks([2, 1, 2], "candlelight:deepslate_counter", true);
        scene.world.setBlocks([1, 1, 1], "candlelight:deepslate_counter", true);

        global.showPonderLayer(scene, 3, 1, {x: 2, z: 0});

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(60, "The second layer is made up of Fluid Vessels, Kitchen Hoods, and a Big Barrel.", [2, 2, 2])

        scene.showControls(60, [1, 3, 2], "down").rightClick().withItem("embers:fluid_vessel");
        scene.showControls(60, [3, 3, 3], "down").rightClick().withItem("handcrafted:kitchen_hood");

        scene.idle(80);

        scene.world.setBlocks([3, 2, 3], "handcrafted:kitchen_hood", true);
        scene.world.setBlocks([2, 2, 3], "embers:fluid_vessel", true);
        scene.world.setBlocks([1, 2, 3], "handcrafted:kitchen_hood", true);
        scene.world.setBlocks([1, 2, 2], "embers:fluid_vessel", true);
        scene.world.showSection([3, 2, 3], Facing.DOWN);
        scene.world.showSection([2, 2, 3], Facing.DOWN);
        scene.world.showSection([1, 2, 3], Facing.DOWN);
        scene.world.showSection([1, 2, 2], Facing.DOWN);

        scene.idle(20);

        scene.showControls(60, [3, 3, 1], "down").rightClick().withItem("brewery:barrel_main");

        scene.idle(80);

        scene.world.setBlocks([3, 2, 1], "brewery:barrel_main", true);
        scene.world.setBlocks([3, 2, 2], "brewery:barrel_main_head", true);
        scene.world.setBlocks([2, 2, 1], "brewery:barrel_right", true);
        scene.world.setBlocks([2, 2, 2], "brewery:barrel_head_right", true);
        scene.world.setBlocks([3, 3, 1], "brewery:barrel_main", true);
        scene.world.modifyBlock([3, 3, 1], () => Block.id("brewery:barrel_main").with("half", "upper"), false);
        scene.world.setBlocks([3, 3, 2], "brewery:barrel_main_head", true);
        scene.world.modifyBlock([3, 3, 2], () => Block.id("brewery:barrel_main_head").with("half", "upper"), false);
        scene.world.setBlocks([2, 3, 1], "brewery:barrel_right", true);
        scene.world.modifyBlock([2, 3, 1], () => Block.id("brewery:barrel_right").with("half", "upper"), false);
        scene.world.setBlocks([2, 3, 2], "brewery:barrel_head_right", true);
        scene.world.modifyBlock([2, 3, 2], () => Block.id("brewery:barrel_head_right").with("half", "upper"), false);
        scene.world.showSection([3, 2, 1], Facing.DOWN);
        scene.world.showSection([3, 2, 2], Facing.DOWN);
        scene.world.showSection([2, 2, 1], Facing.DOWN);
        scene.world.showSection([2, 2, 2], Facing.DOWN);
        scene.world.showSection([3, 3, 1], Facing.DOWN);
        scene.world.showSection([3, 3, 2], Facing.DOWN);
        scene.world.showSection([2, 3, 1], Facing.DOWN);
        scene.world.showSection([2, 3, 2], Facing.DOWN);

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(60, "The third layer is made up of a Fluid Pipe and Kitchen Hood Pipes.", [2, 3, 2])

        scene.showControls(60, [2, 4, 2], "down").rightClick().withItem("embers:fluid_pipe");
        scene.showControls(60, [3, 4, 3], "down").rightClick().withItem("handcrafted:kitchen_hood_pipe");

        scene.idle(80);

        scene.world.setBlocks([3, 3, 3], "handcrafted:kitchen_hood_pipe", true);
        scene.world.setBlocks([1, 3, 3], "handcrafted:kitchen_hood_pipe", true);
        scene.world.setBlocks([1, 3, 2], "embers:fluid_pipe", true);
        scene.world.modifyBlockEntityNBT([1, 3, 2], (nbt) => {
            nbt.connection0 = 3
        });
        scene.world.showSection([3, 3, 3], Facing.DOWN);
        scene.world.showSection([1, 3, 3], Facing.DOWN);
        scene.world.showSection([1, 3, 2], Facing.DOWN);

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(60, "The final layer is made up of Fluid Pipes, Fluid Vessels, and Kitchen Hood Pipes.", [2, 4, 2])

        scene.showControls(60, [4, 4, 2], "right").rightClick().withItem("embers:fluid_vessel");
        scene.showControls(60, [1, 5, 2], "down").rightClick().withItem("embers:fluid_pipe");
        scene.showControls(60, [3, 5, 3], "down").rightClick().withItem("handcrafted:kitchen_hood_pipe");

        scene.idle(80);

        scene.world.setBlocks([3, 4, 3], "handcrafted:kitchen_hood_pipe", true);
        scene.world.setBlocks([1, 4, 3], "handcrafted:kitchen_hood_pipe", true);
        scene.world.setBlocks([3, 4, 2], "embers:fluid_vessel", true);
        scene.world.setBlocks([2, 4, 2], "embers:fluid_pipe", true);
        scene.world.modifyBlockEntityNBT([2, 4, 2], (nbt) => {
            nbt.connection4 = 2
            nbt.connection5 = 3
        });

        scene.world.setBlocks([1, 4, 2], "embers:fluid_pipe", true);
        scene.world.modifyBlockEntityNBT([1, 4, 2], (nbt) => {
            nbt.connection5 = 2
            nbt.connection0 = 2
        });
        scene.world.showSection([3, 4, 3], Facing.DOWN);
        scene.world.showSection([1, 4, 3], Facing.DOWN);
        scene.world.showSection([1, 4, 2], Facing.DOWN);
        scene.world.showSection([3, 4, 2], Facing.DOWN);
        scene.world.showSection([2, 4, 2], Facing.DOWN);
        scene.world.modifyBlockEntityNBT([1, 3, 2], (nbt) => {
            nbt.connection1 = 2
            nbt.connection0 = 3
        });
        scene.idle(80);
    });
}); 