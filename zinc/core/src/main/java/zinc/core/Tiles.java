package zinc.core;

import static zinc.core.PixelConstants.*;

import java.util.HashMap;
import java.util.Map;

public final class Tiles {
  private Tiles() {}

  public static final String[] TILE_IMAGE_FILES = new String[] {
    "beach_tileset.png",
  };

  public static final Map<String, Image> TILE_IMAGES = new HashMap<String, Image>();
  public static final Map<String, Image[]> TILES = new HashMap<String, Image[]>();

  public static void startLoading() {
    for (String file : TILE_IMAGE_FILES) {
      TILE_IMAGES.put(file, Image.load(file));
    }
  }

  public static void finishLoading() {
    for (String file : TILE_IMAGE_FILES) {
      TILES.put(file, TILE_IMAGES.get(file).tile(TILE_SIZE));
    }
  }

  public static Image[] get(String file) {
    return TILES.get(file);
  }
}

  
