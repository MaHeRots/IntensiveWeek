Template.city.helpers({
	
	isAnEvent:function(nature){
		return nature === "event";
	},
	
	isAplace:function(nature){
		return nature === "place";
	}
})

Template.city.events({
  'submit .addEvent': function (event) {
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    
    //const text = target.text.value;
    var eName = $("#eName").val();
      var desc = $("#desc").val();
      var url = $("#url").val(); 
      var user = $("#login-name-link").val();
      var dateStart = $("#dateStart").val();
      var dateEnd = $("#dateEnd").val();
      alert(user);
    // Insert a task into the collection
    Activities.insert({
      name: eName, nature: "event", description: desc, url : url, dateStart: dateStart, dateEnd: dateEnd
          });
	
    // Clear form
    
  }
});

