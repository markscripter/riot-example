import riot from 'riot';
import store from './store';

const mainStore = Object.assign({}, {
  stores: [],
  init() {
    this.on('incoming_stores', async (data) => {
      try {
        Array.isArray(stores) ? this.stores = stores : 1;
        this.trigger('stores_updated');
      } catch (e) {
        console.log(e);
      }
    });
  }
}, store);

mainStore.init();
export default mainStore;
