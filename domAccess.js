//Using IIFE (immediately invoking function express as a way to create abstraction)
var personDOM = (function(){
  //Kind of Private within this function, cannot be accessible
  var AGE = 'age';
  var AGE_CONDITION = 'ageCondition';
  var NAME = 'name';
  var ADDRESS = 'address';
  var SEARCH_CRITERIA = 'searchCriteria';
  var PERSONS_LIST = 'personsList';
  var RANDOM_SCROLL_TEXT = 'randomScrollText';
  var SCROLL_TIME = 'scrollTime';

  var dom = new Object();

  dom.getInteger = function(name) {
    var htmlElement = document.getElementById(name);
    var returnValue = Number(0);  //default is zero?
    if (!isNaN(htmlElement.value))
      returnValue = Number(htmlElement.value);
    return returnValue;
  }
  dom.getAge = function() {
    return this.getInteger(AGE);
  }
  dom.getAgeCondition = function() {
    return this.getInteger(AGE_CONDITION);
  }
  dom.getScrollTime = function() {
    return this.getInteger(SCROLL_TIME);
  }
  
  dom.getString = function(name) {
    var htmlElement = document.getElementById(name);
    var returnValue = '';  //default is empty Name?
    if (typeof(htmlElement.value) == 'string')
      returnValue = String(htmlElement.value);
    return returnValue;
  }
  dom.getName = function() {
    return this.getString(NAME)
  }
  dom.getAddress = function() {
    return this.getString(ADDRESS);
  }

  dom.getSearchCriteria = function() {
    return this.getString(SEARCH_CRITERIA);
  }

  dom.updatePersonsList = function(newText) {
    //Updating UI in separate callback from setTimeout so your logic does not wait until UI returns
    setTimeout(function() {
      var personsListElement = document.getElementById(PERSONS_LIST);
      personsListElement.innerText = newText;
    }, 0);
  }
  dom.updateScrollText = function(newText) {
    setTimeout(function() {
      var personsListElement = document.getElementById(RANDOM_SCROLL_TEXT);
      personsListElement.innerText = newText;
      }, 0);
    
  }
  return dom;
})();
