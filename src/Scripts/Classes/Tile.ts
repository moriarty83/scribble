interface TileInterface {
	tileNumber: number;
	isGold: boolean;
	isTop: boolean;
	isBottom: boolean;
	topPoints: number;
	bottomPoints: number;
	ifTopMatchesWith: Array<number>;
	ifBottomMatchesWith: Array<number>;
	orientedTop: boolean;
	inPlay: boolean;
}

export default class Tile {
	tileNumber: number;
	isGold: boolean;
	isTop: boolean;
	isBottom: boolean;
	topPoints: number;
	bottomPoints: number;
	ifTopMatchesWith: Array<number>;
	ifBottomMatchesWith: Array<number>;
	orientedTop: boolean;
	inPlay: boolean;

	constructor(tileInfo: TileInterface) {
		this.tileNumber = tileInfo.tileNumber;
		this.isTop = tileInfo.isTop;
		this.isBottom = tileInfo.isBottom;
		this.topPoints = tileInfo.topPoints;
		this.bottomPoints = tileInfo.bottomPoints;
		this.ifTopMatchesWith = tileInfo.ifTopMatchesWith;
		this.ifBottomMatchesWith = tileInfo.ifBottomMatchesWith;
		this.inPlay = tileInfo.inPlay;

		// Programaticalyh assign oriented top based on isBottom, isTop and if both, randomly assign
		this.orientedTop = tileInfo.isTop ? true : false;
		// Think of tiles that pair with each other. Tiles can never match if they have the same orientation.
	}

	checkMatch = (tile: Tile) => {
		if (this.orientedTop == tile.orientedTop) return false;
		if (this.tileNumber == 31 || tile.tileNumber == 31) {
			return true;
		}
		if (this.orientedTop) {
			return this.ifTopMatchesWith.includes(tile.tileNumber);
		} else if (!this.orientedTop) {
			return this.ifBottomMatchesWith.includes(tile.tileNumber);
		} else {
			return false;
		}
	};

	setOrientationTop = (topOriented: boolean) => {
		if ((!this.isTop && topOriented) || (!this.isBottom && !topOriented)) {
			console.log("error: specified orientation is not available.");
			return;
		}
		this.orientedTop = topOriented;
	};
}
