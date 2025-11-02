<template>
  <div>
    <!-- SECCIÓN 1: BIENVENIDA CON FONDO DE PANTALLA COMPLETA -->
    <v-img 
      :src="backgroundImage" 
      cover 
      class="d-flex align-center text-center"
      style="height: 100vh; min-height: 100vh; position: relative;"
    >
      <!-- Capa oscura para mejorar la legibilidad del texto -->
      <v-overlay contained absolute color="black" :opacity="0.5"></v-overlay>

      <!-- Contenedor del texto, centrado vertical y horizontalmente -->
      <v-container style="position: relative; z-index: 2;">
        <v-row justify="center">
          <v-col cols="12" sm="10" md="8">
            
            <p class="text-h6 text-uppercase mb-2 font-audiowide" :style="{ color: '#f5f5f5', 'letter-spacing': '0.3em' }">
              SEGURIDAD EN LA WEB
            </p>
            
            <h1 class="display-3 font-weight-bold mb-8 title-cybersecurity font-electrolize" :style="{ color: 'white', 'line-height': '1.1' }">
              Tu sitio para aprender lo básico sobre <br> cybersecurity
            </h1>

            <v-row align="center" justify="center" class="mt-4">
              <v-col cols="auto">
                <v-btn 
                  height="50"
                  color="#FF1493" 
                  elevation="10" 
                  class="registration-button" 
                  @click="handleRegistration"
                >
                  <span class="btn-text font-electrolize">REGISTRO</span>
                  <div class="arrow-circle">
                    <v-icon color="black">mdi-arrow-right</v-icon>
                  </div>
                </v-btn>
              </v-col>
              <v-col cols="auto">
                <p class="text-body-1 mb-0 ml-4 font-open-sans" :style="{ color: '#f5f5f5' }">
                  Regístrate para guardar tu progreso
                </p>
              </v-col>
            </v-row>

          </v-col>
        </v-row>
      </v-container>
    </v-img>

    <!-- SECCIÓN 2: APRENDE CON SECURON (se mostrará al hacer scroll) -->
    <div class="learn-section text-center">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <!-- Título -->
            <p class="securon-title font-electrolize mb-0">Aprende con</p>
            <p class="securon-title font-electrolize mb-8">SecurON</p>

            <!-- Párrafos de texto -->
            <div class="info-text font-electrolize">
              <p>¿Te da miedo que te hackeen? ¿Sabes cuando un sitio es seguro?</p>
              <p>En SecurON tenemos una selección de temas necesarios para estar protegido en internet.</p>
              <p>Prueba tus conocimientos con los quizz por módulo.</p>
              <p>Echa un vistazo al foro.</p>
            </div>

            <!-- Enlace a Módulos -->
            <p class="modules-link font-electrolize mt-10">
              NUESTROS MÓDULOS DE APRENDIZAJE
            </p>
            <!-- Botón de flecha para redirigir -->
            <v-btn
              icon
              variant="text"
              @click="goToModules"
              class="mt-2"
            >
              <v-icon class="arrow-down" size="56">mdi-arrow-down</v-icon>
            </v-btn>

          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
// Asegúrate de que la ruta a la imagen sea correcta
import backgroundImage from '../assets/images/fondo.png';

export default {
  name: 'Home',
  data() {
    return {
      backgroundImage: backgroundImage
    };
  },
  methods: {
    handleRegistration() {
      this.$router.push('/registro');
    },
    goToModules() {
      // Asegúrate de que la ruta '/modulos' exista en tu router.js
      this.$router.push('/modulos');
    }
  }
}
</script>

<style>
/* --- ESTILOS EXISTENTES --- */
.font-audiowide {
  font-family: 'Audiowide', cursive !important;
}
.font-electrolize {
  font-family: 'Electrolize', sans-serif !important;
}
.font-open-sans {
  font-family: 'Open Sans', sans-serif !important;
}
.title-cybersecurity {
  font-size: 4rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}
.text-h6.font-audiowide {
  font-family: 'Audiowide', cursive !important;
}
@media (max-width: 960px) {
  .title-cybersecurity {
    font-size: 3rem;
  }
}
/* Se elimina la clase .landing-background porque los estilos se aplican directamente */

.registration-button {
  border-radius: 50px !important;
  padding: 0 8px 0 32px !important;
  overflow: visible !important;
  display: flex !important;
  align-items: center !important;
  color: white !important;
}
.registration-button .v-btn__content {
  overflow: visible !important;
}
.registration-button .btn-text {
  font-size: 1.1rem;
  letter-spacing: 0.1em;
  font-weight: bold;
  margin-right: 16px;
}
.arrow-circle {
  background-color: white;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 8px rgba(0,0,0,0.2);
}

/* --- NUEVOS ESTILOS PARA LA SECCIÓN DE APRENDIZAJE --- */
.learn-section {
  background-color: #000123;
  color: #f5f5f5;
  padding: 80px 16px;
}
.securon-title {
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1;
}
.info-text {
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 600px;
  margin: 0 auto;
}
.modules-link {
  color: #ff007f;
  font-weight: 700;
  letter-spacing: 0.1em;
  font-size: 1.2rem;
}
.arrow-down {
  color: #ff007f; 
}
</style>