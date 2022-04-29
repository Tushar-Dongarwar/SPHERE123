

// Loading
const textureLoader = new THREE.TextureLoader()

const normalTexture = textureLoader.load('./earth.jpeg')
const normalTextureSUN = textureLoader.load('./sun.jpeg')
const normalTextureMoon = textureLoader.load('./moon.jpeg')
const normalTextureJupiter = textureLoader.load('./jupiter.jpeg')
const normalTextureSaturn = textureLoader.load('./saturn.jpeg')
const normalTextureMercury = textureLoader.load('./mercury.jpeg')
const normalTextureMars = textureLoader.load('./mars.jpeg')
const normalTextureVenus = textureLoader.load('./venus.jpeg')
const normalTextureNeptune = textureLoader.load('./neptune.jpeg')
const normalTextureUranus = textureLoader.load('./uranus.jpeg')
const normalTextureSaturnring = textureLoader.load('./saturnring.jpeg')


// Debug


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects
const SUNgeometry = new THREE.SphereBufferGeometry(.9, 64, 64)
const EARTHgeometry = new THREE.SphereBufferGeometry(.5, 64, 64)
const Moongeometry = new THREE.SphereBufferGeometry(.5, 64, 64)
const Jupitergeometry = new THREE.SphereBufferGeometry(.6, 64, 64)
const Saturngeometry = new THREE.SphereBufferGeometry(.25, 64, 64)
const Mercurygeometry = new THREE.SphereBufferGeometry(.2, 64, 64)
const Marsgeometry = new THREE.SphereBufferGeometry(.2, 64, 64)
const Venusgeometry = new THREE.SphereBufferGeometry(.3, 64, 64)
const Neptunegeometry = new THREE.SphereBufferGeometry(.4, 64, 64)
const Uranusgeometry = new THREE.SphereBufferGeometry(.45, 64, 64)
const Saturnringgeometry = new THREE.SphereBufferGeometry(.5, 64, 64)


// Materials

const EARTHmaterial = new THREE.MeshStandardMaterial()
EARTHmaterial.metalness = 0
EARTHmaterial.roughness = 0.3
EARTHmaterial.opacity = 0.9
EARTHmaterial.map = normalTexture;

const sphereEARTH = new THREE.Mesh(EARTHgeometry,EARTHmaterial)

const Jupitermaterial = new THREE.MeshStandardMaterial()
Jupitermaterial.metalness = 0
Jupitermaterial.roughness = 0.3
Jupitermaterial.opacity = 0.9
Jupitermaterial.map = normalTexture;

const Moonmaterial = new THREE.MeshStandardMaterial()
Moonmaterial.metalness = 0
Moonmaterial.roughness = 0.3
Moonmaterial.opacity = 0.9
Moonmaterial.map = normalTexture;


const sphereMoon = new THREE.Mesh(Moongeometry,moonmaterial)

const Saturnmaterial = new THREE.MeshStandardMaterial()
Saturnmaterial.metalness = 0
Saturnmaterial.roughness = 0.3
Saturnmaterial.opacity = 0.9
Saturnmaterial.map = normalTexture;

const sphereSaturn = new THREE.Mesh(Saturngeometry,Saturnmaterial)

constMercurymaterial = new THREE.MeshStandardMaterial()
Mercurymaterial.metalness = 0
Mercurymaterial.roughness = 0.3
Mercurymaterial.opacity = 0.9
Mercurymaterial.map = normalTexture;

const sphereMercury = new THREE.Mesh(Mercurygeometry,Mercurymaterial)

const Marsmaterial = new THREE.MeshStandardMaterial()
Marsmaterial.metalness = 0
Marsmaterial.roughness = 0.3
Marsmaterial.opacity = 0.9
Marsmaterial.map = normalTexture;

const sphereMars = new THREE.Mesh(Marsgeometry,Marsmaterial)

const Venusmaterial = new THREE.MeshStandardMaterial()
Venusmaterial.metalness = 0
Venusmaterial.roughness = 0.3
Venusmaterial.opacity = 0.9
Venusmaterial.map = normalTexture;

const sphereVenus = new THREE.Mesh(Venusgeometry,Venusmaterial)

