import riot from 'riot';
import store from './store';

const recipeStore = Object.assign({}, {
  recipesData: [{title: 't'}],
  init() {
    this.on('incoming_recipes', async (data) => {
      try {
        Array.isArray(data.recipes) ? this.recipesData = data.recipes : 1;
        this.trigger('recipes_data_updated');
      } catch (e) {
        console.log(e);
      }
    });
  }
}, store);

recipeStore.init();
export default recipeStore;
