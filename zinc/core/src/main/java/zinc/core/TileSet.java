package zinc.core;

public class TileSet {
  public final String source;
  public final int firstGid;
  public final int tileCount;
  public final int columns;
  public final String imageSource;

  public TileSet(TileSet.Builder builder) {
    this.source = builder.source;
    this.firstGid = builder.firstGid;
    this.tileCount = builder.tileCount;
    this.columns = builder.columns;
    this.imageSource = builder.imageSource;
  }

  public String toString() {
    return "TileSet[" + tileCount + " tiles, " + firstGid + " to " + (firstGid + tileCount - 1) + "]";
  }

  static class Builder implements Buildable {
    String source;
    int firstGid = 0, tileCount = 0, columns = 0;
    String imageSource;

    public Builder newBuilder() { return new Builder(); }

    public Builder setImage(Image image) { this.source = image.source; return this; }
    public Builder setImage(String imageSource) { this.imageSource = imageSource; return this; }

    public void addChild(Object child) {
      if (child instanceof Image) setImage((Image) child);
    }

    public Builder setSource(String source) { this.source = source; return this; }
    public Builder setFirstGid(int firstGid) { this.firstGid = firstGid; return this; }
    public Builder setTileCount(int tileCount) { this.tileCount = tileCount; return this; }
    public Builder setColumns(int columns) { this.columns = columns; return this; }

    public void setProperty(String key, String value) {
      if (key.equals("source")) setSource(value);
      else if (key.equals("firstgid")) setFirstGid(Integer.parseInt(value));
      else if (key.equals("tilecount")) setTileCount(Integer.parseInt(value));
      else if (key.equals("columns")) setColumns(Integer.parseInt(value));
    }

    public void setContent(String content) {}

    public TileSet build() { return new TileSet(this); }
  }

  static class Image {
    public final String source;
    public Image(Image.Builder builder) {
      this.source = builder.source;
    }

    static class Builder implements Buildable {
      String source = "";

      public Builder newBuilder() { return new Builder(); }

      public void addChild(Object child) {}

      public Builder setSource(String source) { this.source = source; return this; }

      public void setProperty(String key, String value) {
        if (key.equals("source")) setSource(value);
      }

      public void setContent(String content) {}

      public String build() { return source; }
    }
  }

}