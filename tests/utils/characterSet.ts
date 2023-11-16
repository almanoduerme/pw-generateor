import { Options } from "../interfaces";

/**
 * Represents a utility class for managing character sets.
 *
 * @class
 */
class CharacterSet {
  /**
   * @private
   * @readonly
   * @type {Record<string, string>}
   * @description A map of character sets based on different options.
   */
  private readonly charSets: Record<string, string>;

  /**
   * Creates an instance of CharacterSet.
   *
   * @constructor
   * @param {Options} options - The options for character sets.
   */
  constructor(options: Options) {
    this.charSets = {
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      specials: "!@#$%^&*()_+|~-=\\`{}[]:”;’<>?,.",
    };
  }

  /**
   * Gets a concatenated string of characters based on the selected options.
   *
   * @public
   * @param {string[]} selectedOptions - The selected options for character sets.
   * @returns {string} The concatenated string of characters.
   */
  public getChars(selectedOptions: string[]): string {
    return selectedOptions.map((option) => this.charSets[option]).join("");
  }
}

export { CharacterSet };
