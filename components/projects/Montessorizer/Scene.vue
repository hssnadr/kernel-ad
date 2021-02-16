<template>
  <div ref="container" class="three-montessorizer"></div>
</template>

<script>
import SceneInit from './js/Scene.init'

export default {
  data() {
    return {
      model: {},
      objects: [],
      isLoaded: false
    }
  },
  created() {
    this.$nuxt.$on('ONFOCUS-THREEJS', this.setCurFocus)
  },
  beforeDestroy() {
    this.$nuxt.$off('ONFOCUS-THREEJS')
  },
  mounted() {
    this.scene = SceneInit({ rootEl: this.$refs.container })

    this.loadModel()

    // --------------------------------------------------------------
    // load cube to test simple scene
    // this.isLoaded = false
    // const geometry = new THREE.BoxGeometry(20, 20, 20)
    // const material = new THREE.MeshLambertMaterial({
    //   // eslint-disable-next-line unicorn/number-literal-case
    //   color: Math.random() * 0xffffff
    // })
    // const cube = new THREE.Mesh(geometry, material)
    // cube.name = 'cube 1'
    // cube.position.x = -15
    // this.scene.add(cube)

    // const material2 = new THREE.MeshLambertMaterial({
    //   // eslint-disable-next-line unicorn/number-literal-case
    //   color: Math.random() * 0xffffff
    // })
    // const cube2 = new THREE.Mesh(geometry, material2)
    // cube2.name = 'cube 2'
    // cube2.position.x = 15
    // this.scene.add(cube2)

    // this.isLoaded = true
    // --------------------------------------------------------------
  },
  methods: {
    updateMesh() {},
    createWireframe({ mesh, color = 0x000000, linewidth = 4 } = {}) {
      // Generate 3d wireframe on object geometry
      const material = new THREE.LineBasicMaterial({ color, linewidth })
      const geometry = new THREE.EdgesGeometry(mesh.geometry)

      const wireframe = new THREE.LineSegments(geometry, material)

      wireframe.name = '_wireframe'
      wireframe.renderOrder = 1

      mesh.add(wireframe)
    },
    loadModel() {
      this.isLoaded = false

      // Load 3d model
      this.scene.loadModel('../../3dblender/Montessorizer_A.gltf', (model) => {
        model.name = 'headphones'

        // Iterator through the model's children
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material.map = null // reset original material
            // eslint-disable-next-line unicorn/number-literal-case
            const randomColor = new THREE.Color(0xffffff)
            // eslint-disable-next-line unicorn/number-literal-case
            randomColor.setHex(Math.random() * 0xffffff)

            console.log(child.name)
            child.material = new THREE.MeshLambertMaterial({
              color: randomColor
            })

            // eslint-disable-next-line unicorn/number-literal-case
            // child.material = new THREE.MeshLambertMaterial({
            //   color: randomColor
            // })

            this.createWireframe({ mesh: child }) // create 3d wireframes (optional)
            this.objects.push(child) // push to local array
          }
        })
        this.model = model
        this.scene.add(model)

        setTimeout(() => {
          this.isLoaded = true
        }, 200)
      })
    },
    setCurFocus(obj_) {
      if (Object.prototype.hasOwnProperty.call(obj_, 'material')) {
        if (Object.prototype.hasOwnProperty.call(obj_.material, 'emissive')) {
          if (obj_) obj_.material.emissive.setHex(obj_.currentHex)
          obj_.currentHex = obj_.material.emissive.getHex()
          // eslint-disable-next-line unicorn/number-literal-case
          obj_.material.emissive.setHex(0xff0000)
        }
      }
    }
  }
}
</script>

<style lang="scss">
.three-montessorizer {
  background: lightgreen;
  width: 100%;
  height: 100%;
}
</style>
