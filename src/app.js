import riot from 'riot';
import main from './components/main';
import Dispatcher from './utilities/dispatcher';

const dispatcher = Dispatcher;
const stores = [
  {
    title: '1 - title',
    description: '1 - description',
  },
  {
    title: '2 - title',
    description: '2 - description',
  },
  {
    title: '3 - title',
    description: '3 - description',
  },
  {
    title: '4 - title',
    description: '4 - description',
  },
];

riot.mount('main');

dispatcher.trigger('incoming_stores', stores);
