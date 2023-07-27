// Obvious spell properties:
// Range, element, base damage, targets, name
//
//
// There are 7 catagories to the world, distributed in a wheel.
//                            
//             Shade          
//    Spirit           Decay  
//            Machine         
//    Arcane           Primal 
//            Radiant         
//                            
// Spirit, Shadow, and Decay, are often associated with evil but in reality make up the world just as much as the opposing side.

// Spirit is the life in all things, and provides healing
// Shade protects from the harsh light, and comfort to the home
// Decay is the natural processes of time and the material changing
// Arcane is raw magic in its purest form
// Radiant is light and searing heat, purifying the world
// Primal is the natural and physical world, including people
// Machine is unbiased, an empty vessel waiting to be assumed

// Arcane is progress forward, and an impetus upon the material - Opposite to decay, which reverts to lesser forms but changes just as much
// Primal is life and the physical - Opposite to the Spirit that leaves it
// Radiant is light and divinity - Opposite to Shade, dark and unknown
// Machine reflects its users' purpose and acts as such

// Druids, for example, might embody Primal and Decay. The circle of life, the wearing sands, and even the sands of time. Druids may double as Necromancers, or even Time Mages

class Spell {
  constructor(spellName, damageElement, cost, baseDamage, minRange, maxRange, rangeIsModifiable, isLine, isDiagonal, requiresLineOfSight, isArea, areaTemplate) {
    this.functions = [];
    this.name = spellName;
    this.element = damageElement;
    this.cost = cost;
    this.baseDamage = baseDamage;
    this.minRange = minRange;
    this.maxRange = maxRange;
    this.rangeIsModifiable = rangeIsModifiable;
    this.isLine = isLine;
    this.isDiagonal = isDiagonal;
    this.requiresLineOfSight = requiresLineOfSight;
    this.isArea = isArea;
    this.areaTemplate = areaTemplate || null;
    this.currentTile = undefined;
  }
  
  addFunction(fn) {
    if (typeof fn === "function") {
      this.functions.push(fn);
    } else {
      console.error("Cannot add non-function to list");
    }
  }

  removeFunction(fn) {
    const indexToRemove = this.functions.indexOf(fn);
    if (indexToRemove !== -1) {
      this.functions.splice(indexToRemove, 1);
    }
  }

  orchestrate() {
    this.functions.forEach(fn => {
      console.log(fn());
    });
  }
  // check for conditions
  // check for critical chance
  // find targets in area
  // calculate damage against targets

  // conditions should attach to an entity and be queried frequently whenever actions occur that could trigger them
  // such as start of turn, when casting a spell, when moving, end of turn

  // area templates should be functions that calculate an area based off the target position
}

const burstTemplate = (currentTile) => {
  let tileArray = [];
  return tileArray;
}

const fireball = new Spell('Fireball', 'fire', {AP: 3, MP: 0, WP: 0}, 10, 3, 7, true, false, false, true, true, undefined);
console.log(fireball)
const doMath = () => {
  return 2 + 2;
};
const logThings = () => {
  console.log("extra console log");
  return "string";
};
fireball.addFunction(doMath);
fireball.addFunction(logThings);
fireball.orchestrate();