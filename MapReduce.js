const expenses = [
    { txn: 1, desc: 'Zomato', amount: 100 },
    { txn: 2, desc: 'Amazon', amount: 200 },
    { txn: 3, desc: 'Flipkart', amount: 300 },
    { txn: 4, desc: 'Snapdeal', amount: 400 },
];

console.log(expenses);

//* Show all expenses above 200

const above200 = expenses.filter(expense => expense.amount > 200);
console.log({above200});

//* Give total expenses                                                 | initializer                                                                        
const sum = expenses.reduce((total, expense) => total + expense.amount, 0);

console.log({sum});

const highValue = expenses.filter(trans => trans.amount > 200)
.reduce((total, trans) => total + trans.amount, 0);

console.log({highValue});

//* mapping one array to antoher
const languages = ['C', 'C++', 'Python', 'Java', 'JavaScript', 'C#', 'Dart'];

const langLength = languages.map(lang => { return {[lang]: lang.length} });

console.log({langLength});

const allLanguages = languages.reduce((str, lang) => str + ", " + lang);
console.log({allLanguages});
const easy = languages.join(", ");
console.log({easy});