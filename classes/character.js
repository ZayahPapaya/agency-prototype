class CharacterSheet {
  constructor(name, classChosen) {
    this.name = name;
    classApplier(classChosen, this);
  }
  baseHealth = null; // integer
  totalHealth = (this.baseHealth + this.stats.flatHealth) * this.level;

  level = 1;
  stats = {
    percentHealth: 0,
    resistance: 0,
    healsRecieved: 0,
    barrier: 0,

    genericMastery: 0,
    singleTargetMastery: 0,
    areaMastery: 0,
    distanceMastery: 0,
    meleeMastery: 0,
    flatHealth: 0,
  };

  spellbook = null; // set of spell objects
  passives = null; // set of passive objects
  classPassive = null; // object

  aFunction() {
  }

};

const classApplier = (classChosen, sheet) => {
  //TODO: HP values
  //TODO: spellbooks
  //TODO: a unique passive
  //TODO: passive set

  // this should only initialize / overwrite base values to verify a character is correct
  // ie this does not overwrite total HP, only base HP which is recalculated
  // or reinit spell classes which are modified the next time equipment is read
  // maybe include a check for worn equipment being valid for class-changing?
  // if so, include check for preexisting class, and if the class is changing then empty their currently selected spells and passives

  // spellbooks will be set of references to specific spell classes, will need to be something like spellbook.forEach(spell => new spell() )
  // passives will be ??? who knows how work idfk
  // total health is just (baseHealth + flatHealth) * level * bonus% HP stat
  switch (classChosen) {
    case 'Artillerist':
      console.log('Artillerist chosen');
      sheet.baseHealth = 15;
      // applies base HP, passives, spell list, and class passive
      break;
    case 'Gargoyle':
      console.log('Gargoyle chosen');
      sheet.baseHealth = 20;
      break;
    default:
      console.log('No class chosen?');
  };
};