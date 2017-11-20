"use strict";

(function(){
  let xhr = new XMLHttpRequest();

  let queryBox = document.getElementById("wikiQuery");
  let searchForm = document.getElementById("searchForm");
  let demoJSON = document.getElementById("demo");

  let baseURL = "https://en.wikipedia.org/w/api.php? \
              format=json& \
              action=query& \
              generator=search& \
              gsrnamespace=0& \
              gsrlimit=10& \
              prop=info%7Cextracts& \
              exintro& \
              explaintext& \
              exsentences=1& \
              exlimit=max& \
              origin=*& \
              gsrsearch=";

  searchForm.addEventListener("submit", function(ev){
      let wiki = baseURL + queryBox.value;
      xhr.open("GET", wiki, true);
      xhr.setRequestHeader( 'Api-User-Agent', 'Example/1.0' );
      xhr.send();
      if (xhr.readyState === 4 && xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        gatherData(response);
      }
      ev.preventDefault();
    }, false);

  // gets data on first page load
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      gatherData(response);
    }
  };

  // WIKIPEDIA
  function gatherData(arr) {
    // console.log(arr);
    let theData = "";
    let key;
    for(key in arr.query.pages) {
      theData += `<li><strong>${arr.query.pages[key].title}:</strong> ${arr.query.pages[key].extract}</li>`;
    }
    demoJSON.innerHTML = theData;
  }

}());
