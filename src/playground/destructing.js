/*const person = {
  name: 'Allan',
  age: 23,
  location: {
    city: 'denton',
    temp: 90
  }
};

const { name, age } = person;
console.log(`${name} is ${age}`)

const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holiday',
  publisher: {

  }
}
const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);
*/

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [type, , price2, ] = item;
console.log(`A medium ${type} is ${price2}`);
