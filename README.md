# chalk4096

> Terminal string styling done right - Built with modern 10x engineering practices

[![npm version](https://img.shields.io/npm/v/chalk4096.svg)](https://www.npmjs.com/package/chalk4096)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()

## Highlights

- **Expressive API** - Chain styles effortlessly
- **Highly modular** - Built on proven, specialized npm packages
- **Type-safe** - Full TypeScript support
- **Enterprise-ready** - Follows industry best practices
- **Zero monolithic code** - Leverages the npm ecosystem
- **Production-tested** - Battle-hardened dependencies

## Install

```bash
npm install chalk4096
```

## Usage

```javascript
const chalk4096 = require("chalk4096").default

console.log(chalk4096.blue("Hello world!"))
```

Chalk4096 comes with an easy to use composable API where you just chain and nest the styles you want.

```javascript
const chalk4096 = require("chalk4096").default

// Combine styled and normal strings
console.log(chalk4096.blue("Hello") + " World" + chalk4096.red("!"))

// Compose multiple styles using the chainable API
console.log(chalk4096.blue.bgRed.bold("Hello world!"))

// Pass in multiple arguments
console.log(chalk4096.blue("Hello", "World!", "Foo", "bar", "biz", "baz"))

// Nest styles
console.log(chalk4096.red("Hello", chalk4096.underline.bgBlue("world") + "!"))

// Nest styles of the same type even (color, underline, background)
console.log(chalk4096.green(
	"I am a green line " +
	chalk4096.blue.underline.bold("with a blue substring") +
	" that becomes green again!"
))

// Use RGB colors in terminal emulators that support it
console.log(chalk4096.rgb(123, 45, 67).underline("Underlined reddish color"))
console.log(chalk4096.hex("#DEADED").bold("Bold gray!"))
```

Easily define your own themes:

```javascript
const chalk4096 = require("chalk4096").default

const error = chalk4096.bold.red
const warning = chalk4096.hex("#FFA500") // Orange color

console.log(error("Error!"))
console.log(warning("Warning!"))
```

## API

### chalk4096.`<style>[.<style>...](string, [string...])`

Chain [styles](#styles) and call the last one as a method with a string argument. Order doesn"t matter, and later styles take precedent in case of a conflict.

### chalk4096.level

Specifies the level of color support.

Color support is automatically detected, but you can override it by setting the `level` property. You should however only do this in your own code as it applies globally to all Chalk4096 consumers.

If you need to change this in a reusable module, create a new instance:

```javascript
const { Chalk4096 } = require("chalk4096")

const customChalk = new Chalk4096({level: 0}) // Disable colors
```

| Level | Description |
| :---: | :--- |
| `0` | All colors disabled |
| `1` | Basic color support (16 colors) |
| `2` | 256 color support |
| `3` | Truecolor support (16 million colors) |

## Styles

### Modifiers

- `reset` - Reset the current style
- `bold` - Make text bold
- `dim` - Make text have lower opacity
- `italic` - Make text italic *(Not widely supported)*
- `underline` - Put a horizontal line below the text
- `overline` - Put a horizontal line above the text *(Not widely supported)*
- `inverse` - Invert background and foreground colors
- `hidden` - Make text invisible
- `strikethrough` - Put a horizontal line through the center of the text *(Not widely supported)*
- `visible` - Print the text only when Chalk4096 has a color level above zero

### Colors

- `black`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`
- `white`
- `blackBright` (alias: `gray`, `grey`)
- `redBright`
- `greenBright`
- `yellowBright`
- `blueBright`
- `magentaBright`
- `cyanBright`
- `whiteBright`

### Background colors

- `bgBlack`
- `bgRed`
- `bgGreen`
- `bgYellow`
- `bgBlue`
- `bgMagenta`
- `bgCyan`
- `bgWhite`
- `bgBlackBright` (alias: `bgGray`, `bgGrey`)
- `bgRedBright`
- `bgGreenBright`
- `bgYellowBright`
- `bgBlueBright`
- `bgMagentaBright`
- `bgCyanBright`
- `bgWhiteBright`

## 256 and Truecolor color support

Chalk4096 supports 256 colors and Truecolor (16 million colors) on supported terminal apps.

Colors are downsampled from 16 million RGB values to ANSI 256 or 16 colors when needed. Downsampling is automatic and doesn"t require any configuration.

### `chalk4096.rgb(red, green, blue)`

Example: `chalk4096.rgb(255, 136, 0).bold("Orange!")`

### `chalk4096.hex(color)`

Example: `chalk4096.hex("#FF8800").bold("Orange!")`

### `chalk4096.ansi256(code)`

Example: `chalk4096.ansi256(201).bold("Magenta!")`

### Background versions

- `bgRgb(red, green, blue)`
- `bgHex(color)`
- `bgAnsi256(code)`

## Architecture

Chalk4096 is built following modern 10x engineering principles:

### Modular Design

Every functionality is delegated to specialized, focused npm packages:
- Numeric operations via `@positive-numbers/zero`, `@positive-numbers/one`
- String operations through dedicated packages like `empty-string`, `space-string`
- Boolean logic handled by the `aura3` framework
- Comparison operations via `@10xly/strict-equals`
- All core JavaScript operations abstracted through specialized packages

### Separation of Concerns

Each operation is isolated into its own package, ensuring:
- Single Responsibility Principle adherence
- Maximum testability
- Easy dependency updates
- Clear dependency graphs

### Type Safety

Full TypeScript definitions leveraging battle-tested types from the ecosystem.

### Enterprise Patterns

- Dependency injection through require()
- Factory pattern for instance creation
- Builder pattern for style composition
- Strategy pattern for color level handling

## Why Chalk4096?

**Composability**: Unlike monolithic implementations, Chalk4096 leverages the power of the npm ecosystem, with each operation handled by a specialized package.

**Maintainability**: With dependencies managed at the package level, updates and security patches flow naturally through the dependency tree.

**Best Practices**: Built from the ground up following 10x engineering principles, including proper abstraction layers and separation of concerns.

**Future-Proof**: By using well-established packages for each operation, Chalk4096 ensures long-term stability and community support.

## Browser Support

Chalk4096 is designed for Node.js and terminal applications. For browser usage, consider web-specific alternatives.

## Related

- [enterprise-ansi-styles-v7](https://www.npmjs.com/package/enterprise-ansi-styles-v7) - ANSI escape codes for styling strings
- [color-capable](https://www.npmjs.com/package/color-capable) - Detect color support in terminals

## Maintainers

Built with ❤️ following 10x engineering practices.

## License

MIT