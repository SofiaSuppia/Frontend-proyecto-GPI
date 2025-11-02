<template>
  <div class="modules-page">
    <!-- Encabezado de la página -->
    <div class="modules-header text-center py-12">
      <h1 class="text-h3 font-weight-bold font-electrolize mb-4">NUESTROS MÓDULOS DE APRENDIZAJE</h1>
      <p class="text-h6 font-electrolize">Explora cada módulo para aprender sobre ciberseguridad</p>
    </div>

    <!-- Grid de módulos -->
    <v-container>
      <v-row>
        <!-- Módulo 1: CONTRASEÑAS SEGURAS -->
        <v-col cols="12" md="6" class="mb-8">
          <div class="module-card">
            <v-row no-gutters class="fill-height">
              <v-col cols="12" sm="5" class="d-flex">
                <v-img
                  :src="modulesData.contrasenas.image"
                  cover
                  class="module-image"
                ></v-img>
              </v-col>
              
              <v-col cols="12" sm="7" class="d-flex">
                <div class="module-content pa-6">
                  <div>
                    <h2 class="module-title font-electrolize mb-4">CONTRASEÑAS SEGURAS</h2>
                    <p class="module-description font-electrolize mb-6">
                      Descubrirás la importancia de crear claves robustas y cómo gestionarlas para proteger tus cuentas.
                    </p>
                  </div>
                  
                  <div>
                    <v-btn
                      color="#FF1493"
                      class="module-button mb-3"
                      block
                      @click="goToModuleDetail('contrasenas')"
                    >
                      <span class="font-electrolize">VER MÁS</span>
                      <v-icon right>mdi-arrow-right</v-icon>
                    </v-btn>
                    
                    <v-btn
                      variant="text"
                      class="quiz-link font-electrolize"
                      block
                      @click="goToQuiz('contrasenas')"
                    >
                      IR AL QUIZZ
                      <v-icon right size="small">mdi-arrow-right</v-icon>
                    </v-btn>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>

        <!-- Módulo 2: ESTAFAS VIRTUALES -->
        <v-col cols="12" md="6" class="mb-8">
          <div class="module-card">
            <v-row no-gutters class="fill-height">
              <v-col cols="12" sm="5" class="d-flex">
                <v-img
                  :src="modulesData.estafas.image"
                  cover
                  class="module-image"
                ></v-img>
              </v-col>
              
              <v-col cols="12" sm="7" class="d-flex">
                <div class="module-content pa-6">
                  <div>
                    <h2 class="module-title font-electrolize mb-4">ESTAFAS VIRTUALES</h2>
                    <p class="module-description font-electrolize mb-6">
                      Conocerás las técnicas más comunes utilizadas por ciberdelincuentes y cómo identificarlas a tiempo.
                    </p>
                  </div>
                  
                  <div>
                    <v-btn
                      color="#FF1493"
                      class="module-button mb-3"
                      block
                      @click="goToModuleDetail('estafas')"
                    >
                      <span class="font-electrolize">VER MÁS</span>
                      <v-icon right>mdi-arrow-right</v-icon>
                    </v-btn>
                    
                    <v-btn
                      variant="text"
                      class="quiz-link font-electrolize"
                      block
                      @click="goToQuiz('estafas')"
                    >
                      IR AL QUIZZ
                      <v-icon right size="small">mdi-arrow-right</v-icon>
                    </v-btn>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>

        <!-- Módulo 3: MALWARE -->
        <v-col cols="12" md="6" class="mb-8">
          <div class="module-card">
            <v-row no-gutters class="fill-height">
              <v-col cols="12" sm="5" class="d-flex">
                <v-img
                  :src="modulesData.malware.image"
                  cover
                  class="module-image"
                ></v-img>
              </v-col>
              
              <v-col cols="12" sm="7" class="d-flex">
                <div class="module-content pa-6">
                  <div>
                    <h2 class="module-title font-electrolize mb-4">MALWARE</h2>
                    <p class="module-description font-electrolize mb-6">
                      Aprenderás qué es, cómo se propaga y qué medidas puedes tomar para evitar que infecte tus dispositivos.
                    </p>
                  </div>
                  
                  <div>
                    <v-btn
                      color="#FF1493"
                      class="module-button mb-3"
                      block
                      @click="goToModuleDetail('malware')"
                    >
                      <span class="font-electrolize">VER MÁS</span>
                      <v-icon right>mdi-arrow-right</v-icon>
                    </v-btn>
                    
                    <v-btn
                      variant="text"
                      class="quiz-link font-electrolize"
                      block
                      @click="goToQuiz('malware')"
                    >
                      IR AL QUIZZ
                      <v-icon right size="small">mdi-arrow-right</v-icon>
                    </v-btn>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>

        <!-- Módulo 4: USO RESPONSABLE DE REDES SOCIALES -->
        <v-col cols="12" md="6" class="mb-8">
          <div class="module-card">
            <v-row no-gutters class="fill-height">
              <v-col cols="12" sm="5" class="d-flex">
                <v-img
                  :src="modulesData.redesSociales.image"
                  cover
                  class="module-image"
                ></v-img>
              </v-col>
              
              <v-col cols="12" sm="7" class="d-flex">
                <div class="module-content pa-6">
                  <div>
                    <h2 class="module-title font-electrolize mb-4">USO RESPONSABLE DE REDES SOCIALES</h2>
                    <p class="module-description font-electrolize mb-6">
                      Explorarás buenas prácticas para compartir de manera segura, cuidar tu privacidad y evitar riesgos en línea.
                    </p>
                  </div>
                  
                  <div>
                    <v-btn
                      color="#FF1493"
                      class="module-button mb-3"
                      block
                      @click="goToModuleDetail('redes-sociales')"
                    >
                      <span class="font-electrolize">VER MÁS</span>
                      <v-icon right>mdi-arrow-right</v-icon>
                    </v-btn>
                    
                    <v-btn
                      variant="text"
                      class="quiz-link font-electrolize"
                      block
                      @click="goToQuiz('redes-sociales')"
                    >
                      IR AL QUIZZ
                      <v-icon right size="small">mdi-arrow-right</v-icon>
                    </v-btn>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// Importa las imágenes aquí
