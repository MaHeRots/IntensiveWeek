Template.activity.events({
    'submit form' : function(e) {
        e.preventDefault();
        
        Activities.update(
            {_id:Template.currentData()._id},
            {$push:{comments:{
                user: {
                        _id: Meteor.user()._id,
                        email: Meteor.user().emails[0].address
                    },
                    date: new Date(),
                    text: $('#comment').val()
            }}});
    }
});


Template.activity.helpers({
    activities: function(){
        return Activities.findOne({});
    },
    haveAlink : function(){
        //console.log("hl",Template.currentData().url != "undefined");
        //return typeof Template.currentData().url != "undefined";
        return true;
    },                  
    like : function() {
        console.log("hi !");
            //var like = Activities.findOne({
            //    _id: Template.currentData().likers.length});
    //return like;
        return Template.currentData().likers.length;
    }
    
});
Template.activity.events({                    
    'click #nL' : function(event){
        console.log("j'aime !"+ this.name);
        console.log("data:",Template.currentData());
        console.log("user:",Meteor.user())
        if(Meteor.userId() === null){
        }else{
       var like = Activities.findOne({
           _id: Template.currentData()._id,
           likers: Meteor.user()._id
       });
            if(typeof like == "undefined")
                Activities.update({_id: Template.currentData()._id},
                                  {$push:{likers: Meteor.user()._id}});
            else 
                Activities.update({_id: Template.currentData()._id},
                                  {$pull:{likers: Meteor.user()._id}});
    }
    }
  });