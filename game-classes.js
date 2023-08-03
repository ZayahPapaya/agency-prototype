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
  
  tiles = [];
  isInCombat = false;
  mapWidth = 10;
  mapHeight = 10;
  generateMap() {
    //should randomly generate an encounter map
    for (let x = 0; x <= mapWidth - 1; x++) {// define inputs
      for (let y = 0;  x <= mapHeight - 1; y++) {
        const tile = this.tileFactory.createTile([], x, y, new Set(), tombFloor);
        this.tiles.push(tile);
        const left = [x - 1, y];
        const right = [x + 1, y];
        const up = [x, y + 1];
        const down = [x, y - 1];
        for (let coord of [left, right, up, down]) {
          const neighbor = this.getTile(coord);
          if(!neighbor) {
            continue;
          }
          this.addEdge(tile, neighbor);
        }
      }
    }
  };

  addEdge(a, b) {
    a.edges.add(b);
    b.edges.add(a);
  };

  getTile(coord) {
    for (const tile of this.tiles) {
      if (this.compareCoord(coord, tile.position)) {
        return tile;
      }
    }
    return undefined;
  };

  compareCoord(a, b) {
    return a[0] === b[0] && a[1] === b[1];
  };

};