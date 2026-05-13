import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      },
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        IntersectionObserver: "readonly",
        HTMLButtonElement: "readonly",
        SVGGraphicsElement: "readonly",
        ViewTimeline: "readonly",
        ScrollTimeline: "readonly",
        getComputedStyle: "readonly",
        queueMicrotask: "readonly",
        MutationObserver: "readonly",
        fetch: "readonly",
        reportError: "readonly",
        process: "readonly",
        performance: "readonly",
        HTMLElement: "readonly",
        HTMLAnchorElement: "readonly",
        HTMLDivElement: "readonly",
        HTMLCanvasElement: "readonly",
        HTMLImageElement: "readonly",
        Image: "readonly",
        React: "readonly",
        requestAnimationFrame: "readonly",
        cancelAnimationFrame: "readonly"
      }
    },
    plugins: {
      "@typescript-eslint": tseslint
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "no-useless-escape": "warn",
      "no-useless-assignment": "warn"
    }
  },
  {
    ignores: ["dist/**", "node_modules/**", "lumen/**"]
  }
];
