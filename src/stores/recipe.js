import riot from 'riot';
import store from './store.js';

const recipeStore = Object.assign({
  recipesData : [],
  init() {
    this.on('incoming_recipes', async (recipes) => {
      try {
        Array.isArray(recipes) ? this.recipesData = recipes : 1;
        dispatcher.trigger('recipes_updated', this.recipesData);
      } catch (e) {
        console.log(e);
      }
    });
  }
}, store);

recipeStore.init();

export default recipeStore;
