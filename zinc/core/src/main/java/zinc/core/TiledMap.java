package zinc.core;

import java.util.ArrayList;

public class TiledMap {
  public final int width;
  public final int height;
  public final TileSet[] tileSets;
  public final Layer[] layers;

  public TiledMap(TiledMap.Builder builder) {
    this.width = builder.width;
    this.height = builder.height;

    this.tileSets = new TileSet[builder.tileSets.size()];
    builder.tileSets.toArray(this.tileSets);

    this.layers = new Layer[builder.layers.size()];
    builder.layers.toArray(this.layers);
  }

  public void draw(Surface surface, int viewX, int viewY, int tick) {
    for (Layer layer : layers) {
      layer.draw(surface, viewX, viewY, tick);
    }
  }

  public String toString() {
    return "TiledMap[" + width + "x" + height + "]";
  }

  static class Builder implements Buildable {
    int width = 0, height = 0;
    ArrayList<TileSet> tileSets = new ArrayList<>();
    ArrayList<Layer> layers = new ArrayList<>();

    public Builder newBuilder() { return new Builder(); }

    public Builder addTileSet(TileSet tileSet) { tileSets.add(tileSet); return this; }
    public Builder addLayer(Layer layer) { layers.add(layer); return this; }

    public void addChild(Object child) {
      if (child instanceof TileSet) addTileSet((TileSet) child);
      if (child instanceof Layer) addLayer((Layer) child);
    }

    public Builder setWidth(int width) { this.width = width; return this; }
    public Builder setHeight(int height) { this.height = height; return this; }

    public void setProperty(String key, String value) {
      if (key.equals("width")) setWidth(Integer.parseInt(value));
      else if (key.equals("height")) setHeight(Integer.parseInt(value));
    }

    public void setContent(String content) {}

    public TiledMap build() { return new TiledMap(this); }
  }
}