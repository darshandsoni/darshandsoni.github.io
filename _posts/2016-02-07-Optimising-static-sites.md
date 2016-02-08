---
layout: post
title: "Optimising static sites"
categories: Jekyll
---

Static sites, are generally speaking, much faster than dynamic ones abound with javascript and server requests from the very start. This is because they are precompiled and served to users as they are on the web (excluding any special requests e.g. google map embeds). Hosting on a cloud based platform such as [GitHub](http://github.com){:target="_blank"}, [Amazon S3](https://aws.amazon.com/s3/){:target="_blank"} or [Digital Ocean](https://www.digitalocean.com/){:target="_blank"} also drastically improves speed since the content is hardly ever down and retrieved from the best possible geographic location.

That said, static sites can get slightly bloated over time and a perfect place to test out loading time is Google's [pagespeed insights](https://developers.google.com/speed/pagespeed/insights/){:target="_blank"} which gives your site a test run, returns a scorecard and also gives suggestions on how to make your response time faster.

One thing you'll notice it telling you is to use inline CSS or js instead of an external file reference to cull the additional request made for that file. Of course this only applies to small files, but practically speaking, not every js file can be inlined. Chances are you will be using some external reference for plugins or even bootstrap itself. A quick trick to reduce bloat here is to minify your site's existing js, html and css files.

Worry not, for you do not have to do this manually. There is a jekyll plugin for this! And now you're going to say, "But... GitHub pages won't run those due to --safe mode etc..." and again, worry not! The plugin minifies your html, css, javascript and xmls as you build your site, so when it is pushed up to GitHub it is already compiled and does not call out any custom liquid tags like the flickr or 500px ones.
To enact all this, simply run:

```
gem install jekyll-minifier
```
<br>
Then to your _config.yml file add the following:<br>
``
gems:
  - jekyll-minifier
``
<br>
And that's it! Try run the pagespeed insights again (note that it has a cache time of 30s) and see the improvements!
For more information, check out the Git page for [jekyll-minifier](https://github.com/digitalsparky/jekyll-minifier){:target="_blank"} thanks to digitalsparky.
