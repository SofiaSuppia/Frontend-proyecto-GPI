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

    <!-- SECCIÓN 2: APRENDE CON SECURON -->
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

    <!-- SECCIÓN 3: FORO DE USUARIOS -->
    <div class="forum-section">
      <v-container>
        <h2 class="text-h3 font-weight-bold text-center mb-12 font-electrolize forum-title">
          Foro de usuarios
        </h2>

        <v-row>
          <!-- Tarjeta 1: Carreras Profesionales -->
          <v-col cols="12" md="4" class="mb-6">
            <div class="forum-card">
              <h3 class="forum-card-title font-electrolize mb-4">
                CARRERAS<br>PROFESIONALES
              </h3>
              
              <p class="forum-card-text font-electrolize mb-6">
                Quisiera saber que carreras enseñan más sobre estos temas de seguridad.
              </p>
              
              <p class="forum-card-author font-electrolize mb-6">
                - Shameeka Taylor
              </p>

              <!-- Botones de interacción -->
              <div class="forum-actions">
                <v-btn
                  icon
                  variant="text"
                  size="small"
                  @click="toggleLike(0)"
                  :class="{ 'liked': forumPosts[0].liked }"
                >
                  <v-icon>mdi-thumb-up</v-icon>
                </v-btn>

                <v-btn
                  icon
                  variant="text"
                  size="small"
                  @click="toggleDislike(0)"
                  :class="{ 'disliked': forumPosts[0].disliked }"
                >
                  <v-icon>mdi-thumb-down</v-icon>
                </v-btn>

                <v-btn
                  icon
                  variant="text"
                  size="small"
                >
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </div>
            </div>
          </v-col>

          <!-- Tarjeta 2: Quizz Interactivo -->
          <v-col cols="12" md="4" class="mb-6">
            <div class="forum-card">
              <h3 class="forum-card-title font-electrolize mb-4">
                QUIZZ<br>INTERACTIVO
              </h3>
              
              <p class="forum-card-text font-electrolize mb-6">
                Los retos de los quizz son muy entretenidos.
              </p>
              
              <p class="forum-card-author font-electrolize mb-6">
                - Jordan Johnson
              </p>

              <!-- Botones de interacción -->
              <div class="forum-actions">
                <v-btn
                  icon
                  variant="text"
                  size="small"
                  @click="toggleLike(1)"
                  :class="{ 'liked': forumPosts[1].liked }"
                >
                  <v-icon>mdi-thumb-up</v-icon>
                </v-btn>

                <v-btn
                  icon
                  variant="text"
                  size="small"
                  @click="toggleDislike(1)"
                  :class="{ 'disliked': forumPosts[1].disliked }"
                >
                  <v-icon>mdi-thumb-down</v-icon>
                </v-btn>

                <v-btn
                  icon
                  variant="text"
                  size="small"
                >
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </div>
            </div>
          </v-col>

          <!-- Tarjeta 3: Increíble -->
          <v-col cols="12" md="4" class="mb-6">
            <div class="forum-card">
              <h3 class="forum-card-title font-electrolize mb-4">
                INCREÍBLE
              </h3>
              
              <p class="forum-card-text font-electrolize mb-6">
                Las reseñas de otros clientes suponen una forma estupenda de impulsar tus ventas.
              </p>
              
              <p class="forum-card-author font-electrolize mb-6">
                - Caden Matthews
              </p>

              <!-- Botones de interacción -->
              <div class="forum-actions">
                <v-btn
                  icon
                  variant="text"
                  size="small"
                  @click="toggleLike(2)"
                  :class="{ 'liked': forumPosts[2].liked }"
                >
                  <v-icon>mdi-thumb-up</v-icon>
                </v-btn>

                <v-btn
                  icon
                  variant="text"
                  size="small"
                  @click="toggleDislike(2)"
                  :class="{ 'disliked': forumPosts[2].disliked }"
                >
                  <v-icon>mdi-thumb-down</v-icon>
                </v-btn>

                <v-btn
                  icon
                  variant="text"
                  size="small"
                >
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>

        <!-- Botón Ver Más -->
        <div class="text-center mt-8">
          <v-btn
            color="#FF1493"
            class="forum-button font-electrolize"
            size="large"
            @click="goToForum"
          >
            VER MÁS
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </v-container>
    </div>

    <!-- SECCIÓN 4: CONTÁCTANOS -->
    <v-img 
      :src="contactImage" 
      cover 
      class="contact-section d-flex align-center"
    >
      <!-- Overlay oscuro para mejorar legibilidad -->
      <v-overlay contained absolute color="black" :opacity="0.4"></v-overlay>
      
      <v-container style="position: relative; z-index: 2;">
        <v-row justify="end">
          <v-col cols="12" md="6">
            <div class="contact-info">
              <h2 class="contact-title font-electrolize mb-8">
                Envíanos un<br>mensaje
              </h2>

              <div class="contact-item mb-6">
                <p class="contact-label font-electrolize mb-2">Córdoba | Argentina</p>
              </div>

              <div class="contact-item mb-8">
                <a href="mailto:hola@unsitiogenial.es" class="contact-email font-electrolize">
                  hola@unsitiogenial.es
                </a>
              </div>

              <!-- Redes sociales -->
              <div class="social-icons">
                <v-btn
                  icon
                  variant="text"
                  size="large"
                  href="https://twitter.com"
                  target="_blank"
                  class="social-btn"
                >
                  <v-icon size="32">mdi-twitter</v-icon>
                </v-btn>

                <v-btn
                  icon
                  variant="text"
                  size="large"
                  href="https://facebook.com"
                  target="_blank"
                  class="social-btn"
                >
                  <v-icon size="32">mdi-facebook</v-icon>
                </v-btn>

                <v-btn
                  icon
                  variant="text"
                  size="large"
                  href="https://youtube.com"
                  target="_blank"
                  class="social-btn"
                >
                  <v-icon size="32">mdi-youtube</v-icon>
                </v-btn>

                <v-btn
                  icon
                  variant="text"
                  size="large"
                  href="https://instagram.com"
                  target="_blank"
                  class="social-btn"
                >
                  <v-icon size="32">mdi-instagram</v-icon>
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </div>
</template>

