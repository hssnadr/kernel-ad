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
  mounted() {
    this.scene = SceneInit({ rootEl: this.$refs.container })
    this.loadModel()
  },
  methods: {
    updateMesh() {},
    // createWireframe({ mesh, color = 0x000000, linewidth = 4 } = {}) {
    //   const material = new THREE.LineBasicMaterial({ color, linewidth })
    //   const geometry = new THREE.EdgesGeometry(mesh.geometry)

    //   const wireframe = new THREE.LineSegments(geometry, material)

    //   wireframe.name = '_wireframe'
    //   wireframe.renderOrder = 1

    //   mesh.add(wireframe)
    // },
    loadModel() {
      this.isLoaded = false

      this.scene.loadModel('../../3d/Montessorizer3D.gltf', (model) => {
        model.name = 'headphones'

        // Iterator through the model's children
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            // child.material.map = null // reset original material
            // eslint-disable-next-line unicorn/number-literal-case
            const randomColor = new THREE.Color(0xffffff)
            // eslint-disable-next-line unicorn/number-literal-case
            randomColor.setHex(Math.random() * 0xffffff)

            // console.log(child.name)
            child.material = new THREE.MeshStandardMaterial({
              color: randomColor
            })

            // eslint-disable-next-line unicorn/number-literal-case
            // child.material = new THREE.MeshLambertMaterial({
            //   color: randomColor
            // })

            child.translateZ(0.01)

            // this.createWireframe({ mesh: child }) // create 3d wireframes (optional)
            this.objects.push(child) // push to local array
          }
        })
        this.model = model
        this.scene.add(model)

        const geometry = new THREE.BoxGeometry(1, 1, 1)
        // eslint-disable-next-line unicorn/number-literal-case
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        const cube = new THREE.Mesh(geometry, material)
        cube.translateY(1)
        this.scene.add(cube)

        setTimeout(() => {
          this.isLoaded = true
        }, 200)
      })
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
