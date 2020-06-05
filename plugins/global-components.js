import Vue from 'vue'

// Filters
import ButtonFilter from '~/components/ButtonFilter.vue'

// Icons (file name = reference id in store/references.js)
import IconIllustrator from '~/components/tools/illustrator.vue'
import IconIndesign from '~/components/tools/indesign.vue'
import IconPhotoshop from '~/components/tools/photoshop.vue'
import IconPython from '~/components/tools/python.vue'
import IconUnity3d from '~/components/tools/unity3d.vue'

// Project pages
import WhooshingMachine from '~/components/projects/WhooshingMachine.vue'
import Austerlitz1805 from '~/components/projects/Austerlitz1805.vue'
import Boxylab from '~/components/projects/Boxylab.vue'

// ------------------------------------------------------------------------------

// Filters
Vue.component('button-filter', ButtonFilter)

// Icons
Vue.component('icon-illustrator', IconIllustrator)
Vue.component('icon-indesign', IconIndesign)
Vue.component('icon-photoshop', IconPhotoshop)
Vue.component('icon-python', IconPython)
Vue.component('icon-unity3d', IconUnity3d)

// Project pages
Vue.component('whooshing-machine', WhooshingMachine)
Vue.component('austerlitz-1805', Austerlitz1805)
Vue.component('boxylab', Boxylab)
