// Riot JS Script. /////////////////////////////////////////////////////////////
var riot = require('riot');

require('../tags/heading.tag');
require('../tags/top-list.tag');
require('../tags/copy-right.tag');
require('../tags/bg1.tag');
require('../tags/bg2.tag');
require('../tags/bg3.tag');
require('../tags/list.tag');
require('../tags/sorry.tag');
//require('../tags/default.tag');

riot.mount('*');
// Riot JS Script End. /////////////////////////////////////////////////////////


// Require Three JS Script. ////////////////////////////////////////////////////

require('../three/sample1.js');
require('../three/sample2.js');
require('../three/sample3.js');

// Three JS Script End. ////////////////////////////////////////////////////////


// jQuery Script. //////////////////////////////////////////////////////////////
'use strict';

var jQuery = require('jQuery');

jQuery(function ($) {

    // If Not Responsive Flie to SP & Tablet Access, Replace URL.
    var ua = navigator.userAgent,
        currentURL = location.href,
        replaceURL = 'http://kojiyamauchi.com/webGL_sample/sorry.html';
    if(ua.indexOf('iPhone') > -1 || ua.indexOf('iPad') > -1 || ua.indexOf('iPod') > -1 || ua.indexOf('Android') > -1) {
        if($('body').hasClass('noSP')) {
            location.href = replaceURL;
        }
    }

    // WebGL Page is Background Color => #00000;
    if($('body').attr('id') !== 'list' && $('body').attr('id') !== 'sorry') {
        $('html').css({
            'background-color': '#000'
        });
    }

    // Sample2.html List Font Color => #fffff;
    if($('body').attr('id') === 'sample2' || $('body').attr('id') === 'sample3') {
        $('list a').addClass('textWhite');
    }

    // Heading1 Animations.
    $('body#list h1 span, body#sorry h1 span').delay(250).each(function (index) {
        $(this).delay(index * 50).queue(function () {
            $(this).addClass('down').dequeue();
        });
    });

    // Basic Animations.
    $('body.sample').fadeTo(2000, 1);
    setTimeout(function () {
        $('body.sample list ul li').addClass('rotate');
        $('body.sample .bg').fadeTo(3000, 1);
    }, 3000);

});
// jQuery Script End. //////////////////////////////////////////////////////////
