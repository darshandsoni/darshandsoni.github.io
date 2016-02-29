---
layout: post
title: "Adding images to Jekyll's post feed - without plugins"
categories: Jekyll
---

The [jekyll-auto-image](https://github.com/merlos/jekyll-auto-image) plugin is a pretty useful tool to get thumbnail images to display on a blog main page. However, this plugin is not yet supported by GitHub pages and will display broken image links if used with GitHub pages. In general, I prefer the minimalistic approach of using powerful liquid tags and plain old html to get the job done.

**Note:**

>This method assumes you are already implementing the [Bootstrap framework](http://getbootstrap.com)


### 1. Adding a thumbnail to a post

Choose a thumbnail image, add it to an images folder in your root (e.g. /images/ or /assets/). Alternatively find a permanent url for an image you want to use.

{% highlight markdown %}
---
layout: post
title: "Title goes here"
categories: jekyll
thumbnail: /images/customthumbnail.jpg
---
{% endhighlight %}

### 2. Adding a default thumbnail

Sometimes, you may not have an appropriate thumbnail image for a particular post. In this case, we want jekyll to just use a default thumbnail saved in your images foler. Put a file in there named nothumbnail.jpg or similar.

### 3. Adding Liquid tags to render thumbnails

Here's where the magic happens. We need the post directory to render the thumbnail image. In case there isn't one, it should render the default thumbnail. On your blog's directory page (e.g. blog.md), add the following liquid tag loops to do [this](https://truongtx.me/2013/01/05/thumbnail-post-list-for-jekyll-bootstrap/).
