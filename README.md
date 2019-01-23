# Javascript JSON API example

This example uses the public Wikipedia API, and the older JavaScript method XMLHttp. Wikipedia doesn't require an API key, so this example will work right away. The Flickr and Guardian branches use the more recent JavaScript `fetch`, and JavaScript promises.

For a more general introduction to APIs try the Codecademy [mini course](https://www.codecademy.com/apis) on using APIs with JavaScript.

Explore the Wikipedia [API sandbox](https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=jsonfm).

Check the [help pages](https://en.wikipedia.org/w/api.php?action=help) for the Wikipedia API.

The code comments in "xmlhttp.js" explain what is happening.

Look at the `gatherData` function to see how the list of responses is formatted.

Comment in the console.log statement on line 41. Then inspect the JavaScript console and look through the response object. Try and find the items that we display on the results page. You can also try and copy the url shown on line 37 into your browser. This will display the JSON data there. Run it through a beautifier if you like (https://codebeautify.org/jsonviewer).