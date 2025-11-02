// src/plugins/vuetify.js

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles' // <--- Importa los estilos CSS de Vuetify

const vuetify = createVuetify({
  components,
  directives,
  // Aquí puedes añadir temas personalizados, iconos, etc.
})

export default vuetify