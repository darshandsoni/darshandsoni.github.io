---
layout: default
title: Home
---

<div class="columns">
  <div class="column col-lg-4 col-sm-12">
    <h3>EN</h3>
    <p class="cover">Welcome to my personal website. Thank you for taking the time to visit and I hope you find some interesting stuff here. As with all my work, feedback is always welcome! Feel free to comment, share or like on things that interest you.</p>
  </div>
  <div class="column col-lg-4 col-sm-12">
    <h3>FR</h3>
    <p class="cover">Bienvenue à mon site personnel. Merci de visiter et j’espère que vous trouverez des choses intéressantes ici. Comme tout mon travail, les commentaires sont toujours les bienvenus! N’hésitez pas à commenter, partager ou aimer les choses qui vous intéressent.</p>
  </div>
  <div class="column col-lg-4 col-sm-12">
    <h3>GU</h3>
    <p class="cover">આવઓ મારી સૈટ પર! તમે અહીંયા આવ્યા છો, તેની માટે આભાર । મજા કરજો અને જે પણ રસિક લાગે, તેમાં જવાબ લાખો, લૈક કરજો કે શેર કરજો ।</p>
  </div>
</div>

<br><br>

<hr>

<div class="container">
  <p>Articles written...Comprehensive list coming soon.</p>
  <div class="columns">
    {% for post in site.posts %}
      <div class="column col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div class="card">
          <div class="card-header">
            <a href="{{ post.url }}"><h4 class="card-title">{{ post.title }}</h4></a> {{ post.date | date_to_long_string }}
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>
