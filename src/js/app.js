import { Scene, WebGLRenderer } from "three";
import Cone from "./cone";
import Camera from "./camera";

var scene = new Scene()
var camera = new Camera()

var renderer = new WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

scene.add(Cone(0xff0000))

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();