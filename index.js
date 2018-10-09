"use strict";

module.exports = {
  extends: "stylelint-config-recommended",
  plugins: [
    "./plugins/index.js",
    "stylelint-order",
    "stylelint-selector-bem-pattern"
  ],
  rules: {
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
    "at-rule-whitelist": ["font-face", "import", "media"],
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
      border: ["none"]
    },
    "declaration-property-unit-whitelist": {
      outline: ["%", "px", "rem"],
      "/^font/": ["rem"],
      "/^margin/": ["rem", "vw"],
      "/^padding/": ["rem"]
    },
    "font-family-no-missing-generic-family-keyword": null,
    "function-url-no-scheme-relative": true,
    "function-url-scheme-whitelist": [],
    "function-whitelist": [
      "calc",
      "color-mod",
      "minmax",
      "repeat",
      "rotate",
      "shade",
      "tint",
      "translate",
      "url",
      "var"
    ],
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-name-whitelist": ["min-width"],
    "number-max-precision": 4,
    "order/order": ["custom-properties", "declarations"],
    "order/properties-alphabetical-order": [true, { severity: "warning" }],
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
    "plugin/font-size-whitelist": ["/var\\(--type-/"],
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
    "plugin/selector-bem-pattern": [
      {
        preset: "suit"
      },
      { severity: "warning" }
    ],
    "property-no-unknown": null,
    "property-no-vendor-prefix": true,
    "property-whitelist": [
      "align-items",
      "appearance",
      "background-color",
      "background-image",
      "background-size",
      "background",
      "border-radius",
      "border",
      "bottom",
      "box-shadow",
      "box-sizing",
      "color",
      "content",
      "display",
      "flex-basis",
      "flex-direction",
      "flex-wrap",
      "flex",
      "font-family",
      "font-size",
      "font-style",
      "font-variant-numeric",
      "font-weight",
      "font",
      "grid-column",
      "grid-gap",
      "grid-row",
      "grid-template-columns",
      "grid-template-rows",
      "grid",
      "height",
      "justify-content",
      "left",
      "line-height",
      "list-style",
      "margin-bottom",
      "margin-left",
      "margin-right",
      "margin-top",
      "margin",
      "max-width",
      "min-width",
      "padding-bottom",
      "padding-left",
      "padding-right",
      "padding-top",
      "padding",
      "page-break-inside",
      "position",
      "resize",
      "right",
      "src",
      "text-align",
      "text-decoration",
      "text-indent",
      "top",
      "transform-origin",
      "transform",
      "white-space",
      "width",
      "z-index"
    ],
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
    "selector-nested-pattern": "^&",
    "selector-no-vendor-prefix": true,
    "selector-pseudo-class-no-unknown": null,
    "selector-pseudo-class-whitelist": [
      "active",
      "first-child",
      "focus",
      "hover",
      "not",
      "root"
    ],
    "unit-no-unknown": null,
    "unit-whitelist": ["%", "deg", "fr", "px", "rem", "vh", "vw"],
    "value-no-vendor-prefix": true
  }
};
