JEIAddedEvents.registerCategories((e) => {

    const guiHelper = e.data.jeiHelpers.guiHelper
    e.custom("vinery:manual_juicing", (category) => {
        category
            .title("Grapevine Pot Juicing")
            .background(guiHelper.createBlankDrawable(177, 60))
            .icon(guiHelper.createDrawableItemStack('vinery:grapevine_pot'))
            .isRecipeHandled(() => true)
            .handleLookup((builder, recipe) => {
                const { grape, juice } = recipe.data;
                builder
                    .addSlot('input', 27, 38)
                    .addItemStack(Item.of(grape))
                    .setBackground(guiHelper.getSlotDrawable(), -1, -1)
                builder.addSlot('input', 90, 38).addItemStack('vinery:grapevine_pot')
                builder.addSlot('input', 90, 24).addItemStack('vinery:wine_bottle').setBackground(guiHelper.getSlotDrawable(), -1, -1)
                builder
                    .addSlot('output', 132, 38)
                    .addItemStack(Item.of(juice))
                    .setBackground(guiHelper.getSlotDrawable(), -1, -1)
            })
    })
})
JEIAddedEvents.registerRecipes((e) => {
    const nether = ['crimson', 'warped']
    const juiceJEIRecipe = (juice, grape) => {
        e.custom("vinery:manual_juicing").add({ grape: `6x ${nether.includes(juice) ? 'nethervinery' : 'vinery'}:${grape}`, juice: `2x ${nether.includes(juice) ? 'nethervinery' : 'vinery'}:${juice}_grapejuice` }) 
    }
    
    const grapeJuices = ['red', 'red_savanna', 'red_jungle', 'red_taiga', 'white', 'white_savanna', 'white_jungle', 'white_taiga', 'crimson', 'warped'];
    const grapes = ['red_grape', 'savanna_grapes_red', 'jungle_grapes_red', 'taiga_grapes_red', 'white_grape', 'savanna_grapes_white', 'jungle_grapes_white', 'taiga_grapes_white', 'crimson_grape', 'warped_grape'];
    
    grapeJuices.forEach((juice, index) => {
      juiceJEIRecipe(juice, grapes[index]);
    });
  

})

JEIAddedEvents.registerRecipeCatalysts((e) => {
    e.data.addRecipeCatalyst('vinery:grapevine_pot', "vinery:manual_juicing")
    e.data.addRecipeCatalyst('nethervinery:crimson_grapevine_pot', "vinery:manual_juicing")
    e.data.addRecipeCatalyst('nethervinery:warped_grapevine_pot', "vinery:manual_juicing")
  })

