function createObject()
{
    //person = new Object();
    person = {}; // the bove statement and this are same
    person.name = "Ravi";
    person.age = 40;
    person.designation = "Software Engineer";

    return person;
}

var pers = createObject();
console.log(pers);

function createObject1()
{
    //person = new Object();
    person = {}; // the bove statement and this are same
    person['name'] = "Sai";
    person['age'] = 37;
    person['designation'] = "Software Engineer";

    return person;
}

pers = createObject1();
console.log(pers.name);

function createObject2()
{
    //person = new Object();
    var person = {name: "Nikhil", age:10, desination: "5th Student"}; // the bove statement and this are same
    
    return person;
}

pers = createObject2();
console.log(pers.name);

function Person()
{
    this.name = "Lakshman";
    this.age = 5;
    this.designation = "Kindergarten kid";
}

var persn = new Person();
console.log(persn.name);

var myPerson = {
            gender:"Male",
            getGender: function(){alert("gender is :"+this.gender);} 
            }
var Ps = Object.create(myPerson);
Ps.gender = "Female";
Ps.getGender();