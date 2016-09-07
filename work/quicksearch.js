var i;
var content = "";

obj = inputstream;

for(i=0;i < obj.length; i++){
  title = obj[i].title;
  city = obj[i].city;
  country = obj[i].country;
  company = obj[i].company;
  department = obj[i].department;
  time = obj[i].time;
  link = obj[i].link;

  content+= "<div class='searchable-item card'>" + "<h3>" + title + "</h3><br>" + "<h4>" + city + ", " + country + "</h4><br><p>" + company + "</p><p>" + department + "</p><br><i class='fa fa-clock-o'></i> " + time + "<br><a class='btn btn-default' href='" + link + "'>Read more <i class='fa fa-arrow-right'></i></a>" + "<br></div>";
}

document.getElementById("content").innerHTML =  content

// quick search regex
var qsRegex;

// init Isotope
var grid = document.querySelector('.grid');
var iso = new Isotope( grid, {
  itemSelector: '.searchable-item',
  layoutMode: 'masonry'
});

// use value of search field to filter
var quicksearch = document.getElementsByClassName("quicksearch")[0];
quicksearch.onkeyup = function() {
  qsRegex = new RegExp( quicksearch.value, 'gi' );
  filterValue = function( itemElem ) {
    var name = itemElem.textContent;
    return name.match(qsRegex);
  }
  iso.arrange({ filter: filterValue });
}
