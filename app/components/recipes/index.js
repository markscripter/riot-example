import riot from 'riot';
import recipe from '../recipe';
import dispatcher from "../../utilities/dispatcher";

const recipesTemplate = `
<section class="recipes">
  <recipe each={storesData}></recipe>
  <button onclick={updateItems}>Update</button>
</section>`;

export default riot.tag('recipes', recipesTemplate, function(opts) {
  this.dispatcher = opts.dispatcher || dispatcher;
  this.stores = this.dispatcher.stores;
  this.recipesData = this.stores.recipe.recipesData;

  this.on("mount", () => {});
  this.on("update", () => {});

  this.dispatcher.on("recipes_data_updated", () => {
    this.storesData = this.stores.recipe.recipesData;
    this.update();
  });
});
