import riot from 'riot';
import store from './store';
import dispatcher from '../utilities/dispatcher';

const mainStore = Object.assign({
  stores : [],
  init() {
    this.on('incoming_stores', async (stores) => {
      try {
        Array.isArray(stores) ? this.stores = stores : 1;
        dispatcher.trigger('stores_updated', this.stores);
      } catch (e) {
        console.log(e);
      }
    });
  }
}, store);

mainStore.init();
export default mainStore;
