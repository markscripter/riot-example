import riot from 'riot';

export default store = (control = riot.observable({})) => {
  return {
    control: control,
    on() {
      const args = [].slice.call(arguments);
      this.control.on.apply(this, args);
    },

    one() {
      const args = [].slice.call(arguments);
      this.control.one.apply(this, args);
    },

    off() {
      const args = [].slice.call(arguments);
      this.control.off.apply(this, args);
    },

    trigger() {
      const args = [].slice.call(arguments);
      this.control.trigger.apply(this, args);
    },
  };
};
