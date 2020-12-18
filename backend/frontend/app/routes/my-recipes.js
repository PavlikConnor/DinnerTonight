import Route from '@ember/routing/route';
import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  async model() {
    return this.get('ajax').request('/myRecipes');
  }
});
