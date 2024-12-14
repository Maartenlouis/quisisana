module.exports = {
  extends: "next/core-web-vitals",
  rules: {
    "react-hooks/exhaustive-deps": "warn",
    "react/no-unescaped-entities": [
      "error",
      {
        forbid: [
          {
            char: '"',
            alternatives: ["&quot;", "&ldquo;", "&#34;", "&rdquo;"],
          },
        ],
      },
    ],
    "@next/next/no-img-element": "warn",
  },
};
