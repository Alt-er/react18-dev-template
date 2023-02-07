// console.info(`${process.env.NODE_ENV}`);
module.exports = {
    // parser: "sugarss",
    plugins: {
        // "postcss-import": {},
        // "postcss-cssnext": {},  不用新特性
        cssnano: {}, // 会压缩你的 CSS 文件来确保在开发环境中下载量尽可能的小
    },
};
