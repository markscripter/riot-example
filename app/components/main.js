import riot from 'riot';
import recipes from './recipes';
import dispatcher from '../utilities/dispatcher';

const recipesTemplate = `
<article class="main">
  <recipes data={stores.recipe.recipesData}></recipes>
</article>`;

export default riot.tag('main', recipesTemplate, function(opts) {
  this.dispatcher = opts.dispatcher || dispatcher;
  this.stores = this.dispatcher.stores;

  this.on('mount', () => {});
  this.on('update', () => {});

  this.dispatcher.on('stores_updated', () => {
    this.update();
  });

});
