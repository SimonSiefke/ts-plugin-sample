# Ts Plugin Sample

## Quickstart 🚀

```sh
git clone https://github.com/SimonSiefke/ts-plugin-sample &&
cd ts-plugin-sample &&
npm ci &&
npx tsc -b
```

## Usage

Run `npx tsc -b` to generate `plugin.js`. Open the vscode command pallette and configure typescript to use the workspace typescript version `typescript: select typescript version -> Use workspace version`. Then reload vscode and open `sample.ts`.

Before:

![](./images/before.png)

After:

![](./images/after.png)

## Credits

The sample is based on the ts plugin sample inside the [typescript wiki](https://github.com/microsoft/TypeScript/wiki/Writing-a-Language-Service-Plugin).
