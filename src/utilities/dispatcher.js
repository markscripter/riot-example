import stores from '../stores'

export default {

  id : Math.floor(Math.random() * 100),
  stores: stores,

  _stores : Object.keys(stores).map((key) => {
    return stores[key];
  }),
  on() {
    this._stores.forEach((el) => {
      el.on.apply(null, [].slice.call(arguments));
    });
  },
  one() {
    this._stores.forEach((el) => {
      el.one.apply(null, [].slice.call(arguments));
    });
  },
  off() {
    this._stores.forEach((el) => {
      el.off.apply(null, [].slice.call(arguments));
    });
  },
  trigger() {
    this._stores.forEach((el) => {
      el.trigger.apply(null, [].slice.call(arguments));
    });
  }
};
