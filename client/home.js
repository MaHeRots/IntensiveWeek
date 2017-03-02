Template.home.helpers({
  'cities' : function() {
      return Cities.find();
  }   
});

//Session.setDefault('allCities',null);
//
//Template.home.helpers({
//  'cities' : function() {
//     Meteor.call("getCities",function(err,res){
//         Session.set("allCities",res);
//     })
//     var x = Session.get("allCities");
//      return x;
//  }   
//    
//    
//});