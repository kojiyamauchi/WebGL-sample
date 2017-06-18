// Require three.js.
var THREE = require('three'),
  // Require stats.js.
  Stats = require('stats.js'),
  // Require Color JS Library.
  chroma = require('chroma-js');

if(document.getElementById('sample5')) {

  var draw = function () {

    // WebGL - three.js Code.
    // THREE.Scene(); => putiing objects.
    // THREE.PerspectiveCamera(); => photograph the object.
    // THREE.WebGLRenderer(); => render the camera.
    // View => draw to the canvas.

    // Get <body></body> Width & Height.
    var BW = document.body.clientWidth,
      BH = document.body.clientHeight;

    // Using chrome-js.
    var scale = chroma.scale(['#adc851', '#feda3f', '#8141bf', '#1f6931', '#346ac6', '#e8574d', ]);

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

    // Variable for Creating Ground Plane.
    // THREE.PlaneGeometry(); Argument => THREE.PlaneGeometry( width, height , widthSegments, heightSegments );
    var planeGeometry = new THREE.PlaneGeometry(1, 1, 1, 1);
    var planeMaterial = new THREE.MeshLambertMaterial({
      color: 0x000000
    });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    // Plane Add Shadow.
    plane.receiveShadow = true;
    // Rotate and Position the Plane.
    plane.rotation.x = 1;
    plane.position.x = 1;
    plane.position.y = 1;
    plane.position.z = 1;
    // Add Plane.
    scene.add(plane);


    // Create Sphere.
    var range = 5;
    var stepX = 10;

    // Delay.
    setTimeout(function () {
      // Loop.
      setInterval(function () {

        var sphere = new THREE.Mesh(new THREE.SphereGeometry(4, 50, 50),
          new THREE.MeshPhongMaterial(
          {
            color: scale(Math.random()).hex(),
            transparent: true,
            opacity: 1
          }));

        // Sphere Start Position Random.
        var startPosi = Math.floor(Math.random() * 6) + (-2);
        console.log(startPosi);
        sphere.position.x = startPosi * stepX + (Math.random() - 0.5) * range;
        sphere.position.y = -80;
        sphere.position.z = -800;
        sphere.castShadow = true;
        scene.add(sphere);

      }, 500);

    }, 5000);

    // Add Parallel Light Source.
    var directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // Add Subtle Ambient Lighting
    var ambientLight = new THREE.AmbientLight(0x0c0c0c);
    scene.add(ambientLight);

    // Add Spotlight for the Shadows
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(10, 10, 10);
    spotLight.castShadow = true;
    scene.add(spotLight);

    // Sort Added Scene.
    renderer.sortObjects = false;

    // Variable for Creating Camera.
    var camera = new THREE.PerspectiveCamera(45, BW / BH, 0.1, 100000);

    // Position and Point the Camera.
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 0;
    camera.lookAt(scene.position);
    //camera.lookAt({ x: 0, y: 0, z: 0 });

    // Add Canvas to <body>.
    document.getElementById('sample5').appendChild(renderer.domElement);

    // Add dat.GUI.
    var controls = new function () {
      this.DirectionX = 0;
      this.DirectionY = 0.6;
      this.DirectionZ = 6;
    };

    var gui = new dat.GUI();
    gui.add(controls, 'DirectionX', -5, 5);
    gui.add(controls, 'DirectionY', 0.6, 22);
    gui.add(controls, 'DirectionZ', 0, 6);

    render();

    // Sphere Position Control Function.
    function render() {
      // Stats Up Date.
      stats.update();

      scene.traverse(function (e) {
        if(e instanceof THREE.Mesh) {
          e.position.x += controls.DirectionX;
          e.position.y += controls.DirectionY;
          e.position.z += controls.DirectionZ;
        }
      });
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
