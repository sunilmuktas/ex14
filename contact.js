function Contact() {
};
Contact.name = "";
Contact.age = "";
Contact.address = ""; //Can Address be separate class?
//Q. In address class have fields like House Number, street Name, City, State, ZipCode
Contact.prototype.init = function(name, age, address) {
  this.name = name;
  this.age = Number(age);
  this.address = address;
}
Contact.prototype.describe = function() {
  var description = "==>Person Name is ";
    description += this.name;
    description += " and person age is ";
    description += String(this.age);
    description += " and address is ";
    description += String(this.address);
    description += "\n"; //Hack, should not do it 

    return description;
}

