import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {

    var url = 'http://congress.api.sunlightfoundation.com/upcoming_bills?&chamber=house&order=scheduled_at&apikey=0613f3c5dde44d699a1a8c7adb2e6ed7';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    }).then(function(bills) {
      return Promise.all(bills.map(function(bill2) {
        var url_bills = 'https://congress.api.sunlightfoundation.com/bills?apikey=0613f3c5dde44d699a1a8c7adb2e6ed7&bill_id=' + bill2.bill_id;
        return Ember.$.getJSON(url_bills).then(function(responseJSON) {
          return responseJSON.results[0];
        });
      }));
    });

  }
});
