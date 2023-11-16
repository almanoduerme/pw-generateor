# PW Generator

## Description

A straightforward password generation library capable of creating passwords based on specified length and character sets.

## Installation

```typescript
pnpm install pw-generator
```

## Usage

```typescript
import { GeneratePW } from 'pw-generator';

const options = {
  specials: false,
  uppercase: false,
  lowercase: true,
  numbers: true,
};

const pw = new GeneratePW(32, options);

console.log(pw.generatePassword()) // 2a1zyb253h042v6hjnrv9utkv1dkgeon
```

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `specials` | `boolean` | `false` | If `true` the password will contain special characters |
| `uppercase` | `boolean` | `false` | If `true` the password will contain uppercase characters |
| `lowercase` | `boolean` | `false` | If `true` the password will contain lowercase characters |
| `numbers` | `boolean` | `false` | If `true` the password will contain numbers |

## Aclaration

The maximum number of characters allowed is 32. Beyond this limit, an effective result is not guaranteed.
This library is not intended to be used in production.

## License

MIT License - [LICENSE](LICENSE) for full text © [Nahuel Gomez](https://www.gomeznahuel.com.ar) 2023.

## Author

- [Nahuel Gomez](https://www.gomeznahuel.com.ar)
