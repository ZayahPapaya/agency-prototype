`use strict`
//const tombFloor = require('../assets/tomb_0_old.png');
class Entity {
  constructor(name, sprite) {
    this.name = name;
    this.sprite = sprite;
  }
  tile = undefined;
  map = undefined;
  behaviorLoop() {
    // Enemy should read its set target
    // It should feed its capabilities / preferred target to a helper function
    // Reevaluate the arena, determine next preferred target, and pass turn.
    // Target should provide for Scout units
  }

  moveValidation(coord) {
    // reads all entities on a tile and checks for a collision
    // returns true or false, and null in error case right now.
    // TODO: proper error handling
    const tile = this.map.getTile(coord);
    if(!tile) {
      console.log('No tile found');
      return null;
    };
    tile.contents.forEach(item => {
      if(item.collides) return false;
    });
    return true;
  };

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
    //TODO: should randomly generate an encounter map
    for (let x = 0; x <= mapWidth - 1; x++) {
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
    entity.map = this;
    return entity;
  };
};
module.exports = {
  Entity,
  GameFramework,
}