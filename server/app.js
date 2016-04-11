var koa = require('koa');
var koaStatic = require('koa-static');
var logger = require('koa-logger');
var app = koa();

app.use(logger());
app.use(koaStatic('.'));

var router = require('./router.js');

app
  .use(router.routes())
  .use(router.allowedMethods());

  app.listen('3000');

module.exports = app;
