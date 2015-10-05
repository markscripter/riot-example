import riot from 'riot';
import store from './store';

const mainStore = Object.assign({}, {
  stores: [],
  listen() {
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

mainStore.listen();
export default mainStore;
