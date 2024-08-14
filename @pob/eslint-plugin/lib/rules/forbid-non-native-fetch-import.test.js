import { RuleTester } from "eslint";
import rule from "./forbid-non-native-fetch-import.js";

const languageOptions = {
  ecmaVersion: 2018,
  sourceType: "module",
};

const ruleTester = new RuleTester({ languageOptions });

ruleTester.run("forbid-non-native-fetch-import", rule, {
  valid: [
    {
      code: `
      fetch('https://example.com');
    `,
    },
  ],
  invalid: [
    {
      code: `
      import fetch from 'node-fetch';
      fetch('https://example.com');
    `,
      errors: [
        {
          messageId: "forbidden",
          data: { value: "node-fetch" },
        },
      ],
    },
  ],
});
