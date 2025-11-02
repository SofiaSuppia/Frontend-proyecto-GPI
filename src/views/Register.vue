<template>
  <div class="register-background d-flex align-center justify-center">
    <!-- Contenedor del formulario con efecto neón -->
    <div class="form-container pa-8">
      <v-form @submit.prevent="handleRegister">
        <h2 class="text-h4 font-weight-bold text-center mb-2 font-audiowide">CREAR CUENTA</h2>
        <p class="text-center text-medium-emphasis mb-8">Ingresa tus datos para registrarte</p>

        <!-- Campo de Usuario -->
        <v-text-field
          v-model="username"
          label="Usuario"
          variant="outlined"
          class="neon-input mb-4"
          prepend-inner-icon="mdi-account-outline"
        ></v-text-field>

        <!-- Campo de Email -->
        <v-text-field
          v-model="email"
          label="Email"
          type="email"
          variant="outlined"
          class="neon-input mb-4"
          prepend-inner-icon="mdi-email-outline"
        ></v-text-field>

        <!-- Campo de Contraseña -->
        <v-text-field
          v-model="password"
          label="Contraseña"
          :type="showPassword ? 'text' : 'password'"
          variant="outlined"
          class="neon-input mb-4"
          prepend-inner-icon="mdi-lock-outline"
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="showPassword = !showPassword"
        ></v-text-field>

        <!-- Botón de Registrarse -->
        <v-btn 
          type="submit"
          block 
          class="neon-button mt-4" 
          size="large"
        >
          Registrarse
        </v-btn>

        <!-- Enlaces adicionales -->
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
import backgroundImage from '../assets/images/registro.png';

export default {
  name: 'Register',
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
      // Aquí iría la lógica para enviar los datos a tu backend
      console.log('Registrando usuario:', {
        username: this.username,
        email: this.email,
        password: this.password
      });
      alert('¡Registro enviado!');
    },
    goToLogin() {
      // Redirige a la vista de inicio de sesión
      // this.$router.push('/login');
      alert('Redirigiendo a Iniciar Sesión...');
    }
  },
  // Aplica el fondo de pantalla al estilo del componente
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
/* Estilo para el fondo de la página */
.register-background {
  min-height: 100vh;
  background-image: url('../assets/images/registro.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #0a111a;
}

/* Contenedor del formulario con borde neón */
.form-container {
  width: 100%;
  max-width: 450px;
  background-color: rgba(10, 25, 47, 0.85); /* Fondo oscuro semi-transparente */
  backdrop-filter: blur(5px); /* Efecto de desenfoque para el fondo */
  border: 2px solid #00bfff; /* Borde azul claro */
  border-radius: 24px;
  /* Sombra para el efecto de brillo neón */
  box-shadow: 0 0 15px #00bfff, 0 0 25px #00bfff, inset 0 0 10px #00bfff;
}

/* Estilo para los campos de texto con borde neón */
.neon-input .v-field__outline {
  --v-field-border-width: 2px;
  --v-field-border-opacity: 0.6;
  color: #00bfff; /* Color del borde */
  transition: all 0.3s ease-in-out;
}

.neon-input.v-text-field--active .v-field__outline,
.neon-input:focus-within .v-field__outline {
  --v-field-border-opacity: 1;
  color: #87cefa; /* Un azul más claro al enfocar */
  box-shadow: 0 0 8px #00bfff; /* Sombra al enfocar */
}

.neon-input .v-label {
  color: rgba(255, 255, 255, 0.7) !important;
}

.neon-input input {
  color: white !important;
}

/* Estilo para el botón con efecto neón */
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

/* Estilo para los enlaces */
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