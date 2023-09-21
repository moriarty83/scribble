const { tilesObject } = require("../../tiles");
const Tile = require("../../src/Scripts/Classes/Tile").default;
const Letter = require("../../src/Scripts/Classes/Letter").default;

test("Test calling new Letter without arguments", () => {
	expect(() => {
		new Letter();
	}).toThrow("Invalid arguments. Both topTile and bottomTile are required.");
	expect(() => {
		new Letter(new Tile(tilesObject[0]));
	}).toThrow("Invalid arguments. Both topTile and bottomTile are required.");
});

test("Test that should return error if tile orientation is not correct", () => {
	const tile1 = new Tile(tilesObject[0]);
	const tile2 = new Tile(tilesObject[1]);
	expect(() => {
		new Letter(tile1, tile2);
	}).toThrow("Invalid arguments. Both topTile and bottomTile are required.");
});

// test("Test calling new Letter without valid tiles that don't match", () => {
// 	const tile1 = new Tile(tilesObject[0]);
// 	const tile2 = new Tile(tilesObjects[3]);
// 	expect(() => {
// 		new Letter(tile1, tile2);
// 	}).toThrow("Invalid arguments. Tiles do not combine to make a letter");
// });
