import riot from 'riot';
import recipe from '../recipe';
import dispatcher from '../../utilities/dispatcher';

const recipesTemplate = `
<section class="recipes">
  <recipe each={storesData}></recipe>
  <button onclick={updateItems}>Update</button>
</section>`;

export default riot.tag('recipes', recipesTemplate, function(opts) {
  this.storesData = opts.data;

  this.on("mount", () => {
    console.log('Recipes mounted');
  });

  dispatcher.on("recipes_data_updated", () => {
    this.storesData = this.stores.recipe.recipesData;
    this.update();
  }.bind(this));
});
