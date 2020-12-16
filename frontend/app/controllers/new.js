import Ember from 'ember';

export default Ember.Controller.extend({
	auth: Ember.inject.service('auth-manager'),
	ingredients: "Test",
	actions:{
		another: function() {
			if(ingredient.value != ''){
				console.log(ingredient.value);
				this.set('ingredients',this.ingredients + ', ' + ingredient.value);
				// this.ingredients += ', ' + this.ingredient;
				console.log(this.ingredients);
				ingredient.value = '';
			}
		}
	}
});
