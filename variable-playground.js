var person = {
    name: 'Harsh',
    age: 27
    
};

function updatePerson(obj) {
     /*obj = {
        name: 'Harsh',
        age: 23
     };*/
     obj.age=23;
}
updatePerson(person);
console.log(person);