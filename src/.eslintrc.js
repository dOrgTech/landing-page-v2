module.exports = {
    "parser": "@typescript-eslint/parser",
    "extends": [
        "react-app",
        "react-app/jest",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
    ],
    "plugins": [
        "@typescript-eslint",
        "react",
        "react-hooks"
    ],
    "parserOptions": {
        "project": "./tsconfig.json",
        "ecmaFeatures": {
            "jsx": true
        }
    }
}
