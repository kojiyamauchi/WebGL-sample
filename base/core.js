'use strict'

// Riot.js Block.
import riot from 'riot'
import route from 'riot-route'
import 'babel-polyfill'

import '../tags/heading.tag'
import '../tags/top-list.tag'
import '../tags/list.tag'
import '../tags/bg1.tag'
import '../tags/bg2.tag'
import '../tags/bg3.tag'
import '../tags/bg4.tag'
import '../tags/bg5.tag'
import '../tags/sorry.tag'
import '../tags/axis-helper.tag'
import '../tags/copy-right.tag'
import '../tags/stats.tag'
import '../tags/not-completed.tag'

riot.mount('*');

// Three Block.
import '../three/sample1.js'
import '../three/sample2.js'
import '../three/sample3.js'
import '../three/sample4.js'
import '../three/sample5.js'

// jQuery
const jQuery = require('jQuery');

jQuery(function ($) {

  replaceURL();
  checkCurrent();
  addBGColor();
  addTextColor();
  textAnimaions();
  commonFadeIn();

  // If Not Responsive Flie to SP & Tablet Access, Replace URL.
  function replaceURL() {
    const ua = navigator.userAgent,
      replaceURL = 'http://kojiyamauchi.com/webGL_sample/sorry.html';
    if(ua.indexOf('iPhone') > -1 || ua.indexOf('iPad') > -1 || ua.indexOf('iPod') > -1 || ua.indexOf('Android') > -1) {
      if($('body').hasClass('noSP')) {
        location.href = replaceURL;
      }
    }
  }

  // Link List Current Link Hide Function.
  function checkCurrent() {
    const currentURL = location.href;
    $('list a').each(function () {
      const _this = $(this),
        checkHref = _this.attr('href');
      if(currentURL.indexOf(checkHref) > -1) {
        _this.parent('li').hide();
      }
    });
  }

  // WebGL Page is Background Color => #00000;
  function addBGColor() {
    const body = $('body');
    if(body.attr('id') !== 'list' && body.attr('id') !== 'sorry') {
      $('html').css({
        'background-color': '#000'
      });
    }
  }

  // Sample2.html & Sample3.html List Font Color => #fffff;
  function addTextColor() {
    const body = $('body');
    if(body.attr('id') === 'sample2' || body.attr('id') === 'sample3' || body.attr('id') === 'sample4' || body.attr('id') === 'sample5') {
      $('list a, axis-helper').addClass('textWhite');
    }
  }

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

  // Basic Animations.
  function commonFadeIn() {
    const body = $('body');
    if(body.attr('id') !== 'sample4') {
      $('body.sample').fadeTo(2000, 1);
      setTimeout(function () {
        $('body.sample list ul li').addClass('rotate');
        $('body.sample .bg').fadeIn(3000);
      }, 3000);
    } else if(body.attr('id') === 'sample4') {
      $('body.sample').fadeTo(2000, 1);
      setTimeout(function () {
        $('body.sample list ul li').addClass('rotate');
        $('body.sample .bg').delay(1300).fadeIn(3000);
      }, 3350);
    }
  }

});
// jQuery Script End. //////////////////////////////////////////////////////////