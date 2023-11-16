import { GeneratePW } from "./generate-pw";
import { Options } from "../interfaces";

// Mocking the CharacterSet class for testing purposes
jest.mock("../utils/characterSet", () => {
  return {
    CharacterSet: jest.fn().mockImplementation(() => {
      return {
        getChars: jest
          .fn()
          .mockReturnValue(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+|~-=\\`{}[]:”;’<>?,."
          ),
      };
    }),
  };
});

// Mocking the ConsecutiveChecker class for testing purposes
jest.mock("../utils/consecutiveChecker", () => {
  return {
    ConsecutiveChecker: {
      isConsecutive: jest.fn(),
      isKeyboardConsecutive: jest.fn(),
    },
  };
});

describe("GeneratePW", () => {
  it("should generate a password based on specified options", () => {
    const options: Options = {
      uppercase: true,
      lowercase: false,
      numbers: true,
      specials: true,
    };
    const length = 12;

    const generatePW = new GeneratePW(length, options);
    const generatedPassword = generatePW.generatePassword();

    expect(generatedPassword).toHaveLength(length);
  });
});
