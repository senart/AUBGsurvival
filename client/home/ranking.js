Template.ranking.helpers({
      rankings:function(){
        var users = Meteor.users.find({}, {sort:{"profile.kills": -1}});
        if(users){
            return users;
        }
    }


});
//When pub-sub is implemented
// Template.ranking.onCreated( function() {
//    this.subscribe( 'rank-users' );
// });
