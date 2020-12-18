import Ember from 'ember';

export default Ember.Controller.extend({
	auth: Ember.inject.service('auth-manager'),
	actions:{
		register: function(){
			this.get('auth').register();
		}
	}
});
