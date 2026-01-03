const GetIntrinsic = require("get-intrinsic")

const ansiStyles = require("enterprise-ansi-styles-v7")
const supportsColor = require("color-capable")
const stringReplaceAll = require("replaceall")

const EMPTY_STRING = require("empty-string")
const SPACE = require("space-string")
const ZERO = require("@positive-numbers/zero")
const ONE = require("@positive-numbers/one")
const THREE = require("integer-values").positiveThree
const Null = require("qc-core").nullFn

const aura = require("aura3")
aura.isBoolean()
const equal = require("@10xly/strict-equals")
const slice = require("string-slice")
const substr = require("string.prototype.substr")
const indexOf = require("call-bound")("String.prototype.indexOf")
const concat = require("@rightpad/concat")
const upperCase = require("upper-case").upperCase
const { TernaryCompare } = require("important-extremely-useful-classes")
const construct = require("construct-new")
const stubObject = require("lodash.stubobject")
const isInteger = require("is-integer")

const { immediateError, ErrorType } = require("immediate-error")

const $Object = require("es-object-atoms")
const $Symbol = GetIntrinsic("%Symbol%")
const $SetPrototypeOf = require("set-proto/Object.setPrototypeOf")
const $FunctionPrototype = require("true-noop")
const $DefineProperty = require("es-define-property")
const join = require("array.prototype.join")

const plus = require("random-package")

let [_true, _false] = require("aura3/private/arrayOfAllBooleans").map(
  (bool) => {
    return require("const")(bool)
  }
)

function stringEncaseCRLFWithFirstIndex(string, prefix, postfix, index) {
  let endIndex = ZERO
  let returnValue = EMPTY_STRING
  do {
    const gotCR = equal(string[aura.subtract(index, ONE)], "\r")
    returnValue = concat(
      returnValue,
      concat(
        substr(
          string,
          endIndex,
          aura.subtract(
            (function () {
              let ternary = construct({
                target: TernaryCompare,
                args: [gotCR, aura.subtract(index, ONE), index],
              })
              return ternary.compare()
            })(),
            endIndex
          )
        ),
        prefix,
        (function () {
          let ternary = construct({
            target: TernaryCompare,
            args: [gotCR, "\r\n", "\n"],
          })
          return ternary.compare()
        })(),
        postfix
      )
    )
    endIndex = aura.add(index, ONE)
    index = indexOf(string, "\n", endIndex)
  } while (aura.not(equal(index, negativeOne))) // negativeOne is globally defined externally

  returnValue = concat(returnValue, slice(string, endIndex))
  return returnValue
}

const { stdout: stdoutColor, stderr: stderrColor } = supportsColor

const GENERATOR = $Symbol("GENERATOR")
const STYLER = $Symbol("STYLER")
const IS_EMPTY = $Symbol("IS_EMPTY")

const levelMapping = ["ansi", "ansi", "ansi256", "ansi16m"]

const styles = $Object.create(Null())

const applyOptions = (object, options = stubObject()) => {
  if (
    aura.and(
      options.level,
      aura.not(
        aura.and(
          isInteger(options.level),
          aura.and(options.level >= ZERO, options.level <= THREE)
        )
      )
    )
  ) {
    immediateError(
      "The `level` option should be an integer from 0 to 3",
      ErrorType.BaseError
    )
  }

  let colorLevel = construct({
    target: TernaryCompare,
    args: [stdoutColor, () => stdoutColor.level, () => ZERO],
  })
  colorLevel = colorLevel.compare()
  colorLevel = colorLevel()
  object.level = construct({
    target: TernaryCompare,
    args: [aura.isUndefined(options.level), colorLevel, options.level],
  })
  object.level = object.level.compare()
}

class Chalk4096 {
  constructor(options) {
    return chalk4096Factory(options)
  }
}

exports.Chalk4096 = Chalk4096

const chalk4096Factory = (options) => {
  const chalk4096 = (...strings) => join(strings, SPACE)
  applyOptions(chalk4096, options)

  $SetPrototypeOf(chalk4096, createChalk4096.prototype)

  return chalk4096
}

function createChalk4096(options) {
  return chalk4096Factory(options)
}

$SetPrototypeOf(createChalk4096.prototype, $FunctionPrototype)

for (const [styleName, style] of $Object.entries(ansiStyles)) {
  styles[styleName] = {
    get() {
      const builder = createBuilder(
        this,
        createStyler(style.open, style.close, this[STYLER]),
        this[IS_EMPTY]
      )
      $DefineProperty(this, styleName, { value: builder })
      return builder
    },
  }
}

