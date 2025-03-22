Ponder.registry((e) => {
    e.create('society:biomechanical_forge').scene("biomechanical_forge_build", "Building The Biomechanical Forge", (scene) => {

        scene.showBasePlate();

        scene.world.setBlocks([2, 1, 0], "custommachinery:custom_machine_block");
        scene.world.modifyBlockEntityNBT([2, 1, 0],(nbt) => {
            nbt.machineID = "society:biomechanical_forge";
         });
        scene.world.showSection([2, 1, 0], Facing.DOWN);

        scene.idle(10);

        scene.text(80, "The Biomechanical Forge is a machine for automating most Bio-Forge recipes. It requires a multiblock behind it to function.")

        scene.idle(90);

        scene.addLazyKeyframe();

        scene.text(60, "Its base layer is made up of Primal Flesh.", [2, 1, 2])

        scene.showControls(60, [2, 2, 2], "down").rightClick().withItem("biomancy:primal_flesh");

        scene.idle(80);

        scene.world.setBlocks([2, 1, 2], "biomancy:primal_flesh", true);  
        scene.world.setBlocks([3, 1, 1], "biomancy:primal_flesh", true);
        scene.world.setBlocks([2, 1, 1], "biomancy:primal_flesh", true);  
        scene.world.setBlocks([1, 1, 1], "biomancy:primal_flesh", true);
        scene.world.setBlocks([3, 1, 2], "biomancy:primal_flesh", true);  
        scene.world.setBlocks([3, 1, 3], "biomancy:primal_flesh", true);
        scene.world.setBlocks([2, 1, 3], "biomancy:primal_flesh", true);  
        scene.world.setBlocks([1, 1, 3], "biomancy:primal_flesh", true);
        scene.world.setBlocks([1, 1, 2], "biomancy:primal_flesh", true);  

        global.showPonderLayer(scene, 3, 1, {x: 2, z: 0});

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(60, "Its second layer is made up of Primal Flesh Walls, and and Bloomlight.", [2, 2, 2])

        scene.idle(20);

        scene.showControls(60, [2, 3, 2], "down").rightClick().withItem("biomancy:bloomlight");
        scene.showControls(60, [3, 3, 1], "down").rightClick().withItem("biomancy:primal_flesh_wall");

        scene.idle(80);

        scene.world.setBlocks([2, 2, 2], "biomancy:bloomlight", true);  
        scene.world.setBlocks([3, 2, 2], "biomancy:bloomlight", true);
        scene.world.setBlocks([2, 2, 3], "biomancy:bloomlight", true);
        scene.world.setBlocks([1, 2, 2], "biomancy:bloomlight", true);
        scene.world.setBlocks([2, 2, 1], "biomancy:bloomlight", true);   
        scene.world.setBlocks([3, 2, 1], "biomancy:primal_flesh_wall", true);
        scene.world.setBlocks([1, 2, 1], "biomancy:primal_flesh_wall", true);
        scene.world.setBlocks([3, 2, 3], "biomancy:primal_flesh_wall", true);
        scene.world.setBlocks([1, 2, 3], "biomancy:primal_flesh_wall", true);

        scene.world.showSection([3, 2, 1], Facing.DOWN);
        scene.idle(3);
        scene.world.showSection([1, 2, 1], Facing.DOWN);
        scene.idle(3);
        scene.world.showSection([3, 2, 3], Facing.DOWN);
        scene.idle(3);
        scene.world.showSection([1, 2, 3], Facing.DOWN);

        scene.idle(7);
        
        scene.world.showSection([2, 2, 2], Facing.DOWN);
        scene.world.showSection([2, 2, 1], Facing.DOWN);
        scene.world.showSection([3, 2, 2], Facing.DOWN);
        scene.world.showSection([2, 2, 3], Facing.DOWN);
        scene.world.showSection([1, 2, 2], Facing.DOWN);

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(60, "The third layer is made up of Primal Flesh Walls, Slabs and a Bloomlight.", [2, 3, 2])

        scene.showControls(60, [2, 4, 2], "down").rightClick().withItem("biomancy:bloomlight");
        scene.showControls(60, [3, 4, 1], "down").rightClick().withItem("biomancy:primal_flesh_wall");
        scene.showControls(60, [1, 4, 2], "down").rightClick().withItem("biomancy:primal_flesh_slab");

        scene.idle(80);

        scene.world.setBlocks([2, 3, 2], "biomancy:bloomlight", true);  
        scene.world.setBlocks([3, 3, 1], "biomancy:primal_flesh_wall", true);
        scene.world.setBlocks([2, 3, 1], "biomancy:primal_flesh_slab", true);  
        scene.world.setBlocks([1, 3, 1], "biomancy:primal_flesh_wall", true);
        scene.world.setBlocks([3, 3, 2], "biomancy:primal_flesh_slab", true);  
        scene.world.setBlocks([3, 3, 3], "biomancy:primal_flesh_wall", true);
        scene.world.setBlocks([2, 3, 3], "biomancy:primal_flesh_slab", true);  
        scene.world.setBlocks([1, 3, 3], "biomancy:primal_flesh_wall", true);
        scene.world.setBlocks([1, 3, 2], "biomancy:primal_flesh_slab", true);  

        global.showPonderLayer(scene, 3, 3);

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(60, "The final layer is made up of Flesh Spikes and a Bio-Forge.", [2, 4, 2])

        scene.showControls(60, [2, 5, 2], "down").rightClick().withItem("biomancy:bio_forge");
        scene.showControls(60, [3, 5, 1], "down").rightClick().withItem("biomancy:flesh_spike");

        scene.idle(80);

        scene.world.setBlocks([2, 4, 2], "biomancy:bio_forge", true);  

        scene.world.setBlocks([3, 4, 1], "biomancy:flesh_spike", true);  
        scene.world.setBlocks([1, 4, 1], "biomancy:flesh_spike", true); 
        scene.world.setBlocks([3, 4, 3], "biomancy:flesh_spike", true);  
        scene.world.setBlocks([1, 4, 3], "biomancy:flesh_spike", true); 

        global.showPonderLayer(scene, 3, 4);
        
        scene.idle(80);

    });
}); 