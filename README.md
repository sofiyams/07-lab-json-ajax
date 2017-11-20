# Lab 08: Javascript JSON API example

The branch shows how to use the public Wikipedia API.

1. Clone the repo and push to your own GitHub account
1. Set up GitHub Pages
1. Play with the existing code and try and change some of the query parameters.

For a more general introduction to APIs try the Codecademy [mini course](https://www.codecademy.com/courses/javascript-beginner-en-EID4t/0/1?curriculum_id=50ecba3b57ff25277d00010a) on using APIs with JavaScript.

Explore the Wikipedia [API sandbox](https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=jsonfm).

Check the [help pages](https://en.wikipedia.org/w/api.php?action=help) for the Wikipedia API.

The master branch contains code which executes an API call to the public Wikipedia API. This example runs without needing to change anything.

Read through the comments and try and understand what is happening.

Look at the gatherData function and try and follow how the list of responses is formatted.

Comment in the console.log statement on line 41. Then inspect the JavaScript console and look through the response object. Try and find the items that we display on the results page. You can also try and copy the url shown on line 37 into your browser. This will display the JSON data there. Run it through a beautifier if you like (https://codebeautify.org/jsonviewer).