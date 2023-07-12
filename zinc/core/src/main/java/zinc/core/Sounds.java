package zinc.core;


public final class Sounds {
  private Sounds() {}

  public static boolean sounds = true;
  public static boolean music = true;
  
  public static Sound FANFARE;

  public static void startLoading() {
    FANFARE = Sound.loadMusic("fanfare");
  }

  public static boolean isMusicLoaded() {
    return FANFARE.isLoaded();
  }

  public static void finishLoading() {
  }

}
