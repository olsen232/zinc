package zinc.core;

public class LoadingScreen {

  private boolean fontLoaded;
  private boolean isFinished;

  public static void startLoading() {
    MenuGfx.startLoading();
    Font.startLoading();
    Tiles.startLoading();
    Maps.startLoading();
    Sprites.startLoading();
    Sounds.startLoading();
  }

  public void update() {
    if (isFinished) return;

    if (!fontLoaded && Font.RAW.isLoaded()) {
      Font.finishLoading();
      fontLoaded = true;
    }

    if (Image.LOAD_TRACKER.isLoaded() &&
         /*Sound.LOAD_TRACKER.isLoaded() &&*/
         (Sounds.music ? Sound.MUSIC_LOAD_TRACKER.isLoaded() : true)) {

      MenuGfx.finishLoading();
      Tiles.finishLoading();
      Maps.finishLoading();
      Sprites.finishLoading();
      Sounds.finishLoading();
      isFinished = true;
    }
  }

  public void draw(Surface surface) {
    if (!fontLoaded) {
      surface.clear(1, 1, 1, 1);
      return;
    }

    Font.WHITE.singleLine(surface, "Images: " + Image.LOAD_TRACKER.text(), 8 * 3, 8 * 3);
    Font.WHITE.singleLine(surface, "Sounds: " + Sound.LOAD_TRACKER.text(), 8 * 3, 8 * 5);
    Font.WHITE.singleLine(surface, "Music: " + Sound.MUSIC_LOAD_TRACKER.text(), 8 * 3, 8 * 7);

    if (isFinished) {
      Font.WHITE.singleLine(surface, "[Click to begin]", 8 * 3, 8 * 9);
    }
  }

  public boolean isFinished() {
    return isFinished;
  }

  public void finishClick() {
    assert isFinished;
    Sounds.FANFARE.play();
  }
}