<template>
  <v-img 
    :src="backgroundImage" 
    cover 
    class="landing-background"
  >
    <v-overlay contained absolute color="black" :opacity="0.5"></v-overlay>

    <v-container 
      fill-height 
      class="d-flex align-center justify-center text-center"
      style="height: 100vh; position: relative; z-index: 10;"
    >
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8">
          
          <!-- 1. Frase con fuente Audiowide -->
          <p class="text-h6 text-uppercase mb-2 font-audiowide" :style="{ color: '#f5f5f5', 'letter-spacing': '0.3em' }">
            SEGURIDAD EN LA WEB
          </p>
          
          <!-- 2. Frase con fuente Electrolize -->
          <h1 class="display-3 font-weight-bold mb-8 title-cybersecurity font-electrolize" :style="{ color: 'white', 'line-height': '1.1' }">
            Tu sitio para aprender lo básico sobre <br> cybersecurity
          </h1>

          <!-- 3. Contenedor para el botón y el texto -->
          <v-row align="center" justify="center" class="mt-4">
            <v-col cols="auto">
              <!-- Botón de registro con el nuevo estilo -->
              <v-btn 
                height="50"
                color="#FF1493" 
                elevation="10" 
                class="registration-button" 
                @click="handleRegistration"
              >
                <span class="btn-text font-electrolize">REGISTRO</span>
                <!-- Contenedor del círculo blanco -->
                <div class="arrow-circle">
                  <!-- Icono de la flecha (ahora oscuro) -->
                  <v-icon color="black">mdi-arrow-right</v-icon>
                </div>
              </v-btn>
            </v-col>
            <v-col cols="auto">
              <!-- Texto al lado del botón -->
              <p class="text-body-1 mb-0 ml-4 font-open-sans" :style="{ color: '#f5f5f5' }">
                Regístrate para guardar tu progreso
              </p>
            </v-col>
          </v-row>

        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>

<script>
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
      //alert('Redireccionando a la página de registro...');
      this.$router.push('/registro');
    }
  }
}
</script>

<!-- NOTA: He quitado 'scoped' para que los estilos se apliquen correctamente al botón de Vuetify -->
<style>
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

.landing-background {
    min-height: 100vh;
}

/* --- ESTILOS PARA EL BOTÓN DE REGISTRO PERSONALIZADO --- */
.registration-button {
  border-radius: 50px !important;
  padding: 0 8px 0 32px !important; /* Ajusta el padding: top right bottom left */
  overflow: visible !important; /* Permite que el círculo se vea completo */
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
  margin-right: 16px; /* Espacio entre el texto y el círculo */
}

/* --- ESTILOS PARA EL CÍRCULO DE LA FLECHA --- */
.arrow-circle {
  background-color: white; /* Fondo blanco */
  height: 40px; /* Altura del círculo */
  width: 40px; /* Ancho del círculo */
  border-radius: 50%; /* Lo hace un círculo perfecto */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 8px rgba(0,0,0,0.2); /* Sombra suave opcional */
}
</style>