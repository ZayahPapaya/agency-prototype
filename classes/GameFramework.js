`use strict`
//const tombFloor = require('../assets/tomb_0_old.png');
class Entity {
  constructor(name, sprite) {
    this.name = name;
    this.sprite = sprite;
  }
  tile = undefined;
  behaviorLoop() {
    // Enemy should read its set target
    // It should feed its capabilities / preferred target to a helper function
    // Reevaluate the arena, determine next preferred target, and pass turn.
    // Target should provide for Scout units
  }
}
class TileFactory {
  createTile(coord, texture) {
    return {
      contents: [],
      coordinates: coord,
      edges: new Set(),
      texture: texture,
    }
  }
}
class GameFramework {
  constructor() {
    this.tileFactory = new TileFactory();
  }
  
  tiles = [];
  isInCombat = false;
  generateMap(mapWidth, mapHeight) {
    //should randomly generate an encounter map
    for (let x = 0; x <= mapWidth - 1; x++) {// define inputs
      for (let y = 0;  y <= mapHeight - 1; y++) {
        const tile = this.tileFactory.createTile([x, y], undefined);
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
      if (this.compareCoord(coord, tile.coordinates)) {
        return tile;
      }
    }
    return undefined;
  };

  compareCoord(a, b) {
    return a[0] === b[0] && a[1] === b[1];
  };

  spawn(entity, coord) {
    const tile = this.getTile(coord);
    tile.contents.push(entity);
    entity.tile = tile;
    return entity;
  };
};
module.exports = {
  Entity,
  GameFramework,
}