const sveltePreprocess = require("svelte-preprocess");

function createPreprocessors(sourceMap) {
  return sveltePreprocess({
    sourceMap,
    scss: {
      includePaths: ["src"],
      prependData: `@import 'src/styles/variables.scss';`
    },
    postcss: {
      plugins: [require("autoprefixer")()]
    },
    aliases: [
      ['ts', 'typescript']
    ]
  });
}
module.exports = {
  preprocess: createPreprocessors(true),
  createPreprocessors,
};
