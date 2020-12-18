import DS from 'ember-data';
import { computed } from '@ember/object';
//export default DS.RESTAdapter.extend({
  // host: computed(function(){
  //   return 'http://localhost:80';
  // }),
  // namespace: 'api'
var ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:80',
   namespace: 'api'
});


export default ApplicationAdapter;
