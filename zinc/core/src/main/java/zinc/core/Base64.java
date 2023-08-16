package zinc.core;

import java.nio.ByteBuffer;

public final class Base64 {

  // Could use a builtin Base64 decoder, but this one works for both Java and HTML.

  private Base64() {}

  public static ByteBuffer decode(String input) {
    int bufferedBits = 0;
    int bufferedBitCount = 0;

    ByteBuffer byteBuffer = ByteBuffer.allocate(input.length() * 3 / 4);

    for (int index = 0; index < input.length(); index++) {
      char c = input.charAt(index);
      if (c == ' ' || c == '\t' || c == '\n') continue;
      if (c == '=') {
        assert bufferedBits == 0;
        bufferedBitCount = 0;
        continue;
      }
      int decodedBits = decodeChar(c);
      int decodedBitCount = 6;

      if (bufferedBitCount + decodedBitCount < 8) {
        bufferedBits = (bufferedBits << decodedBitCount) | decodedBits;
        bufferedBitCount += decodedBitCount;
      } else {
        int addToBufferBitCount = 8 - bufferedBitCount;
        int spareDecodedBitCount = decodedBitCount - addToBufferBitCount;
        int addToBufferBits = decodedBits >> spareDecodedBitCount;
        bufferedBits = (bufferedBits << addToBufferBitCount) | addToBufferBits;
        byteBuffer.put((byte) bufferedBits);
        bufferedBits = decodedBits ^ (addToBufferBits << spareDecodedBitCount);
        bufferedBitCount = spareDecodedBitCount;
      }
    }

    byteBuffer.limit(byteBuffer.position());
    byteBuffer.rewind();
    return byteBuffer;
  }

  public static int decodeChar(char c) {
    if (c >= 'A' && c <= 'Z') return (c - 'A');
    if (c >= 'a' && c <= 'z') return 26 + (c - 'a');
    if (c >= '0' && c <= '9') return 52 + (c - '0');
    if (c == '+') return 62;
    if (c == '/') return 63;
    throw new RuntimeException("Not a valid Base64 character: " + c);
  }
}