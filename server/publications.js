//todo add pub when ready
Meteor.publish("users", function () {
    if (Roles.userIsInRole(this.userId, ['admin'])) {
        return Meteor.users.find({"roles":{ $nin: ['admin'] }});
    } else {
        return Meteor.users.find({"roles":{ $nin: ['admin'] }} , {fields: {'profile.token': 0}});
    }
});
Meteor.publish("userData", function () {
    return Meteor.users.find({_id: this.userId});
});
Meteor.publish("events", function(){
    return Events.find({});
});

Meteor.publish("gamestate" , function() {
  return GameState.findOne({}); //return the only game state
})
