const obj = { id: 1, name: 'John' };


// All kyes of object stringified

obj['age'] = 30;
obj[20] = 'twenty';
obj[true] = 'true';
obj.address = 'Bangalore';

const person = {};
const employee = { id: 1, name: 'Brendan Eich' };

obj[person] = 'person';
obj[employee] = 'employee';

console.log(obj);
