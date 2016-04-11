var fs = require('fs');
var path = require('path');
var co = require('co');

var Controller = {
    index: function*() {
        this.body = 'hello';
    },
};

module.exports = Controller;
