// JavaScript 

/*
for full screen view uncomment THREEx.WindowResize(this.renderer, this.camera);
and change canvas_width and height to window.innerWidth/height
*/
var view3D = {
  scene: null,
  camera: null,
  controls: null,
  renderer: null,
  container: null,
  controls: null,
  clock: null,
  stats: null,
  objects: [],
  moveCamera: null,
  animationFrame:null,
  
  init: function() { // Initialization
  	this.moveCamera={movement:false,time:0,x:15,y:25,z:50};
	this.clock = new THREE.Clock();
	// create main scene
	this.scene=new THREE.Scene();
	var CANVAS_WIDTH=600,CANVAS_HEIGHT=600;
    // prepare camera
    var VIEW_ANGLE=45,ASPECT=CANVAS_WIDTH/CANVAS_HEIGHT,NEAR=1,FAR=20000;
	var radius=1;
    this.camera=new THREE.PerspectiveCamera(VIEW_ANGLE,ASPECT,1,1000 );
	this.camera.position.set(15,25,50);
	this.camera.rotation.set(0,0,0);
	this.scene.add(this.camera);
	
	
	
    // prepare renderer
    this.renderer=new THREE.WebGLRenderer({antialias:true, preserveDrawingBuffer: true});
    this.renderer.setPixelRatio(window.devicePixelRatio);
	this.renderer.setSize(CANVAS_WIDTH,CANVAS_HEIGHT);
    //background Color
	this.renderer.setClearColor(0xDdDdDd);
	
    this.renderer.shadowMap.Enabled=true;
    this.renderer.shadowMapSoft=true;

	// prepare container
    this.container = document.getElementById('canvas');
    document.body.appendChild(this.container);
    this.container.appendChild(this.renderer.domElement);
	//event
    // prepare controls (OrbitControls)
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target = new THREE.Vector3(0, radius, 0);
    this.controls.maxDistance = 3000;
	//control of camera
	this.controls = new THREE.OrbitControls( this.camera, this.container );
	this.controls.target = new THREE.Vector3( 0, 0, 0 );
	this.controls.update();
	// light
    this.scene.add( new THREE.AmbientLight(0xafafaf) );
    var dirLight = new THREE.DirectionalLight(0xa0a0a0);
    dirLight.position.set(150, 250, 500).normalize();
    this.camera.add(dirLight);
    this.camera.add(dirLight.target);
    // load models
    this.loadModels();
  },
  loadModels: function() {
	//chooseBag('borsa1');
    // here we will load all the models ...
  }
};

// Animate the scene
function animate() {
  animationFrame = requestAnimationFrame(animate);
  moveCamera();
  render();
}
function moveCamera(){
	if (view3D.moveCamera.movement){
	var needmoved=false;
	var posx=view3D.camera.position.x,
	posy = view3D.camera.position.y,
	posz=view3D.camera.position.z;
	var e = 0.3;
	var dx=(view3D.moveCamera.x-posx)/40,
	 	dy=(view3D.moveCamera.y-posy)/40,
	 	dz=(view3D.moveCamera.z-posz)/40;
	//move
	if (!(view3D.moveCamera.x-e<posx && posx<view3D.moveCamera.x+e)){
		view3D.camera.position.x= posx + dx;
		needmoved=true}
	if (!(view3D.moveCamera.y-e<posy && posy<view3D.moveCamera.y+e)){
		view3D.camera.position.y= posy + dy;
		needmoved=true}
	if (!(view3D.moveCamera.z-e<posz && posz<view3D.moveCamera.z+e)){
		view3D.camera.position.z= posz + dz;
		needmoved=true}
	if (!needmoved)
		view3D.moveCamera.movement=false;
		view3D.controls.target = new THREE.Vector3( 0, 0, 0 );view3D.controls.update();
  };
}
// Render the scene
function render(){
  if (view3D.renderer){
    view3D.renderer.render(view3D.scene, view3D.camera);
  }
}

function initializeview3D(){
  view3D.init();
  animate();
}
/*
if (window.addEventListener)
  window.addEventListener('load',initializeview3D,false);
else if (window.attachEvent)
  window.attachEvent('onload',initializeview3D);
else window.onload=initializeview3D;*/
