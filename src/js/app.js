import { Scene } from "three";
import Cone from "./cone";
import Camera from "./camera";
import WebGLRenderer from "./webglrenderer";

var scene = new Scene()
var camera = new Camera()
var renderer = new WebGLRenderer()

scene.add(Cone(0xff0000))

const animate = () => {
	requestAnimationFrame( animate )
	renderer.render( scene, camera )
}
animate()