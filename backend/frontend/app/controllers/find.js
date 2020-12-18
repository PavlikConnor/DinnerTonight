import Ember from 'ember';
import { notEmpty } from '@ember/object/computed';

export default Ember.Controller.extend({
	ingredients: "",
	noresults: false,
	// recipes: [],
	actions:{
		another: function() {
			if(ingredient.value != ''){
				//console.log(ingredient.value);
				if(this.ingredients == ""){
					this.set('ingredients',ingredient.value);
				}
				else {
					this.set('ingredients',this.ingredients + ', ' + ingredient.value);
				}
				// this.ingredients += ', ' + this.ingredient;
				//onsole.log(this.ingredients);
				ingredient.value = '';
			}
		},
		search: function(){
			var cont = this;
			var data = {
				'ingredients': this.ingredients
			};
			cont.set('noresults',false);
			Ember.$.post('/api/search', data, function(response){
				cont.set('recipes',[]);
					if(response.length == 0){
						cont.set('noresults',true);
					}
					else if(response.length > 0){
						cont.set('recipes',response);
						console.log(cont.get('recipes'));
						console.log(response);
					}
					else{
						//errors
						console.log('Login POST Request to /api/search/ was unsuccessful.');

					}
				});
		},
		clear: function(){
			var cont = this;
			cont.set('noresults',false);
			cont.set('ingredients',"");
			cont.set('recipes',[]);
		}
	}
});
