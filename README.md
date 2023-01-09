# HUSL Prettier Config

HUSL Prettier shareable config for [Prettier](https://prettier.io).

## Installation

Install the module

```shell
$ npm install prettier @prettier/plugin-php @husldigital/prettier-config --save-dev
```

**Note**: This package requires Node.js 14.0.0 or later. It is not compatible with older versions.

## Usage

1. Make sure you installed all the dependencies in the `package.json` file:

```json
  "@husldigital/prettier-config": "^1.0.4",
  "@prettier/plugin-php": "^0.19.2",
  "prettier": "^2.8.2"
```

2. Create a new file called `.prettierrc.js` and add this to file:

```js
module.exports = require("@husldigital/prettier-config");
```

3. Restart your editor and you should be all set. Happy coding! 🎉

4. If you are using VSCode, you may need to install the [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension.

### Not working?

If you're having issues installing this package try to reinstall everything:

```shell
$ rm package-lock.json
$ rm -rf node_modules/
$ npm install
$ npm install prettier @prettier/plugin-php @husldigital/prettier-config --save-dev

```

If you're still having issues send me a message via Slack or email me at [angel@husldigital.com](mailto:abaez@husldigital.com).
