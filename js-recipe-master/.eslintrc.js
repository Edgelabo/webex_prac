module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    extends: ["eslint:recommended"],
    plugins: ["eslint-plugin-html"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        Vue: true,
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "indent": ["error", 2],
        "prettier/prettier": "error"
    }
};