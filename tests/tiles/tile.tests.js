const { tiles } = require("../../tiles");

test("Test that tiles with top matches have isBottom equal to true", () => {
	for (tile of tiles) {
		if (tile.topMatches.length) expect(tile.isBottom).toBe(true);
	}
});

test("Test that tiles with bottom matches have isTop equal to true", () => {
	for (tile of tiles) {
		if (tile.bottomMatches.length) expect(tile.isTop).toBe(true);
	}
});

test("Test that tiles with bottom matches and top matches have isBottom and isTop equal to true", () => {
	for (tile of tiles) {
		if (tile.bottomMatches.length && tile.topMatches.length) {
			expect(tile.isBottom).toBe(true);
			expect(tile.isTop).toBe(true);
		}
	}
});
