---
layout: page
permalink: /photography/
title: Photography
photoset: 72157645476389725
---

<div class="container">

{% if page.photoset %}

  <div class="box">
    <div class="box-title title clearfix">
      <div class="left">Photos!</div>
      <div class="right"><a href="https://www.flickr.com/photos/darshandsoni/sets/{{ page.photoset }}/" target="_blank" title="View on Flickr"><img src="/images/icons/hand_drawn_flickr.png" alt="View on Flickr" /></a>
      </div>
    </div>

    <div class="photo-thumbs">
    {% for photo in page.photos %}
      <a href="{{ photo.urlFullSize }}" title="{{ photo.title }}" rel="shadowbox[slideshow]" class="popupwindow" /><img src="{{ photo.urlThumbnail }}" alt="{{ photo.title }}" class="{{ photo.thumbType }}" /></a>
    {% endfor %}
    </div>
  </div>

{% endif %}

</div>
