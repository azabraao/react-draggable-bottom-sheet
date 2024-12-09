import postcss from "rollup-plugin-postcss";

import typescript from "rollup-plugin-typescript2";

import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "esm",
      exports: "named",
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [
    postcss({
      extract: true,
      inject: false,
      minimize: true,
    }),
    typescript(),
  ],
  external: [
    "react",
    "react-dom",
    "@azabraao/react-draggable",
    "clsx",
    "use-callback-ref",
  ],
};
