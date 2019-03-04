const isObject = require("lodash/isObject");
const isEmpty = require("lodash/isEmpty");
const find = require("lodash/find");
const { parse } = require("postcss-values-parser");
const {
  createPlugin,
  utils: { report, ruleMessages, validateOptions }
} = require("stylelint");

const declarationValueIndex = require("../utils/declarationValueIndex");
const matchesStringOrRegExp = require("../utils/matchesStringOrRegExp");

const ruleName = "plugin/function-arguments-whitelist";
const messages = ruleMessages(ruleName, {
  rejected: (func, args) =>
    `Unexpected arguments "${args}" for function "${func}"`
});

const rule = whitelist => {
  return (root, result) => {
    const validOptions = validateOptions(result, ruleName, {
      actual: whitelist,
      possible: isObject
    });
    if (!validOptions) return;
    root.walkDecls(node => {
      const { value } = node;
      parse(value, {
        ignoreUnknownWords: true
      }).walkFuncs(({ name, params }) => {
        const args = params.slice(1, -1);
        const functionWhitelist = find(whitelist, (list, key) =>
          matchesStringOrRegExp(name, key)
        );
        if (isEmpty(functionWhitelist)) return;
        if (matchesStringOrRegExp(args, functionWhitelist)) return;
        const index = declarationValueIndex(node);
        const message = messages.rejected(name, args);
        report({
          index,
          message,
          node,
          result,
          ruleName
        });
      });
    });
  };
};

module.exports = createPlugin(ruleName, rule);
module.exports.ruleName = ruleName;
module.exports.messages = messages;
