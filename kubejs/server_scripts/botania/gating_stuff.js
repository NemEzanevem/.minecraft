ServerEvents.recipes(event => {
    function RunicAltarRecipes(Output, Input, Manacost) {
        event.recipes.botania.runic_altar(Output, Input, Manacost)
    }
    RunicAltarRecipes('1x bloodmagic:blankrune', ['1x bloodmagic:blankslate', '1x botania:rune_fire', 'pneumaticcraft:compressed_stone', 'pneumaticcraft:compressed_stone', 'pneumaticcraft:compressed_stone'], 20000)
    RunicAltarRecipes('1x bloodmagic:speedrune', ['1x bloodmagic:blankrune', 'bloodmagic:reinforcedslate', 'minecraft:sugar', 'pneumaticcraft:compressed_stone', 'minecraft:sugar', 'pneumaticcraft:compressed_stone'], 25000)
    RunicAltarRecipes('1x bloodmagic:sacrificerune', ['1x bloodmagic:reinforcedslate', 'bloodmagic:blankrune', 'minecraft:golden_apple', 'pneumaticcraft:compressed_stone', 'minecraft:golden_apple', 'pneumaticcraft:compressed_stone'], 25000)
    RunicAltarRecipes('1x bloodmagic:selfsacrificerune', ['bloodmagic:reinforcedslate', 'pneumaticcraft:compressed_stone', 'minecraft:glowstone', 'pneumaticcraft:compressed_stone', 'minecraft:bucket'], 25000)
    RunicAltarRecipes('1x bloodmagic:dislocationrune', ['1x bloodmagic:blankrune', 'pneumaticcraft:compressed_stone', 'minecraft:water_bucket', 'pneumaticcraft:compressed_stone', 'minecraft:water_bucket', 'pneumaticcraft:compressed_stone', 'minecraft:water_bucket', 'pneumaticcraft:compressed_stone', 'bloodmagic:infusedslate'], 25000)
    RunicAltarRecipes('1x bloodmagic:altarcapacityrune', ['1x bloodmagic:blankrune', 'pneumaticcraft:compressed_stone', 'minecraft:bucket', 'pneumaticcraft:compressed_stone', 'minecraft:bucket', 'pneumaticcraft:compressed_stone', 'minecraft:bucket', 'pneumaticcraft:compressed_stone', 'bloodmagic:infusedslate'], 25000)
    RunicAltarRecipes('1x bloodmagic:bettercapacityrune', ['1x bloodmagic:blankrune', 'bloodmagic:obsidianbrickpath', 'minecraft:bucket', 'bloodmagic:obsidianbrickpath', 'minecraft:bucket', 'bloodmagic:obsidianbrickpath', 'minecraft:bucket', 'bloodmagic:obsidianbrickpath', 'bloodmagic:infusedslate'], 50000)
})
ServerEvents.recipes(event => {
    function NormalManaPoolRecipes(Output, Input, Manacost){
    event.recipes.botania.mana_infusion( Output, Input, Manacost)
    }
    NormalManaPoolRecipes('botania:manasteel_ingot','createbigcannons:nethersteel_ingot', 5000)
    NormalManaPoolRecipes('botania:mana_diamond','pneumaticcraft:ingot_iron_compressed', 5000)
    NormalManaPoolRecipes('botania:mana_pearl','ae2:fluix_pearl', 5000)


})

ServerEvents.recipes(event => {
    function PureDaisyRecipes(Output, Input){
    event.recipes.botania.pure_daisy(Output, Input)
    }
    PureDaisyRecipes('botania:livingrock', '#forge:sheetmetals/steel')
})


ServerEvents.recipes(event => {
    event.remove({ id: 'bloodmagic:blood_rune_blank' })
    event.remove({ id: 'bloodmagic:blood_rune_speed' })
    event.remove({ id: 'bloodmagic:blood_rune_sacrifice' })
    event.remove({ id: 'bloodmagic:blood_rune_self_sacrifice' })
    event.remove({ id: 'bloodmagic:blood_rune_displacement' })
    event.remove({ id: 'bloodmagic:blood_rune_capacity' })
    event.remove({ id: 'bloodmagic:blood_rune_aug_capacity' })
    event.remove({ id: 'botania:mana_infusion/manasteel'})
    event.remove({ id: 'botania:mana_infusion/mana_diamond'})
    event.remove({ id: 'botania:mana_infusion/mana_pearl'})
    event.remove({ id: 'botania:pure_daisy/livingrock'})
    event.remove({ id: 'botania:mana_pool'})
    event.remove({ id: 'botania:diluted_pool'})
    event.remove({ id: 'quark:tweaks/crafting/slab_to_block'})
})