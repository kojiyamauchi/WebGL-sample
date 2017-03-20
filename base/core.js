'use strict';

var THREE = require('three');

var jQuery = require('jQuery');

jQuery(function ($) {
    $("h1 span").delay(250).each(function (index) {
        $(this).delay(index * 50).queue(function () {
            $(this).addClass('down').dequeue();
        });
    });
});
