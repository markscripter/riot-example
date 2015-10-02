import riot from 'riot';

const store = (control = riot.observable({})) => {
  return {
    control,
    on() {
      this.control.on.apply(this, [].slice.call(arguments));
    },
    one() {
      this.control.one.apply(this, [].slice.call(arguments));
    },
    off() {
      this.control.off.apply(this, [].slice.call(arguments));
    },
    trigger() {
      this.control.trigger.apply(this, [].slice.call(arguments));
    },
  };
};

export default store();
