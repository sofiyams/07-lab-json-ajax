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
                prop=info%7Cextracts%7Clanglinks& \
                exintro& \
                explaintext& \
                exsentences=1& \
                exlimit=max& \
                llprop=url& \
                lllimit=max& \
                origin=*& \
                gsrsearch=";

  searchForm.addEventListener("submit", function(ev){
      let wiki = baseURL + queryBox.value;
      xhr.open("GET", wiki, true);
      xhr.setRequestHeader('Api-User-Agent', 'Example/1.0');
      // xhr.setRequestHeader( 'X-Referer', 'https://ctec3905.github.io/08-lab-json-ajax/' );
      xhr.send();
      if (xhr.readyState === 4 && xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        gatherData(response);
      }
	  queryBox.value = "";
      ev.preventDefault();
    }, false);

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      gatherData(response);
    }
  };

  // WIKIPEDIA
  function gatherData(data) {
    let theData = "";
    let langLinks = "";
    let languages = ["en", "de", "zh", "fr", "es", "ja", "ar", "ko", "el"];
    let k;
    let key;
    for(key in data.query.pages) {
      let title = `<strong>${data.query.pages[key].title}:</strong>`;
      let extract = `${data.query.pages[key].extract} `;
      let langLinks = "";
      for (k in data.query.pages[key].langlinks) {
        if (languages.includes(data.query.pages[key].langlinks[k].lang)) {
          langLinks += `<a href=${data.query.pages[key].langlinks[k].url}>${data.query.pages[key].langlinks[k].lang}</a> `;
        }
      }
      theData += `<li> ${title} ${extract} ${langLinks} </li>`;
    }
    
    demoJSON.innerHTML = theData;
  }

}());
