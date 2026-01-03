const assert = require("assert")
const chalk4096 = require("./chalk4096").default
const { Chalk4096 } = require("./chalk4096")

console.log("🧪 Running chalk4096 test suite...\n")

// Test 1: Basic color application
console.log("Test 1: Basic colors")
try {
  const red = chalk4096.red("Hello")
  assert(red.includes("Hello"), "Should contain text")
  assert(red.includes("\u001b["), "Should contain ANSI codes")
  console.log("✅ Basic colors work:", chalk4096.green("PASSED"))
} catch (e) {
  console.log("❌ Basic colors:", chalk4096.red("FAILED"), e.message)
}

// Test 2: Chaining styles
console.log("\nTest 2: Chaining styles")
try {
  const styled = chalk4096.blue.bold.underline("Chained")
  assert(styled.includes("Chained"), "Should contain text")
  assert(styled.split("\u001b[").length > 3, "Should have multiple ANSI codes")
  console.log("✅ Chaining works:", chalk4096.green("PASSED"))
} catch (e) {
  console.log("❌ Chaining:", chalk4096.red("FAILED"), e.message)
}

// Test 3: Multiple arguments
console.log("\nTest 3: Multiple arguments")
try {
  const result = chalk4096.yellow("Hello", "World", "Test")
  assert(result.includes("Hello World Test"), "Should join with spaces")
  console.log("✅ Multiple args work:", chalk4096.green("PASSED"))
} catch (e) {
  console.log("❌ Multiple args:", chalk4096.red("FAILED"), e.message)
}

// Test 4: RGB colors
console.log("\nTest 4: RGB colors")
try {
  const rgb = chalk4096.rgb(255, 0, 0)("RGB Red")
  assert(rgb.includes("RGB Red"), "Should contain text")
  console.log("✅ RGB works:", chalk4096.green("PASSED"))
} catch (e) {
  console.log("❌ RGB:", chalk4096.red("FAILED"), e.message)
}

// Test 5: Hex colors
console.log("\nTest 5: Hex colors")
try {
  const hex = chalk4096.hex("#FF5733")("Hex Color")
  assert(hex.includes("Hex Color"), "Should contain text")
  console.log("✅ Hex works:", chalk4096.green("PASSED"))
} catch (e) {
  console.log("❌ Hex:", chalk4096.red("FAILED"), e.message)
}

// Test 6: Background colors
console.log("\nTest 6: Background colors")
try {
  const bg = chalk4096.bgBlue.white("White on Blue")
  assert(bg.includes("White on Blue"), "Should contain text")
  console.log("✅ Background colors work:", chalk4096.green("PASSED"))
} catch (e) {
  console.log("❌ Background colors:", chalk4096.red("FAILED"), e.message)
}

// Test 7: Constructor
console.log("\nTest 7: Chalk4096 constructor")
try {
  const customChalk = new Chalk4096({ level: 3 })
  const result = customChalk.magenta("Constructor test")
  assert(result.includes("Constructor test"), "Should work with constructor")
  console.log("✅ Constructor works:", chalk4096.green("PASSED"))
} catch (e) {
  console.log("❌ Constructor:", chalk4096.red("FAILED"), e.message)
}

// Test 8: Visible style
console.log("\nTest 8: Visible style")
try {
  const visible = chalk4096.visible("Should be visible")
  assert.strictEqual(
    visible,
    "Should be visible",
    "Visible should not add codes"
  )
  console.log("✅ Visible works:", chalk4096.green("PASSED"))
} catch (e) {
  console.log("❌ Visible:", chalk4096.red("FAILED"), e.message)
}

// Test 9: Level 0 (no colors)
console.log("\nTest 9: Level 0 (disabled colors)")
try {
  const noColor = new Chalk4096({ level: 0 })
  const result = noColor.red.bold("No colors")
  assert.strictEqual(result, "No colors", "Should return plain text at level 0")
  console.log("✅ Level 0 works:", chalk4096.green("PASSED"))
} catch (e) {
  console.log("❌ Level 0:", chalk4096.red("FAILED"), e.message)
}

// Test 10: Modifiers
console.log("\nTest 10: Text modifiers")
try {
  const bold = chalk4096.bold("Bold")
  const italic = chalk4096.italic("Italic")
  const underline = chalk4096.underline("Underline")
  assert(bold.includes("Bold"), "Bold should work")
  assert(italic.includes("Italic"), "Italic should work")
  assert(underline.includes("Underline"), "Underline should work")
  console.log("✅ Modifiers work:", chalk4096.green("PASSED"))
} catch (e) {
  console.log("❌ Modifiers:", chalk4096.red("FAILED"), e.message)
}

// Test 11: Newline handling
console.log("\nTest 11: Newline handling")
try {
  const multiline = chalk4096.red("Line 1\nLine 2\nLine 3")
  assert(multiline.includes("Line 1"), "Should contain first line")
  assert(multiline.includes("Line 2"), "Should contain second line")
  assert(multiline.includes("Line 3"), "Should contain third line")
  console.log("✅ Newlines work:", chalk4096.green("PASSED"))
} catch (e) {
  console.log("❌ Newlines:", chalk4096.red("FAILED"), e.message)
}

// Test 12: Empty string
console.log("\nTest 12: Empty string handling")
try {
  const empty = chalk4096.red("")
  assert.strictEqual(empty, "", "Empty string should return empty")
  console.log("✅ Empty strings work:", chalk4096.green("PASSED"))
} catch (e) {
  console.log("❌ Empty strings:", chalk4096.red("FAILED"), e.message)
}

// Test 13: Nested styles
console.log("\nTest 13: Nested styles")
try {
  const nested = chalk4096.red("Red " + chalk4096.blue("Blue") + " Red again")
  assert(nested.includes("Red"), "Should contain outer color")
  assert(nested.includes("Blue"), "Should contain inner color")
  console.log("✅ Nested styles work:", chalk4096.green("PASSED"))
} catch (e) {
  console.log("❌ Nested styles:", chalk4096.red("FAILED"), e.message)
}

// Test 14: ansi256 colors
console.log("\nTest 14: ANSI256 colors")
try {
  const ansi = chalk4096.ansi256(201)("ANSI256 color")
  assert(ansi.includes("ANSI256 color"), "Should contain text")
  console.log("✅ ANSI256 works:", chalk4096.green("PASSED"))
} catch (e) {
  console.log("❌ ANSI256:", chalk4096.red("FAILED"), e.message)
}

// Test 15: Background RGB
console.log("\nTest 15: Background RGB")
try {
  const bgRgb = chalk4096.bgRgb(100, 200, 50)("Green background")
  assert(bgRgb.includes("Green background"), "Should contain text")
  console.log("✅ Background RGB works:", chalk4096.green("PASSED"))
} catch (e) {
  console.log("❌ Background RGB:", chalk4096.red("FAILED"), e.message)
}

console.log("\n" + "=".repeat(50))
console.log(chalk4096.cyan.bold("🎉 Test suite completed! 🎉"))
console.log("=".repeat(50))
