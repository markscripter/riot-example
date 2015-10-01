import riot from 'riot';
import recipe from '../recipe';

const recipesTemplate = `
<section class="recipes">
  <recipe each={recipes}></recipe>
  <button onclick={updateItems}>Update</button>
</section>`;

export default riot.tag('recipes', recipesTemplate, function(opts) {
  this.recipes = opts.items;

  this.updateItems = function() {
    this.recipes = [
      {
        title: '1 - New',
        description: '1 - New description',
      },
      {
        title: '2 - title',
        description: '2 - hi',
      },
      {
        title: '3 - eg',
        description: '3 - age',
      },
      {
        title: '4 - titlagee',
        description: '4 - descriptions',
      },
    ];
  };
});
