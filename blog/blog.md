---
layout: page
title: "Blog"
permalink: /blog/
---

<div class="container">


  {% for post in site.posts %}
  <div class="col-sm-4">
    <a href="{{ post.url }}"><div class="thumbnail">
      <img class="img-responsive" src="{{ page.image }}"></img>
      <p>{{ post.date | date: "%F" }} | {% include read_time.html %} </p>
      <h2>{{ post.title }}</h2>
    </div></a>
    </div>
  {% endfor %}


</div>

<img class="img-responsive" src="{{ page.image }}">
