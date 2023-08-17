package zinc.core;

import static zinc.core.PixelConstants.*;

import java.util.ArrayList;
import java.nio.ByteBuffer;
import java.nio.IntBuffer;
import java.nio.ByteOrder;


public class Layer {
  public final int width;
  public final int height;
  public final int[] data;

  public Layer(Layer.Builder builder) {
    this.width = builder.width;
    this.height = builder.height;
    this.data = builder.data;
  }

  public void draw(Surface surface) {
    Image[] tiles = Tiles.get("beach_tileset.png");
    int i = 0;
    for (int y = 0; y < height; y++) {
      for (int x = 0; x < width; x++) {
        int d = data[i++];
        d = d & 0x00ffffff;
        d -= 1;
        if (d > 0) surface.draw(tiles[d], (x - 20) * TILE_SIZE, (y - 20) * TILE_SIZE);
      }
    }
  }

  public String toString() {
    return "Layer[" + width + "x" + height + "]";
  }

  static class Builder implements Buildable {
    int width = 0, height = 0;
    int[] data;

    public Builder newBuilder() { return new Builder(); }

    public Builder setData(Data data) { this.data = data.decoded; return this; }
    public Builder setData(int[] data) { this.data = data; return this; }

    public void addChild(Object child) {
      if (child instanceof Data) setData((Data) child);
    }

    public Builder setWidth(int width) { this.width = width; return this; }
    public Builder setHeight(int height) { this.height = height; return this; }

    public void setProperty(String key, String value) {
      if (key.equals("width")) setWidth(Integer.parseInt(value));
      else if (key.equals("height")) setHeight(Integer.parseInt(value));
    }

    public void setContent(String content) {}

    public Layer build() { return new Layer(this); }
  }

  static class Data {
    public final int[] decoded;
    public Data(Data.Builder builder) {
      this.decoded = builder.decoded;
    }

    static class Builder implements Buildable {
      String encoding;
      String content;
      int[] decoded;

      public Builder newBuilder() { return new Builder(); }

      public void addChild(Object child) {}

      public Builder setEncoding(String encoding) { this.encoding = encoding; return this; }

      public void setProperty(String key, String value) {
        if (key.equals("encoding")) setEncoding(value);
      }

      public Builder setDecoded(int[] decoded) { this.decoded = decoded; return this; }

      public void setContent(String content) { this.content = content; }

      public Data build() {
        if (decoded == null) {
          ByteBuffer byteBuffer = Base64.decode(content);
          byteBuffer.order(ByteOrder.LITTLE_ENDIAN);
          IntBuffer intBuffer = byteBuffer.asIntBuffer();
          decoded = new int[intBuffer.limit()];
          intBuffer.get(decoded);
        }
        return new Data(this);
      }
    }
  }
}