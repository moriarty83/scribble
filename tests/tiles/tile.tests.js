const { tiles } = require("../../tiles")


test('test is Top and has top score', () => {
    for(tile of tiles){
      console.log(tile)
      if(tile.topMatches.length)
      expect(tile.isTop).toBe(true);
    }
    
  });