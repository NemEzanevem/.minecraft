StartupEvents.registry('item', e => {
    e.create('unfired_andesite_alloy')
    e.create('unfired_blast_brick')
    e.create('blast_brick')
    e.create('unfired_kiln_brick')
    e.create('kiln_brick')
    e.create('unfired_coke_brick')
    e.create('coke_brick')
    e.create('limestone_dust')
    e.create('wrought_iron_ingot')
    e.create('hot_iron_ingot')
    e.create('andesite_metal_compound')
    e.create('hot_hop_graphite_ingot').displayName('Hot HOP Graphite Ingot')
})

Platform.mods.kubejs.name = 'Custom Packadditions'


  //1.20.1 Fabric FLuid
  //In Startup script
  StartupEvents.registry('fluid', e => {
    
    e.create('grout') 
      .thickTexture(0x999999)
      .bucketColor(0x999999)
      .displayName('Grout')
      .noBlock()
      .bucketColor(0x999999)
      
    })
  
