ServerEvents.recipes(event => {
    event.shaped('2x kubejs:andesite_metal_compound', 
        ['AC', 'BA'], {
        A: 'minecraft:andesite', 
        B:  ['#forge:nuggets/iron', '#forge:nuggets/zinc'], 
        C: ['#forge:ingots/iron', '#forge:ingots/zinc']
      }
    )

    event.shaped('immersiveengineering:wirecutter', 
      ['AB', 'A'], {
      A: 'immersiveengineering:stick_treated', 
      B:  'ad_astra:steel_ingot'
    }
  )
})