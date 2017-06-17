// Riot JS Script. /////////////////////////////////////////////////////////////
var riot = require('riot');

require('../tags/heading.tag');
require('../tags/top-list.tag');
require('../tags/list.tag');
require('../tags/bg1.tag');
require('../tags/bg2.tag');
require('../tags/bg3.tag');
require('../tags/bg4.tag');
require('../tags/bg5.tag');
require('../tags/sorry.tag');
require('../tags/axis-helper.tag');
require('../tags/copy-right.tag');
require('../tags/stats.tag');
require('../tags/not-completed.tag');
//require('../tags/default.tag');

riot.mount('*');
// Riot JS Script End. /////////////////////////////////////////////////////////


// Require Three JS Script. ////////////////////////////////////////////////////
require('../three/sample1.js');
require('../three/sample2.js');
require('../three/sample3.js');
require('../three/sample4.js');
require('../three/sample5.js');
// Three JS Script End. ////////////////////////////////////////////////////////


// jQuery Script. //////////////////////////////////////////////////////////////
'use strict';

var jQuery = require('jQuery');

jQuery(function ($) {

  // Global Variable.
  var currentURL = location.href;

  // If Not Responsive Flie to SP & Tablet Access, Replace URL.
  function replaceURL() {
    var ua = navigator.userAgent,
      replaceURL = 'http://kojiyamauchi.com/webGL_sample/sorry.html';
    if(ua.indexOf('iPhone') > -1 || ua.indexOf('iPad') > -1 || ua.indexOf('iPod') > -1 || ua.indexOf('Android') > -1) {
      if($('body').hasClass('noSP')) {
        location.href = replaceURL;
      }
    }
  }
  replaceURL();

  // Link List Current Link Hide Function.
  function checkCurrent() {
    $('list a').each(function () {
      var _this = $(this),
        checkHref = _this.attr('href');
      if(currentURL.indexOf(checkHref) > -1) {
        _this.parent('li').hide();
      }
    });
  }
  checkCurrent();

  // WebGL Page is Background Color => #00000;
  function addBGColor() {
    if($('body').attr('id') !== 'list' && $('body').attr('id') !== 'sorry') {
      $('html').css({
        'background-color': '#000'
      });
    }
  }
  addBGColor();

  // Sample2.html & Sample3.html List Font Color => #fffff;
  function addTextColor() {
    if($('body').attr('id') === 'sample2' || $('body').attr('id') === 'sample3' || $('body').attr('id') === 'sample4' || $('body').attr('id') === 'sample5') {
      $('list a, axis-helper').addClass('textWhite');
    }
  }
  addTextColor();

  // Text Animations.
  function textAnimaions() {
    $('body#list h1 span, body#sorry h1 span').delay(250).each(function (index) {
      $(this).delay(index * 50).queue(function () {
        $(this).addClass('down').dequeue();
      });
    });
    $('body#sample5 not-completed p span').delay(2000).each(function (index) {
      $(this).delay(index * 25).queue(function () {
        $(this).addClass('rotate').dequeue();
      });
    });
  }
  textAnimaions();

  // Basic Animations.
  function commonFadeIn() {
    if($('body').attr('id') !== 'sample4') {
      $('body.sample').fadeTo(2000, 1);
      setTimeout(function () {
        $('body.sample list ul li').addClass('rotate');
        $('body.sample .bg').fadeTo(3000, 1);
      }, 3000);
    } else if($('body').attr('id') === 'sample4') {
      $('body.sample').fadeTo(2000, 1);
      setTimeout(function () {
        $('body.sample list ul li').addClass('rotate');
        $('body.sample .bg').delay(1300).fadeTo(3000, 1);
      }, 3350);
    }
  }
  commonFadeIn();

});
// jQuery Script End. //////////////////////////////////////////////////////////
