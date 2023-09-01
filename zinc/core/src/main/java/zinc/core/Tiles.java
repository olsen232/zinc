package zinc.core;

import static zinc.core.PixelConstants.*;

import java.util.HashMap;
import java.util.Map;
import react.RFuture;

public final class Tiles {
  private Tiles() {}

  public static RFuture<String> BEACH_TILESET_TSX_FUTURE;

  public static TileSet BEACH_TILESET;

  public static final MapReader MAP_READER = new MapReader();

  public static final String[] TILE_IMAGE_FILES = new String[] {
    "beach_tileset.png",
  };

  public static final Map<String, Image> TILE_IMAGES = new HashMap<String, Image>();
  public static final Map<String, Image[]> TILES = new HashMap<String, Image[]>();

  public static void startLoading() {
    for (String file : TILE_IMAGE_FILES) {
      TILE_IMAGES.put(file, Image.load(file));
    }
    BEACH_TILESET_TSX_FUTURE = Platform.INSTANCE.raw.assets().getText("beach_tileset.tsx");
  }

  public static void finishLoading() {
    for (String file : TILE_IMAGE_FILES) {
      TILES.put(file, TILE_IMAGES.get(file).tile(TILE_SIZE));
    }
    BEACH_TILESET = MAP_READER.parseTileSet(BEACH_TILESET_TSX_FUTURE.result().get(), "beach_tileset.tsx");
    System.out.println(BEACH_TILESET);
    for(TileSet.Tile tile : BEACH_TILESET.tiles) {
      System.out.println("  " + tile);
      for (TileSet.Tile.Animation.Frame frame : tile.frames) {
        System.out.println("    " + frame);
      }
    }
  }

  public static Image[] get(String file) {
    return TILES.get(file);
  }
}

  
