module.exports = function () {
  return this.collections.notes.map((page) => ({
    emoji: page.data.emoji,
    url: page.url,
  }));
};
