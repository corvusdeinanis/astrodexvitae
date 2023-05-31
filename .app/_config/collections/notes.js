module.exports = function () {
  return [
    {% for page in collections.notes %}
      {
        emoji: "{{ page.data.emoji }}",
        url: "{{ page.url }}"
      },
    {% endfor %}
  ];
};