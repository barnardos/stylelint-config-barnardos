const isArray = require("lodash/isArray");
const parseCssFont = require("parse-css-font").default;
const {
  createPlugin,
  utils: { report, ruleMessages, validateOptions }
} = require("stylelint");

const declarationValueIndex = require("../utils/declarationValueIndex");
const matchesStringOrRegExp = require("../utils/matchesStringOrRegExp");

const ruleName = "plugin/font-size-whitelist";
const messages = ruleMessages(ruleName, {
  rejected: size => `Unexpected font-size "${size}"`
});

const rule = whitelist => {
  return (root, result) => {
    const validOptions = validateOptions(result, ruleName, {
      actual: whitelist,
      possible: isArray
    });
    if (!validOptions) return;
    root.walkDecls("font", node => {
      const { value } = node;
      const { size } = parseCssFont(value);
      check(node, size);
    });
    root.walkDecls("font-size", node => {
      const { value } = node;
      check(node, value);
    });
    function check(node, size) {
      if (matchesStringOrRegExp(size, whitelist)) return;
      const index = declarationValueIndex(node);
      const message = messages.rejected(size);
      report({
        index,
        message,
        node,
        result,
        ruleName
      });
    }
  };
};

rule.primaryOptionArray = true;

module.exports = createPlugin(ruleName, rule);
module.exports.ruleName = ruleName;
module.exports.messages = messages;
