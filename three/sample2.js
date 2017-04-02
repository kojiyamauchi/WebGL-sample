var THREE = require('three');

if(document.getElementById('sample2')) {

    var draw = function () {

        // WebGL - three.js Code.
        // THREE.Scene(); => putiing objects.
        // THREE.PerspectiveCamera(); => photograph the object.
        // THREE.WebGLRenderer(); => render the camera.
        // View => draw to the canvas.

        // Variable for Creating Object & Light Source.
        var scene = new THREE.Scene();

        // Variable for Creating Camera.
        var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

        // Variable for Creating WebGL Renderer.
        var renderer = new THREE.WebGLRenderer();
        // Render Size Set.
        renderer.setSize(window.innerWidth, window.innerHeight);
        // Add Canvas to <body>.
        document.getElementById('sample2').appendChild(renderer.domElement);


    };

    window.addEventListener('DOMContentLoaded', draw, false);

}
