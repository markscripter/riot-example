import riot from 'riot';
import dispatcher from '../../utilities/dispatcher';
import recipeTemplate from './template';

export default riot.tag('recipe', recipeTemplate, function(opts) {
  this.on('mount', () => {});
  this.on('update', () => {});

  this.name = opts.name;
  this.description = opts.description;
});
