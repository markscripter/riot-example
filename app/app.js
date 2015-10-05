import riot from 'riot';
import main from './components/main';
import dispatcher from './utilities/dispatcher';

const recipes = [
  {
    title: '1 - title',
    description: '1 - description',
  },
];

const recipes2 = [
  {
    title: '2 - title',
    description: '2 - description',
  },
];

const recipes3 = [
  {
    title: '3 - title',
    description: '3 - description',
  },
];

const recipes4 = [
  {
    title: '4 - title',
    description: '4 - description',
  },
];

riot.mount('main', {dispatcher});

dispatcher.trigger('incoming_recipes', {recipes});

setTimeout(() => {
  recipes2.forEach((el) => {
    recipes.push(el);
  });
  dispatcher.trigger('incoming_recipes', {recipes});
}, 500);


setTimeout(() => {
  recipes3.forEach((el) => {
    recipes.push(el);
  });
  dispatcher.trigger('incoming_recipes', {recipes});
}, 1000);

setTimeout(() => {
  recipes4.forEach((el) => {
    recipes.push(el);
  });
  dispatcher.trigger('incoming_recipes', {recipes});
}, 1500);


setTimeout(() => {
  recipes.shift();
  dispatcher.trigger('incoming_recipes', {recipes});
}, 2000);
