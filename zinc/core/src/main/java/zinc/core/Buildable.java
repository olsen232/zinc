package zinc.core;

interface Buildable {
  Buildable newBuilder();

  void addChild(Object child);
  void setProperty(String key, String value);
  void setContent(String content);

  Object build();
}