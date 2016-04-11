var fs = require('fs');
var path = require('path');
var co = require('co');

var articlePath = path.resolve(__dirname, '../articles');

var Controller = {
    index: function*() {
        var list = fs.readdirSync(articlePath);

        yield this.render('list', {
            list: list
        });
    },

    article: function*() {
        var path = articlePath + '/' + this.params.name + '/index.html';
        var html = fs.readFileSync(path);

        this.set('Content-Type', 'text/html');
        this.body = html;
    }
};

module.exports = Controller;
