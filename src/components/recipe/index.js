import riot from 'riot';
// import recipeTemplate from './recipe.tag';
const recipeTemplate = `
<section class="recipe">
  <h1 class="recipe-title">{title}</h1>
  <p class="recipe-description">{description}</p>
</section>`;

export default riot.tag('recipe', recipeTemplate, function(opts) {
  this.title = opts.title;
  this.description = opts.description;
});
