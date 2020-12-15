import Component from '@glimmer/component';

export default Ember.Component.extend({
  auth: Ember.inject.service('auth-manager'),


    actions : {
      test: function(){
  			console.log(this.get('auth').userid);
  		},
  		logout: function(){
  			this.get('auth').logout();
  		}
    }
});
// export default class NavBarComponent extends Component {
//   auth = Ember.inject.service('auth-manager');
//   get logout() {
//       this.get('auth').logout();
//     }
//   get test(){
//     console.log(auth.userid);
//   }
// }
