# HUSL Prettier Config

HUSL Prettier shareable config for [Prettier](https://prettier.io).

## Installation

Install the module

```shell
$ npm install prettier @prettier/plugin-php @husldigital/prettier-config --save-dev
```

**Note**: This package requires Node.js 18.0.0 or later.

## Usage

1. Make sure you installed all the dependencies in the `package.json` file:

```json
  "@husldigital/prettier-config": "^2.0.0",
  "@prettier/plugin-php": "^0.22.0",
  "prettier": "^3.0.0"
```

2. Create a new file called `.prettierrc.js` and add this to file:

```js
module.exports = require("@husldigital/prettier-config");
```

Or for ESM projects, create `.prettierrc.mjs`:

```js
import config from "@husldigital/prettier-config";
export default config;
```

3. Restart your editor and you should be all set.

4. If you are using VSCode, you may need to install the [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension.

## Migration from v1.x

**Breaking changes in v2.0.1:**

- Requires Prettier 3.x (not compatible with Prettier 2)
- Requires Node.js 18+
- Requires @prettier/plugin-php 0.22.0+
- `trailingComma` changed from `"es5"` to `"all"`
- `phpVersion` changed from `"7.4"` to `"8.2"`
- Removed invalid `braceStyle` option

### Not working?

If you're having issues installing this package try to reinstall everything:

```shell
$ rm package-lock.json
$ rm -rf node_modules/
$ npm install
$ npm install prettier @prettier/plugin-php @husldigital/prettier-config --save-dev
```

If you're still having issues send me a message via Slack or email me at [angel@husldigital.com](mailto:abaez@husldigital.com).
