// Require three.js.
var THREE = require('three'),
    // Require stats.js.
    Stats = require('stats.js'),
    // Require Color JS Library.
    chroma = require('chroma-js');

if(document.getElementById('sample4')) {

    var draw = function () {

        // WebGL - three.js Code.
        // THREE.Scene(); => putiing objects.
        // THREE.PerspectiveCamera(); => photograph the object.
        // THREE.WebGLRenderer(); => render the camera.
        // View => draw to the canvas.

        // Get <body></body> Width & Height.
        var BW = document.body.clientWidth,
            BH = document.body.clientHeight;

        // Add Stats.
        var stats = initStats();

        // Variable for Creating Object & Light Source.
        var scene = new THREE.Scene();

        // Variable for Creating WebGL Renderer.
        var renderer = new THREE.WebGLRenderer({
            alpha: true
        });

        // Render BackGround Color.
        renderer.setClearColor(0x000000, 0);

        // Render Size Set.
        renderer.setSize(BW, BH);

        // Renderer of Shadow Rendering Active.
        renderer.shadowMapEnabled = true;

        // Add AxisHelper. X-Axis => Red Lines, Y-Axis => Green Lines, Z-Axis => Blue Lines, Argument => Line Length.
        var axes = new THREE.AxisHelper(1000);
        scene.add(axes);

        // Create Sphere.
        var sphereGeometry = new THREE.SphereGeometry(4, 50, 50);
        var sphereMaterial = new THREE.MeshPhongMaterial(
        {
            color: 0xFF6633,
            transparent: true,
            opacity: 1
        });
        var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        // Add Sphere Shadow;
        sphere.castShadow = true;
        // Rotate and Position the Sphere.
        sphere.rotation.x = 1;
        sphere.position.x = 1;
        sphere.position.y = -1;
        sphere.position.z = 20;
        // Add Sphere;
        scene.add(sphere);

        // Add Parallel Light Source.
        var directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
        directionalLight.position.set(1, 10, 14);
        scene.add(directionalLight);

        // Sort Added Scene.
        renderer.sortObjects = false;

        // Variable for Creating Camera.
        var camera = new THREE.PerspectiveCamera(45, BW / BH, 0.1, 1000);

        // Position and Point the Camera.
        camera.position.x = 1;
        camera.position.y = 1;
        camera.position.z = 40;
        camera.lookAt(scene.position);

        // Add Canvas to <body>.
        document.getElementById('sample4').appendChild(renderer.domElement);

        // Add dat.GUI.
        var controls = new function () {
            this.bouncingSpeed = 0.03;
        };
        var gui = new dat.GUI();
        gui.add(controls, 'bouncingSpeed', 0, 0.08);

        render();

        // Sphere Bounce Function.
        var step = 0;

        function render() {
            // Stats Up Date.
            stats.update();

            step += controls.bouncingSpeed;
            sphere.position.y = -1.5 + (-0.5 * Math.abs(Math.sin(step)));
            sphere.position.z = 23.5 + (13.22 * (Math.cos(step)));

            // render using requestAnimationFrame
            requestAnimationFrame(render);
            renderer.render(scene, camera);
        }

        // Stats Function.
        function initStats() {
            var stats = new Stats();
            // 0: fps, 1: ms
            stats.setMode(0);
            stats.domElement.style.position = 'absolute';
            stats.domElement.style.left = '0px';
            stats.domElement.style.top = '0px';
            document.querySelector('stats').appendChild(stats.domElement);
            return stats;
        }

        // Responsive Function.
        var windowResize = function () {
            // Get <body></body> Width & Height.
            var BW = document.body.clientWidth,
                BH = document.body.clientHeight;
            camera.aspect = BW / BH;
            camera.updateProjectionMatrix();
            renderer.setSize(BW, BH);
        };

        // If Window Resize, Start Up windowResize();
        window.addEventListener('resize', windowResize, false);

    };

    window.addEventListener('DOMContentLoaded', draw, false);

}
