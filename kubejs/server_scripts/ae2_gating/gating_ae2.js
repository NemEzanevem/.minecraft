ServerEvents.recipes(event => {
event.remove({id: 'ae2:transform/fluix_crystal'})
event.remove({id: 'ae2:transform/fluix_crystals'})
event.remove({id: 'ae2:inscriber/certus_quartz_dust'})
event.remove({id: 'ae2:inscriber/fluix_dust'})
event.remove({id: 'create:compat/ae2/mixing/fluix_crystal'})
event.recipes.createMixing('4x #forge:gems/fluix', ['1x pneumaticcraft:printed_circuit_board', 'ae2:charged_certus_quartz_crystal', 'minecraft:quartz', Fluid.of('minecraft:water', 250)])
})