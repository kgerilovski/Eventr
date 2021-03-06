module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "jquery": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6
    },
    "rules": {
        "strict": "error",
        "eqeqeq": "error",
        "no-var": "error",
        "curly": "error",
        "wrap-iife": "error",
        "no-const-assign": "error",
        "valid-typeof": "error",
        "semi": ["error", "always"],
        "no-unused-vars": "warn",
        "no-multi-spaces": "warn",
        "no-multiple-empty-lines": "warn",
        "indent": ["error", 4],
        "object-curly-spacing": ["warn", "always"],
        "linebreak-style": ["error", "windows"],
        "quotes": ["error", "double"],
        "no-console": "off"
    }
};