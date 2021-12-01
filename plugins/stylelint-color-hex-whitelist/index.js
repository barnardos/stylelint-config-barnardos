const isArray = require("lodash/isArray");
const { parse } = require("postcss-values-parser");
const {
  createPlugin,
  utils: { report, ruleMessages, validateOptions },
} = require("stylelint");

const declarationValueIndex = require("../utils/declarationValueIndex");
const matchesStringOrRegExp = require("../utils/matchesStringOrRegExp");

const ruleName = "plugin/color-hex-whitelist";
const messages = ruleMessages(ruleName, {
  rejected: (hex) => `Unexpected hex "${hex}"`,
});

const rule = (whitelist) => {
  return (root, result) => {
    const validOptions = validateOptions(result, ruleName, {
      actual: whitelist,
      possible: isArray,
    });
    if (!validOptions) return;
    root.walkDecls((node) => {
      const { value } = node;
      parse(value, {
        ignoreUnknownWords: true,
      }).walkWords(({ value, isHex, parent: { name, type } }) => {
        if (!isHex) return;
        if (type === "func" && name === "url") return;
        if (matchesStringOrRegExp(value, whitelist)) return;
        const index = declarationValueIndex(node);
        const message = messages.rejected(value);
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

rule.primaryOptionArray = true;

module.exports = createPlugin(ruleName, rule);
module.exports.ruleName = ruleName;
module.exports.messages = messages;
