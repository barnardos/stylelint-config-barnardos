const find = require("lodash/find");
const isInteger = require("lodash/isInteger");
const isObject = require("lodash/isObject");
const isString = require("lodash/isString");
const { parse } = require("postcss-values-parser");
const {
  createPlugin,
  utils: { report, ruleMessages, validateOptions },
} = require("stylelint");

const declarationValueIndex = require("../utils/declarationValueIndex");
const matchesStringOrRegExp = require("../utils/matchesStringOrRegExp");

const ruleName = "plugin/property-value-rem-multiples";
const messages = ruleMessages(ruleName, {
  expected: (value, multiple) =>
    `Expected "${value}" to be multiple of "${multiple}"`,
});
const baseSize = 16;

const rule = (
  whitelist,
  options = {
    ignoreNumbers: [],
  }
) => {
  return (root, result) => {
    const validOptions = validateOptions(
      result,
      ruleName,
      {
        actual: whitelist,
        possible: isObject,
      },
      {
        actual: options,
        possible: {
          ignoreNumbers: [isString],
        },
        optional: true,
      }
    );
    if (!validOptions) return;
    root.walkDecls((node) => {
      const { value, prop } = node;
      if (!value.includes("rem")) return;
      const multiple = find(whitelist, (list, key) =>
        matchesStringOrRegExp(prop, key)
      );
      if (!isInteger(multiple)) return;
      parse(value, {
        ignoreUnknownWords: true,
      }).walkNumerics(({ value, unit }) => {
        const { ignoreNumbers } = options;
        if (unit !== "rem") return;
        if (ignoreNumbers.includes(value)) return;
        if ((value * baseSize) % multiple === 0) return;
        const index = declarationValueIndex(node);
        const message = messages.expected(`${value}${unit}`, multiple);
        report({
          index,
          message,
          node,
          result,
          ruleName,
        });
      });
    });
  };
};

module.exports = createPlugin(ruleName, rule);
module.exports.ruleName = ruleName;
module.exports.messages = messages;
