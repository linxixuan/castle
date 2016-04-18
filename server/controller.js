var fs = require('fs');
var path = require('path');
var co = require('co');
var ejs = require('ejs');

var articlePath = path.resolve(__dirname, '../articles');

var Controller = {
    index: function*() {
        var content = fs.readFileSync(path.resolve(__dirname, '../client/list.ejs'));
        var list = fs.readdirSync(articlePath);

        this.body = ejs.render(content.toString(), {
            list: list
        });
    },

    static: function*() {
        console.log(this.params);
        var fileName = this.params.file;
        var pathName = this.params.path;

        var path = articlePath + '/' + pathName + '/' + fileName;
        if (fileName.indexOf('.js') > 0) {
            this.set('Content-Type', 'text/javascript');
        }else if (fileName.indexOf('.css') > 0) {
            this.set('Content-Type', 'text/css');
        }
        this.body = fs.readFileSync(path).toString();
    },

    article: function*() {
        console.log('-----');
        console.log(this.params);
        var name = this.params.name;
        var path = articlePath + '/' + name + '/index.html';
        var html = fs.readFileSync(path).toString();

        this.set('Content-Type', 'text/html');
        this.body = html.replace(/\.\//g, name + '/');
    }
};

module.exports = Controller;