import malwareImage from '@/assets/images/malware.png'
import redesSocialesImage from '@/assets/images/redes-sociales.jpg'
import estafasImage from '@/assets/images/estafasvirtuales.png'
import contrasenasImage from '@/assets/images/contrasenas-seguras.jpg'

export default {
  name: 'Modules',
  data() {
    return {
      modulesData: {
        malware: {
          image: malwareImage
        },
        redesSociales: {
          image: redesSocialesImage
        },
        estafas: {
          image: estafasImage
        },
        contrasenas: {
          image: contrasenasImage
        }
      }
    }
  },
  methods: {
    goToModuleDetail(moduleId) {
      this.$router.push(`/modulo/${moduleId}`);
    },
    goToQuiz(moduleId) {
      this.$router.push(`/quiz/${moduleId}`);
    }
  }
}
</script>

<style scoped>
.modules-page {
  background-color: #000123;
  min-height: 100vh;
  padding-bottom: 60px;
}

.modules-header {
  background: linear-gradient(180deg, #000123 0%, #001440 100%);
  color: white;
}

.module-card {
  background-color: #0a1628;
  border-radius: 16px;
  overflow: hidden;
  height: 100%;
  min-height: 350px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 20, 147, 0.2);
}

.module-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 30px rgba(255, 20, 147, 0.3);
}

/* Asegura que el row tenga altura completa */
.fill-height {
  height: 100%;
}

/* La columna de la imagen debe tener display flex */
.d-flex {
  display: flex;
}

.module-image {
  border-right: 2px solid rgba(255, 20, 147, 0.3);
  width: 100%;
  height: 100%;
  min-height: 350px;
}

.module-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: #0a1628;
}

.module-title {
  color: #FF1493;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
}

.module-description {
  color: #f5f5f5;
  font-size: 0.95rem;
  line-height: 1.6;
}

.module-button {
  border-radius: 50px !important;
  font-weight: bold !important;
  box-shadow: 0 0 15px rgba(255, 20, 147, 0.5) !important;
  text-transform: none !important;
  background-color: #FF1493 !important;
  color: white !important;
}

.module-button:hover {
  box-shadow: 0 0 20px rgba(255, 20, 147, 0.7) !important;
}

.quiz-link {
  color: #FF1493 !important;
  font-weight: 600 !important;
  text-transform: none !important;
}

.quiz-link:hover {
  color: #ff3da8 !important;
  background-color: transparent !important;
}

.font-electrolize {
  font-family: 'Electrolize', sans-serif !important;
}

/* Responsive */
@media (max-width: 600px) {
  .module-image {
    border-right: none;
    border-bottom: 2px solid rgba(255, 20, 147, 0.3);
    min-height: 250px;
  }
}
</style>