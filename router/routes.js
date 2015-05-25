Router.configure({
  layoutTemplate: 'masterLayout'
});

Router.route('/',function(){
  waitOn: function(){
    return Meteor.subscribe('profiles');
  },
  template: 'home',
  data: function(){
    return{
      profiles: ProfilesCollection.find({},{limit:10});
    }
  }
});

Router.route('/about',function(){
  this.render('about');
});

Router.route('profile/manuel',function(){
  this.layout('profileLayout');
  this.render('profileDetail');
});

Router.route('/profile/:_id',function(){
  layoutTemplate: 'profileLayout',
  waitOn: function(){
    return Meteor.subscribe('profiles',this.params._id);
  },
  template: 'profileDetail',
  yieldTemplates: {
    'profileDetailLeft':{
      tp: 'left'
    }
  },
  data: function(){
    return ProfilesCollection.findOne({
      _id: this.params._id
    });
  }
});