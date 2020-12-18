import Ember from 'ember';

export default Ember.Controller.extend({
	auth: Ember.inject.service('auth-manager'),
	review: '',
	rating: 5,
	actions:{
		submitReview: function(){
			var pk = this.get('pk');
			var review = this.get('review');
			var rating = this.get('rating');
			console.log(pk);console.log(review);console.log(rating);

			var data = {
				'recipeId': pk,
				'recipeReview': review,
				'recipeRating': rating};
				console.log(data);
			Ember.$.post('http://localhost/api/reviews', data, function(response){

					if(response.success == true){
						window.location.reload(true);
					} else{
						//errors
						console.log('Login POST Request to /api/reviews/ was unsuccessful.');

					}
				});
		}
	}
});
