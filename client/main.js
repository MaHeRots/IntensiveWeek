Template.body.events({
  'submit .addCity': function (event) {
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    //const text = target.text.value;
    var cName = $("#cName").val();
      var cLat = $("#cLat").val();
      var cLong = $("#cLong").val();
    // Insert a task into the collection
    Cities.insert({
      name: cName, long: cLong, lat: cLat
    });
 
    // Clear form
    
  }
});
