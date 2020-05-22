var Contacts = [] ;//Empty Array. This is supposed to hold Persons Objects
var scrollTimerId = -1;
var isScrollOn = false;
//Q. Can you creat new function to take many contacts in single function
//input can be from json text

function addPerson (){
  //1. Get Contact details from DOM
  //used domAccess.js file methods
  //2. Create contact Object
  var contact = new Contact();
  contact.init(personDOM.getName(), personDOM.getAge(), personDOM.getAddress());

  //3.Add it to the list
  Contacts.push(contact);
}

function getByAgeCondition() {
  //Using setTimeout since this logic to search
  //a person by Age might take more time
  //By using setTimeout, we are freeing the original 'Click' call-stack
  //So that UI looks fluid
  setTimeout( function() {
    //1. Get Age condition using html input ageCondition
    var ageCondition = personDOM.getAgeCondition();
    //2. if Age is zero get all persons description
    var tempList = Contacts;
    if (ageCondition != 0) {
      tempList = tempList.filter(function(person) {
        return person.age <= ageCondition;
      });
    }
    //3. if age is some value, filter persons whose age is lower than given
    var personsList = "";
    for( contact of tempList) { //This is ES6 for loop
      personsList += contact.describe();
    }

    //4. update personsList
    var listElement = personDOM.updatePersonsList(personsList);
  }, 0);
}

//Please fill code
function getBySearchCondition() {

}

function updatePersonData(){
    if (Contacts.length > 0) {
      var ind = Math.floor(Math.random() * Math.floor(Contacts.length));
      ind = ind % Contacts.length;
      personDOM.updateScrollText(Contacts[ind].describe());
    }
    if(isScrollOn){
      scrollTimerId = setTimeout(updatePersonData, scrollTime*1000); //multiply by 1000 to make it in milli seconds 
    }
}

function onStartScroll() {
  isScrollOn = true;
  var scrollTime = personDOM.getScrollTime();
  // onStopScroll();
  if (scrollTimerId != -1) {
    clearTimeout(scrollTimerId);
    }
  scrollTimerId = setTimeout(updatePersonData, scrollTime*1000); //multiply by 1000 to make it in milli seconds
}

function onStopScroll() {
  isScrollOn = false;
  if (scrollTimerId != -1) {
  clearTimeout(scrollTimerId);
  }
  // if (scrollTimerId != -1) {
  //   clearInterval(scrollTimerId);
  // }
  // scrollTimerId = -1;
}