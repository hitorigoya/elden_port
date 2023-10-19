const status = {
    name: "shuhei",
    level: 37,
    runesHeld: 0,
    runesNeeded: 9861,
    attributePoints: {
        vigor: {
            text: "生命力",
            value: 50
        },
        mind: {
            text: "精神力",
            value: 10
        },
        endurance: {
            text: "持久力",
            value: 30
        },
        strength: {
            text: "筋力",
            value: 24
        },
        dexterity: {
            text: "技量",
            value: 50
        },
        intelligence: {
            text: "知力",
            value: 10
        },
        faith: {
            text: "信仰",
            value: 40
        },
        arcane: {
            text: "神秘",
            value: 10
        }
    },
    baseStats: {
        hp: {
            current: 1887,
            max: 1887
        },
        fp: {
            current: 78,
            max: 78
        },
        stamina: 141,
        equipLoad: {
            current: 47.3,
            max: 82.7,
            name: "（中量）"
        },
        poise: 38,
        discovery: 110.0,
        memorySlots: 9
    },
    attackPower: {
        rArmament1: {
            text: "右武器１",
            value: 576
        },
        rArmament2: {
            text: "右武器２",
            value: 461
        },
        rArmament3: {
            text: "右武器３",
            value: 31
        },
        lArmament1: {
            text: "左武器１",
            value: 176
        },
        lArmament2: {
            text: "左武器２",
            value: 136
        },
        lArmament3: {
            text: "左武器３",
            value: 369
        }
    },
    defenseDmgNegation: {
        physical: {
            text: "物理",
            value: {
                defense: 139,
                dmgNegation: 38.252
            }
        },
        vsStrike: {
            text: "対打撃",
            value: {
                defense: 139,
                dmgNegation: 34.644
            }
        },
        vsSlash: {
            text: "対斬撃",
            value: {
                defense: 139,
                dmgNegation: 38.443
            }
        },
        vsPierce: {
            text: "対刺突",
            value: {
                defense: 139,
                dmgNegation: 38.571
            }
        },
        magic: {
            text: "魔力",
            value: {
                defense: 151,
                dmgNegation: 16.814
            }
        },
        fire: {
            text: "炎",
            value: {
                defense: 181,
                dmgNegation: 18.558
            }
        },
        lightning: {
            text: "雷",
            value: {
                defense: 131,
                dmgNegation: 16.174
            }
        },
        holy: {
            text: "聖",
            value: {
                defense: 131,
                dmgNegation: 16.900
            }
        }
    },
    resistance: {
        immunity: {
            text: "免疫",
            value: {
                body: 273,
                armor: 83
            }
        },
        robustness: {
            text: "剛健",
            value: {
                body: 271,
                armor: 116
            }
        },
        focus: {
            text: "正気",
            value: {
                body: 195,
                armor: 40
            }
        },
        vitality: {
            text: "抗死",
            value: {
                body: 207,
                armor: 42
            }
        }
    }
}

export default status