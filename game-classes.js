import tombFloor from 'assets/tomb_0_old.png';
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
      contents: contents,
      coordinates: [x, y],
      edges: edges,
      texture: texture,
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
  mapWidth = 10;
  mapHeight = 10;
  generateMap() {
    //should randomly generate an encounter map
    combatMap = undefined;
    for (let x = 0; x <= mapWidth - 1; x++) {// define inputs
      for (let y = 0;  x <= mapHeight - 1; y++) {
        this.tileFactory.createTile([], x, y, [], tombFloor);
        //check what a given tile should be. Might need to read adjacent tiles for structure or chance. Or read from presets?
      }
    }
    this.combatMap = 'tbd';
  }

}