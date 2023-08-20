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

// TODO: make individual spells as extensions of the Spell class
// TODO: include a spell-set of these for each class to read when generating
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

module.exports = {
  Spell,
}