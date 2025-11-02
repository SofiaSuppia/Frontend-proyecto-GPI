<template>
  <div class="register-background d-flex align-center justify-center">
    <div class="form-container pa-8">
      <v-form @submit.prevent="handleRegister">
        <!-- 1. Títulos en blanco -->
        <h2 class="text-h4 font-weight-bold text-center mb-2 font-audiowide text-white">CREAR CUENTA</h2>
        <p class="text-center text-medium-emphasis mb-8 text-white">Ingresa tus datos para registrarte</p>

        <!-- 2. Campos con label arriba y placeholder adentro -->
        <v-text-field
          v-model="username"
          label="Usuario"
          placeholder="ej: tu_usuario123"
          variant="outlined"
          class="neon-input mb-4"
          prepend-inner-icon="mdi-account-outline"
        ></v-text-field>

        <v-text-field
          v-model="email"
          label="Email"
          placeholder="ej: correo@dominio.com"
          type="email"
          variant="outlined"
          class="neon-input mb-4"
          prepend-inner-icon="mdi-email-outline"
        ></v-text-field>

        <v-text-field
          v-model="password"
          label="Contraseña"
          placeholder="Usa 8+ caracteres"
          :type="showPassword ? 'text' : 'password'"
          variant="outlined"
          class="neon-input mb-4"
          prepend-inner-icon="mdi-lock-outline"
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="showPassword = !showPassword"
        ></v-text-field>

        <v-btn 
          type="submit"
          block 
          class="neon-button mt-4" 
          size="large"
        >
          Registrarse
        </v-btn>

        <v-row class="text-center mt-6">
          <v-col>
            <a href="#" class="text-caption link-light">¿Olvidaste tu contraseña?</a>
          </v-col>
          <v-col>
            <a href="#" @click.prevent="goToLogin" class="text-caption link-light">¿Ya tienes cuenta? Inicia Sesión</a>
          </v-col>
        </v-row>
      </v-form>
    </div>
  </div>
</template>

<script>
// ... tu script existente no necesita cambios ...
import backgroundImage from '../assets/images/registro.png';

export default {
  name: 'RegisterView',
  data() {
    return {
      backgroundImage,
      username: '',
      email: '',
      password: '',
      showPassword: false
    };
  },
  methods: {
    handleRegister() {
      console.log('Registrando usuario:', {
        username: this.username,
        email: this.email,
        password: this.password
      });
      alert('¡Registro enviado!');
    },
    goToLogin() {
      alert('Redirigiendo a Iniciar Sesión...');
    }
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.backgroundImage})`
      };
    }
  }
}
</script>

<style>
.register-background {
  min-height: 100vh;
  background-image: url('../assets/images/registro.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.form-container {
  width: 100%;
  max-width: 450px;
  background-color: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(5px);
  border: 2px solid #00bfff;
  border-radius: 24px;
  box-shadow: 0 0 15px #00bfff, 0 0 25px #00bfff, inset 0 0 10px #00bfff;
}

/* --- 3. Estilos para los campos de texto (Inputs) --- */
.neon-input .v-field {
  /* Bordes más redondeados */
  border-radius: 50px !important;
}

.neon-input .v-field__outline {
  --v-field-border-width: 2px;
  --v-field-border-opacity: 0.6;
  color: #00bfff;
  transition: all 0.3s ease-in-out;
  /* Efecto de brillo neón constante */
  box-shadow: 0 0 5px #00bfff;
}

/* Intensifica el brillo al enfocar el campo */
.neon-input.v-text-field--active .v-field__outline,
.neon-input:focus-within .v-field__outline {
  --v-field-border-opacity: 1;
  color: #87cefa;
  box-shadow: 0 0 12px #00bfff;
}

/* Estilo del texto de la etiqueta (label) */
.neon-input .v-label {
  color: rgba(255, 255, 255, 0.8) !important;
  font-weight: bold;
}

/* Estilo del texto del placeholder y del input */
.neon-input input, .neon-input .v-field__input::placeholder {
  color: white !important;
  opacity: 0.7;
}

/* ... resto de los estilos ... */
.neon-button {
  background-color: #00bfff !important;
  color: white !important;
  border-radius: 50px !important;
  font-weight: bold !important;
  box-shadow: 0 0 5px #00bfff, 0 0 15px #00bfff;
  transition: all 0.3s ease-in-out;
}

.neon-button:hover {
  background-color: #87cefa !important;
  box-shadow: 0 0 10px #87cefa, 0 0 20px #87cefa;
}

.link-light {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s;
}
.link-light:hover {
  color: white;
  text-decoration: underline;
}
</style>