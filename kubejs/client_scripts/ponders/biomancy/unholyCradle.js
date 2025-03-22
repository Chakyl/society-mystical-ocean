Ponder.registry((e) => {
    e.create('society:unholy_cradle').scene("unholy_cradle_build", "Building The Unholy Cradle", "kubejs:large_base", (scene) => {
        
        scene.showStructure()
        
        scene.idle(20);
        
        scene.world.hideSection([6,1,0, 0,4,6], Facing.DOWN);

        scene.idle(14);

        scene.world.setBlocks([3, 1, 0], "custommachinery:custom_machine_block");
        scene.world.modifyBlockEntityNBT([3, 1, 0],(nbt) => {
            nbt.machineID = "society:unholy_cradle";
         });

        scene.world.showSection([3, 1, 0], Facing.DOWN);

        scene.text(81, "The Unholy Cradle for creating Flesh Blob spawn eggs. It requires a multiblock behind it to function.")

        scene.idle(90);

        scene.addLazyKeyframe();

        scene.text(61, "Its base layer is made up of Packed Flesh and Packed Flesh Walls.", [3, 1, 3])

        scene.showControls(61, [3, 2, 3], "down").rightClick().withItem("biomancy:packed_flesh");
        scene.showControls(61, [5, 2, 1], "down").rightClick().withItem("biomancy:packed_flesh_wall");

        scene.idle(80);

        scene.world.setBlocks([5, 1, 1], "biomancy:packed_flesh_wall", true);
        scene.world.setBlocks([4, 1, 1], "biomancy:packed_flesh", true);
        scene.world.setBlocks([3, 1, 1], "biomancy:packed_flesh", true);  
        scene.world.setBlocks([2, 1, 1], "biomancy:packed_flesh", true);
        scene.world.setBlocks([1, 1, 1], "biomancy:packed_flesh_wall", true);

        scene.world.setBlocks([5, 1, 2], "biomancy:packed_flesh", true);  
        scene.world.setBlocks([4, 1, 2], "biomancy:packed_flesh", true);
        scene.world.setBlocks([3, 1, 2], "biomancy:packed_flesh", true);  
        scene.world.setBlocks([2, 1, 2], "biomancy:packed_flesh", true);
        scene.world.setBlocks([1, 1, 2], "biomancy:packed_flesh", true);  

        scene.world.setBlocks([5, 1, 3], "biomancy:packed_flesh", true);  
        scene.world.setBlocks([4, 1, 3], "biomancy:packed_flesh", true);
        scene.world.setBlocks([3, 1, 3], "biomancy:packed_flesh", true);  
        scene.world.setBlocks([2, 1, 3], "biomancy:packed_flesh", true);
        scene.world.setBlocks([1, 1, 3], "biomancy:packed_flesh", true);  

        scene.world.setBlocks([5, 1, 4], "biomancy:packed_flesh", true);  
        scene.world.setBlocks([4, 1, 4], "biomancy:packed_flesh", true);
        scene.world.setBlocks([3, 1, 4], "biomancy:packed_flesh", true);  
        scene.world.setBlocks([2, 1, 4], "biomancy:packed_flesh", true);
        scene.world.setBlocks([1, 1, 4], "biomancy:packed_flesh", true);  

        scene.world.setBlocks([5, 1, 5], "biomancy:packed_flesh_wall", true);
        scene.world.setBlocks([4, 1, 5], "biomancy:packed_flesh", true);
        scene.world.setBlocks([3, 1, 5], "biomancy:packed_flesh", true);  
        scene.world.setBlocks([2, 1, 5], "biomancy:packed_flesh", true);
        scene.world.setBlocks([1, 1, 5], "biomancy:packed_flesh_wall", true);
        
        global.showPonderLayer(scene, 3, 1, {x: 3, z: 0});

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(61, "Its second layer is made up of Malignant Flesh Blocks, Ornamental Flesh blocks, and Bloomlights.", [3, 2, 3])
        
        scene.idle(20);

        scene.showControls(61, [3, 3, 1], "down").rightClick().withItem("biomancy:bloomlight");
        scene.showControls(61, [5, 3, 1], "down").rightClick().withItem("biomancy:packed_flesh_wall");
        scene.showControls(61, [2, 3, 5], "down").rightClick().withItem("biomancy:ornate_flesh");
        scene.showControls(61, [2, 3, 2], "down").rightClick().withItem("biomancy:malignant_flesh");

        scene.idle(80);

        scene.world.setBlocks([5, 2, 1], "biomancy:packed_flesh_wall", true);
        scene.world.setBlocks([4, 2, 1], "biomancy:ornate_flesh", true);
        scene.world.setBlocks([3, 2, 1], "biomancy:bloomlight", true);
        scene.world.setBlocks([2, 2, 1], "biomancy:ornate_flesh", true);
        scene.world.setBlocks([1, 2, 1], "biomancy:packed_flesh_wall", true);

        scene.world.setBlocks([5, 2, 2], "biomancy:ornate_flesh", true); 
        scene.world.setBlocks([4, 2, 2], "biomancy:malignant_flesh", true);
        scene.world.setBlocks([3, 2, 2], "biomancy:malignant_flesh", true);  
        scene.world.setBlocks([2, 2, 2], "biomancy:malignant_flesh", true);
        scene.world.setBlocks([1, 2, 2], "biomancy:ornate_flesh", true);  

        scene.world.setBlocks([5, 2, 3], "biomancy:bloomlight", true);  
        scene.world.setBlocks([4, 2, 3], "biomancy:malignant_flesh", true);
        scene.world.setBlocks([3, 2, 3], "biomancy:malignant_flesh", true);  
        scene.world.setBlocks([2, 2, 3], "biomancy:malignant_flesh", true);
        scene.world.setBlocks([1, 2, 3], "biomancy:bloomlight", true);  

        scene.world.setBlocks([5, 2, 4], "biomancy:ornate_flesh", true);  
        scene.world.setBlocks([4, 2, 4], "biomancy:malignant_flesh", true);
        scene.world.setBlocks([3, 2, 4], "biomancy:malignant_flesh", true);
        scene.world.setBlocks([2, 2, 4], "biomancy:malignant_flesh", true);
        scene.world.setBlocks([1, 2, 4], "biomancy:ornate_flesh", true);  

        scene.world.setBlocks([5, 2, 5], "biomancy:packed_flesh_wall", true);
        scene.world.setBlocks([4, 2, 5], "biomancy:ornate_flesh", true);
        scene.world.setBlocks([3, 2, 5], "biomancy:bloomlight", true);
        scene.world.setBlocks([2, 2, 5], "biomancy:ornate_flesh", true);
        scene.world.setBlocks([1, 2, 5], "biomancy:packed_flesh_wall", true);

        global.showPonderLayer(scene, 3, 2);

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(61, "Its third layer is made up of Packed Flesh and a Primordial Cradle.", [3, 3, 3])

        scene.showControls(61, [4, 4, 1], "down").rightClick().withItem("biomancy:packed_flesh");
        scene.showControls(61, [3, 4, 3], "down").rightClick().withItem("biomancy:primordial_cradle");

        scene.idle(80);

        scene.world.setBlocks([4, 3, 1], "biomancy:packed_flesh", true);
        scene.world.setBlocks([3, 3, 1], "biomancy:packed_flesh", true);
        scene.world.setBlocks([2, 3, 1], "biomancy:packed_flesh", true);

        scene.world.setBlocks([5, 3, 2], "biomancy:packed_flesh", true);  



        scene.world.setBlocks([1, 3, 2], "biomancy:packed_flesh", true);  

        scene.world.setBlocks([5, 3, 3], "biomancy:packed_flesh", true);  

        
        scene.world.setBlocks([3, 3, 3], "biomancy:primordial_cradle", true);  
        
        scene.world.setBlocks([1, 3, 3], "biomancy:packed_flesh", true);  

        scene.world.setBlocks([5, 3, 4], "biomancy:packed_flesh", true);  

        

        
        scene.world.setBlocks([1, 3, 4], "biomancy:packed_flesh", true);  

        scene.world.setBlocks([4, 3, 5], "biomancy:packed_flesh", true);
        scene.world.setBlocks([3, 3, 5], "biomancy:packed_flesh", true);  
        scene.world.setBlocks([2, 3, 5], "biomancy:packed_flesh", true);

        global.showPonderLayer(scene, 4, 3);

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(61, "Its fourth layer is made up of Packed Flesh Walls.", [2, 4, 5])

        scene.showControls(61, [4, 5, 1], "down").rightClick().withItem("biomancy:packed_flesh_wall");

        scene.idle(80);

        scene.world.setBlocks([4, 4, 1], "biomancy:packed_flesh_wall", true); 
        scene.world.setBlocks([2, 4, 1], "biomancy:packed_flesh_wall", true);

        scene.world.setBlocks([5, 4, 2], "biomancy:packed_flesh_wall", true);
        scene.world.setBlocks([1, 4, 2], "biomancy:packed_flesh_wall", true);  

        scene.world.setBlocks([5, 4, 4], "biomancy:packed_flesh_wall", true);
        scene.world.setBlocks([1, 4, 4], "biomancy:packed_flesh_wall", true);  

        scene.world.setBlocks([4, 4, 5], "biomancy:packed_flesh_wall", true);
        scene.world.setBlocks([2, 4, 5], "biomancy:packed_flesh_wall", true);

        global.showPonderLayer(scene, 3, 4);

        scene.idle(80);
        
        scene.addLazyKeyframe();

        scene.text(61, "The final layer is adorned with Flesh Spikes.", [2, 5, 5])

        scene.showControls(61, [4, 6, 1], "down").rightClick().withItem("biomancy:flesh_spike");

        scene.idle(80);

        scene.world.setBlocks([4, 5, 1], "biomancy:flesh_spike", true); 
        scene.world.setBlocks([2, 5, 1], "biomancy:flesh_spike", true);

        scene.world.setBlocks([5, 5, 2], "biomancy:flesh_spike", true);
        scene.world.setBlocks([1, 5, 2], "biomancy:flesh_spike", true);  

        scene.world.setBlocks([5, 5, 4], "biomancy:flesh_spike", true);
        scene.world.setBlocks([1, 5, 4], "biomancy:flesh_spike", true);  

        scene.world.setBlocks([4, 5, 5], "biomancy:flesh_spike", true);
        scene.world.setBlocks([2, 5, 5], "biomancy:flesh_spike", true);

        global.showPonderLayer(scene, 3, 5);

        scene.idle(80);

    });
}); 