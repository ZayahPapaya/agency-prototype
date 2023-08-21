class Spell {
  constructor(caster) {
    this.caster = caster;
  }
  functions = [];
  name = undefined;
  element = undefined;
  costAP = undefined;
  costMP = undefined;
  costWP = undefined;
  baseDamage  = undefined;
  minRange = undefined;
  maxRange =  undefined;
  rangeIsModifiable = undefined;
  isLine = undefined;
  isDiagonal = undefined;
  requiresLineOfSight = undefined;
  isArea = undefined;

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

  calcDamage(baseDamage, casterMastery, finalDamage, directional, mobResist) {
    let directionalBonus = 0; // directionalBonus should instead be a method that compares the position and orientation of the two fighters
    if(directional.isBackstab) {
      directionalBonus = 25
    } else if (directional.isSidestab) {
      directionalBonus = 10;
    };
    // casterMastery should be a method that checks for what masteries should apply
    return Math.round(baseDamage * (1 + casterMastery / 100) * (1 + finalDamage / 100) * (1 + directionalBonus / 100) * (1 - Math.round(Math.pow(0.8, (mobResist/100))* 100) / 100)); // TODO: include res% in charsheet / entity to avoid repeating the power calculation
  }
  // check for conditions
  // check for critical chance
  // find targets in area
  // calculate damage against targets

  // conditions should attach to an entity and be queried frequently whenever actions occur that could trigger them
  // such as start of turn, when casting a spell, when moving, end of turn

  // area templates should be functions that calculate an area based off the target position
}

const burstTemplate = (currentTile) => {//TODO: either determine a better method or rely on Unity collisions later
  let tileArray = [];
  return tileArray;
}

// TODO: include a spell-set of these for each class to read when generating


module.exports = {
  Spell,
}