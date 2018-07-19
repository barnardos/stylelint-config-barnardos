# stylelint-config-barnardos

Shareable stylelint configuration file for Barnardo's.

## Installation

```bash
npm install @barnardos/stylelint-config-barnardos --save-dev
```

## Usage

Set your `stylelint` config to:

```json
{
  "extends": "stylelint-config-barnardos"
}
```

### Extending the config

Add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `at-rule-no-unknown` rule to use its `ignoreAtRules` option, turn off the `block-no-empty` rule, and add the `unit-whitelist` rule:

```json
{
  "extends": "stylelint-config-recommended",
  "rules": {
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": ["extends"]
      }
    ],
    "block-no-empty": null,
    "unit-whitelist": ["em", "rem", "s"]
  }
}
```
