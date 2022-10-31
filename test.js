const { JSDOM } = require("jsdom");
let wage;

var assert = require('assert');

// test ability to set wage
describe('setWage', function () {
  describe('#setWage()', function () {
    before(function() {
        return JSDOM.fromFile("main.html", {url: "https://localhost?wage=36.00"})
        .then((dom) => {
           global.window = dom.window;
           global.document = dom.window.document; 
           queryString = global.window.location.search;
           urlParams = new URLSearchParams(queryString);
           wage = parseFloat(urlParams.get('wage'));
        });
    })
    
    it('wage should be set to $36/hr', function () {
      //console.log(global.window.location.search);
      //console.log(global.document.getElementById("end").innerHTML);
      assert.equal(wage, 36.00);
    });
  });
});

// test initial dollar and cent values
describe('testInit', function () {
  describe('#testInit()', function () {
    before(function() {
        return JSDOM.fromFile("main.html", {url: "https://localhost?wage=36.00"})
        .then((dom) => {
           global.window = dom.window;
           global.document = dom.window.document; 
        });
    })
    
    it('should be initialized to zero', function () {
      //console.log(global.document.getElementById("dollars").innerHTML);
      //console.log(global.document.getElementById("cents").innerHTML);
      
      dollars = global.document.getElementById("dollars").innerHTML;
      cents = global.document.getElementById("cents").innerHTML
      
      assert.equal(dollars, 0);
      assert.equal(cents, 00);
    });
  });
});

/*
// test changed dollar and cent values - for later release
describe('testCount', function () {
  describe('#testCount()', function () {
    before(function() {
        return JSDOM.fromFile("main.html", {url: "https://localhost?wage=36.00"})
        .then((dom) => {
           global.window = dom.window;
           global.document = dom.window.document; 
        });
    })

    it('ten cents should be earned after ten seconds', function () {
      
      //console.log(global.document.getElementById("dollars").innerHTML);
      //console.log(global.document.getElementById("cents").innerHTML);
      
      dollars = global.document.getElementById("dollars").innerHTML;
      cents = global.document.getElementById("cents").innerHTML

      setTimeout(function(){
        assert.equal(dollars, 0);
        assert.equal(cents, 10);
      }, 10000)
    
    });
  });
});
*/
