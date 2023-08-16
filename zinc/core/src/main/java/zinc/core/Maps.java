package zinc.core;

import react.RFuture;
import java.util.List;

public class Maps {

  public static final MapReader MAP_READER = new MapReader();

  public static RFuture<String> ISLAND_TMX_FUTURE;

  public static TiledMap ISLAND_MAP;

  public static void startLoading() {
    ISLAND_TMX_FUTURE = Platform.INSTANCE.raw.assets().getText("island.tmx");
  }

  public static boolean isLoaded() {
    return ISLAND_TMX_FUTURE.isCompleteNow();
  }

  public static void finishLoading() {
    ISLAND_MAP = MAP_READER.parse(ISLAND_TMX_FUTURE.result().get(), "island.tmx");
    playn.core.Log log = Platform.INSTANCE.raw.log();
    log.info("" + ISLAND_MAP);
    log.info("" + ISLAND_MAP.layers[0].data[0]);
  }
}