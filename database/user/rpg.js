const fs = require('fs')
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const ikan = JSON.parse(fs.readFileSync('./database/user/ikan.json'))
const planet = JSON.parse(fs.readFileSync('./database/user/planet.json'))
const coal = JSON.parse(fs.readFileSync('./database/user/coal.json'))
const stone = JSON.parse(fs.readFileSync('./database/user/stone.json'))
const ore = JSON.parse(fs.readFileSync('./database/user/ore.json'))
const ingot = JSON.parse(fs.readFileSync('./database/user/ingot.json'))
const kayu = JSON.parse(fs.readFileSync('./database/user/kayu.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
let besiAwal = 15;
  let goldAwal = 10;
  let emeraldAwal = 5;
  let umpanAwal = 5;
  let potionAwal = 1;


let _RPG = JSON.parse(fs.readFileSync('./database/user/inventory.json'))

const getLevelingXp = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].xp
	}
}

const getLevelingLevel = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].level
	}
}

const getLevelingId = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].id
	}
}

const addLevelingXp = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].xp += amount
		fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
	}
}

const addLevelingLevel = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].level += amount
		fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
	}
}

const addLevelingId = (sender) => {
const obj = { id: sender, xp: 1, level: 1 }
_level.push(obj)
fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
}

const addATM = (sender) => {
	const objo = {id: sender, uang : 0}
	uang.push(objo)
	fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
}
        
