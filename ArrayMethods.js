//* Array functional methods

const array = [11, 23, 36]

//% Functional methods of Array

array.forEach(ele => console.log(ele));

const every = array.every(ele => ele < 30);
console.log({every});

const some = array.some(ele => ele < 30);
console.log({some});

const elem = array.find(ele => ele > 20 && ele < 40);
console.log({elem})

const all = array.filter(ele => !(ele > 20 && ele < 40));
console.log({all});

//* Array can be used as variety of data structure

//% 1. Array (with index)
array[0] = 54;
console.log("array", array);

//% 2. Linked List (add more elements)
array.push(48)
console.log("linked list", array);

//% 3. Stack (last in first out LIFO  or FILO first in last out)
array.push(59)
console.log("stack", array);
const popResult = array.pop();
console.log({popResult});

//% 4. Quere (FIFO first in first out or LILO last in last out)
array.push(62);
console.log("queue", array);
const dequeueResult = array.shift();
console.log({dequeueResult});
console.log("queue", array);

//% 5. Double ended query (FI-whatever)
array.unshift(05);
console.log("dequeue", array);
const dqPop = array.pop();
console.log({dqPop});
console.timeLog("dequeue", array);
