import { Options } from "../interfaces";
import { CharacterSet } from "../utils/characterSet";
import { ConsecutiveChecker } from "../utils/consecutiveChecker";

/**
 * Class for generating passwords based on specified options.
 *
 * @class
 */
class GeneratePW {
  /**
   * @private
   * @readonly
   * @type {number}
   * @description The desired length of the generated password.
   */
  private readonly length: number;

  /**
   * @private
   * @type {string}
   * @description The concatenated character set based on selected options.
   */
  private chars: string;

  /**
   * @private
   * @type {number}
   * @description The length of the concatenated character set.
   */
  private charsLength: number;

  /**
   * Creates an instance of GeneratePW.
   *
   * @constructor
   * @param {number} length - The desired length of the generated password.
   * @param {Options} options - The options specifying the character sets.
   */
  constructor(length: number, options: Options) {
    this.length = length;
    const characterSet = new CharacterSet(options);
    this.chars = characterSet.getChars(Object.keys(options).filter((option) => options[option]));
    this.charsLength = this.chars.length;
  }

  /**
   * Gets a random character from the concatenated character set.
   *
   * @private
   * @returns {string} A randomly selected character.
   */
  private getRandomChar(): string {
    const randomIndex = Math.floor(Math.random() * this.charsLength);
    return this.chars[randomIndex];
  }

  /**
   * Generates a password based on the specified length, character set, and consecutive character constraints.
   *
   * @private
   * @throws {Error} Throws an error if no character option is selected.
   * @returns {string} The generated password.
   */
  private generate(): string {
    if (this.charsLength === 0) {
      throw new Error("You must select at least one option");
    }

    let password = "";

    while (password.length < this.length) {
      const char = this.getRandomChar();

      if (!ConsecutiveChecker.isConsecutive(char, password) && !ConsecutiveChecker.isKeyboardConsecutive(char, password, ["qwertyuiop", "asdfghjkl", "zxcvbnm"])) {
        password += char;
      }
    }

    return password;
  }

  /**
   * Generates a password based on the specified length and character set.
   *
   * @public
   * @returns {string} The generated password.
   */
  public generatePassword(): string {
    return this.generate();
  }
}

export { GeneratePW };