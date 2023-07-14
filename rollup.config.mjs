import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser"; // 压缩
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import image from "@rollup/plugin-image";
import alias from "@rollup/plugin-alias";
import postcss from "rollup-plugin-postcss";
import svg from "rollup-plugin-svg";
import url from "rollup-plugin-url";
import typescript from "rollup-plugin-typescript2";
import path from "path";

const config = {
    input: "src/main.js",
    output: [
        {
            file: "output/bundle.esm.js",
            format: "esm",
        },
        {
            file: "output/bundle.umd.js",
            format: "umd",
            // 这个name属性非常重要，是通过 cdn 引入后，挂载到 window上的属性名
            name: "test",
        },
    ],
    plugins: [
        alias({
            entries: [
                // { find: "@", replacement: path.resolve(__dirname, "./src") }
            ],
        }),
        json(),
        commonjs(),
        resolve(),
        babel({ babelHelpers: "bundled", exclude: "node_modules/**" }),
        image(),
        svg(),
        url(),
        typescript({
            module: "esnext",
        }),
        postcss({
            plugins: [],
            extract: true,
            use: ["sass", "less"],
            writeDefinitions: true,
        }),
        terser(),
    ],
    // external可以排除不需要打包的依赖,比如peerDependencies中的依赖
    external: ["lodash", "lodash-es", "react"],
};

export default config;
