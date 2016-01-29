---
layout: post
permalink: /photography/
title: Photography
flickr:
- https://www.flickr.com/photos/darshandsoni/16028978489
---

<article>
  <h1>{{ post.title }}</h1>

  {% for flickr_url in post.flickr %}
    <a href="{{ flickr_url }}">{{ flickr_url | flickr_image }}</a>
  {% endfor %}

  {{ post.content }}

  <footer>
    {{ post.date || date:"%Y-%m-%d" }}</br>
  </footer>
</article>
