Router.route('/', {
  template: 'main',
  name: 'home'
});

Router.route('/alterandoHTML', {
    template: 'alterandoHTML'
});

Router.route('/inserindoHTML', function () {
  this.render('inserindoHTML');
});

Router.route('/adicionarHTML', function () {
  this.render('adicionarHTML');
});

Router.route('/css', function () {
  this.render('css');
});

Router.route('/tamanho', function () {
  this.render('tamanho');
});

Router.configure({
    layoutTemplate: 'layout'
});
