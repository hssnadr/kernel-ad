// NOT FROM TUTO -> https://official-osorina.medium.com/building-a-3d-product-configurator-using-nuxt-and-three-js-part-2-fc960e19aa18
// It is probably necessary to move this global class somewhere closer
// to the root directory but in this implementation i think this is not necessary.

// I also think that it would be best to use the VUE 3 Composition API -> https://v3.vuejs.org/api/composition-api.html#setup
// here — perhaps I will do this later and put the scene creation
// in the composition function.

/* eslint-disable unicorn/number-literal-case */

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
const TWEEN = require('@tweenjs/tween.js') // see: https://github.com/tweenjs/tween.js
const _mouse = new THREE.Vector2()

class SceneInit {
  constructor({ rootEl }) {
    this.canvas = document.createElement('canvas')

    this.root = rootEl
    this.width = rootEl.clientWidth
    this.height = rootEl.clientHeight

    this.background = 0xeeeeee

    this.init()
    this.update() // update() will be called at 60fps thanks to its requestAnimationFrame function in it
    this.bindEvents()
  }

  init() {
    // Scene
    this.scene = new THREE.Scene()
    this.initLights()
    this.initCamera()
    this.initRenderer()
    this.initControls()

    // Raycast
    this.raycaster = new THREE.Raycaster()
    this.curFocusObj = null // current focused object with mouse pointer

    // Tween test
    this.moveCameraTo(new THREE.Vector3(0, 200, 0), 1000)

    this.root.appendChild(this.canvas)
  }

  initLights() {
    // AMBIENT LIGHT
    const ambient = new THREE.AmbientLight(0xffffff, 1)
    this.scene.add(ambient)

    // POINT LIGHT
    const point = new THREE.PointLight(0xff0000, 0.1, 100)
    const geometry = new THREE.SphereBufferGeometry(10)
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
    const sphere = new THREE.Mesh(geometry, material) // landmark (-> REMOVE)
    const pos_ = new THREE.Vector3(10, 10, 0)
    point.position.set(pos_)
    sphere.position.set(pos_)
    this.scene.add(point)
    this.scene.add(sphere)

    // DIRECTIONAL LIGHT
    const directional = new THREE.DirectionalLight(0xffffff, 0.5)
    this.scene.add(directional)
  }

  initCamera() {
    const aspect = this.width / this.height

    this.camera = new THREE.PerspectiveCamera(70, aspect, 1, 3000) // args = field of view (degree), ratio, near clipping plane, far clipping plane

    this.camera.position.z = 200
    this.camera.aspect = aspect
    this.camera.updateProjectionMatrix()
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setSize(this.width, this.height) // smaller values => better performance
    this.renderer.setClearColor(this.background, 1)

    this.canvas = this.renderer.domElement // add the renderer element to the HTML document
  }

  initControls() {
    this.controls = new OrbitControls(this.camera, this.canvas)

    this.controls.minPolarAngle = (Math.PI * 1) / 6
    this.controls.maxPolarAngle = (Math.PI * 3) / 4

    this.controls.smooth = true
    this.controls.smoothspeed = 0.95
    this.controls.autoRotateSpeed = 2
    this.controls.maxDistance = 2000
    this.controls.minDistance = 5

    this.controls.update()
  }

  moveCameraTo(targetPos_, time_) {
    const camPos_ = this.camera.position
    const tween = new TWEEN.Tween(camPos_).to(targetPos_, time_)
    tween.easing(TWEEN.Easing.Quintic.Out)
    tween.onUpdate(() => {
      // console.log(camPos_.x, camPos_.y, camPos_.z)
    })
    tween.onComplete(() => {
      console.log('camera move complete')
    })
    tween.start()
  }

  onMouseMove(event) {
    event.preventDefault()
    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components
    _mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    _mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
  }

  update() {
    requestAnimationFrame(() => this.update()) // replace setInterval to refresh each frames (advantage: pauses when user on another navigator tab)

    TWEEN.update()
    // this.raycast()

    // Render
    this.camera.lookAt(this.scene.position)
    this.renderer.render(this.scene, this.camera) // call render method
  }

  raycast() {
    // Set ray
    this.raycaster.setFromCamera(_mouse, this.camera) // update the picking ray with the camera and mouse position
    const intersects_ = this.raycaster.intersectObjects(
      this.scene.children,
      true
    ) // calculate objects intersecting the picking ray

    // Get object
    if (intersects_.length > 0) {
      if (this.curFocusObj !== intersects_[0].object) {
        this.curFocusObj = intersects_[0].object
        console.log(this.curFocusObj.name)
        window.$nuxt.$emit('ONFOCUS-THREEJS', this.curFocusObj)
      }
    } else {
      this.curFocusObj = null
    }
  }

