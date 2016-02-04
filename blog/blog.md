---
layout: page
title: "Blog"
permalink: /blog/
---

<div class="container">


  {% for post in site.posts %}
  <div class="col-sm-4">
    <div class="thumbnail">
      {% if post.thumbnail %}
        <img class="img-responsive" src="{{ post.thumbnail }}" align="center">
      {% else %}
        <img class="img-responsive" src="/assets/{{ post.categories }}.jpg" align="center">
      {% endif %}
      <p>{{ post.date | date: "%d %B %Y" }}</p>
      <a href="{{ post.url }}"><h2>{{ post.title }}</h2></a>
      <div class="container-fluid {{ post.categories }}">
        <p>{{ post.categories }}</p>
      </div>
    </div>
  </div>
  {% endfor %}


</div>
