import riot from 'riot';
import store from './store.js';
import dispatcher from '../utilities/dispatcher';

const MainStore = () => {
  let mainStore = Object.assign({}, store);

  mainStore.stores = [];

  mainStore.on('incoming_stores', async (stores) => {
    try {
      Array.isArray(stores) ? this.stores = stores : 1;
      dispatcher.trigger('stores_updated', this.stores);
    } catch (e) {
      console.log(e);
    }
  });

  return mainStore;
};

export default MainStore();
