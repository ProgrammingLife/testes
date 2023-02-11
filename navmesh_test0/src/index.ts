let resizeRequested: any = null;
function resize() {
	if ( engine ) {
		engine.resize();
	}
}
async function startApp () {
	window.addEventListener( "resize", () => {
		if ( resizeRequested ) {
			clearTimeout( resizeRequested );
		}
		resizeRequested = setTimeout( resize, 300 );
	} );
	setTimeout( () => { resize(); }, 150 );
}
function onReady() {
	document.oncontextmenu = ( ev: any ) => { ev.preventDefault(); ev.stopPropagation(); }
	resize();
	startApp();
}
document.addEventListener( "DOMContentLoaded", () => onReady() );

// --------------------------------------------------------------------------- //

import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { FreeCamera } from "@babylonjs/core/Cameras/freeCamera";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";

import { RecastJSPlugin } from "@babylonjs/core/Navigation/Plugins/recastJSPlugin";
declare const Recast: any;

const engine = new Engine( document.getElementById( "gamecanvas" ) as HTMLCanvasElement );
const scene = new Scene( engine );
const camera = new FreeCamera( "camera", new Vector3( 0, 5, -10 ), scene );
camera.setTarget( Vector3.Zero() );
const light = new HemisphericLight( "light", new Vector3( 0, 1, 0 ), scene );

const ground = MeshBuilder.CreateGround(
	"ground", { width: 100, height: 100 }, scene
);

( async () => {
	// const recast = await new Recast();
	/*
		I get this error:
			Uncaught (in promise) TypeError: this.bjsRECAST.Vec3 is not a constructor
	*/
	const recast = new Recast();
	const navigationPlugin = new RecastJSPlugin( recast );
	navigationPlugin.setWorkerURL( "libs/navMeshWorker.js" );
} ) ();


