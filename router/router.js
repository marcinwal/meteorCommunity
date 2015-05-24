Router.configure({
  layoutTemplate: 'masterLayout'
});

Router.route('/',function(){
  this.render('home');
});

Router.route('/about',function(){
  this.render('about');
});