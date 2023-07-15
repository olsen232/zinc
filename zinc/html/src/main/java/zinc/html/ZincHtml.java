package zinc.html;

import com.google.gwt.dom.client.CanvasElement;
import com.google.gwt.dom.client.Document;
import com.google.gwt.core.client.EntryPoint;
import playn.html.HtmlGraphics;
import playn.html.HtmlCanvas;
import playn.html.HtmlImage;
import playn.core.Canvas;
import playn.core.Scale;

import zinc.core.Clipboard;
import zinc.core.ControllerHub;
import zinc.core.Zinc;
import zinc.core.Platform;

import static zinc.core.PixelConstants.*;

public class ZincHtml implements EntryPoint {

  @Override public void onModuleLoad () {
    new HtmlControllerHub();
    new HtmlClipboard();

    playn.html.HtmlPlatform.Config config = new playn.html.HtmlPlatform.Config();
    playn.html.HtmlPlatform raw = new playn.html.HtmlPlatform(config);
    HtmlPlatform platform = new HtmlPlatform(raw);
    raw.assets().setPathPrefix("zinc/");
    new Zinc(platform);
    raw.start();
  }

  static class HtmlPlatform extends Platform {    
    HtmlPlatform(playn.html.HtmlPlatform raw) {
      super(raw);
    }

    @Override
    public void setSize(int width, int height) {
      ((playn.html.HtmlGraphics) raw.graphics()).setSize(width, height);
    }



    @Override
    public playn.core.Canvas createRawCanvas(int pixelWidth, int pixelHeight) {
      CanvasElement elem = Document.get().createCanvasElement();
      elem.setWidth(pixelWidth);
      elem.setHeight(pixelHeight);
      return new HtmlCanvas(raw.graphics(), new HtmlImage(raw.graphics(), Scale.ONE, elem, "<canvas>"));
    }
  }

  static class HtmlControllerHub extends ControllerHub {
    @Override
    public native int getControllerCount() /*-{
      var result = 0;
      var gamepads = navigator.getGamepads();
      for (var i = 0; i < gamepads.length; i++) {
        if (gamepads[i] != null) result += 1;
      }
      return result;
    }-*/;
  }

  static class HtmlClipboard extends Clipboard {
    HtmlClipboard() {
      addDocumentListeners();
    }

    public native void addDocumentListeners() /*-{
      window.top.document.body.addEventListener('cut', function(e) {
        @zinc.core.Clipboard::onSystemCopyEvent()();
      });
      window.top.document.body.addEventListener('copy', function(e) {
        @zinc.core.Clipboard::onSystemCopyEvent()();
      });
      window.top.document.body.addEventListener('paste', function(e) {
        @zinc.core.Clipboard::onSystemPasteEvent(Ljava/lang/String;)(e.clipboardData.getData('text'));
      });
    }-*/;

    @Override
    public native void writeToSystem(String text) /*-{
      var textArea = document.createElement("textarea");
      textArea.style.position = 'fixed';
      textArea.style.top = 0;
      textArea.style.left = 0;
      textArea.style.width = '2em';
      textArea.style.height = '2em';
      textArea.style.padding = 0;
      textArea.style.border = 'none';
      textArea.style.outline = 'none';
      textArea.style.boxShadow = 'none';
      textArea.style.background = 'transparent';
      textArea.value = text;

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        if(!document.execCommand('copy')) console.log('Copy failed');
      } catch (err) {
        console.log('Copy failed');
      }

      document.body.removeChild(textArea);
    }-*/;

    @Override
    public boolean canWriteToSystem() { return true; }
  }
}
