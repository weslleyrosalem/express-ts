module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
        project: [
            "./tsconfig.json",
        ],
    },
    plugins: [
        "@typescript-eslint",
    ],
}
