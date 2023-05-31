module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("notesWithTreeIcon", function(collectionApi) {
    return collectionApi.getFilteredByGlob("notes/*.md").filter(function(item) {
      return item.data.icon === "tree";
    });
  });
};
