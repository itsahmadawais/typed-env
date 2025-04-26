# 🔐 typed-env

A zero-dependency, TypeScript-first utility to safely define, validate, and type environment variables using schema-like syntax.

---

## 🚀 Features

- ✅ Type-safe access to environment variables
- 🔒 Runtime validation with defaults and required checks
- 📦 Zero dependencies
- 🔁 Works in both **TypeScript** and **JavaScript**
- 🛠️ Built for Node.js

---

## 📦 Installation

```bash
npm install typed-env
```

---

## 🧪 Usage

### 1. Create a `.env` file

```env
PORT=4000
NODE_ENV=production
SECRET_KEY=my-secret-key
```

---

### 2. Define Your Schema

#### 👉 TypeScript (Recommended)

```ts
// env.ts
import { defineEnvSchema } from 'typed-env';

export const env = defineEnvSchema({
  NODE_ENV: {
    type: 'enum',
    values: ['development', 'production'],
    default: 'development',
  },
  PORT: {
    type: 'number',
    default: 3000,
  },
  SECRET_KEY: {
    type: 'string',
    required: true,
  },
});
```

#### 👉 JavaScript

```js
// env.js
const { defineEnvSchema } = require('typed-env');

const env = defineEnvSchema({
  NODE_ENV: {
    type: 'enum',
    values: ['development', 'production'],
    default: 'development',
  },
  PORT: {
    type: 'number',
    default: 3000,
  },
  SECRET_KEY: {
    type: 'string',
    required: true,
  },
});

module.exports = { env };
```
---

### 3. Use in Your App

```ts
// main.ts or main.js
import { env } from './env';

console.log(env.PORT);       // → 4000
console.log(env.NODE_ENV);   // → 'production'
console.log(env.SECRET_KEY); // → 'my-secret-key'
```

For **CommonJS** (JavaScript):

```js
// main.js
const { env } = require('./env');

console.log(env.PORT);       // → 4000
console.log(env.NODE_ENV);   // → 'production'
console.log(env.SECRET_KEY); // → 'my-secret-key'
```

---

## 📘 Schema Field Options

| Option     | Type                                           | Description                                 |
|------------|------------------------------------------------|---------------------------------------------|
| `type`     | `'string'` \| `'number'` \| `'boolean'` \| `'enum'` | Required field type                        |
| `default`  | `any`                                           | (Optional) Default value if not provided    |
| `required` | `boolean`                                       | (Optional) Throws error if missing and no default |
| `values`   | `string[]`                                      | Required for `enum` type                    |

---

## 💡 Complete Example

```ts
const env = defineEnvSchema({
  APP_NAME: { type: 'string', default: 'MyApp' },
  ENABLE_LOGS: { type: 'boolean', default: true },
  MAX_RETRIES: { type: 'number', default: 5 },
  NODE_ENV: {
    type: 'enum',
    values: ['development', 'production', 'test'],
    default: 'development',
  },
});
```

---

## 🔗 Compatibility

✅ Node.js
✅ TypeScript
✅ JavaScript (CommonJS & ESM)

---

## 📜 License

MIT — free to use for personal and commercial projects.

---

## 🤝 Contributing

Contributions are welcome!
Open an issue or submit a pull request — even small improvements are appreciated.

---

## 🛠 Maintainer

Made with ❤️ by [Awais Ahmad | itsahmadawais](https://github.com/itsahmadawais)