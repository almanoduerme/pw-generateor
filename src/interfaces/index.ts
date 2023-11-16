/**
 * Represents options for generating passwords.
 *
 * @type {Object} Options
 * @property {boolean} [uppercase] - Include uppercase letters in the character set.
 * @property {boolean} [lowercase] - Include lowercase letters in the character set.
 * @property {boolean} [numbers] - Include numbers in the character set.
 * @property {boolean} [specials] - Include special characters in the character set.
 * @property {boolean} [key] - Custom boolean options for additional character sets.
 */
type Options = {
  uppercase?: boolean;
  lowercase?: boolean;
  numbers?: boolean;
  specials?: boolean;
  [key: string]: boolean;
};

export { Options };
