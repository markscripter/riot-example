import riot from 'riot';
import store from './store.js';

const RecipesStore = () => {
  let recipeStore = Object.assign({}, store);

  recipeStore.recipesData = [];

  recipeStore.on('incoming_recipes', async (recipes) => {
    try {
      Array.isArray(recipes) ? this.recipesData = recipes : 1;
      this.trigger('recipes_data_updated');
    } catch (e) {
      console.log(e);
    }
  });

  return recipeStore;
};

export default RecipesStore();
