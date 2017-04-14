// Require three.js.
var THREE = require('three'),
    // Require Color JS Library.
    chroma = require('chroma-js');

if(document.getElementById('sample3')) {

    var draw = function () {

        // WebGL - three.js Code.
        // THREE.Scene(); => putiing objects.
        // THREE.PerspectiveCamera(); => photograph the object.
        // THREE.WebGLRenderer(); => render the camera.
        // View => draw to the canvas.

        // Using chrome-js.
        //var scale = chroma.scale(['AddColor', 'AddColor', 'AddColor', 'AddColor']);

        // Get <body></body> Width & Height.
        var BW = document.body.clientWidth;
        var BH = document.body.clientHeight;

        // Variable for Creating Object & Light Source.
        var scene = new THREE.Scene();

        // Variable for Creating Camera.
        var camera = new THREE.PerspectiveCamera(45, BW / BH, 0.1, 1000);

        // Add Camera.
        scene.add(camera);

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

        // create the ground plane
        //var planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1);
        //var planeMaterial = new THREE.MeshLambertMaterial({
        //    color: 0xffffff,
        //    transparent: true,
        //    opacity: 1
        //
        //});
        //var plane = new THREE.Mesh(planeGeometry, planeMaterial);
        //plane.receiveShadow = true;

        // rotate and position the plane
        //plane.rotation.x = 0 * Math.PI;
        //plane.position.x = 15;
        //plane.position.y = 0;
        //plane.position.z = 0;

        // add the plane to the scene
        //scene.add(plane);

        // Position and Point the Camera.
        camera.position.x = -30;
        camera.position.y = 50;
        camera.position.z = -60;
        camera.lookAt(scene.position);

        // Create Sphere.
        var sphereGeometry = new THREE.SphereGeometry(6, 50, 50);
        var sphereMaterial = new THREE.MeshPhongMaterial(
        {
            color: 0xFF0066,
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

        // Create Box.
        //var geometry = new THREE.BoxGeometry(0.75, 0.75, 0.75);
        //var material = new THREE.MeshPhongMaterial({
        //    color: 0x000000
        //});
        //var box = new THREE.Mesh(geometry, material);
        //box.position.x = 1;
        //box.position.y = 1;
        //box.position.z = 1;
        // Add Box.
        //scene.add(box);

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

        // Add Canvas to <body>.
        document.getElementById('sample3').appendChild(renderer.domElement);
        var step = 0;
        render();
        // Sphere Bounce Function.
        function render() {
            step += 0.03;
            sphere.position.x = -30 + (40 * (Math.cos(step)));
            sphere.position.y = -30 + (65 * Math.abs(Math.sin(step)));

            // render using requestAnimationFrame
            requestAnimationFrame(render);
            renderer.render(scene, camera);
        }

        // Responsive Function.
        var windowResize = function () {
            camera.aspect = BW / BH;
            camera.updateProjectionMatrix();
            renderer.setSize(BW, BH);
        };

        // If Window Resize, Start Up windowResize();
        window.addEventListener('resize', windowResize, false);

    };

    window.addEventListener('DOMContentLoaded', draw, false);

}
