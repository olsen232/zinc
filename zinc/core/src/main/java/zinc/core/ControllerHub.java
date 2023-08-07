package zinc.core;

public abstract class ControllerHub {
  public static ControllerHub INSTANCE;

  public ControllerHub() {
    INSTANCE = this;
  }

  public abstract int getControllerCount();

  // get controller horizontal position (between -1.0 and 1.0)
  public abstract double X();

  // get controller vertical position (between -1.0 and 1.0)
  public abstract double Y();
}