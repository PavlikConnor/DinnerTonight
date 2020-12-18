import Ember from 'ember';
import { computed } from '@ember/object';

export default Ember.Controller.extend({
	auth: Ember.inject.service('auth-manager'),
	review: '',
	rating: 5,
	deleted:false,
	NoReview: false,
	actions:{
		submitReview: function(){
			var cont = this;
			cont.set('NoReview',false);
			var pk = this.get('pk');
			var review = this.get('review');
			var rating = this.get('rating');
			console.log(pk);console.log(review);console.log(rating);
			if(review != ''){
				var data = {
					'recipeId': pk,
					'recipeReview': review,
					'recipeRating': rating};
					console.log(data);
				Ember.$.post('/api/reviews', data, function(response){

						if(response.success == true){
							window.location.reload(true);
						} else{
							//errors
							console.log('Login POST Request to /reviews/ was unsuccessful.');

						}
					});
			}
			else{
				cont.set('NoReview',true);
			}
		},
		report: function(id){

			var cont = this;
			var data = {'id': id};
			Ember.$.post('/api/reportReview', data, function(response){

					if(response.success == true){
						cont.set('deleted', true);
						setTimeout(function () {
        			cont.set('deleted', false);
    				}, 3000);
						//window.location.reload(true);
					} else{
						//errors
						console.log('Login POST Request to /reportReview/ was unsuccessful.');

					}
				});
		}
	}
});
