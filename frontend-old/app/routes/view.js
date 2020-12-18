import Route from '@ember/routing/route';
import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  async model(params) {
    let recipe = (await this.get('ajax').request('http://localhost/api/recipe/'+params.pk))[0];
    //console.log(recipe);
    let ingredients = await this.get('ajax').request('http://localhost/api/ingredients/'+params.pk);
    //console.log(ingredients);
    let recIngredients = await this.get('ajax').request('http://localhost/api/recIngredients/'+params.pk);
    //console.log(recIngredients);
    let reviews = await this.get('ajax').request('http://localhost/api/reviews/'+params.pk);
    recIngredients.forEach(x => x.fields.ingredient = ingredients.find(y => y.pk == x.fields.ingredient).fields.ingredientName);
    console.log({"recipe":recipe,"ingredients":recIngredients,"reviews":reviews});
    return {"recipe":recipe,"ingredients":recIngredients,"reviews":reviews};
  },
  setupController(controller, model) {
    this._super(...arguments);
    controller.set('pk', model.recipe.pk);
  }
});
