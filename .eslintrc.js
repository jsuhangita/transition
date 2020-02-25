module.exports = {
  "env": {
    "node": true,
    "browser": true,
    "es6": true
  },
  "extends": "airbnb",
  "rules": {
    "no-console": 2,
    "import/named": 0,
    "class-methods-use-this": 0,
    "no-param-reassign": 0,
    "no-bitwise": 0,
    "no-shadow": 0,
    "camelcase": 0,
    "react/no-array-index-key": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/forbid-prop-types": 0,
    "function-paren-newline": ["error", { "minItems": 7 }],
    "no-underscore-dangle": 0,
    "no-nested-ternary": 0,
    "no-useless-catch": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-curly-newline": 0,
    "no-useless-escape": 0,
    "react/no-did-update-set-state": 0
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".ios.js", ".android.js", ".json", ".native.js"]
      }
    }
  },
  "globals": {
    "ErrorUtils": true,
    "window": true,
    "GLOBAL": false,
    "it": false,
    "xit": false,
    "expect": false,
    "describe": false,
    "jest": false,
    "require": false,
    "module": false,
    "Promise": false,
    "beforeAll": false,
    "beforeEach": true
  }
};
