export class Entity {
  constructor(name, sprite) {
    this.name = name;
    this.sprite = sprite;
  }
  behaviorLoop() {
    // Enemy should read its set target
    // It should feed its capabilities / preferred target to a helper function
    // Reevaluate the arena, determine next preferred target, and pass turn.
    // Target should provide for Scout units
  }
}
export class TileFactory {
  createTile(contents, x, y, edges, texture) {
    return {
      contents: [],
      coordinates: [],
      edges: [],
      texture: 'image_url',
    }
  }
}
export class GameFramework {
  constructor() {
    this.tileFactory = new TileFactory();
  }
  
  tileFactory;
  isInCombat = false;
  combatMap =  undefined;

  generateMap() {
    //should randomly generate an encounter map
    combatMap = undefined;
    for (let x = 0; x <= inputX - 1; x++) {// define inputs
      for (let y = 0;  x <= inputY - 1; y++) {
        TileFactory.createTile('contents', x, y, [], 'google.com');
        //check what a given tile should be. Might need to read adjacent tiles for structure or chance. Or read from presets?
      }
    }
    this.combatMap = 'tbd';
  }

}