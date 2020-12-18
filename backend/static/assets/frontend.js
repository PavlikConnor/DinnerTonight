'use strict';



;define("frontend/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("frontend/adapters/application", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  //export default DS.RESTAdapter.extend({
  // host: computed(function(){
  //   return 'http://localhost:80';
  // }),
  // namespace: 'api'
  var ApplicationAdapter = _emberData.default.RESTAdapter.extend({
    host: 'http://localhost:80',
    namespace: 'api'
  });

  var _default = ApplicationAdapter;
  _exports.default = _default;
});
;define("frontend/app", ["exports", "ember-resolver", "ember-load-initializers", "frontend/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("frontend/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("frontend/components/jumbo", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="jumbotron center">
    {{yield}}
  </div>
  
  */
  {
    "id": "pDNGziFz",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[10,\"div\"],[14,0,\"jumbotron center\"],[12],[2,\"\\n  \"],[18,1,null],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "frontend/components/jumbo.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("frontend/components/nav-bar", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <LinkTo @route="index" style="float:left" class="navbar-brand">
      <h1>DinnerTonight</h1>
    </LinkTo>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <LinkTo @route="find" class="nav-link">
          Find Dinner
        </LinkTo>
        {{#if auth.isLoggedIn}}
        <LinkTo @route="new" class="nav-link">
          New Dinner
        </LinkTo>
        <LinkTo @route="myRecipes" class="nav-link">
          My Recipes
        </LinkTo>
        {{/if}}
  
      </ul>
      <div class="form-inline my-2 my-lg-0 navbar-nav">
        {{#if auth.isLoggedIn}}
          <div class="nav-link">Logged in as: {{auth.username}}</div>
          <div class="nav-link"><a {{action "logout"}}> Logout</a></div>
        {{else}}
          <LinkTo @route="register" class="nav-link">
            Register
          </LinkTo>
          <LinkTo @route="login" class="nav-link">
            Login
          </LinkTo>
        {{/if}}
      </div>
    </div>
  </nav>
  <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
    <LinkTo @route="index" style="float:left" class="navbar-brand">
      <h1>DinnerTonight</h1>
    </LinkTo>
    <div class="links" style="margin-top:20px">
      <LinkTo @route="find" class="nav-link">
        Find Dinner
      </LinkTo>
      {{#if auth.isLoggedIn}}
      <LinkTo @route="new" class="nav-link">
        New Dinner
      </LinkTo>
      {{/if}}
      <!-- <LinkTo @route="login" class="menu-login">
        Login
      </LinkTo> -->
      <!-- {{#if this.session.isAuthenticated}}
      <a {{on "click" this.invalidateSession}}>Logout</a>
      {{else}}
        {{#link-to 'login'}}Login{{/link-to}}
      {{/if}} ->
  
  
    </div>
    <div class="login" style="float:right;margin-top:10px">
      {{#if auth.isLoggedIn}}
        <h2>Logged in as: {{auth.username}} <a {{action "logout"}}>Logout</a></h2>
      {{else}}
        <LinkTo @route="register" style="margin-top:5px">
          Register
        </LinkTo>
        <LinkTo @route="login" style="margin-top:5px">
          Login
        </LinkTo>
      {{/if}}
    </div>
  </nav> -->
  
  */
  {
    "id": "90vPC5SO",
    "block": "{\"symbols\":[],\"statements\":[[10,\"nav\"],[14,0,\"navbar navbar-expand-lg navbar-light bg-light\"],[12],[2,\"\\n  \"],[8,\"link-to\",[[24,5,\"float:left\"],[24,0,\"navbar-brand\"]],[[\"@route\"],[\"index\"]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[10,\"h1\"],[12],[2,\"DinnerTonight\"],[13],[2,\"\\n  \"]],\"parameters\":[]}]]],[2,\"\\n  \"],[10,\"button\"],[14,0,\"navbar-toggler\"],[14,\"data-toggle\",\"collapse\"],[14,\"data-target\",\"#navbarSupportedContent\"],[14,\"aria-controls\",\"navbarSupportedContent\"],[14,\"aria-expanded\",\"false\"],[14,\"aria-label\",\"Toggle navigation\"],[14,4,\"button\"],[12],[2,\"\\n    \"],[10,\"span\"],[14,0,\"navbar-toggler-icon\"],[12],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"collapse navbar-collapse\"],[14,1,\"navbarSupportedContent\"],[12],[2,\"\\n    \"],[10,\"ul\"],[14,0,\"navbar-nav mr-auto\"],[12],[2,\"\\n      \"],[8,\"link-to\",[[24,0,\"nav-link\"]],[[\"@route\"],[\"find\"]],[[\"default\"],[{\"statements\":[[2,\"\\n        Find Dinner\\n      \"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,2],[[35,0,[\"isLoggedIn\"]]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[8,\"link-to\",[[24,0,\"nav-link\"]],[[\"@route\"],[\"new\"]],[[\"default\"],[{\"statements\":[[2,\"\\n        New Dinner\\n      \"]],\"parameters\":[]}]]],[2,\"\\n      \"],[8,\"link-to\",[[24,0,\"nav-link\"]],[[\"@route\"],[\"myRecipes\"]],[[\"default\"],[{\"statements\":[[2,\"\\n        My Recipes\\n      \"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"form-inline my-2 my-lg-0 navbar-nav\"],[12],[2,\"\\n\"],[6,[37,2],[[35,0,[\"isLoggedIn\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[10,\"div\"],[14,0,\"nav-link\"],[12],[2,\"Logged in as: \"],[1,[35,0,[\"username\"]]],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"nav-link\"],[12],[11,\"a\"],[4,[38,1],[[32,0],\"logout\"],null],[12],[2,\" Logout\"],[13],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"        \"],[8,\"link-to\",[[24,0,\"nav-link\"]],[[\"@route\"],[\"register\"]],[[\"default\"],[{\"statements\":[[2,\"\\n          Register\\n        \"]],\"parameters\":[]}]]],[2,\"\\n        \"],[8,\"link-to\",[[24,0,\"nav-link\"]],[[\"@route\"],[\"login\"]],[[\"default\"],[{\"statements\":[[2,\"\\n          Login\\n        \"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[3,\" <nav class=\\\"navbar navbar-expand-lg navbar-light bg-light\\\">\\n\\n  <LinkTo @route=\\\"index\\\" style=\\\"float:left\\\" class=\\\"navbar-brand\\\">\\n    <h1>DinnerTonight</h1>\\n  </LinkTo>\\n  <div class=\\\"links\\\" style=\\\"margin-top:20px\\\">\\n    <LinkTo @route=\\\"find\\\" class=\\\"nav-link\\\">\\n      Find Dinner\\n    </LinkTo>\\n{{#if auth.isLoggedIn}}\\n    <LinkTo @route=\\\"new\\\" class=\\\"nav-link\\\">\\n      New Dinner\\n    </LinkTo>\\n    {{/if}}    <!-- <LinkTo @route=\\\"login\\\" class=\\\"menu-login\\\">\\n      Login\\n    </LinkTo> \"],[2,\"\\n    \"],[3,\" {{#if this.session.isAuthenticated}}\\n    <a {{on \\\"click\\\" this.invalidateSession}}>Logout</a>\\n    {{else}}\\n      {{#link-to 'login'}}Login{{/link-to}}\\n    {{/if}} ->\\n\\n\\n  </div>\\n  <div class=\\\"login\\\" style=\\\"float:right;margin-top:10px\\\">\\n{{#if auth.isLoggedIn}}\\n      <h2>Logged in as: {{auth.username}} <a {{action \\\"logout\\\"}}>Logout</a></h2>\\n    {{else}}\\n      <LinkTo @route=\\\"register\\\" style=\\\"margin-top:5px\\\">\\n        Register\\n      </LinkTo>\\n      <LinkTo @route=\\\"login\\\" style=\\\"margin-top:5px\\\">\\n        Login\\n      </LinkTo>\\n    {{/if}}  </div>\\n</nav> \"],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"auth\",\"action\",\"if\"]}",
    "meta": {
      "moduleName": "frontend/components/nav-bar.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember.Component.extend({
    auth: Ember.inject.service('auth-manager'),
    actions: {
      test: function () {
        console.log(this.get('auth').userid);
      },
      logout: function () {
        this.get('auth').logout();
      }
    }
  })); // export default class NavBarComponent extends Component {
  //   auth = Ember.inject.service('auth-manager');
  //   get logout() {
  //       this.get('auth').logout();
  //     }
  //   get test(){
  //     console.log(auth.userid);
  //   }
  // }


  _exports.default = _default;
});
;define("frontend/components/recipe", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <article class="recipe">
    <div class="details">
      <h4>
        <!-- <LinkTo @route="recipe.view" @model={{@recipe}}
          class="menu-find-dinner">{{@recipe.fields.recipeName}}
        </LinkTo> -->
        <a href="./recipe/{{@recipe.pk}}"
          class="menu-find-dinner">{{@recipe.fields.recipeName}}
        </a>
      </h4>
      <div class="recipe description">
        <span>Description:</span> {{@recipe.fields.description}}
      </div>
    </div>
  </article>
  
  */
  {
    "id": "YznOztw6",
    "block": "{\"symbols\":[\"@recipe\"],\"statements\":[[10,\"article\"],[14,0,\"recipe\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"details\"],[12],[2,\"\\n    \"],[10,\"h4\"],[12],[2,\"\\n      \"],[3,\" <LinkTo @route=\\\"recipe.view\\\" @model={{@recipe}}\\n        class=\\\"menu-find-dinner\\\">{{@recipe.fields.recipeName}}\\n      </LinkTo> \"],[2,\"\\n      \"],[10,\"a\"],[15,6,[31,[\"./recipe/\",[32,1,[\"pk\"]]]]],[14,0,\"menu-find-dinner\"],[12],[1,[32,1,[\"fields\",\"recipeName\"]]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"recipe description\"],[12],[2,\"\\n      \"],[10,\"span\"],[12],[2,\"Description:\"],[13],[2,\" \"],[1,[32,1,[\"fields\",\"description\"]]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "frontend/components/recipe.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("frontend/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("frontend/controllers/find", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    ingredients: "",
    noresults: false,
    // recipes: [],
    actions: {
      another: function () {
        if (ingredient.value != '') {
          //console.log(ingredient.value);
          if (this.ingredients == "") {
            this.set('ingredients', ingredient.value);
          } else {
            this.set('ingredients', this.ingredients + ', ' + ingredient.value);
          } // this.ingredients += ', ' + this.ingredient;
          //onsole.log(this.ingredients);


          ingredient.value = '';
        }
      },
      search: function () {
        var cont = this;
        var data = {
          'ingredients': this.ingredients
        };
        cont.set('noresults', false);
        Ember.$.post('/api/search', data, function (response) {
          cont.set('recipes', []);

          if (response.length == 0) {
            cont.set('noresults', true);
          } else if (response.length > 0) {
            cont.set('recipes', response);
            console.log(cont.get('recipes'));
            console.log(response);
          } else {
            //errors
            console.log('Login POST Request to /api/search/ was unsuccessful.');
          }
        });
      },
      clear: function () {
        var cont = this;
        cont.set('noresults', false);
        cont.set('ingredients', "");
        cont.set('recipes', []);
      }
    }
  });

  _exports.default = _default;
});
;define("frontend/controllers/login", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    auth: Ember.inject.service('auth-manager'),
    actions: {
      login: function () {
        this.get('auth').login();
      },
      logout: function () {
        this.get('auth').logout();
      }
    }
  });

  _exports.default = _default;
});
;define("frontend/controllers/new", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    auth: Ember.inject.service('auth-manager'),
    ajax: Ember.inject.service(),
    ingredients: "",
    ingredientsArray: [],
    ingError: false,
    actions: {
      another: function () {
        this.set('ingError', false);

        if (ingredient.value != '' && unit.value != '' && Number.isInteger(parseInt(amount.value)) && parseInt(amount.value) > 0) {
          //console.log(ingredient.value);
          if (this.ingredients == "") {
            this.set('ingredients', ingredient.value);
          } else {
            this.set('ingredients', this.ingredients + ', ' + ingredient.value);
          }

          this.ingredientsArray.push({
            'ingredientName': ingredient.value,
            'amount': amount.value,
            'unit': unit.value
          });
          ingredient.value = '';
          amount.value = '';
          unit.value = '';
        } else if (parseInt(amount.value) <= 0 || !Number.isInteger(parseInt(amount.value))) {
          this.set('ingErrorMess', "Amount must be a positive integer");
          this.set('ingError', true);
        } else {
          this.set('ingErrorMess', "Ingredient currently being entered does not have a name, amount and unit.");
          this.set('ingError', true);
        }
      },
      submit: function () {
        var cont = this;
        this.set('subError', false);

        if (this.ingredientsArray.length > 0 && recipeName.value != '' && recipeDescription.value != '' && recipeDirections.value != '') {
          var data = JSON.stringify({
            'recipeName': recipeName.value,
            'description': recipeDescription.value,
            'directions': recipeDirections.value,
            'ingredients': this.ingredientsArray
          });
          console.log(this.ingredientsArray);
          console.log(data);
          cont.set('noresults', false);
          Ember.$.ajax({
            contentType: 'application/json',
            method: "POST",
            url: "/api/recipe",
            data: data
          }).done(function (response) {
            cont.set('recipes', []);

            if (response.success == true) {
              document.location = "/frontend/recipe/" + response.id;
            } else {
              //errors
              console.log('Login POST Request to /api/search/ was unsuccessful.');
            }
          });
        } else if (this.ingredientsArray.length <= 0) {
          this.set('subErrorMess', "Must have at least one ingredient before submitting");
          this.set('subError', true);
        } else {
          this.set('subErrorMess', "Recipe must have a name, description, and directions before submitting");
          this.set('subError', true);
        }
      },
      clear: function () {
        var cont = this;
        cont.set('ingError', false);
        cont.set('ingredients', "");
        cont.set('ingredientsArray', []);
        cont.set('recipes', []);
      }
    }
  });

  _exports.default = _default;
});
;define("frontend/controllers/register", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    auth: Ember.inject.service('auth-manager'),
    actions: {
      register: function () {
        this.get('auth').register();
      }
    }
  });

  _exports.default = _default;
});
;define("frontend/controllers/view", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    auth: Ember.inject.service('auth-manager'),
    review: '',
    rating: 5,
    deleted: false,
    NoReview: false,
    actions: {
      submitReview: function () {
        var cont = this;
        cont.set('NoReview', false);
        var pk = this.get('pk');
        var review = this.get('review');
        var rating = this.get('rating');
        console.log(pk);
        console.log(review);
        console.log(rating);

        if (review != '') {
          var data = {
            'recipeId': pk,
            'recipeReview': review,
            'recipeRating': rating
          };
          console.log(data);
          Ember.$.post('/api/reviews', data, function (response) {
            if (response.success == true) {
              window.location.reload(true);
            } else {
              //errors
              console.log('Login POST Request to /reviews/ was unsuccessful.');
            }
          });
        } else {
          cont.set('NoReview', true);
        }
      },
      report: function (id) {
        var cont = this;
        var data = {
          'id': id
        };
        Ember.$.post('/api/reportReview', data, function (response) {
          if (response.success == true) {
            cont.set('deleted', true);
            setTimeout(function () {
              cont.set('deleted', false);
            }, 3000); //window.location.reload(true);
          } else {
            //errors
            console.log('Login POST Request to /reportReview/ was unsuccessful.');
          }
        });
      }
    }
  });

  _exports.default = _default;
});
;define("frontend/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("frontend/helpers/app-version", ["exports", "frontend/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("frontend/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("frontend/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("frontend/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "frontend/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("frontend/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("frontend/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("frontend/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("frontend/initializers/ember-simple-auth", ["exports", "frontend/config/environment", "ember-simple-auth/configuration", "ember-simple-auth/initializers/setup-session", "ember-simple-auth/initializers/setup-session-service", "ember-simple-auth/initializers/setup-session-restoration"], function (_exports, _environment, _configuration, _setupSession, _setupSessionService, _setupSessionRestoration) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-simple-auth',

    initialize(registry) {
      const config = _environment.default['ember-simple-auth'] || {};
      config.rootURL = _environment.default.rootURL || _environment.default.baseURL;

      _configuration.default.load(config);

      (0, _setupSession.default)(registry);
      (0, _setupSessionService.default)(registry);
      (0, _setupSessionRestoration.default)(registry);
    }

  };
  _exports.default = _default;
});
;define("frontend/initializers/export-application-global", ["exports", "frontend/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("frontend/initialzers/auth-manager", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize(application) {
    application.inject('route', 'auth', 'service:auth-manager');
    application.inject('controller', 'auth', 'service:auth-manager');
    application.inject('component', 'auth', 'service:auth-manager');
  }

  var _default = {
    name: 'auth-manager',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("frontend/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("frontend/instance-initializers/ember-simple-auth", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  // This is only needed for backwards compatibility and will be removed in the
  // next major release of ember-simple-auth. Unfortunately, there is no way to
  // deprecate this without hooking into Ember's internals…
  var _default = {
    name: 'ember-simple-auth',

    initialize() {}

  };
  _exports.default = _default;
});
;define("frontend/models/recipe", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.Model.extend({
    recipeName: _emberData.default.attr(),
    description: _emberData.default.attr(),
    directions: _emberData.default.attr()
  });

  _exports.default = _default;
});
;define("frontend/router", ["exports", "frontend/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('find');
    this.route('new');
    this.route('recipe', function () {
      this.route('view', {
        path: '/:pk'
      });
    });
    this.route('view', {
      path: 'recipe/:pk'
    });
    this.route('login');
    this.route('test');
    this.route('register');
    this.route('myRecipes');
  });
});
;define("frontend/routes/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // Ensure the application route exists for ember-simple-auth's `setup-session-restoration` initializer
  var _default = Ember.Route.extend();

  _exports.default = _default;
});
;define("frontend/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    ajax: Ember.inject.service(),

    async model() {
      return this.get('ajax').request('/homePageRecipe');
    }

  });

  _exports.default = _default;
});
;define("frontend/routes/my-recipes", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    ajax: Ember.inject.service(),

    async model() {
      return this.get('ajax').request('/myRecipes');
    }

  });

  _exports.default = _default;
});
;define("frontend/routes/recipe", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    store: Ember.inject.service(),

    model() {
      const store = this.get('homePageRecipe');
      return store.findAll('recipe');
    }

  });

  _exports.default = _default;
});
;define("frontend/routes/view", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    ajax: Ember.inject.service(),

    async model(params) {
      let recipe = (await this.get('ajax').request('/recipe/' + params.pk))[0]; //console.log(recipe);

      let ingredients = await this.get('ajax').request('/ingredients/' + params.pk); //console.log(ingredients);

      let recIngredients = await this.get('ajax').request('/recIngredients/' + params.pk); //console.log(recIngredients);

      let reviews = await this.get('ajax').request('/reviews/' + params.pk);
      recIngredients.forEach(x => x.fields.ingredient = ingredients.find(y => y.pk == x.fields.ingredient).fields.ingredientName);
      console.log({
        "recipe": recipe,
        "ingredients": recIngredients,
        "reviews": reviews
      });
      return {
        "recipe": recipe,
        "ingredients": recIngredients,
        "reviews": reviews
      };
    },

    setupController(controller, model) {
      this._super(...arguments);

      controller.set('pk', model.recipe.pk);
    }

  });

  _exports.default = _default;
});
;define("frontend/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("frontend/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("frontend/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("frontend/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _ajax.default.extend({
    host: 'http://localhost/api'
  });

  _exports.default = _default;
});
;define("frontend/services/auth-manager", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Service.extend({
    store: Ember.inject.service('store'),
    //routing: Ember.inject.service('-routing'),
    //field vars
    username: '',
    password: '',
    email: '',
    errorMsg: '',
    //stored data
    user: null,
    profile: null,
    isLoggedIn: false,
    register: function () {
      console.log('Logging in:'); //retrieve field data

      var username = this.get('username');
      var password = this.get('password');
      var email = this.get('email'); //var remember = this.get('remember');

      var data = {
        'username': username,
        'password': password,
        'email': email
      };
      var auth = this; //make api request

      Ember.$.post('/api/register', data, function (response) {
        if (response.status == 'success') {
          auth.login();
        } else {
          //errors
          console.log('Login POST Request to /api/register/ was unsuccessful.');
          auth.set('errorMsg', response.data.message);
        }
      });
    },
    login: function () {
      console.log('Logging in:'); //retrieve field data

      var username = this.get('username');
      var password = this.get('password'); //var remember = this.get('remember');

      var data = {
        'username': username,
        'password': password
      };
      var auth = this; //make api request

      Ember.$.post('/api/session', data, function (response) {
        if (response.isauthenticated) {
          //success
          auth.set('userid', response.userid);
          auth.set('isLoggedIn', true); // if(remember){
          // 	//save username and pass to local storage
          // 	//localStorage.setItem('remember', true);
          // 	localStorage.setItem('username', auth.get('username'));
          // 	localStorage.setItem('password', auth.get('password'));
          // }
          // else{
          // 	//localStorage.removeItem('remember');
          // 	localStorage.removeItem('username');
          // 	localStorage.removeItem('password');
          // }

          auth.set('password', ''); //console.log(auth.isLoggedIn);

          document.location = "/frontend/new"; //auth.get('routing').transitionTo('index');

          console.log('Login POST Request to /api/session/ was successful.');
        } else {
          //errors
          console.log('Login POST Request to /api/session/ was unsuccessful.');
          auth.set('errorMsg', response.data.message);
        }
      });
    },
    logout: function () {
      console.log('Logging out');
      var auth = this;
      Ember.$.ajax({
        url: '/api/session',
        type: 'DELETE'
      }).then(function (response) {
        console.log('Logout DELETE Request to /api/session/ was successful:' + response);
        auth.set('isLoggedIn', false);
        auth.set('errorMsg', '');
        auth.set('username', '');
        auth.set('user', null);
        auth.set('profile', null);
        document.location = "/frontend";
      });
    },

    /**
    	called whenever the application loads to initialize any stored session/local variables
    **/
    init: function () {
      this._super();

      var auth = this; //handle session and local variable loading
      //this.set('remember', localStorage.remember);
      // if(auth.get('remember')){
      // 	auth.set('username', localStorage.username);
      // 	auth.set('password', localStorage.password);
      // }
      //check to see if the user is logged into the API

      Ember.$.get('/api/session', function (response) {
        if (response.isauthenticated) {
          //success
          console.log('The user: \'' + response.username + '\' is currently logged in.');
          auth.set('username', response.username);
          auth.set('userid', response.userid);
          auth.set('isLoggedIn', true);
        } else {
          //errors
          console.log('The user is not currently logged in.');
        }
      });
    }
  });

  _exports.default = _default;
});
;define("frontend/services/cookies", ["exports", "ember-cookies/services/cookies"], function (_exports, _cookies) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _cookies.default;
  _exports.default = _default;
});
;define("frontend/services/session", ["exports", "ember-simple-auth/services/session"], function (_exports, _session) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _session.default;
  _exports.default = _default;
});
;define("frontend/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("frontend/session-stores/application", ["exports", "ember-simple-auth/session-stores/adaptive"], function (_exports, _adaptive) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _adaptive.default.extend();

  _exports.default = _default;
});
;define("frontend/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "2InPl2cb",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[12],[2,\"\\n  \"],[8,\"nav-bar\",[],[[],[]],null],[2,\"\\n  \"],[10,\"div\"],[14,0,\"body\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"ml-5 mr-5\"],[12],[2,\"\\n      \"],[1,[30,[36,1],[[30,[36,0],null,null]],null]],[2,\"\\n      \"],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "frontend/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("frontend/templates/find", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "VHtPJC7T",
    "block": "{\"symbols\":[\"recipe\"],\"statements\":[[8,\"jumbo\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n  \"],[10,\"h2\"],[12],[2,\"Find Dinner Tonight\"],[13],[2,\"\\n  \"],[10,\"p\"],[12],[2,\"\\n    Enter ingredients that you have in your fridge or pantry and we will find recipes that you can make without going to the store.\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\\n\"],[10,\"form\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"form-group\"],[12],[2,\"\\n    \"],[10,\"label\"],[12],[2,\"Enter individual ingredients you have to search for a recipe\"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[14,0,\"input-group mb-3\"],[12],[2,\"\\n\\n        \"],[1,[30,[36,4],null,[[\"action\",\"type\",\"class\",\"id\",\"value\",\"placeholder\",\"aria-label\",\"aria-describedby\"],[\"another\",\"text\",\"form-control\",\"ingredient\",[35,3],\"Ingredient Name\",\"Ingredient Name\",\"button-another\"]]]],[2,\"\\n        \"],[10,\"div\"],[14,0,\"input-group-append\"],[12],[2,\"\\n          \"],[11,\"input\"],[24,0,\"btn btn-success form-control\"],[24,2,\"Add ingredient to list\"],[24,1,\"button-another\"],[24,4,\"submit\"],[4,[38,5],[[32,0],\"another\"],null],[12],[13],[2,\"\\n        \"],[13],[2,\"\\n\\n    \"],[13],[2,\"\\n\\n  \"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"form-group\"],[12],[2,\"\\n    \"],[10,\"label\"],[12],[2,\"Currently Entered: \"],[1,[34,6]],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"hr\"],[12],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[11,\"input\"],[24,0,\"btn btn-primary form-control btn-300\"],[24,2,\"Search with entered ingredients\"],[24,4,\"button\"],[4,[38,5],[[32,0],\"search\"],null],[12],[13],[2,\"\\n  \"],[11,\"input\"],[24,0,\"btn btn-warning form-control btn-300\"],[24,2,\"Clear entered ingredients\"],[24,4,\"button\"],[4,[38,5],[[32,0],\"clear\"],null],[12],[13],[2,\"\\n\\n\"],[10,\"hr\"],[12],[13],[2,\"\\n\"],[10,\"br\"],[12],[13],[2,\"\\n\"],[6,[37,8],[[35,7]],null,[[\"default\"],[{\"statements\":[[10,\"h3\"],[14,5,\"color:red\"],[12],[2,\"No Results for entered ingredients\"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[6,[37,8],[[35,0,[\"0\"]]],null,[[\"default\"],[{\"statements\":[[10,\"h3\"],[12],[2,\"Recipes you can make:\"],[13],[2,\"\\n\"],[10,\"br\"],[12],[13],[2,\"\\n\"],[10,\"ul\"],[12],[2,\"\\n\"],[6,[37,2],[[30,[36,1],[[30,[36,1],[[35,0]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"li\"],[12],[8,\"recipe\",[],[[\"@recipe\"],[[32,1]]],null],[13],[2,\"\\n    \"],[10,\"hr\"],[12],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"recipes\",\"-track-array\",\"each\",\"ingredient\",\"input\",\"action\",\"ingredients\",\"noresults\",\"if\"]}",
    "meta": {
      "moduleName": "frontend/templates/find.hbs"
    }
  });

  _exports.default = _default;
});
;define("frontend/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "mXFZ/WQ3",
    "block": "{\"symbols\":[\"recipe\",\"@model\"],\"statements\":[[8,\"jumbo\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n  \"],[10,\"h2\"],[12],[2,\"Welcome to Dinner Tonight!\"],[13],[2,\"\\n  \"],[10,\"p\"],[12],[2,\"We aim to make finding a recipe for dinner easy by searching by ingredients you already have, skipping a trip to the grocery store.\"],[13],[2,\"\\n  \"],[3,\" <LinkTo @route=\\\"index\\\" class=\\\"button\\\">Index</LinkTo> \"],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[10,\"div\"],[14,0,\"ml-5\"],[12],[2,\"\\n  \"],[10,\"h2\"],[12],[2,\"Recent Recipes added to Dinner Tonight\"],[13],[2,\"\\n\"],[10,\"hr\"],[12],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"recipe\"],[12],[2,\"\\n  \"],[10,\"ul\"],[14,0,\"results\"],[12],[2,\"\\n\"],[6,[37,1],[[30,[36,0],[[30,[36,0],[[32,2]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"li\"],[12],[8,\"recipe\",[],[[\"@recipe\"],[[32,1]]],null],[13],[2,\"\\n      \"],[10,\"hr\"],[12],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"  \"],[13],[2,\"\\n\\n\"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"-track-array\",\"each\"]}",
    "meta": {
      "moduleName": "frontend/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("frontend/templates/login", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "rJYi6Lzq",
    "block": "{\"symbols\":[],\"statements\":[[8,\"jumbo\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n  \"],[10,\"h2\"],[12],[2,\"Welcome back to Dinner Tonight!\"],[13],[2,\"\\n  \"],[10,\"p\"],[12],[2,\"Log in to manage recipes\"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[11,\"form\"],[4,[38,0],[[32,0],\"login\"],[[\"on\"],[\"submit\"]]],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"form-group\"],[12],[2,\"\\n    \"],[10,\"div\"],[12],[2,\"\\n      \"],[10,\"label\"],[12],[2,\"Username\"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[12],[2,\"\\n      \"],[1,[30,[36,2],null,[[\"class\",\"placeholder\",\"value\",\"type\"],[\"form-control\",\"Username\",[35,1,[\"username\"]],\"text\"]]]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"form-group\"],[12],[2,\"\\n    \"],[10,\"div\"],[12],[2,\"\\n      \"],[10,\"label\"],[12],[2,\"Password\"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[12],[2,\"\\n      \"],[1,[30,[36,2],null,[[\"class\",\"placeholder\",\"value\",\"type\"],[\"form-control\",\"Password\",[35,1,[\"password\"]],\"password\"]]]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"button\"],[14,0,\"btn btn-primary form-control\"],[14,4,\"submit\"],[12],[2,\"Log in!\"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"action\",\"auth\",\"input\"]}",
    "meta": {
      "moduleName": "frontend/templates/login.hbs"
    }
  });

  _exports.default = _default;
});
;define("frontend/templates/my-recipes", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ne6n9f7e",
    "block": "{\"symbols\":[\"recipe\",\"@model\"],\"statements\":[[8,\"jumbo\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n  \"],[10,\"h2\"],[12],[2,\"My Recipes\"],[13],[2,\"\\n  \"],[10,\"p\"],[12],[2,\"Recipes you have added previously\"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[10,\"ul\"],[14,0,\"results\"],[12],[2,\"\\n\"],[6,[37,2],[[32,2,[\"0\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[6,[37,1],[[30,[36,0],[[30,[36,0],[[32,2]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"li\"],[12],[8,\"recipe\",[],[[\"@recipe\"],[[32,1]]],null],[13],[2,\"\\n      \"],[10,\"hr\"],[12],[13],[2,\"\\n\"]],\"parameters\":[1]}]]]],\"parameters\":[]},{\"statements\":[[2,\"    \"],[10,\"h3\"],[14,5,\"color:red\"],[12],[2,\"No Results\"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"-track-array\",\"each\",\"if\"]}",
    "meta": {
      "moduleName": "frontend/templates/my-recipes.hbs"
    }
  });

  _exports.default = _default;
});
;define("frontend/templates/new", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "1Vox7dwx",
    "block": "{\"symbols\":[],\"statements\":[[8,\"jumbo\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n  \"],[10,\"h2\"],[12],[2,\"New Dinner Entry\"],[13],[2,\"\\n  \"],[10,\"p\"],[12],[2,\"\\n    Enter a new Recipe\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"form-group\"],[12],[2,\"\\n    \"],[10,\"label\"],[12],[2,\"Recipe Name\"],[13],[2,\"\\n    \"],[10,\"input\"],[14,0,\"form-control\"],[14,1,\"recipeName\"],[15,2,[34,2]],[14,\"placeholder\",\"Recipe Name\"],[14,4,\"text\"],[12],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"form-group\"],[12],[2,\"\\n    \"],[10,\"label\"],[12],[2,\"Recipe Description\"],[13],[2,\"\\n    \"],[10,\"input\"],[14,0,\"form-control\"],[14,1,\"recipeDescription\"],[15,2,[34,3]],[14,\"placeholder\",\"Recipe Description\"],[14,4,\"text\"],[12],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"form-group\"],[12],[2,\"\\n    \"],[10,\"label\"],[12],[2,\"Recipe Directions\"],[13],[2,\"\\n    \"],[10,\"textarea\"],[14,\"rows\",\"4\"],[14,0,\"form-control\"],[14,1,\"recipeDirections\"],[15,2,[34,4]],[14,\"placeholder\",\"Recipe Directions\"],[14,4,\"text\"],[12],[13],[2,\"  \"],[13],[2,\"\\n  \"],[10,\"form\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"form-group\"],[12],[2,\"\\n    \"],[10,\"label\"],[12],[2,\"Enter individual ingredients for your recipe\"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"input-group mb-3\"],[12],[2,\"\\n    \"],[10,\"input\"],[14,0,\"form-control\"],[14,1,\"ingredient\"],[15,2,[34,5]],[14,\"placeholder\",\"Ingredient Name\"],[14,\"aria-label\",\"Ingredient Name\"],[14,\"aria-describedby\",\"amount\"],[14,4,\"text\"],[12],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"input-group-append\"],[12],[2,\"\\n      \"],[10,\"input\"],[14,0,\"form-control\"],[14,1,\"amount\"],[15,2,[34,6]],[14,\"placeholder\",\"Ingredient Amount\"],[14,\"aria-label\",\"Ingredient Amount\"],[14,\"aria-describedby\",\"unit\"],[14,4,\"number\"],[12],[13],[2,\"\\n      \"],[10,\"input\"],[14,0,\"form-control\"],[14,1,\"unit\"],[15,2,[34,7]],[14,\"placeholder\",\"Ingredient Unit\"],[14,\"aria-label\",\"Ingredient Unit\"],[14,\"aria-describedby\",\"button-another\"],[14,4,\"text\"],[12],[13],[2,\"\\n      \"],[11,\"input\"],[24,0,\"btn btn-success form-control\"],[24,2,\"Add ingredient to list\"],[24,1,\"button-another\"],[24,4,\"submit\"],[4,[38,8],[[32,0],\"another\"],null],[12],[13],[2,\"      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\"],[6,[37,10],[[35,9]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"h4\"],[14,5,\"color:red\"],[12],[1,[34,1]],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"form-group\"],[12],[2,\"\\n    \"],[10,\"label\"],[12],[2,\"Currently Entered: \"],[1,[34,11]],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"hr\"],[12],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[11,\"input\"],[24,0,\"btn btn-primary form-control btn-300\"],[24,2,\"Submit\"],[24,4,\"button\"],[4,[38,8],[[32,0],\"submit\"],null],[12],[13],[2,\"\\n  \"],[11,\"input\"],[24,0,\"btn btn-warning form-control btn-300\"],[24,2,\"Clear entered ingredients\"],[24,4,\"button\"],[4,[38,8],[[32,0],\"clear\"],null],[12],[13],[2,\"\\n\\n\"],[10,\"hr\"],[12],[13],[2,\"\\n\"],[10,\"br\"],[12],[13],[2,\"\\n\"],[6,[37,10],[[35,12]],null,[[\"default\"],[{\"statements\":[[10,\"h3\"],[14,5,\"color:red\"],[12],[1,[34,0]],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"subErrorMess\",\"ingErrorMess\",\"recipeName\",\"recipeDescription\",\"recipeDirections\",\"ingredient\",\"amount\",\"unit\",\"action\",\"ingError\",\"if\",\"ingredients\",\"subError\"]}",
    "meta": {
      "moduleName": "frontend/templates/new.hbs"
    }
  });

  _exports.default = _default;
});
;define("frontend/templates/register", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "sq4oh8fU",
    "block": "{\"symbols\":[],\"statements\":[[8,\"jumbo\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n  \"],[10,\"h2\"],[12],[2,\"Register for  Dinner Tonight!\"],[13],[2,\"\\n  \"],[10,\"p\"],[12],[2,\"Make a new account to manage recipes\"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[11,\"form\"],[4,[38,0],[[32,0],\"register\"],[[\"on\"],[\"submit\"]]],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"form-group\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"control-label\"],[12],[2,\"\\n      \"],[10,\"label\"],[12],[2,\"Email\"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[12],[2,\"\\n      \"],[1,[30,[36,2],null,[[\"class\",\"placeholder\",\"value\",\"type\"],[\"form-control\",\"Email\",[35,1,[\"email\"]],\"text\"]]]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"form-group\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"control-label\"],[12],[2,\"\\n      \"],[10,\"label\"],[12],[2,\"Username\"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[12],[2,\"\\n      \"],[1,[30,[36,2],null,[[\"class\",\"placeholder\",\"value\",\"type\"],[\"form-control\",\"Username\",[35,1,[\"username\"]],\"text\"]]]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"form-group\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"control-label\"],[12],[2,\"\\n      \"],[10,\"label\"],[12],[2,\"Password\"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[12],[2,\"\\n      \"],[1,[30,[36,2],null,[[\"class\",\"placeholder\",\"value\",\"type\"],[\"form-control\",\"Password\",[35,1,[\"password\"]],\"password\"]]]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n\\n  \"],[10,\"button\"],[14,0,\"btn btn-primary form-control\"],[14,4,\"submit\"],[12],[2,\"Register\"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"action\",\"auth\",\"input\"]}",
    "meta": {
      "moduleName": "frontend/templates/register.hbs"
    }
  });

  _exports.default = _default;
});
;define("frontend/templates/view", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "cAiKCVas",
    "block": "{\"symbols\":[\"ing\",\"ing\",\"@model\"],\"statements\":[[8,\"jumbo\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n  \"],[10,\"h2\"],[12],[1,[32,3,[\"recipe\",\"fields\",\"recipeName\"]]],[13],[2,\"\\n  \"],[10,\"h3\"],[12],[2,\"Description: \"],[1,[32,3,[\"recipe\",\"fields\",\"description\"]]],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[10,\"hr\"],[12],[13],[2,\"\\n\"],[10,\"h2\"],[12],[2,\"Ingredients:\"],[13],[2,\"\\n\"],[10,\"ul\"],[14,0,\"ingredients\"],[14,5,\"padding-left:25px\"],[12],[2,\"\\n\"],[6,[37,9],[[30,[36,8],[[30,[36,8],[[32,3,[\"ingredients\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"li\"],[12],[10,\"h5\"],[12],[1,[32,2,[\"fields\",\"ingredient\"]]],[2,\" - \"],[1,[32,2,[\"fields\",\"amount\"]]],[2,\" \"],[1,[32,2,[\"fields\",\"unit\"]]],[13],[13],[2,\"\\n\"]],\"parameters\":[2]}]]],[13],[2,\"\\n\"],[10,\"br\"],[12],[13],[2,\"\\n\"],[10,\"hr\"],[12],[13],[2,\"\\n\"],[10,\"h2\"],[14,5,\"word-wrap: break-word;\"],[12],[2,\"Directions: \"],[13],[2,\"\\n\"],[10,\"h5\"],[12],[1,[32,3,[\"recipe\",\"fields\",\"directions\"]]],[13],[2,\"\\n\"],[10,\"br\"],[12],[13],[2,\"\\n\"],[10,\"hr\"],[12],[13],[2,\"\\n\"],[10,\"h2\"],[12],[2,\"Reviews:\"],[13],[2,\"\\n\"],[10,\"ul\"],[14,0,\"reviews\"],[14,5,\"padding-left:25px\"],[12],[2,\"\\n\"],[6,[37,9],[[30,[36,8],[[30,[36,8],[[32,3,[\"reviews\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"li\"],[14,5,\"height:45px\"],[12],[10,\"h5\"],[14,5,\"float:left;margin-top:5px\"],[12],[1,[32,1,[\"fields\",\"recipeReview\"]]],[2,\" - \"],[1,[32,1,[\"fields\",\"recipeRating\"]]],[2,\"/5 stars\"],[13],[11,\"button\"],[16,1,[31,[\"report\",[32,1,[\"pk\"]]]]],[24,5,\"float:left;max-width:150px;height:35px;margin:5px;vertical-align: middle;\"],[24,0,\"btn btn-danger text-center form-control\"],[24,4,\"button\"],[4,[38,0],[[32,0],\"report\",[32,1,[\"pk\"]]],null],[12],[2,\"Report Review\"],[13],[2,\" \"],[6,[37,6],[[35,7]],null,[[\"default\"],[{\"statements\":[[10,\"h5\"],[14,5,\"color:red;margin-left:5px\"],[12],[2,\"Review Flagged for Review\"],[13]],\"parameters\":[]}]]],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[13],[2,\"\\n\"],[10,\"br\"],[12],[13],[2,\"\\n\"],[10,\"hr\"],[12],[13],[2,\"\\n\"],[10,\"hr\"],[12],[13],[2,\"\\n\"],[10,\"br\"],[12],[13],[2,\"\\n\"],[6,[37,6],[[35,10,[\"isLoggedIn\"]]],null,[[\"default\"],[{\"statements\":[[11,\"form\"],[4,[38,0],[[32,0],\"submitReview\"],[[\"on\"],[\"submit\"]]],[12],[2,\"\\n  \"],[10,\"h2\"],[12],[2,\"Add Review:\"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"control-group\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"control-label\"],[12],[2,\"\\n      \"],[10,\"h5\"],[12],[2,\"Review\"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[14,0,\"controls\"],[12],[2,\"\\n      \"],[1,[30,[36,2],null,[[\"value\",\"rows\",\"cols\"],[[35,1],\"4\",\"50\"]]]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"control-group\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"control-label\"],[12],[2,\"\\n      \"],[10,\"h5\"],[14,5,\"float:left\"],[12],[2,\"Rating: \"],[1,[34,3]],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[14,0,\"controls\"],[14,5,\"max-width:550px\"],[12],[2,\"\\n      \"],[1,[30,[36,4],null,[[\"value\",\"class\",\"type\",\"min\",\"max\"],[[35,3],\"form-control-range\",\"range\",\"1\",\"5\"]]]],[2,\"\\n    \"],[13],[2,\"\\n\\n  \"],[13],[2,\"\\n  \"],[10,\"br\"],[12],[13],[2,\"\\n  \"],[10,\"button\"],[14,5,\"max-width:550px\"],[14,0,\"btn btn-primary form-control\"],[14,4,\"submit\"],[12],[2,\"Submit Review\"],[13],[2,\"\\n\"],[6,[37,6],[[35,5]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"h4\"],[14,5,\"color:red\"],[12],[2,\"Review must be entered\"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"action\",\"review\",\"textarea\",\"rating\",\"input\",\"NoReview\",\"if\",\"deleted\",\"-track-array\",\"each\",\"auth\"]}",
    "meta": {
      "moduleName": "frontend/templates/view.hbs"
    }
  });

  _exports.default = _default;
});
;define("frontend/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("frontend/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("frontend/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("frontend/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('frontend/config/environment', [], function() {
  var prefix = 'frontend';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("frontend/app")["default"].create({"name":"frontend","version":"0.0.0"});
          }
        
//# sourceMappingURL=frontend.map