  getFocusObj() {
    return this.curFocusObj
  }

  loadModel(id_) {
    this.loader = new GLTFLoader()

    const path_ = '/docstep/' + id_ + '/' + id_ + '.gltf'

    this.loader.load(path_, (gltf) => {
      gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material.map = null // reset original material
          // eslint-disable-next-line unicorn/number-literal-case
          const randomColor = new THREE.Color(0xffffff)
          // eslint-disable-next-line unicorn/number-literal-case
          randomColor.setHex(Math.random() * 0xffffff)
          child.material = new THREE.MeshLambertMaterial({
            color: randomColor
          })

          console.log(child.name)
        }

        setTimeout(() => {
          this.isLoaded = true
        }, 200)
      })

      this.scene.add(gltf.scene)
    })
  }

  pushStepConfig(stepIndex_) {
    if (stepIndex_ === -1) {
      this.showAll()
    } else {
      console.log('--------------')
      this.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.visible = false // reset display
          const data_ = child.name.split('_') // split data info

          if (data_.length > 1) {
            const stepIn_ = parseInt(data_[0], 10)
            const id_ = data_[1] // UNUSED!!

            console.log(id_)
            console.log(' - in = ' + stepIn_)

            // option init
            let stepOut_ = -1
            const translation_ = { axis: 'X', offset: 0 }
            const rotation_ = { axis: 'X', offset: 0 }

            data_.splice(2).forEach((element) => {
              const option_ = element.substring(0, 3)
              const val_ = element.substring(3)
              console.log(' - ' + option_ + ' = ' + val_)

              switch (option_.toLowerCase()) {
                case 'out':
                  stepOut_ = parseInt(val_, 10)
                  break
                case 'tra':
                  translation_.axis = val_.substring(0, 1)
                  translation_.offset = parseInt(val_.substring(1), 10)
                  break
                case 'rot':
                  rotation_.axis = val_.substring(0, 1)
                  rotation_.offset = parseInt(val_.substring(1), 10)
                  break
                default:
                  break
              }
            })

            // SET OBJECT
            if (stepIn_ <= stepIndex_) {
              child.visible = true // show part

              // SET ANIMATION
              if (stepIn_ === stepIndex_) {
                if (translation_.offset !== 0) {
                  console.log(translation_)

                  // const startPos_ = child.position
                  // const targetPos_ = startPos_

                  // switch (translation_.axis.toLowerCase()) {
                  //   case 'x':
                  //     targetPos_.setX(startPos_.x + 10) // + translation_.offset
                  //     console.log('X', targetPos_.x)
                  //     break
                  //   case 'y':
                  //     console.log('Y')
                  //     targetPos_.y = startPos_.y + translation_.offset
                  //     break
                  //   case 'z':
                  //     console.log('Z')
                  //     targetPos_.z = startPos_.z + translation_.offset
                  //     break
                  //   default:
                  //     break
                  // }

                  // console.log('START AT')
                  // console.log(startPos_)
                  // console.log('STOP AT')
                  // console.log(targetPos_)

                  // // TWEEN
                  // const tweenX = new TWEEN.Tween(startPos_).to(targetPos_, 1000)
                  // tweenX.easing(TWEEN.Easing.Quintic.Out)
                  // tweenX.onUpdate(() => {
                  //   // console.log(camPos_.x, camPos_.y, camPos_.z)
                  // })
                  // tweenX.onComplete(() => {
                  //   console.log('camera move complete')
                  // })
                  // tweenX.start()
                }
                if (rotation_.offset !== 0) {
                  console.log(rotation_)
                }
              }

              if (stepOut_ !== -1 && stepOut_ <= stepIndex_) {
                child.visible = false // hide part
              }
            }
          }
        }
      })
    }
  }

  showAll() {
    this.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.visible = true
      }
    })
  }

  hideAll() {
    this.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.visible = false
      }
    })
  }

  remove(objName) {
    const object = this.scene.getObjectByName(objName)

    if (object) {
      this.scene.remove(object)
    }
  }

  onResize() {
    this.width = this.root.clientWidth
    this.height = this.root.clientHeight

    this.renderer.setSize(this.width, this.height)

    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()
  }

  bindEvents() {
    window.addEventListener('resize', () => this.onResize())
    window.addEventListener('mousemove', this.onMouseMove, false)
  }
}

// To call our class as a function
const sceneInit = (args) => new SceneInit(args)
export default sceneInit
