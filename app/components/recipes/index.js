import riot from 'riot';
import recipe from '../recipe';
import dispatcher from '../../utilities/dispatcher';
import recipesTemplate from './template';

export default riot.tag('recipes', recipesTemplate, function(opts) {
  this.dispatcher = opts.dispatcher || dispatcher;
  this.stores = this.dispatcher.stores;
  this.recipesData = this.stores.recipe.recipesData;

  this.on('mount', () => {});
  this.on('update', () => {});

  this.updateItems = (event) => {
    fetch('/recipes').then((response) => {
      return response.json();
    }).then((data) => {
      this.dispatcher.trigger('incoming_recipes', {recipes: data});
    });
  };

  this.dispatcher.on('recipes_data_updated', () => {
    this.storesData = this.stores.recipe.recipesData;
    this.update();
  });
});
