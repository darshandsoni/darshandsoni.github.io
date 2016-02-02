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
        <img class="img-responsive" src="/assets/truss.png" align="center">
      {% endif %}  
      <p>{{ post.date | date: "%F" }}</p>
      <a href="{{ post.url }}"><h2>{{ post.title }}</h2></a>
    </div>
  </div>
  {% endfor %}


</div>
