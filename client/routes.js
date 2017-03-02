Router.configure({
    layoutTemplate: "main",
    notFoundTemplate: "notFound"
});

Router.route("Home", {
    template: "Home",   
});

Router.route("/", {
    template: "Home",   
});

Router.route("charts", {
    template: "charts", 
});

Router.route("about", {
    template: "about",   
});

Router.route('/city/:id', {
    template: "city",
    data : function () {
        // Return the document for the selected city (the one whose id is given)
        // The value of this id is given by  this.params.id
        return Cities.findOne({_id:this.params.id});
    }
});

Router.route('/activity/:_id', {
    template: "activity",
    data : function () {
        var id = this.params._id;
        // Return the document for the selected city (the one whose id is given)
        // The value of this id is given by  this.params.id
        return Activities.findOne({_id:id});
    }
});

//Router.route('/activity/:id', {
//    var act = Cities.findOne({_id : this.params.id});
//    if (typeof activities == "undefined")
//        this.render("notFound");
//    else
//        this.render("activity", {data : act});
//});