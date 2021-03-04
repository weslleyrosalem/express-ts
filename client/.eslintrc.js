module.exports = {
    extends: [
        "../.eslintrc.js",
        "react-app",
        "react-app/jest"
    ],
    project: {
        parserOptions: {
            project: [
                "./tsconfig.json"
            ],
        },
    }
}
