import Tile from "./Tile"; // Adjust the import statement based on your environment
import { lettersObject } from "../../../letters";

export default class Letter {
	topTile: Tile;
	bottomTile: Tile;
	letter: string;
	score: number;
	constructor(topTile: Tile, bottomTile: Tile) {
		if (!topTile || !bottomTile) {
			throw new Error(
				"Invalid arguments. Both topTile and bottomTile are required."
			);
		}
		if (!topTile.orientedTop || bottomTile.orientedTop) {
			throw new Error(
				"Invalid arguments. Both topTile and bottomTile are required."
			);
		}
		this.topTile = topTile;
		this.bottomTile = bottomTile;
	}

	findLetter = (topTileId, bottomTileId) => {
		return lettersObject.find(
			(obj) =>
				obj["topTile"] === topTileId && obj["bottomTile"] === bottomTileId
		);
	};
}
