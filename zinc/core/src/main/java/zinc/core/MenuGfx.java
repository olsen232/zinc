package zinc.core;

import static zinc.core.PixelConstants.*;

public final class MenuGfx {
  private MenuGfx() {}

  public static final int BLACK = 0xff000000;

  public static Image TITLE;

  public static void startLoading() {
    TITLE = Image.load("title.png");
  }

  public static void finishLoading() {

  }

}
