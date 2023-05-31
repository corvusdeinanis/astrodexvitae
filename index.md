---
title: "Home"
panel: false
---

Welcome to **Eleventy Notes**, an opinionated template for publishing your personal notes, documentation or even your blog. It's built with [Eleventy](https://www.11ty.dev/), a powerful static site generator.

Eleventy Notes has many great features you'll love:

 <ul>
    {% for note in notes %}
      <li>
        <a href="{{ note.url }}">{{ note.emoji }}</a>
      </li>
    {% endfor %}
  </ul>

