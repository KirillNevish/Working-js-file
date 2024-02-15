const person = {
    name: 'John',
    age: 25,
    occupation: 'Developer'
};

for(let key in person){
    console.log(`${key} ${person[key]}`);
}