Template.navbar.events({
   'click #reset': function() {
       Meteor.call('reset', function (err, res) {
           if (err) console.log("!!", err);
       });
   } 
});