/**
 * Utility class for checking consecutive characters and keyboard consecutive characters.
 *
 * @class
 */
class ConsecutiveChecker {
  /**
   * Checks if a character appears consecutively in a given password.
   *
   * @static
   * @public
   * @param {string} char - The character to check for consecutiveness.
   * @param {string} password - The password to check against.
   * @returns {boolean} True if the character appears consecutively, otherwise false.
   */
  public static isConsecutive(char: string, password: string): boolean {
    for (let i = 0; i < password.length - 1; i++) {
      if (password[i] === char && password[i + 1] === char) {
        return true;
      }
    }
    return false;
  }

  /**
   * Checks if a character appears consecutively with adjacent characters on a keyboard layout.
   *
   * @static
   * @public
   * @param {string} char - The character to check for keyboard consecutiveness.
   * @param {string} password - The password to check against.
   * @param {string[]} keyboard - The array representing the keyboard layout.
   * @returns {boolean} True if the character appears consecutively on the keyboard, otherwise false.
   */
  public static isKeyboardConsecutive(char: string, password: string, keyboard: string[]): boolean {
    let index: number;

    for (const row of keyboard) {
      index = row.indexOf(char);
      if (
        index !== -1 &&
        ((index > 0 && password.includes(row[index - 1] + char)) ||
          (index < row.length - 1 && password.includes(char + row[index + 1])))
      ) {
        return true;
      }
    }

    return false;
  }
}

export { ConsecutiveChecker };