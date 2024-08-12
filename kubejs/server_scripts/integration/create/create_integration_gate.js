ServerEvents.recipes(event => {
  event.remove({ id: 'create:crafting/materials/andesite_alloy' })
  event.remove({ id: 'create:crafting/materials/andesite_alloy_from_zinc' })
  event.remove({ id: 'create:mixing/andesite_alloy' })
  event.remove({id: 'createbigcannons:mixing/alloy_nethersteel_steel'})
  event.remove({id: 'createbigcannons:mixing/alloy_nethersteel_cast_iron'})
  event.remove({id: 'createbigcannons:compacting/forge_nethersteel_ingot'})
  event.remove({ id: 'create:mixing/andesite_alloy_from_zinc' })
  event.remove({ id: 'pneumaticcraft:explosion_crafting/compressed_iron_ingot' })
  event.remove({ id: 'immersiveengineering:crafting/alloybrick' })
  event.remove({ id: 'immersiveengineering:smelting/ingot_hop_graphite'})
  event.remove({ id: 'immersiveengineering:smelting/ingot_hop_graphite_from_blasting'})
  event.remove({ id: 'immersiveengineering:crafting/wirecutter' })
  event.remove({ id: 'immersiveengineering:crafting/cokebrick' })
  event.remove({ id: 'immersiveengineering:crafting/blastbrick' })
  event.remove({ id: 'immersiveengineering:crafting/blastbrick_reinforced' })
  event.remove({ id: 'immersiveengineering:blastfurnace/steel'})
  event.remove({ id: 'immersiveengineering:blastfurnace/steel'})
  event.blasting('create:andesite_alloy', 'kubejs:unfired_andesite_alloy')
  event.blasting('kubejs:coke_brick', 'kubejs:unfired_coke_brick')
  event.recipes.createMixing(Fluid.of('createbigcannons:molten_nethersteel', 8000), ['minecraft:netherite_scrap', '4x #forge:ingots/steel']).superheated()
  event.recipes.createMixing('1x kubejs:hot_iron_ingot', ['1x iron_ingot', '3x immersiveengineering:coal_coke', Fluid.of('minecraft:lava', 100)]).heated()
  event.recipes.createMixing('1x kubejs:unfired_andesite_alloy', ['minecraft:mud', '2x #forge:nuggets/iron', "minecraft:andesite"]).heated()
  event.recipes.createMixing('1x kubejs:unfired_andesite_alloy', ['minecraft:mud', '2x #forge:nuggets/iron', "minecraft:andesite"]).heated()
  event.recipes.createMixing('1x immersiveengineering:ingot_hop_graphite', ['1x kubejs:hot_hop_graphite_ingot', Fluid.of('minecraft:water', 1000)])
  event.recipes.createMixing(Fluid.of('kubejs:grout', 100), ['20x kubejs:limestone_dust', '5x minecraft:sand', Fluid.of('minecraft:water', 100)]).heated()
  event.recipes.create.compacting('kubejs:blast_brick', ['kubejs:unfired_blast_brick', '#forge:dusts/coal_coke']).heated()
  event.recipes.create.compacting('kubejs:kiln_brick', ['kubejs:unfired_kiln_brick', '#forge:dusts/coal_coke']).heated()
  event.recipes.create.compacting('#forge:ingots/nethersteel', Fluid.of('createbigcannons:molten_nethersteel', 1000))
})
ServerEvents.tags('item', event => {
event.remove('forge:ingots/steel', 'immersiveengineering:ingot_steel')
event.remove('forge:nuggets/steel', 'immersiveengineering:nugget_steel')
})


ServerEvents.recipes(event => {
  function CreateMixingRecipes(Output, Input){
  event.recipes.createMixing(Output, Input)
  }
  CreateMixingRecipes('1x kubejs:unfired_blast_brick', ['minecraft:glowstone_dust', 'immersiveengineering:dust_aluminum', '5x create:powdered_obsidian', '2x minecraft:clay_ball','minecraft:blaze_powder', Fluid.of('minecraft:water', 1000)])
  CreateMixingRecipes('1x kubejs:unfired_coke_brick', ['minecraft:bone_meal', '2x minecraft:clay_ball', 'minecraft:gravel',  Fluid.of('minecraft:water', 700)])
  CreateMixingRecipes('1x kubejs:unfired_kiln_brick', ['2x minecraft:sand', '3x create:powdered_obsidian', '2x minecraft:gravel', '2x minecraft:clay_ball', Fluid.of('minecraft:water', 500)])
})

