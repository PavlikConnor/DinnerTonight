import Ember from 'ember';

export default Ember.Controller.extend({
	auth: Ember.inject.service('auth-manager'),
	actions:{
		login: function(){
			this.get('auth').login();
		},
		logout: function(){
			this.get('auth').logout();
		}
	}
});

// import Ember from 'ember';
//
// export default Ember.Controller.extend({
//   loginFailed: false,
//   isProcessing: false,
//
//   actions: {
//     login: function() {
//       this.setProperties({
//         loginFailed: false,
//         isProcessing: true
//       });
//
//       $.post("http://localhost/api/session", {
//         username: this.get("username"),
//         password: this.get("password")
//       }).then(function() {
//         this.set("isProcessing", false);
//         //this.set('user_id', response.user_id)
//         document.location = "/new";
//       }.bind(this), function() {
//         this.set("isProcessing", false);
//         this.set("loginFailed", true);
//       }.bind(this));
//     }
//   }
// });
// import Controller from '@ember/controller';
// import { inject as service } from '@ember/service';
// import { action } from "@ember/object";
// import { tracked } from "@glimmer/tracking";
//
// export default class LoginController extends Controller {
//   @tracked errorMessage;
//   @service session;
//
//   @action
//   async authenticate(e) {
//     e.preventDefault();
//     let { identification, password } = this;
//     try {
//       await this.session.authenticate('authenticator:oauth2', identification, password);
//     } catch(error) {
//       this.errorMessage = error.error || error;
//     }
//
//     if (this.session.isAuthenticated) {
//       // What to do with all this success?
//     }
//   }
//
//   @action
//   updateIdentification(e) {
//     this.identification = e.target.value;
//   }
//
//   @action
//   updatePassword(e) {
//     this.password = e.target.value;
//   }
// }
