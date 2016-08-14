window.parseWikiResult = function parseWikiResult(data) {console.log(data)};
function searchWiki(term1, term2) {
	function generateJSONP(title) {
		let script = document.createElement("script");
		script.src = 'https://en.wikipedia.org/w/api.php?action=parse&page=' +
			title + '&prop=text&section=0&format=json&callback=window.parseWikiResult';
		script.onload = function() {
	    	console.log(this);
  		}
		document.head.appendChild(script);
	};
	generateJSONP(term1);
	generateJSONP(term2);
}

// searchWiki('Microsoft', 'Nintendo').then(res) {
//   console.log (res);
// });