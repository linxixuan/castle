var router = require('koa-router')();
var koaBody = require('koa-body')();


var controller = require('./controller');

router.get('/article/:name', controller.article);
router.get('/article/:path/:file', controller.static);
router.get('/post/create', controller.create);
router.get('*', controller.index);

router.post('/post/create', koaBody, controller.postfile);

module.exports = router;
