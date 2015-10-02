import riot from 'riot';
import recipes from './recipes';
import dispatcher from '../utilities/dispatcher';

const recipesTemplate = `
<article class="main">
  <recipes if={stores}></recipes>
</article>`;

export default riot.tag('main', recipesTemplate, function(opts) {
  this.stores = [];

  this.on("mount", () => {
    console.log('Main mounted');
  });

  dispatcher.on("stores_updated", (stores) => {
    Array.isArray(stores) ? this.stores = stores : 1;
    this.update();
  });

});
