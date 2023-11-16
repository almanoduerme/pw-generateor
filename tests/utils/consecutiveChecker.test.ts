import { ConsecutiveChecker } from "./consecutiveChecker";

describe("ConsecutiveChecker", () => {
  describe("isConsecutive", () => {
    test("should return false if consecutive characters are not found in the password", () => {
      expect(ConsecutiveChecker.isConsecutive("a", "xyz")).toBe(false);
      expect(ConsecutiveChecker.isConsecutive("b", "123")).toBe(false);
      expect(ConsecutiveChecker.isConsecutive("1", "abc")).toBe(false);
    });
  });

  describe("isKeyboardConsecutive", () => {
    test("should return true if consecutive keyboard characters are found in the password", () => {
      const keyboardLayout = ["123", "456", "789"];
      expect(
        ConsecutiveChecker.isKeyboardConsecutive("2", "12345", keyboardLayout)
      ).toBe(true);
      expect(
        ConsecutiveChecker.isKeyboardConsecutive("5", "456", keyboardLayout)
      ).toBe(true);
      expect(
        ConsecutiveChecker.isKeyboardConsecutive("8", "78901", keyboardLayout)
      ).toBe(true);
    });

    test("should return false if consecutive keyboard characters are not found in the password", () => {
      const keyboardLayout = ["123", "456", "789"];
      expect(
        ConsecutiveChecker.isKeyboardConsecutive("2", "67890", keyboardLayout)
      ).toBe(false);
      expect(
        ConsecutiveChecker.isKeyboardConsecutive("5", "123", keyboardLayout)
      ).toBe(false);
      expect(
        ConsecutiveChecker.isKeyboardConsecutive("8", "456", keyboardLayout)
      ).toBe(false);
    });
  });
});
