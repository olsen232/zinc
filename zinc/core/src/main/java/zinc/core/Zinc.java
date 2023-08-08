package zinc.core;

import static zinc.core.PixelConstants.*;

import playn.core.Canvas;
import playn.core.Clock;
import playn.core.Keyboard;
import playn.core.Mouse;
import playn.scene.SceneGame;
import react.Slot;

public class Zinc extends SceneGame {

  static int FRAME_MS = 1000 / 30;

  private Surface surface;
  private int updatedAtMs;

  private boolean fontLoaded = false;
  private boolean loadingFinished = false;
  private boolean clicked = false;
  private boolean musicFired = false;

  public Zinc(Platform platform) {
    super(platform.raw, FRAME_MS);
    surface = new Surface(viewSurf);
    surface.clipFactor = platform.raw.graphics().scale().factor * platform.zoom;

    MenuGfx.startLoading();
    Font.startLoading();
    Tiles.startLoading();
    Sprites.startLoading();
    Sounds.startLoading();

    plat.input().keyboardEnabled = true;
    plat.input().keyboardEvents.connect(keySlot);

    plat.input().mouseEnabled = true;
    plat.input().mouseEvents.connect(mouseSlot);
  }

  @Override
  public void update(Clock clock) {
    updatedAtMs = Platform.INSTANCE.raw.tick();
    if (loadingFinished && clicked) {
      if (!musicFired) {
        Sounds.FANFARE.play();
        musicFired = true;
      }
    } else if (loadingFinished) {
      // Nothing required.
    } else if (!fontLoaded && Font.RAW.isLoaded()) {
      Font.finishLoading();
      fontLoaded = true;

    } else if (Image.LOAD_TRACKER.isLoaded() &&
               /*Sound.LOAD_TRACKER.isLoaded() &&*/
               (Sounds.music ? Sound.MUSIC_LOAD_TRACKER.isLoaded() : true)) {

      MenuGfx.finishLoading();
      Tiles.finishLoading();
      Sprites.finishLoading();
      Sounds.finishLoading();
      loadingFinished = true;
    }
  }

  @Override
  public void paintScene() {
    int deltaMs = Platform.INSTANCE.raw.tick() - updatedAtMs;
  
    surface.saveTx();
    surface.begin();
    surface.clear(0, 0, 0, 1);
    
    surface.scale(Platform.INSTANCE.zoom, Platform.INSTANCE.zoom);
    
    try {
      if (loadingFinished && clicked) {
        surface.draw(MenuGfx.TITLE, 0, 0);
        if (ControllerHub.INSTANCE != null) {
          int numControllers = ControllerHub.INSTANCE.getControllerCount();
          Font.WHITE.singleLine(surface, "Controllers found: " + numControllers, 8 * 3, 8 * 20);
          if (numControllers > 0) {
            Font.WHITE.singleLine(surface, "Controller X: " + ControllerHub.INSTANCE.X(), 8 * 3, 8 * 21);
            Font.WHITE.singleLine(surface, "Controller Y: " + ControllerHub.INSTANCE.Y(), 8 * 3, 8 * 22);
          }
        }
      } else if (fontLoaded) {
        surface.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT, 0xff000000);
        renderLoadingProgress(surface);
      } else {
        viewSurf.clear(1, 1, 1, 1);
      }
      
    } finally {
      surface.end();
      surface.restoreTx();
    }
  }

  private void renderLoadingProgress(Surface surface) {
    Font.WHITE.singleLine(surface, "Images: " + Image.LOAD_TRACKER.text(), 8 * 3, 8 * 3);
    Font.WHITE.singleLine(surface, "Sounds: " + Sound.LOAD_TRACKER.text(), 8 * 3, 8 * 5);
    Font.WHITE.singleLine(surface, "Music: " + Sound.MUSIC_LOAD_TRACKER.text(), 8 * 3, 8 * 7);
    if (loadingFinished) {
      Font.WHITE.singleLine(surface, "[Click to begin]", 8 * 3, 8 * 9);
    }
  }
  
  private Slot<Keyboard.Event> keySlot = new Slot<Keyboard.Event>() {
    public void onEmit(Keyboard.Event e) {
  	  if (e instanceof Keyboard.KeyEvent) {
  	    Keyboard.KeyEvent ke = (Keyboard.KeyEvent) e;
        // controlState.onKeyChange(ke.key, ke.down);
      }
    }
  };
  
  private Slot<Mouse.Event> mouseSlot = new Slot<Mouse.Event>() {
    public void onEmit(Mouse.Event e) {
      if (e instanceof Mouse.ButtonEvent && loadingFinished) {
        clicked = true;
      }

	    /*if (e instanceof Mouse.ButtonEvent) {
        controlState.onMouseChange((int) e.x, (int) e.y, ((Mouse.ButtonEvent) e).down);
      } else if (controlState.isMousePressed()) {
         controlState.onMouseDragged((int) e.x, (int) e.y);
      }*/
    }
  };
}
