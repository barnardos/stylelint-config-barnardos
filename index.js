"use strict";

module.exports = {
  extends: "stylelint-config-recommended",
  plugins: [
    "./plugins/index.js",
    "stylelint-order",
    "stylelint-selector-bem-pattern"
  ],
  rules: {
    "plugin/color-hex-whitelist": [
      "#6aa300",
      "#cc0070",
      "#0099a9",
      "#6e2066",
      "#e86c00",
      "#c30000",
      "#1d1d1d",
      "#fff"
    ],
    "plugin/font-font-size-whitelist": ["/var\\(--type-/"],
    "plugin/function-arguments-whitelist": {
      shade: ["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%"],
      tint: ["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%"]
    },
    "plugin/property-value-rem-multiples": [
      {
        "/^border": 4,
        "/box-shadow/": 4,
        font: 4,
        "grid-gap": 4,
        "line-height": 4,
        "/^margin/": 4,
        "/^padding/": 4
      },
      { ignoreNumbers: ["0.125", "0.25", "0.5", "0.75"] }
    ],
    "order/order": ["custom-properties", "declarations"],
    "order/properties-alphabetical-order": [true, { severity: "warning" }],
    "plugin/selector-bem-pattern": [
      {
        preset: "suit"
      }
    ],
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["blockless-after-same-name-blockless"],
        ignore: ["after-comment", "first-nested"],
        severity: "warning"
      }
    ],
    "at-rule-no-unknown": null,
    "at-rule-no-vendor-prefix": true,
    "at-rule-whitelist": [],
    "color-hex-length": "short",
    "color-no-hex": true,
    "custom-property-empty-line-before": [
      "always",
      {
        except: ["after-custom-property"],
        ignore: ["after-comment", "first-nested", "inside-single-line-block"],
        severity: "warning"
      }
    ],
    "declaration-empty-line-before": [
      "always",
      {
        except: ["after-declaration"],
        ignore: ["after-comment", "first-nested", "inside-single-line-block"],
        severity: "warning"
      }
    ],
    "declaration-no-important": true,
    "declaration-property-value-whitelist": {
      border: ["none"],
      "font-size": ["/^var\\(--type-/"]
    },
    "declaration-property-unit-whitelist": {
      outline: ["px", "rem"],
      "/^font/": ["rem"],
      "/^margin/": ["rem"],
      "/^padding/": ["rem"]
    },
    "font-family-no-missing-generic-family-keyword": null,
    "function-url-no-scheme-relative": true,
    "function-url-scheme-whitelist": [],
    "function-whitelist": [],
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-name-whitelist": [],
    "number-max-precision": 4,
    "property-no-unknown": null,
    "property-no-vendor-prefix": true,
    "property-whitelist": [],
    "rule-empty-line-before": [
      "always",
      {
        ignore: ["after-comment", "first-nested"],
        severity: "warning"
      }
    ],
    "selector-attribute-operator-whitelist": [],
    "selector-max-attribute": 0,
    "selector-max-class": 2,
    "selector-max-id": 0,
    "selector-max-type": 0,
    "selector-max-universal": 0,
    "selector-no-vendor-prefix": true,
    "selector-pseudo-class-no-unknown": null,
    "selector-pseudo-class-whitelist": [],
    "unit-no-unknown": null,
    "unit-whitelist": [],
    "value-no-vendor-prefix": true
  }
};
