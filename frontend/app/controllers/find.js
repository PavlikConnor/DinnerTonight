import Ember from 'ember';

export default Ember.Controller.extend({
	ingredients: "",
	actions:{
		another: function() {
			if(ingredient.value != ''){
				console.log(ingredient.value);
				if(this.ingredients == ""){
					this.set('ingredients',ingredient.value);
				}
				else {
					this.set('ingredients',this.ingredients + ', ' + ingredient.value);
				}
				// this.ingredients += ', ' + this.ingredient;
				console.log(this.ingredients);
				ingredient.value = '';
			}
		}
	}
});
