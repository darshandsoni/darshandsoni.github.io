---
layout: page
title: "Blog"
permalink: /blog/
---

<div class="container">


  {% for post in site.posts %}
  <div class="col-sm-4">
    <div class="thumbnail">
      <img class="img-responsive" src="{{ @page.image }}">
      <p>{{ post.date | date: "%F" }} | {% include read_time.html %}</p>
      <a href="{{ post.url }}"><h2>{{ post.title }}</h2></a>
    </div>
  </div>
  {% endfor %}


</div>
