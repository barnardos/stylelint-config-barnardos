const rule = require("..");
const { messages, ruleName } = rule;

testRule(rule, {
  ruleName,
  config: [["/^var\\(--type/", "1rem"]],

  accept: [
    {
      code: "a { font-size: 1rem }"
    },
    {
      code: "a { font-size: var(--type-2); }"
    },
    {
      code: "a { font: var(--type-1)/1rem sans-serif; }"
    },
    {
      code: "a { font: 300 1rem/1.5rem serif; }"
    }
  ],

  reject: [
    {
      code: "a { font-size: 10px; }",
      message: messages.rejected("10px"),
      line: 1,
      column: 16
    },
    {
      code: "a { font: 10px/1rem sans-serif; }",
      message: messages.rejected("10px"),
      line: 1,
      column: 11
    },
    {
      code: "a { font: bold var(--x)/1 serif; }",
      message: messages.rejected("var(--x)"),
      line: 1,
      column: 11
    }
  ]
});
