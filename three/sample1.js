var THREE = require('three');

if(document.getElementById('sample1')) {

    var draw = function () {

        // WebGL - three.js Code.
        // THREE.Scene(); => putiing objects.
        // THREE.PerspectiveCamera(); => photograph the object.
        // THREE.WebGLRenderer(); => render the camera.
        // View => draw to the <canvas></canvas>.

        // Temporary Canvas Size Variable.
        // Actually, window.innerWidth & window.innerHeight.
        var W = 1440,
            H = 811;

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

        // Add AxisHelper. X Axis => Red Lines, Y Axis => Green Lines, Z Lines => Blue Lines, Argument => Line Length.
        var axes = new THREE.AxisHelper(1000);
        scene.add(axes);

        // Add <canvas></canvas> into <body></body>.
        document.getElementById('sample1').appendChild(renderer.domElement);

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

    // Loaded All DOM. Start Up draw();
    window.addEventListener('DOMContentLoaded', draw, false);

}
