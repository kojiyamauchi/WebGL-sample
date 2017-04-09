var THREE = require('three'),
    chroma = require('chroma-js');

if(document.getElementById('sample2')) {

    var draw = function () {

        // WebGL - three.js Code.
        // THREE.Scene(); => putiing objects.
        // THREE.PerspectiveCamera(); => photograph the object.
        // THREE.WebGLRenderer(); => render the camera.
        // View => draw to the canvas.

        // Using chrome-js.
        var scale = chroma.scale(['#ffffff', '#7037e8', '#e8574d', '#459a16']);
        // Variable for Creating Object & Light Source.
        var scene = new THREE.Scene();
        // Variable for Creating Camera.
        var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        // Add Camera.
        scene.add(camera);

        // Variable for Creating WebGL Renderer.
        var renderer = new THREE.WebGLRenderer({
            alpha: true
        });

        // Render BackGround Color.
        renderer.setClearColor(0x000000, 0);
        // Render Size Set.
        renderer.setSize(window.innerWidth, window.innerHeight);
        // Renderer of Shadow Rendering Active.
        renderer.shadowMapEnabled = true;

        // Variable for Creating Ground Plane.
        // THREE.PlaneGeometry(); Argument => THREE.PlaneGeometry( width, height , widthSegments, heightSegments );
        /*
        var planeGeometry = new THREE.PlaneGeometry(,,,);
        var planeMaterial = new THREE.MeshLambertMaterial({
            color: Add Color
        });
        var plane = new THREE.Mesh(planeGeometry, planeMaterial);
        // Plane Add Shadow.
        plane.receiveShadow = true;
        // Rotate and Position the Plane.
        plane.rotation.x = ;
        plane.position.x = ;
        plane.position.y = ;
        plane.position.z = ;
        // Add Plane.
        scene.add(plane);
        */

        // Position and Point the Camera.
        camera.position.set(2, -2.5, 40);
        camera.lookAt({
            x: 0,
            y: 0,
            z: 5
        });

        // Add Sphere.
        /*
        var sphereGeometry = new THREE.SphereGeometry(1,50,50);
        var sphereMaterial = new THREE.MeshPhongMaterial(
        {
            color: Add Color,
            transparent: true,
            opacity: 1
        });
        var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        // Add Sphere Shadow;
        sphere.castShadow = true;
        // Rotate and Position the Sphere.
        sphere.rotation.x = ;
        sphere.position.x = ;
        sphere.position.y = ;
        sphere.position.z = ;
        // Add Sphere;
        scene.add(sphere);
        */

        // Add Box.
        var range = 2;
        var stepX = 16;
        var stepY = 6;
        var stepZ = 12;
        for(var i = -35; i < 5; i++) {
            for(var j = -15; j < 15; j++) {
                var box = new THREE.Mesh(new THREE.BoxGeometry(7.5, 7.5, 7.5),
                    new THREE.MeshPhongMaterial(
                    {
                        color: scale(Math.random()).hex(),
                        transparent: true,
                        opacity: 1

                    }));
                box.position.x = i * stepX + (Math.random() - 0.5) * range;
                box.position.y = j * stepY + (Math.random() - 0.5) * range;
                box.position.z = j * stepZ + (Math.random() - 0.5) * range;
                box.castShadow = true;
                scene.add(box);
            }
        }

        // Add Parallel Light Source.
        var directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(10, 10, 10);
        scene.add(directionalLight);

        // Sort Added Scene.
        renderer.sortObjects = false;

        // Add Canvas to <body>.
        document.getElementById('sample2').appendChild(renderer.domElement);
        render();

        // Box Rotate Function.
        function render() {
            scene.traverse(function (e) {
                if(e instanceof THREE.Mesh) {
                    e.rotation.x += 0.02;
                    e.rotation.y += 0.02;
                    e.rotation.z += 0.02;
                }
            });
            requestAnimationFrame(render);
            renderer.render(scene, camera);
        }
    };

    window.addEventListener('DOMContentLoaded', draw, false);

}
