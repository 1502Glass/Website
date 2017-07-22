/*globals browser, console, JQuery, $ */
/*jslint plusplus: true */

function adjustWidth() {
    'use strict';
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    console.log('test');
    if (w <= 815) {
        document.getElementById('itemPicture').classList.remove('col-xs-6');
        document.getElementById('itemText').classList.remove('col-xs-6');
        
        document.getElementById('itemPicture').classList.add('mobilePic');
    } else {
        document.getElementById('itemPicture').classList.add('col-xs-6');
        document.getElementById('itemText').classList.add('col-xs-6');
    }
}

(function () {
    'use strict';
    adjustWidth();
}());

window.onresize = adjustWidth;