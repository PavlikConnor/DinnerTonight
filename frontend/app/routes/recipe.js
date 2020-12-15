import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),
  model() {
    const store = this.get('homePageRecipe');
    return store.findAll('recipe');
  }
});