<script>
import backgroundImage from '../assets/images/fondo.png';
import contactImage from '../assets/images/fin.png';

export default {
  name: 'Home',
  data() {
    return {
      backgroundImage: backgroundImage,
      contactImage: contactImage,
      forumPosts: [
        { liked: false, disliked: false },
        { liked: false, disliked: false },
        { liked: false, disliked: false }
      ]
    };
  },
  methods: {
    handleRegistration() {
      this.$router.push('/registro');
    },
    goToModules() {
      this.$router.push('/modulos');
    },
    goToForum() {
      this.$router.push('/foro');
    },
    toggleLike(index) {
      if (this.forumPosts[index].disliked) {
        this.forumPosts[index].disliked = false;
      }
      this.forumPosts[index].liked = !this.forumPosts[index].liked;
    },
    toggleDislike(index) {
      if (this.forumPosts[index].liked) {
        this.forumPosts[index].liked = false;
      }
      this.forumPosts[index].disliked = !this.forumPosts[index].disliked;
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

/* --- ESTILOS SECCIÓN APRENDE --- */
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

/* --- ESTILOS SECCIÓN FORO --- */
.forum-section {
  background-color: #000123;
  color: #f5f5f5;
  padding: 80px 16px;
}

.forum-title {
  color: white;
}

.forum-card {
  background-color: #0a1628;
  border: 1px solid rgba(255, 20, 147, 0.3);
  border-radius: 16px;
  padding: 32px;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.forum-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(255, 20, 147, 0.2);
}

.forum-card-title {
  color: #FF1493;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
}

.forum-card-text {
  color: #f5f5f5;
  font-size: 1rem;
  line-height: 1.6;
}

.forum-card-author {
  color: #f5f5f5;
  font-size: 0.95rem;
  font-style: italic;
}

.forum-actions {
  display: flex;
  gap: 8px;
}

.forum-actions .v-btn {
  color: #f5f5f5 !important;
}

.forum-actions .v-btn.liked {
  color: #FF1493 !important;
}

.forum-actions .v-btn.liked .v-icon {
  color: #FF1493 !important;
}

.forum-actions .v-btn.disliked {
  color: #FF1493 !important;
}

.forum-actions .v-btn.disliked .v-icon {
  color: #FF1493 !important;
}

.forum-button {
  border-radius: 50px !important;
  font-weight: bold !important;
  box-shadow: 0 0 15px rgba(255, 20, 147, 0.5) !important;
  padding: 12px 32px !important;
}

.forum-button:hover {
  box-shadow: 0 0 20px rgba(255, 20, 147, 0.7) !important;
}

/* --- ESTILOS SECCIÓN CONTACTO --- */
.contact-section {
  min-height: 100vh;
  height: 100vh;
  position: relative;
  color: white;
}

.contact-info {
  padding: 40px;
}

.contact-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.contact-label {
  font-size: 1.2rem;
  color: #f5f5f5;
  font-weight: 500;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

.contact-email {
  font-size: 1.3rem;
  color: #FF1493;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

.contact-email:hover {
  color: #ff3da8;
  text-decoration: underline;
}

.social-icons {
  display: flex;
  gap: 16px;
  margin-top: 20px;
}

.social-btn {
  color: white !important;
  transition: all 0.3s ease;
}

.social-btn:hover {
  color: #FF1493 !important;
  transform: translateY(-3px);
}

@media (max-width: 960px) {
  .contact-title {
    font-size: 2.5rem;
    text-align: center;
  }
  
  .contact-info {
    text-align: center;
    padding: 20px;
  }
  
  .social-icons {
    justify-content: center;
  }
}
</style>