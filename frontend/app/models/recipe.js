import DS from 'ember-data';

export default DS.Model.extend({
  recipeName: DS.attr(),
  description: DS.attr(),
  directions: DS.attr()
});
