import Ember from 'ember';

export default Ember.Controller.extend({
	auth: Ember.inject.service('auth-manager'),
	ajax: Ember.inject.service(),
	ingredients: "",
	ingredientsArray: [],
	ingError: false,
	actions:{
		another: function() {
			this.set('ingError', false);
			if(ingredient.value != '' && unit.value != '' && Number.isInteger(parseInt(amount.value)) && parseInt(amount.value) > 0){
				//console.log(ingredient.value);
				if(this.ingredients == ""){
					this.set('ingredients',ingredient.value);
				}
				else {
					this.set('ingredients',this.ingredients + ', ' + ingredient.value);
				}
				this.ingredientsArray.push({'ingredientName': ingredient.value, 'amount':amount.value, 'unit':unit.value});
				ingredient.value = '';
				amount.value = '';
				unit.value = '';
			}
			else if(parseInt(amount.value) <= 0 || !Number.isInteger(parseInt(amount.value))){
				this.set('ingErrorMess', "Amount must be a positive integer");
				this.set('ingError', true);
			}
			else{
				this.set('ingErrorMess', "Ingredient currently being entered does not have a name, amount and unit.");
				this.set('ingError', true);
			}
		},
		submit: function(){
			var cont = this;
			this.set('subError', false);
			if(this.ingredientsArray.length > 0 && recipeName.value != '' && recipeDescription.value != '' && recipeDirections.value != '')
			{
				var data = JSON.stringify({
					'recipeName':recipeName.value,
					'description': recipeDescription.value,
    			'directions':recipeDirections.value,
					'ingredients': this.ingredientsArray
				});
				console.log(this.ingredientsArray);
				console.log(data);
				cont.set('noresults',false);
				Ember.$.ajax({
					contentType: 'application/json',
  				method: "POST",
  				url: "/api/recipe",
  				data: data
				}).done(function(response){
					cont.set('recipes',[]);
						if(response.success == true){
							document.location = "/frontend/recipe/"+response.id;
						}
						else{
							//errors
							console.log('Login POST Request to /api/search/ was unsuccessful.');

						}
					});
			}
			else if(this.ingredientsArray.length <= 0){
				this.set('subErrorMess', "Must have at least one ingredient before submitting");
				this.set('subError', true);
			}
			else{
				this.set('subErrorMess', "Recipe must have a name, description, and directions before submitting");
				this.set('subError', true);
			}

		},
		clear: function(){
			var cont = this;
			cont.set('ingError', false);
			cont.set('ingredients',"");
			cont.set('ingredientsArray',[]);
			cont.set('recipes',[]);
		}
	}
});
