const loader = require("./_config/utils/loader.util");

module.exports = (eleventyConfig) => {
  // Load eleventy configurations from './_config' folder
  loader([__dirname, "_config"], eleventyConfig);

  eleventyConfig.setServerOptions({
    watch: ["dist/app.js", "dist/app.*.css"],
  });
  eleventyConfig.setTemplateEngine("njk");

  eleventyConfig.addCollection("notes", function (collection) {
    return collection.getAllSorted().filter((item) => item.data.emoji);
  });

  return {
    pathPrefix: process.env.ELEVENTY_NOTES_PATH_PREFIX || undefined,
    dir: {
      input: "./../",
      output: "dist",
      data: ".app/_data",
      includes: ".app/_includes",
    },
    passthroughFileCopy: true,

  };
};
