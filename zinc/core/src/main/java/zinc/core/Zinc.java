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

  private double viewX, viewY = 0;

  private LoadingScreen loadingScreen;

  public Zinc(Platform platform) {
    super(platform.raw, FRAME_MS);
    surface = new Surface(viewSurf);
    surface.clipFactor = platform.raw.graphics().scale().factor * platform.zoom;

    loadingScreen = new LoadingScreen();
    LoadingScreen.startLoading();

    plat.input().keyboardEnabled = true;
    plat.input().keyboardEvents.connect(keySlot);

    plat.input().mouseEnabled = true;
    plat.input().mouseEvents.connect(mouseSlot);
  }

  @Override
  public void update(Clock clock) {
    updatedAtMs = Platform.INSTANCE.raw.tick();
    if (loadingScreen != null) {
      loadingScreen.update();
      return;
    }
    // Main game loop.

    double viewSpeed = 4;

    if (ControllerHub.INSTANCE != null) {
      int numControllers = ControllerHub.INSTANCE.getControllerCount();
      if (numControllers > 0) {
        viewX += viewSpeed * ControllerHub.INSTANCE.X();
        viewY += viewSpeed * ControllerHub.INSTANCE.Y();
      }
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
      draw(surface);
    } finally {
      surface.end();
      surface.restoreTx();
    }
  }

  public void draw(Surface surface) {
    if (loadingScreen != null) {
      loadingScreen.draw(surface);
      return;
    }

    surface.draw(MenuGfx.TITLE, 0, 0);

    Maps.ISLAND_MAP.draw(surface, (int) viewX, (int) viewY);

    if (ControllerHub.INSTANCE != null) {
      int numControllers = ControllerHub.INSTANCE.getControllerCount();
      Font.WHITE.singleLine(surface, "Controllers found: " + numControllers, 8 * 3, 8 * 20);
      if (numControllers > 0) {
        Font.WHITE.singleLine(surface, "Controller X: " + ControllerHub.INSTANCE.X(), 8 * 3, 8 * 21);
        Font.WHITE.singleLine(surface, "Controller Y: " + ControllerHub.INSTANCE.Y(), 8 * 3, 8 * 22);
      }
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
      if (e instanceof Mouse.ButtonEvent && loadingScreen != null && loadingScreen.isFinished()) {
        loadingScreen.finishClick();
        loadingScreen = null;
      }

      /*if (e instanceof Mouse.ButtonEvent) {
        controlState.onMouseChange((int) e.x, (int) e.y, ((Mouse.ButtonEvent) e).down);
      } else if (controlState.isMousePressed()) {
         controlState.onMouseDragged((int) e.x, (int) e.y);
      }*/
    }
  };
}
