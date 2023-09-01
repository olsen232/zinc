package zinc.core;

import java.util.ArrayList;

public class TileSet {
  public final String source;
  public final int firstGid;
  public final int tileCount;
  public final int columns;
  public final String imageSource;
  public final Tile[] tiles;

  public TileSet(TileSet.Builder builder) {
    this.source = builder.source;
    this.firstGid = builder.firstGid;
    this.tileCount = builder.tileCount;
    this.columns = builder.columns;
    this.imageSource = builder.imageSource;

    this.tiles = new Tile[builder.tiles.size()];
    builder.tiles.toArray(this.tiles);
  }

  public String toString() {
    return "TileSet[" + tileCount + " tiles, " + firstGid + " to " + (firstGid + tileCount - 1) + "]";
  }

  static class Builder implements Buildable {
    String source;
    int firstGid = 0, tileCount = 0, columns = 0;
    String imageSource;
    ArrayList<Tile> tiles = new ArrayList<>();

    public Builder newBuilder() { return new Builder(); }

    public Builder setImage(Image image) { this.source = image.source; return this; }
    public Builder setImage(String imageSource) { this.imageSource = imageSource; return this; }

    public void addChild(Object child) {
      if (child instanceof Image) setImage((Image) child);
      else if (child instanceof Tile) tiles.add((Tile) child);
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

  static class Tile {
    public final int id;
    public final Animation.Frame[] frames;

    public Tile(Tile.Builder builder) {
      this.id = builder.id;
      this.frames = builder.animation.frames;
    }

    public String toString() {
      return "Tile[id=" + id + "]";
    }

    static class Builder implements Buildable {
      int id = 0;
      Animation animation;

      public Builder newBuilder() { return new Builder(); }

      public Builder setId(int id) { this.id = id; return this; }

      public Builder setAnimation(Animation animation) { this.animation = animation; return this; }

      public void setProperty(String key, String value) {
        if (key.equals("id")) setId(Integer.parseInt(value));
      }

      public void addChild(Object child) {
        if (child instanceof Animation) setAnimation((Animation) child);
      }

      public void setContent(String content) {}

      public Tile build() {
        return new Tile(this);
      }
    }

    static class Animation {
      public final Frame[] frames;

      public Animation(Tile.Animation.Builder builder) {
        this.frames = new Frame[builder.frames.size()];
        builder.frames.toArray(this.frames);
      }

      public String toString() {
        return "Animation[]";
      }

      static class Builder implements Buildable {
        ArrayList<Frame> frames = new ArrayList<>();

        public Builder newBuilder() { return new Builder(); }

        public void setProperty(String key, String value) {}

        public void addChild(Object child) {
          if (child instanceof Frame) frames.add((Frame) child);
        }

        public void setContent(String content) {}

        public Animation build() {
          return new Animation(this);
        }
      }

      static class Frame {
        public final int tileId;
        public final int duration;

        public Frame(Tile.Animation.Frame.Builder builder) {
          this.tileId = builder.tileId;
          this.duration = builder.duration;
        }

        public String toString() {
          return "Frame[tileId = " + tileId + ", duration = " + duration + "]";
        }

        static class Builder implements Buildable {
          int tileId;
          int duration;

          public Builder newBuilder() { return new Builder(); }

          public void setTileId(int tileId) {
            this.tileId = tileId;
          }

          public void setDuration(int duration) {
            this.duration = duration;
          }

          public void setProperty(String key, String value) {
            if (key.equals("tileid")) setTileId(Integer.parseInt(value));
            else if (key.equals("duration")) setDuration(Integer.parseInt(value));
          }

          public void addChild(Object child) {}

          public void setContent(String content) {}

          public Frame build() {
            return new Frame(this);
          }
        }
      }

    }

  }

}