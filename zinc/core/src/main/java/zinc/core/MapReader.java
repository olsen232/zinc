package zinc.core;

import java.util.HashMap;
import java.util.Map;

public class MapReader extends SimpleXmlParser {
  /*
  public static void main(String[] args) throws Exception {
    String xml;
    try (Scanner scanner = new Scanner(new File(args[0]), "utf-8")) {
      xml = scanner.useDelimiter("\\A").next();
    }

    TiledMap map = new MapReader().parse(xml, args[0]);
    System.out.println(map);
  }
  */

  public static final Map<String, Buildable> BUILDERS = new HashMap<String, Buildable>();
  static {
    BUILDERS.put("map", new TiledMap.Builder());
    BUILDERS.put("tileset", new TileSet.Builder());
    BUILDERS.put("image", new TileSet.Image.Builder());
    BUILDERS.put("layer", new Layer.Builder());
    BUILDERS.put("data", new Layer.Data.Builder());
    BUILDERS.put("tile", new TileSet.Tile.Builder());
    BUILDERS.put("animation", new TileSet.Tile.Animation.Builder());
    BUILDERS.put("frame", new TileSet.Tile.Animation.Frame.Builder());
  }

  public MapReader() {
    super(BUILDERS);
  }

  public TiledMap parseMap(String input, String context) {
    return (TiledMap) super.parse(input, context);
  }

  public TileSet parseTileSet(String input, String context) {
    return (TileSet) super.parse(input, context);
  }
}