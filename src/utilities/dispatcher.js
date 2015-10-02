import stores from '../stores'

const setStores = (stores) => {
  const keys = Object.keys(stores);
  return keys.map((key) => {
    return stores[key];
  });
};

const Dispatcher = {
  stores: stores,
  _stores : setStores(stores),
  on() {
    this._stores.forEach((el) => {
      el.control.on.apply(null, [].slice.call(arguments));
    });
  },
  one() {
    this._stores.forEach((el) => {
      el.control.one.apply(null, [].slice.call(arguments));
    });
  },
  off() {
    this._stores.forEach((el) => {
      el.control.off.apply(null, [].slice.call(arguments));
    });
  },
  trigger() {
    this._stores.forEach((el) => {
      el.control.trigger.apply(null, [].slice.call(arguments));
    });
  }
}

export default Dispatcher;
