<template>
  <div class="register-background d-flex align-center justify-center">
    <div class="form-container pa-8">
      <v-form @submit.prevent="handleRegister">
        <!-- 1. Títulos en blanco -->
        <h2 class="text-h4 font-weight-bold text-center mb-2 font-audiowide text-white">CREAR CUENTA</h2>
        <p class="text-center mb-8 text-white font-audiowide font-weight-bold">Ingresa tus datos para registrarte</p>

        <!-- Campo de Usuario -->
        <label class="input-label font-audiowide">Usuario</label>
        <v-text-field
          v-model="username"
          placeholder="usuario"
          variant="outlined"
          class="neon-input mb-4"
          prepend-inner-icon="mdi-account-outline"
          hide-details
        ></v-text-field>

        <!-- Campo de Email -->
        <label class="input-label font-audiowide">Email</label>
        <v-text-field
          v-model="email"
          placeholder="usuario@gmail.com"
          type="email"
          variant="outlined"
          class="neon-input mb-4"
          prepend-inner-icon="mdi-email-outline"
          hide-details
        ></v-text-field>

        <!-- Campo de Contraseña -->
        <label class="input-label font-audiowide">Contraseña</label>
        <v-text-field
          v-model="password"
          placeholder="Prueba123"
          :type="showPassword ? 'text' : 'password'"
          variant="outlined"
          class="neon-input mb-4"
          prepend-inner-icon="mdi-lock-outline"
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="showPassword = !showPassword"
          hide-details
        ></v-text-field>

        <v-btn 
          type="submit"
          block 
          class="neon-button mt-4 font-audiowide" 
          size="large"
        >
          Registrarse
        </v-btn>

        <v-row class="text-center mt-6">
          <v-col>
            <a href="#" @click.prevent="goToForgotPassword" class="text-caption link-light font-audiowide">¿Olvidaste tu contraseña?</a>
          </v-col>
          <v-col>
            <a href="#" @click.prevent="goToLogin" class="text-caption link-light font-audiowide">¿Ya tienes cuenta? Inicia Sesión</a>
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
      //alert('Redirigiendo a Iniciar Sesión...');
      this.$router.push('/login');
    },
    goToForgotPassword() {
    this.$router.push('/forgot-password'); // Nuevo método
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

.font-audiowide {
  font-family: 'Audiowide', cursive !important;
}

.text-h4.font-audiowide {
  font-family: 'Audiowide', cursive !important;
}

.text-caption.font-audiowide {
  font-family: 'Audiowide', cursive !important;
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

.input-label {
  display: block;
  color: white;
  font-weight: bold;
  margin-bottom: 6px;
  margin-left: 12px;
  font-size: 0.9rem;
}

/* --- 3. Estilos para los campos de texto (Inputs) --- */
.neon-input .v-field {
  /* Fondo del campo de texto */
  background-color: rgba(0, 30, 60, 0.5) !important;
  /* Bordes redondeados, pero no una píldora completa */
  border-radius: 16px !important;
}

.neon-input .v-field__outline {
  /* Ancho y opacidad del borde */
  --v-field-border-width: 2px;
  --v-field-border-opacity: 0.8;
  /* Color del borde */
  color: #00bfff;
  transition: all 0.3s ease-in-out;
  /* Efecto de brillo neón constante */
  box-shadow: 0 0 8px -2px #00bfff;
}

/* Intensifica el brillo al enfocar el campo */
.neon-input.v-text-field--active .v-field__outline,
.neon-input:focus-within .v-field__outline {
  --v-field-border-opacity: 1;
  color: #87cefa;
  box-shadow: 0 0 12px -1px #00bfff;
}

/* Estilo del texto de la etiqueta (label) */
.neon-input .v-label {
  color: rgba(255, 255, 255, 0.8) !important;
  font-weight: bold;
  opacity: 1 !important;
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