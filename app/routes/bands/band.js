import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var bands = this.modelFor('bands');
    return this.store.findRecord('band, params.id');
  }
});
