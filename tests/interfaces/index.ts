/**
 * Options for password generation.
 *
 * @interface Options
 * @property {boolean} [uppercase] - Include uppercase letters in the character set. Default is `true`.
 * @property {boolean} [lowercase] - Include lowercase letters in the character set. Default is `true`.
 * @property {boolean} [numbers] - Include numbers in the character set. Default is `true`.
 * @property {boolean} [specials] - Include special characters in the character set. Default is `true`.
 * @property {boolean} [key] - Include keyboard-specific characters (e.g., qwertyuiop) in the character set. Default is `true`.
 */
interface Options {
  uppercase?: boolean;
  lowercase?: boolean;
  numbers?: boolean;
  specials?: boolean;
  key?: boolean;
}

export { Options };
