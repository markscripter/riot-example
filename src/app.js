import riot from 'riot';
import recipe from './components/recipes';

riot.mount('recipes', {
  items: [
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
  ],
});
