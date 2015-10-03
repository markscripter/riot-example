import riot from 'riot';
import dispatcher from '../../utilities/dispatcher';

const recipeTemplate = `
<section class="recipe">
  <h1 class="recipe-title">{title}</h1>
  <p class="recipe-description">{description}</p>
</section>`;

export default riot.tag('recipe', recipeTemplate, function(opts) {
  this.on("mount", () => {});
  this.on("update", () => {});

  this.title = opts.title;
  this.description = opts.description;
});
