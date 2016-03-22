var jsdom = require('jsdom');
var url = 'https://en.wikipedia.org/wiki/List_of_Intel_codenames';
var queryString = 'table.wikitable tr td:first-child';

var getName = function(cb) {
  jsdom.env(
    url,
    function(error, window) {
      if (!error) {
        try {
          var nodeList = window.document.querySelectorAll(queryString);
          var nodeArray = Array.prototype.slice.call(nodeList);
          var names = nodeArray.map(function(element) {
            return element.textContent;
          });

          var name = names[Math.floor(Math.random() * names.length)].replace(/ /g, '-');
        } catch (exception) {
          error = exception;
        }
      }

      if (error) cb(error, null);
      else cb(null, name);
    }
  );
};

module.exports = getName;