const addKoinUser = (sender, amount) => {
    let position = false
    Object.keys(uang).forEach((i) => {
        if (uang[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        uang[position].uang += amount
        fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
    }
}
    
const checkATMuser = (sender) => {
	let position = false
    Object.keys(uang).forEach((i) => {
        if (uang[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return uang[position].uang
    }
}

const addIkan = (sender, amount) => {
        let position = false
        Object.keys(ikan).forEach((i) => {
    	    if (ikan[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ikan[position].fish += amount
    	fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
    	}
    }
    
const getMancingIkan = (sender) => {
    let position = false 
    Object.keys(ikan).forEach((i) => {
	if (ikan[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ikan[position].fish
	}
}

const getMancingId = (sender) => {
    let position = false
    Object.keys(ikan).forEach((i) => {
	if (ikan[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ikan[position].id
    }
}
    
const addMancingId = (sender) => {
    const ovj = {id: sender, fish: 0}
    ikan.push(ovj)
    fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
    }

const jualIkan = (sender, amount) => {
    	let position = false
        Object.keys(ikan).forEach((i) => {
            if (ikan[i].id === sender) {
                position = i
            }
        })
        if (position !== false) {
            ikan[position].fish -= amount
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
    }
    
const addPlanet = (sender, amount) => {
        let position = false
        Object.keys(planet).forEach((i) => {
    	    if (planet[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	planet[position].hape += amount
    	fs.writeFileSync('./database/user/planet.json', JSON.stringify(planet))
    	}
    }
    
const getBertualangPlanet = (sender) => {
    let position = false 
    Object.keys(planet).forEach((i) => {
	if (planet[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return planet[position].hape
	}
}

const getPlaneId = (sender) => {
    let position = false
    Object.keys(planet).forEach((i) => {
	if (planet[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return planet[position].id
    }
}
    
const addPlaneId = (sender) => {
    const ovj = {id: sender, hape: 0}
    planet.push(ovj)
    fs.writeFileSync('./database/user/planet.json', JSON.stringify(planet))
    }

const jualbahankimia = (sender, amount) => {
    	let position = false
        Object.keys(planet).forEach((i) => {
            if (planet[i].id === sender) {
                position = i
            }
        })
        if (position !== false) {
            planet[position].hape -= amount
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
    }
 
 const addCoal = (sender, amount) => {
        let position = false
        Object.keys(coal).forEach((i) => {
    	    if (coal[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	coal[position].arang += amount
    	fs.writeFileSync('./database/user/coal.json', JSON.stringify(coal))
    	}
    }
    
    const getMiningcoal = (sender) => {
    let position = false 
    Object.keys(coal).forEach((i) => {
	if (coal[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return coal[position].arang
	}
}

    const getMiningId = (sender) => {
    let position = false
    Object.keys(coal).forEach((i) => {
	if (coal[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return coal[position].id
    }
}
    
const addMiningId = (sender) => {
    const ovj = {id: sender, arang: 0}
    coal.push(ovj)
    fs.writeFileSync('./database/user/coal.json', JSON.stringify(coal))
    }

const jualcoal = (sender, amount) => {
    	let position = false
        Object.keys(coal).forEach((i) => {
            if (coal[i].id === sender) {
                position = i
            }
        })
        if (position !== false) {
            coal[position].arang -= amount
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
    }
    
 
const addStone = (sender, amount) => {
        let position = false
        Object.keys(stone).forEach((i) => {
    	    if (stone[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	stone[position].batu += amount
    	fs.writeFileSync('./database/user/stone.json', JSON.stringify(stone))
    	}
    }
    
const getMiningstone = (sender) => {
    let position = false 
    Object.keys(stone).forEach((i) => {
	if (stone[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return stone[position].batu
	}
}

    const getBatuId = (sender) => {
    let position = false
    Object.keys(stone).forEach((i) => {
	if (stone[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return stone[position].id
    }
}
    
const addBatuId = (sender) => {
    const ovj = {id: sender, batu: 0}
    stone.push(ovj)
    fs.writeFileSync('./database/user/stone.json', JSON.stringify(stone))
    }

const jualstone = (sender, amount) => {
    	let position = false
        Object.keys(stone).forEach((i) => {
            if (stone[i].id === sender) {
                position = i
            }
        })
        if (position !== false) {
            stone[position].batu -= amount
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
    }

const addOre = (sender, amount) => {
        let position = false
        Object.keys(ore).forEach((i) => {
    	    if (ore[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ore[position].copperore += amount
    	fs.writeFileSync('./database/user/ore.json', JSON.stringify(ore))
    	}
    }
    
const getMiningore = (sender) => {
    let position = false 
    Object.keys(ore).forEach((i) => {
	if (ore[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ore[position].copperore
	}
}

const getOreId = (sender) => {
    let position = false
    Object.keys(ore).forEach((i) => {
	if (ore[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ore[position].id
    }
}
    
const addOreId = (sender) => {
    const ovj = {id: sender, copperore: 0}
    ore.push(ovj)
    fs.writeFileSync('./database/user/ore.json', JSON.stringify(ore))
    }

const jualore = (sender, amount) => {
    	let position = false
        Object.keys(ore).forEach((i) => {
            if (ore[i].id === sender) {
                position = i
            }
        })
        if (position !== false) {
            ore[position].copperore -= amount
            fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
        }
    }
    
const addIngot = (sender, amount) => {
        let position = false
        Object.keys(ingot).forEach((i) => {
    	    if (ingot[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ingot[position].copperingot += amount
    	fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
    	}
    }
    
const getMiningingot = (sender) => {
    let position = false 
    Object.keys(ingot).forEach((i) => {
	if (ingot[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ingot[position].copperingot
	}
}

const getIngotId = (sender) => {
    let position = false
    Object.keys(ingot).forEach((i) => {
	if (ingot[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ingot[position].id
    }
}
    
const addIngotId = (sender) => {
    const ovj = {id: sender, copperingot: 0}
    ingot.push(ovj)
    fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
    }

const jualingot = (sender, amount) => {
    	let position = false
        Object.keys(ingot).forEach((i) => {
            if (ingot[i].id === sender) {
                position = i
            }
        })
        if (position !== false) {
            ingot[position].copperingot -= amount
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
    }

const addKayu = (sender, amount) => {
        let position = false
        Object.keys(kayu).forEach((i) => {
    	    if (kayu[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	kayu[position].wood += amount
    	fs.writeFileSync('./database/user/kayu.json', JSON.stringify(kayu))
    	}
    }
    
const getNebangKayu = (sender) => {
    let position = false 
    Object.keys(kayu).forEach((i) => {
	if (kayu[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return kayu[position].wood
	}
}

const getNebangId = (sender) => {
    let position = false
    Object.keys(kayu).forEach((i) => {
	if (kayu[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return kayu[position].id
    }
}
    
const addNebangId = (sender) => {
    const ovj = {id: sender, wood: 0}
    kayu.push(ovj)
    fs.writeFileSync('./database/user/kayu.json', JSON.stringify(kayu))
    }

const jualKayu = (sender, amount) => {
    	let position = false
        Object.keys(kayu).forEach((i) => {
            if (kayu[i].id === sender) {
                position = i
            }
        })
        if (position !== false) {
            kayu[position].wood -= amount
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
    }
  
const checkPetualangUser = (sender) => {
            let status = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    status = true
                }
            })
            return status
        } 
const addInventori = (sender) => {
            var obj = {id: sender, emas: goldAwal, diamond: 0, ikan: 0, besi: besiAwal, gold: goldAwal, emerald: emeraldAwal, umpan: umpanAwal, potion: potionAwal}
            _RPG.push(obj)
            fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_RPG))
        } 
const sellBesi = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].besi -= amount
                fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_RPG))
            }
        }
  const addBesi = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].besi += amount
                fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_RPG))
            }
        }
  const kurangBesi = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].besi -= amount
                fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_RPG))
            }
        }
  const getBesi = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].besi
            }
        }     
 const addDm = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].diamond += amount
                fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_RPG))
            }
        }
        
const sellDm = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].diamond -= amount
                fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_RPG))
            }
        }
const getDm = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].diamond
            }
        }
const addEmas = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].emas += amount
                fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_RPG))
            }
        }
   const kurangEmas = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].gold -= amount
                fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_RPG))
            }
        }
   const getEmas = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].emas
            }
        }             
        const sellEmas = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].emas -= amount
                fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_RPG))
            }
        }
 const addEmerald = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].emerald += amount
                fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_RPG))
            }
        }
   const kurangEmerald = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].emerald -= amount
                fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_RPG))
            }
        }
   const getEmerald = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].emerald
            }
        }     
 const addUmpan = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].umpan += amount
                fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_RPG))
            }
        }
   const kurangUmpan = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].umpan -= amount
                fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_RPG))
            }
        }
   const getUmpan = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].umpan
            }
        }  
