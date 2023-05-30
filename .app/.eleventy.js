const loader = require("./_config/utils/loader.util");
const matter = require("gray-matter");

module.exports = (eleventyConfig) => {
  // Load eleventy configurations from './_config' folder
  loader([__dirname, "_config"], eleventyConfig);

  eleventyConfig.setServerOptions({
    watch: ["dist/app.js", "dist/app.*.css"],
  });

   if (
            frontMatter.data.tags &&
            frontMatter.data.tags.indexOf("gardenEntry") != -1
          ) {
            permalink = "/";
          }
          if (frontMatter.data.noteIcon) {
            noteIcon = frontMatter.data.noteIcon;
          }
        } 
  
  return {
    pathPrefix: process.env.ELEVENTY_NOTES_PATH_PREFIX || undefined,
    dir: {
      input: "./../",
      output: "dist",
      data: ".app/_data",
      includes: ".app/_includes",
    },
    markdownTemplateEngine: false,
  };
};
