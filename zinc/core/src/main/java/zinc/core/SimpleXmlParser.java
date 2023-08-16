package zinc.core;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class SimpleXmlParser {

  // Could use a builtin XML parser, but this one works for both Java and HTML.

  public static final int DECLARATION = -1, INITIAL = 0, DEFAULT = 1, CONTENT = 2, TAG_NAME = 3, PROP_KEY = 4, PROP_VAL = 5, TAG = 6, END_TAG = 7;

  public final Map<String, Buildable> builders;
  public final ArrayList<String> tagStack;
  public final ArrayList<Buildable> builderStack;

  private String input;
  private String context;

  private int state;
  private int nextState;
  private int index;
  private int nextIndex;
  private int tokenStart;
  private String prop_key;

  private int line;
  private int lineStart;

  private Buildable result;

  public SimpleXmlParser(Map<String, Buildable> builders) {
    this.builders = builders;
    this.tagStack = new ArrayList<String>();
    this.builderStack = new ArrayList<Buildable>();
  }

  public Object parse(String input, String context) {
    this.input = input;
    this.context = context;

    this.nextState = this.state = INITIAL;
    this.nextIndex = this.index = 0;
    this.tokenStart = 0;
    this.result = null;

    this.line = 1;
    this.lineStart = 0;

    tagStack.clear();
    builderStack.clear();

    while (index < input.length()) {
      char c0 = input.charAt(index);
      char c1 = (index + 1) < input.length() ? input.charAt(index + 1) : ' ';
      boolean commonState = (state >= INITIAL && state <= CONTENT);
      do {
        if (state == INITIAL && c0 == '<' && c1 == '?') { setState(DECLARATION); advance(2); break; }
        if (state == DECLARATION && c0 == '?' && c1 == '>') { setState(INITIAL); advance(2); break; }
        if (commonState && c0 == '<' && c1 == '/') { setState(END_TAG); advance("</" + top(tagStack) + ">"); break; }
        if (commonState && c0 == '<') { setState(TAG_NAME); advance(1); break;}
        if (state == TAG_NAME && (c0 == ' ' || c0 == '/' || c0 == '>')) { setState(TAG); break; }
        if (state == TAG && c0 == '/') { setState(END_TAG); advance("/>"); break; }
        if (state == TAG && c0 == '>') { setState(CONTENT); advance(1); break; }
        if (state == TAG && c0 != ' ' && c0 != '\n') { setState(PROP_KEY); break; }
        if (state == PROP_KEY && c0 == '=') { setState(PROP_VAL); advance("=\""); break; }
        if (state == PROP_KEY && (c0 == ' ' || c0 == '\n')) { advance("="); break; }
        if (state == PROP_VAL && c0 == '"') { setState(TAG); advance(1); break; }
        if (state == END_TAG) { setState(DEFAULT); break; }
        advance(1); break;
      } while (false);

      if (state != nextState) {
        if (state == TAG_NAME) handleStartTag(input.substring(tokenStart, index));
        if (state == PROP_KEY) prop_key = input.substring(tokenStart, index);
        if (state == PROP_VAL) handleProperty(prop_key, input.substring(tokenStart, index));
        if (state == CONTENT && nextState == END_TAG) handleContent(input.substring(tokenStart, index));
        if (nextState == END_TAG) handleEndTag();
        tokenStart = nextIndex;
      }
      if (c0 == '\n') {
        line += 1;
        lineStart = index;
      }
      this.state = this.nextState;
      this.index = this.nextIndex;
    }
    if (!tagStack.isEmpty() && !builderStack.isEmpty()) throwErrorHere("Unexpected EOF");
    if (result == null) throwErrorHere("No XML found");

    return result.build();
  }

  private void setState(int state) { this.nextState = state; }
  private void advance(int advance) { this.nextIndex = this.index + advance; }

  private void advance(String expected) {
    int len = expected.length();
    if (index + len <= input.length() && expected.equals(input.substring(index, index + len))) {
      this.nextIndex = index + len;
    } else {
      throwErrorHere("Expected: " + expected);
    }
  }

  private <T> T top(ArrayList<T> stack) {
    if (stack.isEmpty()) throwErrorHere("Element stack is empty");
    return stack.get(stack.size() - 1);
  }

  private void handleStartTag(String tagName) {
    // System.out.println("handleStartTag: " + tagName);
    Buildable builder = builders.get(tagName);
    if (result == null && builder == null) throwErrorHere("Root element is " + tagName + " which has no handler");
    if (builder != null) builder = builder.newBuilder();
    if (result == null) result = builder;
    pushStacks(tagName, builder);
  }

  private void handleEndTag() {
    // System.out.println("handleEndTag: " + top(tagStack));
    Buildable curr = top(builderStack);
    popStacks();
    Buildable parent = (curr == result) ? null : top(builderStack);
    if (parent != null && curr != null) parent.addChild(curr.build());
  }

  private void handleProperty(String key, String value) {
    // System.out.println("handleProperty: " + key + " = " + value);
    Buildable curr = top(builderStack);
    if (curr != null) curr.setProperty(key, value);
  }

  private void handleContent(String content) {
    // System.out.println("handleContent: " + content);
    Buildable curr = top(builderStack);
    if (curr != null) curr.setContent(content);
  }

  private void pushStacks(String tagName, Buildable builder) {
    tagStack.add(tagName);
    builderStack.add(builder);
  }

  private void popStacks() {
    if (tagStack.isEmpty() || builderStack.isEmpty()) throwErrorHere("Element stack is empty");
    tagStack.remove(tagStack.size() - 1);
    builderStack.remove(builderStack.size() - 1);
  }

  private void throwErrorHere(String s) {
    throw new RuntimeException("Error in " + context + " at line " + line + ", column " + (1 + index - lineStart) + ": " + s);
  }
}