// src/plugins/vuetify.js

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles' // <--- Importa los estilos CSS de Vuetify

// 1. Importa el set de iconos que quieres usar (mdi)
import { mdi } from 'vuetify/iconsets/mdi'
// 2. Importa el archivo CSS que se instaló con el paquete de iconos
import '@mdi/font/css/materialdesignicons.css' 

const vuetify = createVuetify({
  components,
  directives,
  // Aquí puedes añadir temas personalizados, iconos, etc.
  icons: {
    defaultSet: 'mdi', // Establece mdi como el set por defecto
    sets: {
      mdi,
    },
  },
})

export default vuetify