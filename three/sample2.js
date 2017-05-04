// Require three.js.
var THREE = require('three'),
    // Require stats.js.
    Stats = require('stats.js'),
    // Require Color JS Library.
    chroma = require('chroma-js');

if(document.getElementById('sample2')) {

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
        var sphereGeometry = new THREE.SphereGeometry(6, 50, 50);
        var sphereMaterial = new THREE.MeshPhongMaterial(
        {
            color: 0xFF99FF,
            transparent: true,
            opacity: 1
        });
        var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        // Add Sphere Shadow;
        sphere.castShadow = true;
        // Rotate and Position the Sphere.
        sphere.position.x = 1;
        sphere.position.y = 1;
        sphere.position.z = -10;
        // Add Sphere;
        scene.add(sphere);

        // Add Subtle Ambient Lighting
        var ambientLight = new THREE.AmbientLight(0x0c0c0c);
        scene.add(ambientLight);

        // Add Spotlight for the Shadows
        var spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(20, 100, -100);
        spotLight.castShadow = true;
        scene.add(spotLight);

        // Sort Added Scene.
        renderer.sortObjects = false;

        // Variable for Creating Camera.
        var camera = new THREE.PerspectiveCamera(45, BW / BH, 0.1, 1000);

        // Position and Point the Camera.
        camera.position.x = -30;
        camera.position.y = 50;
        camera.position.z = -60;
        camera.lookAt(scene.position);

        // Add Canvas to <body>.
        document.getElementById('sample2').appendChild(renderer.domElement);

        // Add dat.GUI.
        //var controls = new function () {
        //};

        var gui = new dat.GUI();

        render();

        // Sphere Bounce Function.
        var step = 0;

        function render() {
            // Stats Up Date.
            stats.update();

            step += 0.03;
            sphere.position.x = -30 + (40 * (Math.cos(step)));
            sphere.position.y = -30 + (65 * Math.abs(Math.sin(step)));

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
            var BW = document.body.clientWidth,
                BH = document.body.clientHeight;
            camera.aspect = BW / BH;
            camera.updateProjectionMatrix();
            renderer.setSize(BW, BH);
        };

        // If Window Resize, Start Up windowResize();
        window.addEventListener('resize', windowResize, false);

    };

    // Loaded All DOM. Start Up draw();
    window.addEventListener('DOMContentLoaded', draw, false);

}