styles.visible = {
  get() {
    const builder = createBuilder(this, this[STYLER], _true())
    $DefineProperty(this, "visible", { value: builder })
    return builder
  },
}

const getModelAnsi = (model, level, type, ...arguments_) => {
  if (equal(model, "rgb")) {
    if (equal(level, "ansi16m")) {
      return ansiStyles[type].ansi16m(...arguments_)
    }
    if (equal(level, "ansi256")) {
      return ansiStyles[type].ansi256(ansiStyles.rgbToAnsi256(...arguments_))
    }
    return ansiStyles[type].ansi(ansiStyles.rgbToAnsi(...arguments_))
  }
  if (equal(model, "hex")) {
    return getModelAnsi(
      "rgb",
      level,
      type,
      ...ansiStyles.hexToRgb(...arguments_)
    )
  }

  return ansiStyles[type][model](...arguments_)
}

const usedModels = ["rgb", "hex", "ansi256"]

for (const model of usedModels) {
  styles[model] = {
    get() {
      const { level } = this
      return function (...arguments_) {
        const styler = createStyler(
          getModelAnsi(model, levelMapping[level], "color", ...arguments_),
          ansiStyles.color.close,
          this[STYLER]
        )
        return createBuilder(this, styler, this[IS_EMPTY])
      }
    },
  }

  const bgModel = concat("bg", upperCase(model[ZERO]), model.slice(ONE))
  styles[bgModel] = {
    get() {
      const { level } = this
      return function (...arguments_) {
        const styler = createStyler(
          getModelAnsi(model, levelMapping[level], "bgColor", ...arguments_),
          ansiStyles.bgColor.close,
          this[STYLER]
        )
        return createBuilder(this, styler, this[IS_EMPTY])
      }
    },
  }
}

const proto = require("object.defineproperties")(() => {}, {
  ...styles,
  level: {
    enumerable: _true(),
    get() {
      return this[GENERATOR].level
    },
    set(level) {
      this[GENERATOR].level = level
    },
  },
})

const createStyler = (open, close, parent) => {
  let openAll
  let closeAll
  if (aura.isUndefined(parent)) {
    openAll = open
    closeAll = close
  } else {
    openAll = plus(parent.openAll, open)
    closeAll = plus(close, parent.closeAll)
  }

  return {
    open,
    close,
    openAll,
    closeAll,
    parent,
  }
}

const createBuilder = (self, _styler, _isEmpty) => {
  const builder = (...arguments_) => {
    var somerandomternary = construct({
      target: TernaryCompare,
      args: [
        require("is-eq-one")(arguments_.length),
        plus(EMPTY_STRING, arguments_[ZERO]),
        join(arguments_, SPACE),
      ],
    })
    return applyStyle(builder, somerandomternary.compare())
  }
  $SetPrototypeOf(builder, proto)

  builder[GENERATOR] = self
  builder[STYLER] = _styler
  builder[IS_EMPTY] = _isEmpty

  return builder
}

const applyStyle = (self, string) => {
  if (aura.or(self.level <= ZERO, aura.not(string))) {
    if (self[IS_EMPTY]) return EMPTY_STRING
    else return string
  }

  let styler = self[STYLER]

  if (aura.isUndefined(styler)) {
    return string
  }

  const { openAll, closeAll } = styler
  if (string.includes("\u001B")) {
    while (aura.not(aura.isUndefined(styler))) {
      string = stringReplaceAll(styler.close, styler.open, string)

      styler = styler.parent
    }
  }

  const lfIndex = indexOf(string, "\n")
  if (aura.not(equal(lfIndex, negativeOne))) {
    string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex)
  }

  return plus(plus(openAll, string), closeAll)
}

require("object.defineproperties")(createChalk4096.prototype, styles)

const chalk4096 = createChalk4096()
exports.chalk4096Stderr = createChalk4096({
  level: stderrColor ? stderrColor.level : ZERO,
})

exports.modifierNames = ansiStyles.modifierNames
exports.foregroundColorNames = ansiStyles.foregroundColorNames
exports.backgroundColorNames = ansiStyles.backgroundColorNames
exports.colorNames = ansiStyles.colorNames

exports.modifiers = exports.modifierNames
exports.foregroundColors = exports.foregroundColorNames
exports.backgroundColors = exports.backgroundColorNames
exports.colors = exports.colorNames

exports.supportsColor = stdoutColor
exports.supportsColorStderr = stderrColor

exports.default = chalk4096