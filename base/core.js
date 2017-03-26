// Riot JS Script. /////////////////////////////////////////////////////////////
var riot = require('riot');

require('../tags/heading.tag');
require('../tags/topList.tag');
require('../tags/copyRight.tag');
require('../tags/bg.tag');
require('../tags/list.tag');
require('../tags/sorry.tag');
//require('../tags/default.tag');

riot.mount('*');
// Riot JS Script End. /////////////////////////////////////////////////////////


// Three JS Script. ////////////////////////////////////////////////////////////
var THREE = require('three');

var draw = function () {

    // WebGL - three.js Code.
    // THREE.Scene(); => putiing objects.
    // THREE.PerspectiveCamera(); => photograph the object.
    // THREE.WebGLRenderer(); => render the camera.
    // View => draw to the <canvas></canvas>.

    // Temporary Canvas Size Variable.
    // Actually, window.innerWidth & window.innerHeight.
    var W = 1440,
        H = 775;

    // Variable for Creating Object & Light Source.
    var scene = new THREE.Scene();

    // Variable for Creating Camera.
    //var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    var camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 1000);

    // Variable for Creating WebGL Renderer.
    var renderer = new THREE.WebGLRenderer({
        alpha: true
    });
    // Render Size Set.
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setSize(W, H);
    // Render BackGround Color.
    renderer.setClearColor(0x000000, 0);
    // Add <canvas></canvas> into <body></body>.
    document.body.appendChild(renderer.domElement);

    // Create Box.
    var geometry = new THREE.BoxGeometry(0.75, 0.75, 0.75);
    var material = new THREE.MeshPhongMaterial({
        color: 0x66CC00
    });
    var box = new THREE.Mesh(geometry, material);
    box.position.x = -1.25;
    box.position.y = -1;
    box.position.z = -5;
    scene.add(box);

    // Add Parallel Light Source.
    var directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // Initial Execution.
    var update = function () {
        requestAnimationFrame(update);

        // Rotation Box.
        box.rotation.x += 0.02;
        box.rotation.y += 0.02;

        renderer.render(scene, camera);
    };
    update();
};

window.addEventListener('DOMContentLoaded', draw, false);
// Three JS Script End. ////////////////////////////////////////////////////////


// jQuery Script. //////////////////////////////////////////////////////////////
'use strict';

var jQuery = require('jQuery');

jQuery(function ($) {

    // If SP & Tablet Access, Replace URL.
    var ua = navigator.userAgent,
        currentURL = location.href,
        replaceURL = 'http://kojiyamauchi.com/webGL_sample/sorry.html';
    if(ua.indexOf('iPhone') > -1 || ua.indexOf('iPad') > -1 || ua.indexOf('iPod') > -1 || ua.indexOf('Android') > -1) {
        if(currentURL.indexOf('sorry.html') === -1) {
            location.href = replaceURL;
        }
    }


    if($('body').attr('id') === 'list' || $('body').attr('id') === 'sorry') {
        $('canvas').hide();
    } else {
        $('html').css({
            'background-color': '#000'
        });
    }

    $('body#list h1 span, body#sorry h1 span').delay(250).each(function (index) {
        $(this).delay(index * 50).queue(function () {
            $(this).addClass('down').dequeue();
        });
    });

    $('body#sample1').fadeTo(2000, 1);
    setTimeout(function () {
        $('body#sample1 list ul li').addClass('rotate');
        $('body#sample1 bg').fadeTo(3000, 1);
    }, 3000);
});
// jQuery Script End. //////////////////////////////////////////////////////////
