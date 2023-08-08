package zinc.java;

import java.awt.image.BufferedImage;

import playn.java.LWJGLPlatform;
import playn.core.Graphics;
import playn.core.Canvas;
import playn.core.Scale;

import pythagoras.f.Dimension;
import pythagoras.f.IDimension;

import static zinc.core.PixelConstants.*;

import zinc.core.Clipboard;
import zinc.core.ControllerHub;
import zinc.core.Platform;
import zinc.core.Zinc;

import java.awt.Toolkit;
import java.awt.datatransfer.DataFlavor;
import java.awt.datatransfer.StringSelection;

import java.lang.reflect.Field;

import net.java.games.input.Controller;
import net.java.games.input.ControllerEnvironment;
import net.java.games.input.Component;

public class ZincJava {

  public static void main (String[] args) {
    new JavaControllerHub();
    new JavaClipboard();

    LWJGLPlatform.Config config = new LWJGLPlatform.Config();
    config.appName = "Codename: Zinc";
    LWJGLPlatform raw = new LWJGLPlatform(config);
    JavaPlatform platform = new JavaPlatform(raw);
    new Zinc(platform);
    raw.start();
  }
  
  static class JavaPlatform extends Platform { 
    JavaPlatform(LWJGLPlatform raw) {
      super(raw);
    }

    public void setSize(int width, int height) {
      try {
        Field f = Graphics.class.getDeclaredField("scale");
        f.setAccessible(true);
        Scale temp = (Scale) f.get(raw.graphics());
        ((playn.java.JavaGraphics) raw.graphics()).setSize(width, height, false);
        //f.set(raw.graphics(), temp);
      } catch (Exception e) {
        throw new RuntimeException(e);
      }
    }

    @Override
    public Canvas createRawCanvas(int pixelWidth, int pixelHeight) {
      try {
        Field f = Graphics.class.getDeclaredField("scale");
        f.setAccessible(true);
        Scale temp = (Scale) f.get(raw.graphics());
        f.set(raw.graphics(), Scale.ONE);
        Canvas canvas = raw.graphics().createCanvas(pixelWidth, pixelHeight);
        f.set(raw.graphics(), temp);
        return canvas;
      } catch (Exception e) {
        throw new RuntimeException(e);
      }
    }
    
    @Override
    public IDimension availableArea() {
      IDimension screenSize = raw.graphics().screenSize();
      return new Dimension(0.8f * screenSize.width(), 0.8f * screenSize.height());
    }

    @Override
    public void exit() {
      System.exit(0);
    }
  }

  static class JavaClipboard extends Clipboard {
    public final java.awt.datatransfer.Clipboard raw;

    JavaClipboard() {
      this.raw = initRaw();
    }

    @Override
    public void writeToSystem(String text) {
      if (raw != null) {
        raw.setContents(new StringSelection(text), null);
      }
    }

    @Override
    public boolean canWriteToSystem() { 
      return raw != null;
    }

    @Override
    public String readFromSystem() {
      try {
        return (String) raw.getData(DataFlavor.stringFlavor);
      } catch (Exception e) {
        return "";
      }
    }

    @Override
    public boolean canReadFromSystem() {
      return raw != null;
    }
    
    private static java.awt.datatransfer.Clipboard initRaw() {
      if (System.getProperty("os.name").toLowerCase().indexOf("mac") != -1) {
        return null;  // Toolkit calls breaks everything on my Macbook.
      }
      return Toolkit.getDefaultToolkit().getSystemClipboard();
    }
  }

  static class JavaControllerHub extends ControllerHub {
    @Override
    public int getControllerCount() {
      Controller[] controllers = ControllerEnvironment.getDefaultEnvironment().getControllers();
      return controllers.length;
    }

    @Override
    public double X() {
      Controller[] controllers = ControllerEnvironment.getDefaultEnvironment().getControllers();
      for (Controller controller : controllers) {
        controller.poll();
        return controller.getComponent(Component.Identifier.Axis.X).getPollData();
      }
      return 0.0;
    }

    @Override
    public double Y() {
      Controller[] controllers = ControllerEnvironment.getDefaultEnvironment().getControllers();
      for (Controller controller : controllers) {
        controller.poll();
        return controller.getComponent(Component.Identifier.Axis.Y).getPollData();
      }
      return 0.0;
    }
  }
  
}
