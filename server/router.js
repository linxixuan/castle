var router = require('koa-router')();
var koaBody = require('koa-body')();

var controller = require('./controller');

router.get('*', controller.index);

module.exports = router;
