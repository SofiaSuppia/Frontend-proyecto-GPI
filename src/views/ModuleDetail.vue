<template>
  <div class="module-detail" v-if="moduleData">
    <!-- Sección 1: Introducción del Módulo -->
    <div class="module-intro-section">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" class="text-center">
            <p class="module-number font-electrolize mb-4">{{ moduleData.moduleNumber }}</p>
            <h1 class="module-main-title font-electrolize mb-8" v-html="moduleData.title"></h1>
            <p class="module-intro-text font-electrolize" v-html="moduleData.intro"></p>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Sección 2: Contenido Principal -->
    <div class="password-steps-section">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6" class="d-flex justify-center">
            <div class="image-container">
              <v-img
                :src="moduleData.contentImage"
                class="module-image"
                cover
              ></v-img>
            </div>
          </v-col>

          <v-col cols="12" md="6">
            <div class="steps-content">
              <h2 class="steps-title font-electrolize mb-8">
                {{ moduleData.contentTitle }}
              </h2>

              <ul class="steps-list font-electrolize">
                <li v-for="(step, index) in moduleData.steps" :key="index" class="mb-4">
                  <span v-html="step"></span>
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Sección 3: Gráfico (solo para contraseñas) -->
    <div class="common-passwords-section" v-if="moduleId === 'contrasenas'">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2 class="common-passwords-title font-electrolize text-center mb-12">
              Contraseñas más utilizadas
            </h2>

            <div class="chart-container">
              <div class="chart-wrapper">
                <div 
                  v-for="(password, index) in passwordsData" 
                  :key="index"
                  class="chart-bar"
                >
                  <div class="bar-label font-electrolize">{{ password.label }}</div>
                  <div class="bar-container">
                    <div 
                      class="bar-fill"
                      :style="{ width: getBarWidth(password.value) + '%' }"
                    >
                      <span class="bar-value font-electrolize">{{ formatNumber(password.value) }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="year-indicator font-electrolize">
                Año 40
              </div>
            </div>
          </v-col>
        </v-row>

        <!-- Botón al Quiz -->
        <v-row class="mt-12">
          <v-col cols="12" class="text-center">
            <v-btn
              color="#FF1493"
              size="x-large"
              class="quiz-button font-electrolize"
              @click="goToQuiz"
            >
              IR AL QUIZ
              <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Sección 3 alternativa: Solo botón para otros módulos -->
    <div class="quiz-only-section" v-else>
      <v-container>
        <v-row class="mt-12">
          <v-col cols="12" class="text-center">
            <v-btn
              color="#FF1493"
              size="x-large"
              class="quiz-button font-electrolize"
              @click="goToQuiz"
            >
              IR AL QUIZ
              <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import contrasenasImage from '@/assets/images/password-tips.jpeg';
import malwareImage from '@/assets/images/malware.png';
import estafasImage from '@/assets/images/estafasvirtuales.png';
import redesSocialesImage from '@/assets/images/redes-sociales.jpg';

export default {
  name: 'ModuleDetail',
  data() {
    return {
      moduleId: null,
      passwordsData: [
        { label: '123', value: 356531 },
        { label: '12345', value: 287702 },
        { label: 'N.Mascota', value: 257226 },
        { label: 'Año actual', value: 166238 },
        { label: 'Primer nombre', value: 150727 },
        { label: 'Usuario', value: 139230 },
        { label: 'Fecha nacimiento', value: 96239 },
        { label: 'Nombre + Apellido', value: 90574 },
        { label: 'Vulgaridades', value: 80607 },
        { label: 'Contraseña', value: 71855 }
      ],
      modules: {
        contrasenas: {
          moduleNumber: 'MODULO 1',
          title: 'Contraseñas<br>Seguras',
          intro: 'En esta sección conocerás los tips para tener contraseñas fuerte,<br>cada cuánto cambiarlas y mucha más información.',
          contentImage: contrasenasImage,
          contentTitle: 'PASOS PARA UNA CONTRASEÑA FUERTE',
          steps: [
            '<strong>Usar al menos 12 caracteres combinando mayúsculas, minúsculas, números y símbolos.</strong>',
            '<strong>Evita información personal:</strong> no uses tu nombre, fecha de nacimiento, DNI, etc.',
            '<strong>Usa una diferente para cada cuenta.</strong>',
            '<strong>Puedes usar un gestor de contraseñas</strong>',
            '<strong>Cambia tus contraseñas periódicamente:</strong> sobre todo en cuentas importantes como correo o banca en línea.',
            '<strong>Activar la verificación en dos pasos para más seguridad.</strong>'
          ]
        },
        malware: {
          moduleNumber: 'MODULO 2',
          title: 'Malware',
          intro: 'Aprenderás qué es el malware, cómo se propaga y qué medidas<br>puedes tomar para evitar que infecte tus dispositivos.',
          contentImage: malwareImage,
          contentTitle: '¿QUÉ ES EL MALWARE Y CÓMO PROTEGERTE?',
          steps: [
            '<strong>Malware es software malicioso</strong> diseñado para dañar, robar información o tomar control de tus dispositivos.',
            '<strong>Tipos comunes:</strong> virus, troyanos, ransomware, spyware y adware.',
            '<strong>Mantén tu software actualizado</strong> incluyendo sistema operativo y aplicaciones.',
            '<strong>Usa un antivirus confiable</strong> y mantenlo siempre actualizado.',
            '<strong>No descargues archivos de fuentes desconocidas</strong> o sitios web no confiables.',
            '<strong>Ten cuidado con los correos sospechosos</strong> y no hagas clic en enlaces desconocidos.'
          ]
        },
        estafas: {
          moduleNumber: 'MODULO 3',
          title: 'Estafas<br>Virtuales',
          intro: 'Conocerás las técnicas más comunes utilizadas por ciberdelincuentes<br>y cómo identificarlas a tiempo.',
          contentImage: estafasImage,
          contentTitle: 'CÓMO IDENTIFICAR ESTAFAS EN LÍNEA',
          steps: [
            '<strong>Phishing:</strong> correos o mensajes que simulan ser de empresas legítimas para robar información.',
            '<strong>Verifica la URL</strong> antes de ingresar información personal o financiera.',
            '<strong>Desconfía de ofertas demasiado buenas:</strong> premios inesperados, grandes descuentos o urgencias extremas.',
            '<strong>No compartas información sensible</strong> por correo, mensaje o llamadas no solicitadas.',
            '<strong>Revisa la ortografía y gramática:</strong> los mensajes fraudulentos suelen tener errores.',
            '<strong>Contacta directamente a la empresa</strong> si recibes solicitudes sospechosas que parecen legítimas.'
          ]
        },
        'redes-sociales': {
          moduleNumber: 'MODULO 4',
          title: 'Uso Responsable de<br>Redes Sociales',
          intro: 'Explorarás buenas prácticas para compartir de manera segura,<br>cuidar tu privacidad y evitar riesgos en línea.',
          contentImage: redesSocialesImage,
          contentTitle: 'BUENAS PRÁCTICAS EN REDES SOCIALES',
          steps: [
            '<strong>Configura tu privacidad:</strong> limita quién puede ver tu información y publicaciones.',
            '<strong>Piensa antes de publicar:</strong> la información en internet puede ser permanente.',
            '<strong>No aceptes solicitudes de amistad de desconocidos</strong> sin verificar su identidad.',
            '<strong>Evita compartir ubicación en tiempo real</strong> o información personal sensible.',
            '<strong>Cuidado con lo que compartes en grupos:</strong> tu información puede ser vista por más personas de las que crees.',
            '<strong>Reporta contenido inapropiado o acoso</strong> y bloquea usuarios sospechosos.'
          ]
        }
      }
    };
  },
  computed: {
    moduleData() {
      return this.modules[this.moduleId];
    },
    maxValue() {
      return Math.max(...this.passwordsData.map(p => p.value));
    }
  },
  created() {
    this.moduleId = this.$route.params.id;
    
    // Si el módulo no existe, redirigir a la página de módulos
    if (!this.modules[this.moduleId]) {
      this.$router.push('/modulos');
    }
  },
  methods: {
    getBarWidth(value) {
      return (value / this.maxValue) * 100;
    },
    formatNumber(num) {
      return num.toLocaleString('es-ES');
    },
    goToQuiz() {
      this.$router.push(`/quiz/${this.moduleId}`);
    }
  }
}
</script>

<style scoped>
/* --- SECCIÓN 1: INTRODUCCIÓN --- */
.module-intro-section {
  background: linear-gradient(90deg, #1a0033 0%, #660033 50%, #cc6633 100%);
  min-height: 50vh;
  display: flex;
  align-items: center;
  padding: 80px 20px;
}

.module-number {
  color: #f5f5f5;
  font-size: 1.5rem;
  letter-spacing: 0.2em;
  font-weight: 600;
}

.module-main-title {
  color: white;
  font-size: 5rem;
  font-weight: 700;
  line-height: 1.1;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.module-intro-text {
  color: #f5f5f5;
  font-size: 1.3rem;
  line-height: 1.6;
}

/* --- SECCIÓN 2: CONTENIDO PRINCIPAL --- */
.password-steps-section {
  background: linear-gradient(90deg, #1a0033 0%, #660033 50%, #cc6633 100%);
  padding: 80px 20px;
}

.image-container {
  width: 100%;
  max-width: 500px;
}

.module-image {
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(255, 20, 147, 0.3);
}

.steps-content {
  padding: 20px;
}

.steps-title {
  color: white;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.3;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.steps-list {
  list-style: none;
  padding-left: 0;
}

.steps-list li {
  color: white;
  font-size: 1.1rem;
  line-height: 1.6;
  position: relative;
  padding-left: 30px;
}

.steps-list li::before {
  content: '•';
  color: #FF1493;
  font-size: 2rem;
  position: absolute;
  left: 0;
  top: -5px;
}

/* --- SECCIÓN 3: CONTRASEÑAS MÁS UTILIZADAS --- */
.common-passwords-section {
  background: linear-gradient(90deg, #1a0033 0%, #660033 50%, #cc6633 100%);
  padding: 80px 20px;
}

.quiz-only-section {
  background: linear-gradient(90deg, #1a0033 0%, #660033 50%, #cc6633 100%);
  padding: 80px 20px;
}

.common-passwords-title {
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(90deg, #4a90e2 0%, #7b68ee 100%);
  padding: 20px 40px;
  clip-path: polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%);
  display: inline-block;
}

.chart-container {
  position: relative;
  padding-bottom: 80px;
}

.chart-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.chart-bar {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.bar-label {
  color: white;
  font-size: 1rem;
  font-weight: 600;
  width: 150px;
  text-align: right;
  margin-right: 20px;
}

.bar-container {
  flex: 1;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  overflow: hidden;
  height: 40px;
}

.bar-fill {
  background: linear-gradient(90deg, #00d4ff 0%, #7b68ee 50%, #ff1493 100%);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 15px;
  transition: width 1s ease-in-out;
}

.bar-value {
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

.year-indicator {
  position: absolute;
  bottom: 10px;
  right: 100px;
  color: white;
  font-size: 3rem;
  font-weight: 700;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.quiz-button {
  border-radius: 50px !important;
  font-weight: bold !important;
  padding: 16px 48px !important;
  font-size: 1.2rem !important;
  box-shadow: 0 0 20px rgba(255, 20, 147, 0.5) !important;
}

.quiz-button:hover {
  box-shadow: 0 0 30px rgba(255, 20, 147, 0.8) !important;
  transform: translateY(-2px);
}

.font-electrolize {
  font-family: 'Electrolize', sans-serif !important;
}

/* Responsive */
@media (max-width: 960px) {
  .module-main-title {
    font-size: 3rem;
  }

  .steps-title {
    font-size: 1.5rem;
  }

  .bar-label {
    width: 100px;
    font-size: 0.85rem;
  }

  .year-indicator {
    font-size: 2rem;
    right: 20px;
    bottom: 10px;
  }

  .common-passwords-title {
    font-size: 1.8rem;
    padding: 15px 30px;
  }
}
</style>