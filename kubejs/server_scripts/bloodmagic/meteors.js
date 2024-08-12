ServerEvents.highPriorityData(event => {
    let addMeteorWithCore = (id, explosionRadius, input, coreBlock, innerRadius, outerRadius, fillBlock, weightMap, syphon) => {
        let meteorJson = JsonIO.toObject(
            {
                "type": "bloodmagic:meteor",
                "explosion": explosionRadius,
                "input": input,
                "layers": [
                  {
                    "additionalWeight": 0,
                    "fill": {
                      "block": coreBlock
                    },
                    "minWeight": 0,
                    "radius": innerRadius
                  },
                  {
                    "additionalWeight": 0,
                    "fill": {
                      "block": fillBlock
                    },
                    "minWeight": 1000,
                    "radius": outerRadius,
                    "weightMap": weightMap
                  }
                ],
                "syphon": syphon
              }
        )

        event.addJson(`bloodmagic:recipes/meteor/${id}`, meteorJson)
    }

    let addMeteor = (id, explosionRadius, input, radius, fillBlock, weightMap, syphon) => {
        let meteorJson = JsonIO.toObject(
            {
                "type": "bloodmagic:meteor",
                "explosion": explosionRadius,
                "input": input,
                "layers": [
                  {
                    "additionalWeight": 0,
                    "fill": {
                      "block": fillBlock
                    },
                    "minWeight": 1000,
                    "radius": radius,
                    "weightMap": weightMap
                  }
                ],
                "syphon": syphon
              }
        )

        event.addJson(`bloodmagic:recipes/meteor/${id}`, meteorJson)
    }


    const SmallOsmiumVeinMap = [
        {
            "block": "mekanism:osmium_ore",
            "weight": 60
        },
        {
            "block": "mekanism:deepslate_osmium_ore",
            "weight": 60
        },
        {
            "block": "minecraft:deepslate",
            "weight": 25
        }
    ]

    addMeteor('smallosmiummeteor', 0, {"item": "minecraft:diamond_block"}, 10, "minecraft:stone", SmallOsmiumVeinMap, 0)
})