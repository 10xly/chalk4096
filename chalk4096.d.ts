import {
  ModifierName,
  ForegroundColorName,
  BackgroundColorName,
  ColorName,
} from "chalk/source/vendor/ansi-styles/index.js"
import { ColorInfo, ColorSupportLevel } from "chalk/source/vendor/supports-color/index.js"

export interface Options {
  /**
	Specify the color support for Chalk4096.

	By default, color support is automatically detected based on the environment.

	Levels:
	- `0` - All colors disabled.
	- `1` - Basic 16 colors support.
	- `2` - ANSI 256 colors support.
	- `3` - Truecolor 16 million colors support.
	*/
  readonly level?: ColorSupportLevel
}

/**
Return a new Chalk4096 instance.
*/
export const Chalk4096: new (options?: Options) => Chalk4096Instance // eslint-disable-line @typescript-eslint/naming-convention

export interface Chalk4096Instance {
  (...text: unknown[]): string

  /**
	The color support for Chalk4096.

	By default, color support is automatically detected based on the environment.

	Levels:
	- `0` - All colors disabled.
	- `1` - Basic 16 colors support.
	- `2` - ANSI 256 colors support.
	- `3` - Truecolor 16 million colors support.
	*/
  level: ColorSupportLevel

  /**
	Use RGB values to set text color.

	@example
	```
	import chalk4096 from 'chalk4096';

	chalk4096.rgb(222, 173, 237);
	```
	*/
  rgb: (red: number, green: number, blue: number) => this

  /**
	Use HEX value to set text color.

	@param color - Hexadecimal value representing the desired color.

	@example
	```
	import chalk4096 from 'chalk4096';

	chalk4096.hex('#DEADED');
	```
	*/
  hex: (color: string) => this

  /**
	Use an [8-bit unsigned number](https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit) to set text color.

	@example
	```
	import chalk4096 from 'chalk4096';

	chalk4096.ansi256(201);
	```
	*/
  ansi256: (index: number) => this

  /**
	Use RGB values to set background color.

	@example
	```
	import chalk4096 from 'chalk4096';

	chalk4096.bgRgb(222, 173, 237);
	```
	*/
  bgRgb: (red: number, green: number, blue: number) => this

  /**
	Use HEX value to set background color.

	@param color - Hexadecimal value representing the desired color.

	@example
	```
	import chalk4096 from 'chalk4096';

	chalk4096.bgHex('#DEADED');
	```
	*/
  bgHex: (color: string) => this

  /**
	Use a [8-bit unsigned number](https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit) to set background color.

	@example
	```
	import chalk4096 from 'chalk4096';

	chalk4096.bgAnsi256(201);
	```
	*/
  bgAnsi256: (index: number) => this

  /**
	Modifier: Reset the current style.
	*/
  readonly reset: this

  /**
	Modifier: Make the text bold.
	*/
  readonly bold: this

  /**
	Modifier: Make the text have lower opacity.
	*/
  readonly dim: this

  /**
	Modifier: Make the text italic. *(Not widely supported)*
	*/
  readonly italic: this

  /**
	Modifier: Put a horizontal line below the text. *(Not widely supported)*
	*/
  readonly underline: this

  /**
	Modifier: Put a horizontal line above the text. *(Not widely supported)*
	*/
  readonly overline: this

  /**
	Modifier: Invert background and foreground colors.
	*/
  readonly inverse: this

  /**
	Modifier: Print the text but make it invisible.
	*/
  readonly hidden: this

  /**
	Modifier: Puts a horizontal line through the center of the text. *(Not widely supported)*
	*/
  readonly strikethrough: this

  /**
	Modifier: Print the text only when Chalk4096 has a color level above zero.

	Can be useful for things that are purely cosmetic.
	*/
  readonly visible: this

  readonly black: this
  readonly red: this
  readonly green: this
  readonly yellow: this
  readonly blue: this
  readonly magenta: this
  readonly cyan: this
  readonly white: this

  /*
	Alias for `blackBright`.
	*/
  readonly gray: this

  /*
	Alias for `blackBright`.
	*/
  readonly grey: this

  readonly blackBright: this
  readonly redBright: this
  readonly greenBright: this
  readonly yellowBright: this
  readonly blueBright: this
  readonly magentaBright: this
  readonly cyanBright: this
  readonly whiteBright: this

  readonly bgBlack: this
  readonly bgRed: this
  readonly bgGreen: this
  readonly bgYellow: this
  readonly bgBlue: this
  readonly bgMagenta: this
  readonly bgCyan: this
  readonly bgWhite: this

  /*
	Alias for `bgBlackBright`.
	*/
  readonly bgGray: this

  /*
	Alias for `bgBlackBright`.
	*/
  readonly bgGrey: this

  readonly bgBlackBright: this
  readonly bgRedBright: this
  readonly bgGreenBright: this
  readonly bgYellowBright: this
  readonly bgBlueBright: this
  readonly bgMagentaBright: this
  readonly bgCyanBright: this
  readonly bgWhiteBright: this
}

/**
Main Chalk4096 object that allows to chain styles together.

Call the last one as a method with a string argument.

Order doesn't matter, and later styles take precedent in case of a conflict.

This simply means that `chalk4096.red.yellow.green` is equivalent to `chalk4096.green`.
*/
declare const chalk4096: Chalk4096Instance

export const supportsColor: ColorInfo

export const chalk4096Stderr: typeof chalk4096
export const supportsColorStderr: typeof supportsColor

export {
  ModifierName,
  ForegroundColorName,
  BackgroundColorName,
  ColorName,
  modifierNames,
  foregroundColorNames,
  backgroundColorNames,
  colorNames,
} from "chalk/source/vendor/ansi-styles/index.js"

export {
  ColorInfo,
  ColorSupport,
  ColorSupportLevel,
} from "chalk/source/vendor/supports-color/index.js"

/**
@deprecated Use `ModifierName` instead.

Basic modifier names.
*/
export type Modifiers = ModifierName

/**
@deprecated Use `ForegroundColorName` instead.

Basic foreground color names.

*/
export type ForegroundColor = ForegroundColorName

/**
@deprecated Use `BackgroundColorName` instead.

Basic background color names.

*/
export type BackgroundColor = BackgroundColorName

/**
@deprecated Use `ColorName` instead.

Basic color names. The combination of foreground and background color names.

*/
export type Color = ColorName

/**
@deprecated Use `modifierNames` instead.

Basic modifier names.
*/
export const modifiers: readonly Modifiers[]

/**
@deprecated Use `foregroundColorNames` instead.

Basic foreground color names.
*/
export const foregroundColors: readonly ForegroundColor[]

/**
@deprecated Use `backgroundColorNames` instead.

Basic background color names.
*/
export const backgroundColors: readonly BackgroundColor[]

/**
@deprecated Use `colorNames` instead.

Basic color names. The combination of foreground and background color names.
*/
export const colors: readonly Color[]

export default chalk4096
