// 用cjs模式，因为esm模式不支持require("package.json")
const typescript = require("@rollup/plugin-typescript");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const { babel } = require("@rollup/plugin-babel");
const replace = require("@rollup/plugin-replace");
const globals = require("rollup-plugin-node-globals");
const styles = require("rollup-plugin-styles");
const image = require("@rollup/plugin-image");
const copy = require("rollup-plugin-copy");
// const sharePlugin = require("@luban/global-packages").default;
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload'

/**
 * @type {import("rollup").RollupOptions}
 */
const config = {
    input: {
        index: "src/main.tsx", // 根据需要修改入口
    },
    output: {
        sourcemap: true,
        dir: "output",
        generatedCode: "es2015",
        format: "esm",
        compact: true,
    },
    plugins: [
        replace({
            values: {
                "process.env.NODE_ENV": JSON.stringify("production"),
            },
            preventAssignment: true,
        }),
        copy({
            targets: [
                {
                    src: "public/*",
                    dest: "output/",
                },
                // {
                //     src: "share/*",
                //     dest: "output/s/"
                // },
            ],
        }),
        nodeResolve(),
        typescript({
            compilerOptions: {
                module: "esnext",
                jsx: "react",
                outDir: "output",
                composite: false,
                declaration: false,
                declarationMap: false,
                declarationDir: undefined,
            },
        }),
        commonjs({ extension: [".js", ".ts"] }),
        babel({
            babelHelpers: "bundled",
            exclude: "node_modules/**",
            plugins: ["@babel/plugin-proposal-optional-catch-binding"],
        }),
        image(),
        styles(),
        globals(),
        livereload(),
        // serve({
        //     open: true,
        //     contentBase: 'output'
        // })
        // sharePlugin
    ],
};

module.exports = config;
