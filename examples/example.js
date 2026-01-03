// Colorful examples using chalk4096
const chalk4096 = require("../chalk4096").default
const { Chalk4096 } = require("../chalk4096")

console.log(chalk4096.bold.underline.cyan("\n🎨 chalk4096 Examples 🎨\n"))

// Example 1: Basic colors
console.log(chalk4096.yellow("=== Basic Colors ==="))
console.log(chalk4096.red("This text is red"))
console.log(chalk4096.green("This text is green"))
console.log(chalk4096.blue("This text is blue"))
console.log(chalk4096.magenta("This text is magenta"))
console.log(chalk4096.cyan("This text is cyan"))
console.log(chalk4096.white("This text is white"))

// Example 2: Text modifiers
console.log("\n" + chalk4096.yellow("=== Text Modifiers ==="))
console.log(chalk4096.bold("Bold text"))
console.log(chalk4096.italic("Italic text"))
console.log(chalk4096.underline("Underlined text"))
console.log(chalk4096.strikethrough("Strikethrough text"))
console.log(chalk4096.dim("Dimmed text"))

// Example 3: Chaining styles
console.log("\n" + chalk4096.yellow("=== Chained Styles ==="))
console.log(chalk4096.red.bold("Bold red text"))
console.log(chalk4096.green.italic.underline("Green italic underlined text"))
console.log(chalk4096.blue.bold.bgYellow("Blue bold text on yellow background"))
console.log(chalk4096.magenta.underline.bold.italic("All the styles combined!"))

// Example 4: Background colors
console.log("\n" + chalk4096.yellow("=== Background Colors ==="))
console.log(chalk4096.bgRed.white("White text on red background"))
console.log(chalk4096.bgGreen.black("Black text on green background"))
console.log(chalk4096.bgBlue.yellow("Yellow text on blue background"))
console.log(chalk4096.bgMagenta.white("White text on magenta background"))
console.log(chalk4096.bgCyan.black("Black text on cyan background"))

// Example 5: RGB colors (true color)
console.log("\n" + chalk4096.yellow("=== RGB Colors ==="))
console.log(chalk4096.rgb(255, 136, 0)("Orange text using RGB"))
console.log(chalk4096.rgb(138, 43, 226)("Blue violet using RGB"))
console.log(chalk4096.rgb(255, 20, 147)("Deep pink using RGB"))
console.log(chalk4096.bgRgb(75, 0, 130).white("White on indigo background"))

// Example 6: Hex colors
console.log("\n" + chalk4096.yellow("=== Hex Colors ==="))
console.log(chalk4096.hex("#FF6347")("Tomato color using hex"))
console.log(chalk4096.hex("#32CD32")("Lime green using hex"))
console.log(chalk4096.hex("#FF1493")("Deep pink using hex"))
console.log(chalk4096.bgHex("#4B0082").hex("#FFD700")("Gold on indigo"))

// Example 7: ANSI256 colors
console.log("\n" + chalk4096.yellow("=== ANSI256 Colors ==="))
console.log(chalk4096.ansi256(201)("Bright magenta (256 color)"))
console.log(chalk4096.ansi256(141)("Light purple (256 color)"))
console.log(chalk4096.bgAnsi256(57).ansi256(231)("White on dark blue"))

// Example 8: Rainbow text
console.log("\n" + chalk4096.yellow("=== Rainbow Effect ==="))
const rainbow = [
  chalk4096.red("R"),
  chalk4096.hex("#FF7F00")("A"),
  chalk4096.yellow("I"),
  chalk4096.green("N"),
  chalk4096.blue("B"),
  chalk4096.hex("#4B0082")("O"),
  chalk4096.hex("#9400D3")("W"),
]
console.log(rainbow.join("") + " " + chalk4096.bold("Text!"))

// Example 9: Progress bar
console.log("\n" + chalk4096.yellow("=== Progress Bar ==="))
const completed = 7
const total = 10
const bar = "█".repeat(completed) + "░".repeat(total - completed)
console.log(
  chalk4096.cyan("[") +
  chalk4096.green(bar) +
  chalk4096.cyan("]") +
  " " +
  chalk4096.bold(`${completed}/${total}`)
)

// Example 10: Styled logging
console.log("\n" + chalk4096.yellow("=== Styled Logging ==="))
console.log(chalk4096.green.bold("✓") + " " + chalk4096.green("Success: Operation completed"))
console.log(chalk4096.yellow.bold("⚠") + " " + chalk4096.yellow("Warning: Deprecated function"))
console.log(chalk4096.red.bold("✗") + " " + chalk4096.red("Error: Something went wrong"))
console.log(chalk4096.blue.bold("ℹ") + " " + chalk4096.blue("Info: Processing data..."))

// Example 11: Table-like output
console.log("\n" + chalk4096.yellow("=== Styled Table ==="))
console.log(
  chalk4096.bold.cyan("Name".padEnd(15)) +
  chalk4096.bold.cyan("Status".padEnd(12)) +
  chalk4096.bold.cyan("Score")
)
console.log("-".repeat(40))
console.log(
  chalk4096.white("Alice".padEnd(15)) +
  chalk4096.green("Active".padEnd(12)) +
  chalk4096.yellow("95")
)
console.log(
  chalk4096.white("Bob".padEnd(15)) +
  chalk4096.red("Inactive".padEnd(12)) +
  chalk4096.yellow("78")
)
console.log(
  chalk4096.white("Charlie".padEnd(15)) +
  chalk4096.green("Active".padEnd(12)) +
  chalk4096.yellow("88")
)

// Example 12: ASCII art banner
console.log("\n" + chalk4096.yellow("=== ASCII Art Banner ==="))
console.log(chalk4096.cyan.bold(`
   _____ _           _ _    _  _    ___   ___   ____ 
  / ____| |         | | |  | || |  / _ \\ / _ \\ / ___|
 | |    | |__   __ _| | | _| || |_| | | | (_) | |  _ 
 | |    | '_ \\ / _\` | | |/ /__   _| | | |\\__, | | |_ |
 | |____| | | | (_| | |   <   | | | |_| |  / /| |__| |
  \\_____|_| |_|\\__,_|_|_|\\_\\  |_|  \\___/  /_/  \\_____|
`))

// Example 13: Custom chalk instance
console.log("\n" + chalk4096.yellow("=== Custom Chalk Instance ==="))
const customChalk = new Chalk4096({ level: 3 })
console.log(customChalk.hex("#FF69B4")("Custom instance with level 3 support"))

// Example 14: Multiline colored text
console.log("\n" + chalk4096.yellow("=== Multiline Text ==="))
console.log(chalk4096.green(`
This is line 1
This is line 2
This is line 3
All lines are green!
`))

// Example 15: Box drawing
console.log(chalk4096.yellow("=== Colored Box ==="))
const boxWidth = 40
console.log(chalk4096.cyan("┌" + "─".repeat(boxWidth - 2) + "┐"))
console.log(chalk4096.cyan("│") + chalk4096.bold.magenta(" chalk4096: Enterprise Edition ".padEnd(boxWidth - 2)) + chalk4096.cyan("│"))
console.log(chalk4096.cyan("│") + " Now with 4096x dependencies! ".padEnd(boxWidth - 2) + chalk4096.cyan("│"))
console.log(chalk4096.cyan("└" + "─".repeat(boxWidth - 2) + "┘"))

console.log("\n" + 
  chalk4096.red("✨") + " " +
  chalk4096.yellow("End") + " " +
  chalk4096.green("of") + " " +
  chalk4096.blue("examples!") + " " +
  chalk4096.magenta("✨") + "\n"
)