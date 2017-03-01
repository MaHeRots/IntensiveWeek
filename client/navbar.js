Template.navbar.events({
   'click #reset': function() {
       Meteor.call('reset');
   } 
});