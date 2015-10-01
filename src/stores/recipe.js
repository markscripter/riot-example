import riot from 'riot';
import store from './store.js';

const RecipesStore = () => {
  const recipeStore = Object.assign({}, store());

  recipeStore.on('update', async (recipes) => {
    try {
      console.log(recipes);
    } catch (e) {
      console.log(e);
    }
  });

  return recipeStore;
};

const instance = RecipesStore();
export default instance;
