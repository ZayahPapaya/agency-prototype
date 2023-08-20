//import { describe, it, expect } from "node:test";
const { GameFramework, Entity } = require("../classes/gameFramework");

describe('Map functionality', () => {
  const map = new GameFramework();
  map.generateMap(2, 2);
  it('Holds entities', () => {
    const goblin = new Entity("Goblin", undefined);
    map.spawn(goblin, [1, 1]);
    expect(goblin.tile.coordinates).toEqual([1, 1]);
    expect(map.getTile([1, 1]).contents.length).toEqual(1);
  });
});