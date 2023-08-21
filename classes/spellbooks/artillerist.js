const { Spell } = require('./spells');

class Blast extends Spell {

  functions = [

  ];
  name = 'Blast';
  element = 'Primal';
  costAP = 3;
  costMP = 0;
  costWP = 0;
  baseDamage  = 10;
  minRange = 1;
  maxRange =  6;
  rangeIsModifiable = true;
  isLine = false;
  isDiagonal = false;
  requiresLineOfSight = false;
  isArea = true;
  currentTarget = undefined;

  orchestrate = () => this.functions.forEach(fn => fn());
  determineArea = () => {
    //compare caster position to cast target position
    //
  };

};






const artilleristSpellbook = [
  Blast,
];
module.exports = {
  artilleristSpellbook,
};