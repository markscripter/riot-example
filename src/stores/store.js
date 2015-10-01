import riot from 'riot';

export default store = (control = riot.observable({})) => {
  this.control = control;

  const on = () => {
    const args = [].slice.call(arguments);
    this.control.on.apply(this, args);
  };

  const one = () => {
    const args = [].slice.call(arguments);
    this.control.one.apply(this, args);
  };

  const off = () => {
    const args = [].slice.call(arguments);
    this.control.off.apply(this, args);
  };

  const trigger = () => {
    const args = [].slice.call(arguments);
    this.control.trigger.apply(this, args);
  };
};
