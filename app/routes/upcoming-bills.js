import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url = 'https://congress.api.sunlightfoundation.com/upcoming_bills?apikey=0613f3c5dde44d699a1a8c7adb2e6ed7&chamber=house&order=scheduled_at';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      var upcomingBills = [];
      responseJSON.results.forEach(function(upcomingBill) {
        upcomingBills.push(upcomingBill);
      });
      return upcomingBills;
    });
  }
});



// import Ember from 'ember';
//
// export default Ember.Route.extend({
//   model: function() {
//     var url = 'https://congress.api.sunlightfoundation.com/upcoming_bills?apikey=0613f3c5dde44d699a1a8c7adb2e6ed7&chamber=house&order=scheduled_at';
//     return Ember.$.getJSON(url).then(function(responseJSON) {
//       var upcomingBills = [];
//       responseJSON.results.forEach(function(upcomingBill) {
//         upcomingBills.push(upcomingBill);
//       });
//
//       var upcomingBillsWithDetails = [];
//
//       for(var i = 0; i < upcomingBills.length; i++) {
//         var billDetails = function() {
//           var url = 'https://congress.api.sunlightfoundation.com/bills?apikey=0613f3c5dde44d699a1a8c7adb2e6ed7&bill_id=' + upcomingBills[i].bill_id;
//           return Ember.$.getJSON(url).then(function(responseJSON_2) {
//             upcomingBillsWithDetails.push({
//               bill: upcomingBills[i],
//               billDetails: responseJSON_2.results[0]
//             });
//           });
//         }
//       }
//
//       return upcomingBillsWithDetails;
//     });
//   }
// });
