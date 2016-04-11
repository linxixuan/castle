var path = require('path');
var koa = require('koa');
var koaStatic = require('koa-static');
var logger = require('koa-logger');
var render = require('koa-ejs');

var app = koa();

app.use(logger());
app.use(koaStatic('../articles'));
render(app, {
  root: path.join(__dirname, '../client'),
  viewExt: 'ejs',
  cache: false,
  debug: true
});

var router = require('./router.js');

app
  .use(router.routes())
  .use(router.allowedMethods());

  app.listen('3000');

module.exports = app;