const Neptunematerial = new THREE.MeshStandardMaterial()
Neptunematerial.metalness = 0
Neptunematerial.roughness = 0.3
Neptunematerial.opacity = 0.9
Neptunematerial.map = normalTexture;

const sphereNeptune = new THREE.Mesh(Neptunegeometry,Neptunematerial)

constUranusmaterial = new THREE.MeshStandardMaterial()
Uranusmaterial.metalness = 0
Uranusmaterial.roughness = 0.3
Uranusmaterial.opacity = 0.9
Uranusmaterial.map = normalTexture;

const sphereUranus = new THREE.Mesh(Uranusgeometry,Uranusmaterial)

const Saturnringmaterial = new THREE.MeshStandardMaterial()
Saturnringmaterial.map = normalTexture;

const sphereJupiter = new THREE.Mesh(Stringgeometry,Stringmaterial)

const SUNmaterial = new THREE.MeshStandardMaterial()
SUNmaterial.transparent = true
SUNmaterial.opacity = 0.9
SUNmaterial.metalness = 0
SUNmaterial.roughness = 0.3
SUNmaterial.map = normalTextureSUN;
SUNmaterial.color = new THREE.Color( 0xfff917 )

const sphereSUN = new THREE.Mesh(SUNgeometry,SUNmaterial)

// Mesh
const sphere = new THREE.Mesh(SUNgeometry,SUNmaterial)
scene.add(sphere)
scene.add(sphereEARTH)
scene.add(sphereSUN)
scene.add(sphereMoon)
scene.add(sphereJupiter)
scene.add(sphereSaturn)
scene.add(Saturnring)
scene.add(sphereMercury)
scene.add(sphereMars)
scene.add(sphereVenus)
scene.add(sphereNeptune)
scene.add(sphereUranus)

// Lights

const pointLight = new THREE.PointLight(0xffffff, 3)
pointLight.position.x = 0
pointLight.position.y = 0
pointLight.position.z = 0
scene.add(pointLight)

const ambientLight = new THREE.AmbientLight(0xffffff, 1)
scene.add(ambientLight)

//Light 2

// const pointLight2 = new THREE.PointLight(0xff0000, 2)
// pointLight2.position.set(-1.86,1,-1.65)
// pointLight2.intensity = 10

// scene.add(pointLight2)

//Light 3

// const pointLight3 = new THREE.PointLight(0xe1ff, 2)
// pointLight3.position.set(2.13,-3,-1.98)
// pointLight3.intensity = 6.8

// scene.add(pointLight3)

// const light2Color = {
//     color: 0xff0000
// }

// light2.addColor(light2Color, 'color')
//     .onChange(() =>{
//         pointLight3.color.set(light2Color.color)
//     })

// const pointLightHelper2 = new THREE.PointLightHelper(pointLight3, 1)
// scene.add(pointLightHelper2)


 
/**
 * Sizes
 */

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

document.addEventListener('mousemove', onDocumentMouseMove)

let mouseX = 0
let mouseY = 0

let targetX = 0
let targetY = 0

const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

function onDocumentMouseMove(event) {

    mouseX = (event.clientX - windowHalfX)
    mouseY = (event.clientY - windowHalfY)
}

const updateSphere = (event) => {
    sphere.position.y = window.scrollY * .001
}

window.addEventListener('scroll', updateSphere);


const clock = new THREE.Clock()

const tick = () =>
{
    targetX = mouseX * .001
    targetY = mouseY * .001


    const elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.z = .5 * elapsedTime

    sphere.rotation.y += .5 * (targetX - sphere.rotation.y)
    sphere.rotation.x += .05 * (targetY - sphere.rotation.x)
    sphere.position.z += -.05 * (targetY - sphere.rotation.x)
    
    sphereEARTH.position.y = -1
    sphereEARTH.rotation.y = .5 * elapsedTime
    sphereEARTH.rotation.y += .5 * (targetX - sphereEARTH.rotation.y)
    sphereEARTH.rotation.x += .05 * (targetY - sphereEARTH.rotation.x)
    sphereEARTH.position.z += -.05 * (targetY - sphereEARTH.rotation.x)
 
    
    
    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()


