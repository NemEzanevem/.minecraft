ServerEvents.recipes(event => {
    function BloodAltarRecipes(Output, Input, Level, ConsumptionRate, DrainRate){
    event.recipes.bloodmagic.altar(Output, Input).upgradeLevel(Level).consumptionRate(ConsumptionRate).drainRate(DrainRate)
    }
    BloodAltarRecipes('1x bloodmagic:blankslate', 'pneumaticcraft:compressed_stone', 0, 1000, 10)
})

//removals
ServerEvents.recipes(event => {
    event.remove({ id: 'bloodmagic:altar/slate' })
})


ServerEvents.recipes(event => {
    function BloodAltarRecipes(Output, Input, Level, ConsumptionRate, DrainRate){
    event.recipes.bloodmagic.altar(Output, Input).upgradeLevel(Level).consumptionRate(ConsumptionRate).drainRate(DrainRate)
    }
    BloodAltarRecipes('1x bloodmagic:blankslate', 'pneumaticcraft:compressed_stone', 0, 1000, 10)
})

//removals
ServerEvents.recipes(event => {
    event.remove({ id: 'bloodmagic:altar/slate' })
})