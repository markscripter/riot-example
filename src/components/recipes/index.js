import riot from 'riot';
import recipe from '../recipe';

const recipesTemplate = `
<section class="recipes">
  <recipe each={recipes}></recipe>
</section>`;

export default riot.tag('recipes', recipesTemplate, function(opts) {
  this.recipes = opts.items;
});