ServerEvents.recipes(event => {
  function CreateMillingRecipes(Output, Input){
    event.recipes.create.milling(Output, Input)
  }
  CreateMillingRecipes(Item.of('kubejs:limestone_dust').withChance(0.1), 'create:limestone')
})

ServerEvents.recipes(event => {
  function CreateCrusingRecipes(Output, Input){
    event.recipes.create.crushing(Output, Input)
  }
  CreateCrusingRecipes(Item.of('kubejs:limestone_dust').withChance(0.15), 'create:limestone')
})

ServerEvents.recipes(event => {
  event.recipes.create.sequenced_assembly([
    Item.of('immersiveengineering:cokebrick'),], 'kubejs:coke_brick', [
    event.recipes.createFilling('kubejs:coke_brick', ['kubejs:coke_brick', Fluid.of('kubejs:grout', 20)]),
    event.recipes.createDeploying('kubejs:coke_brick', ['kubejs:coke_brick', 'kubejs:coke_brick']),
  ]).transitionalItem('kubejs:coke_brick').loops(3)


  event.recipes.create.sequenced_assembly([
    Item.of('immersiveengineering:alloybrick'),], 'kubejs:kiln_brick', [
    event.recipes.createFilling('kubejs:kiln_brick', ['kubejs:kiln_brick', Fluid.of('kubejs:grout', 50)]),
    event.recipes.createDeploying('kubejs:kiln_brick', ['kubejs:kiln_brick', 'kubejs:kiln_brick']),
  ]).transitionalItem('kubejs:coke_brick').loops(4)


  event.recipes.create.sequenced_assembly([
    Item.of('immersiveengineering:blastbrick'),], 'kubejs:blast_brick', [
    event.recipes.createFilling('kubejs:blast_brick', ['kubejs:blast_brick', Fluid.of('kubejs:grout', 30)]),
    event.recipes.createDeploying('kubejs:blast_brick', ['kubejs:blast_brick', 'kubejs:blast_brick']),
  ]).transitionalItem('kubejs:blast_brick').loops(4)

  event.recipes.create.sequenced_assembly([
    Item.of('immersiveengineering:blastbrick_reinforced'),], 'immersiveengineering:blastbrick', [
    event.recipes.createDeploying('kubejs:blast_brick', ['immersiveengineering:blastbrick', 'immersiveengineering:plate_steel']),
    event.recipes.createFilling('kubejs:blast_brick', ['immersiveengineering:blastbrick', Fluid.of('kubejs:grout', 5)]),
    event.recipes.createDeploying('immersiveengineering:blastbrick', ['immersiveengineering:blastbrick', 'create:sturdy_sheet']),
  ]).transitionalItem('immersiveengineering:blastbrick').loops(8)

  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:wrought_iron_ingot'), ], 'kubejs:hot_iron_ingot', [
      event.recipes.create.pressing('kubejs:hot_iron_ingot', 'kubejs:wrought_iron_ingot'),
      event.recipes.create.pressing('kubejs:hot_iron_ingot', 'kubejs:wrought_iron_ingot'),
      event.recipes.create.pressing('kubejs:hot_iron_ingot', 'kubejs:wrought_iron_ingot')
  ]).transitionalItem('kubejs:hot_iron_ingot').loops(10)

  event.recipes.create.sequenced_assembly([
    Item.of('pointblank:gunmetal_mesh'), ], 'immersiveengineering:sheetmetal_steel', [
      event.recipes.create.pressing('immersiveengineering:sheetmetal_steel', 'pointblank:gunmetal_mesh'),
      event.recipes.create.pressing('immersiveengineering:sheetmetal_steel', 'pointblank:gunmetal_mesh'),
      event.recipes.create.pressing('immersiveengineering:sheetmetal_steel', 'pointblank:gunmetal_mesh')
  ]).transitionalItem('immersiveengineering:sheetmetal_steel').loops(100)
})