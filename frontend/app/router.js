import EmberRouter from '@ember/routing/router';
import config from 'frontend/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('find');
  this.route('new');
  this.route('recipe', function(){
    this.route('view', {path: '/:pk'});
  });
   this.route('view', {path: 'recipe/:pk'});
   this.route('login');
  this.route('test');
});