const addPotion = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].potion += amount
                fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_RPG))
            }
        }
   const kurangPotion = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].potion -= amount
                fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_RPG))
            }
        }
   const getPotion = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].potion
            }
        }       
var addFish = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].ikan += amount
                fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_RPG))
            }
        }
        
       var sellFish = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].ikan -= amount
                fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_RPG))
            }
        } 
               
       var getFish = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].ikan
            }
        }
 module.exports = { addBesi, 
                     addEmas, 
                     addEmerald, 
                     addUmpan,
                     addPotion,
                     kurangBesi, 
                     kurangEmas, 
                     kurangEmerald, 
                     kurangUmpan,
                     kurangPotion,
                     getBesi, 
                     getEmas, 
                     getEmerald,
                     getUmpan,
                     getPotion,
					getFish, sellFish, addFish, sellEmas, addEmas, getDm, addDm, sellDm, sellBesi, addInventori, checkPetualangUser,  getLevelingXp,getLevelingLevel,getLevelingId,addLevelingXp,addLevelingLevel,addLevelingId,addATM,addKoinUser,checkATMuser,addIkan,getMancingIkan,getMancingId,addMancingId,jualIkan,addPlanet,getBertualangPlanet,getPlaneId,addPlaneId,jualbahankimia,addCoal,getMiningcoal,getMiningId,addMiningId,jualcoal,addStone,getMiningstone,getBatuId,addBatuId,jualstone,addOre,getMiningore,getOreId,addOreId,jualore,addIngot,getMiningingot,getIngotId,addIngotId,jualingot,addKayu,getNebangKayu,getNebangId,addNebangId,jualKayu}
 