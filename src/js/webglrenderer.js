import { WebGLRenderer } from "three";

export default function() {
	var renderer = new WebGLRenderer()
	renderer.setSize( window.innerWidth, window.innerHeight )
	document.body.appendChild( renderer.domElement )
	return renderer
}