package zinc.core;

public abstract class ControllerHub {
  public static ControllerHub INSTANCE;

  public ControllerHub() {
    INSTANCE = this;
  }

  public abstract int getControllerCount();
}