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
                prop=extracts|langlinks|pageimages& \
                exintro& \
                explaintext& \
                exsentences=1& \
                exlimit=max& \
                llprop=url& \
                lllimit=max& \
                piprop=thumbnail|name& \
                origin=*& \
                gsrsearch=";

  searchForm.addEventListener("submit", function(ev){
      let wiki = baseURL + queryBox.value;
      xhr.open("GET", wiki, true);
      xhr.setRequestHeader('Api-User-Agent', 'Example/1.0');
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
    // console.log(data);
    let theData = "";
    let langLinks = "";
    let img = "";
    const languages = ["en", "de", "zh", "fr", "es", "ja", "ar", "ko", "el"];
    let k;
    let key;
    // loop through the result pages by pageid
    for(key in data.query.pages) {
      let tmp = data.query.pages[key];
      if (tmp.thumbnail) {
        img = `<img src="${tmp.thumbnail.source}" alt="${tmp.title}"> `;
      }
      let title = `<strong> ${tmp.title}:</strong>`;
      let extract = `<span class="txt">${tmp.extract}</span>`;
      let langLinks = "";
      for (k in tmp.langlinks) {
        if (languages.includes(tmp.langlinks[k].lang)) {
          langLinks += `<a href=${tmp.langlinks[k].url}>${tmp.langlinks[k].lang}</a> `;
        }
      }
      theData += `<li>${img} ${title} ${extract} <span class="langs">${langLinks}</span></li>`;
    }
    demoJSON.innerHTML = theData;
  }

}());
