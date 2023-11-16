import { CharacterSet } from "./characterSet";
import { Options } from '../interfaces';

describe('CharacterSet', () => {
  const options: Options = {
    // Add any necessary options for your tests
  };

  it('should create an instance of CharacterSet', () => {
    const characterSet = new CharacterSet(options);
    expect(characterSet).toBeInstanceOf(CharacterSet);
  });

  it('should concatenate characters based on selected options', () => {
    const characterSet = new CharacterSet(options);

    const selectedOptions = ['uppercase', 'numbers', 'specials'];
    const expectedCharacterSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+|~-=\\`{}[]:”;’<>?,.';

    const result = characterSet.getChars(selectedOptions);

    expect(result).toEqual(expectedCharacterSet);
  });

  it('should handle an empty array of selected options', () => {
    const characterSet = new CharacterSet(options);

    const selectedOptions: string[] = [];
    const result = characterSet.getChars(selectedOptions);

    expect(result).toEqual('');
  });

  it('should handle unknown options gracefully', () => {
    const characterSet = new CharacterSet(options);

    const selectedOptions = ['uppercase', 'unknownOption', 'numbers'];
    const expectedCharacterSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    const result = characterSet.getChars(selectedOptions);

    expect(result).toEqual(expectedCharacterSet);
  });
});
