Template.activity.helpers({
    activities: function(){
        return Activities.find({});
    },
    haveAlink : function(a){
    return typeof a.url != "undefined";
    }
});