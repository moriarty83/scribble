const { tilesObject } = require("../../tiles");
const Tile = require("../../src/Scripts/Classes/Tile").default;

test("Test that tilesObject with top matches have isBottom equal to true", () => {
	for (tile of tilesObject) {
		if (tile.ifTopMatchesWith.length) expect(tile.isTop).toBe(true);
	}
});

test("Test that tilesObject with bottom matches have isTop equal to true", () => {
	for (tile of tilesObject) {
		if (tile.ifBottomMatchesWith.length) expect(tile.isBottom).toBe(true);
	}
});

test("Test that tilesObject with bottom matches and top matches have isBottom and isTop equal to true", () => {
	for (tile of tilesObject) {
		if (tile.ifBottomMatchesWith.length && tile.ifTopMatchesWith.length) {
			expect(tile.isBottom).toBe(true);
			expect(tile.isTop).toBe(true);
		}
	}
});

test("checks setOrientationTop for tiles", () => {
	const tile1 = new Tile(tilesObject[0]);
	tile1.setOrientationTop(false);
	expect(tile1.orientedTop).toBe(true);
	tile1.setOrientationTop(true);
	expect(tile1.orientedTop).toBe(true);

	const tile2 = new Tile(tilesObject[1]);
	tile2.setOrientationTop(false);
	expect(tile2.orientedTop).toBe(false);
	tile2.setOrientationTop(true);
	expect(tile2.orientedTop).toBe(true);
});

test("checks to see if tilesObject that should match, are identified as matching", () => {
	const tile1 = new Tile(tilesObject[0]);
	const tile2 = new Tile(tilesObject[1]);
	const tile3 = new Tile(tilesObject[30]);
	tile2.setOrientationTop(false);
	tile3.setOrientationTop(false);

	expect(tile1.checkMatch(tile2)).toBe(true);
	expect(tile1.checkMatch(tile3)).toBe(true);
});
