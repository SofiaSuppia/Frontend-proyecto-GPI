<template>
  <div class="login-background d-flex align-center justify-center">
    <div class="form-container pa-8">
      <v-form @submit.prevent="handleLogin">
        <!-- Título -->
        <h2 class="text-h4 font-weight-bold text-center mb-2 font-audiowide text-white">INICIAR SESIÓN</h2>
        <p class="text-center mb-8 text-white font-audiowide font-weight-bold">Ingresa tus credenciales</p>

        <!-- Campo de Usuario -->
        <label class="input-label font-audiowide">Usuario</label>
        <v-text-field
          v-model="username"
          placeholder="Ingresa tu usuario"
          variant="outlined"
          class="neon-input mb-4"
          density="comfortable"
          hide-details
        ></v-text-field>

        <!-- Campo de Contraseña -->
        <label class="input-label font-audiowide">Contraseña</label>
        <v-text-field
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          placeholder="Ingresa tu contraseña"
          variant="outlined"
          class="neon-input mb-4"
          density="comfortable"
          :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="showPassword = !showPassword"
          hide-details
        ></v-text-field>

        <!-- Botón de Iniciar Sesión -->
        <v-btn 
          type="submit"
          block 
          class="neon-button mt-4 font-audiowide" 
          size="large"
        >
          Iniciar Sesión
        </v-btn>

        <!-- Enlaces inferiores -->
        <v-row class="text-center mt-6">
          <v-col>
            <a href="#" class="text-caption link-light font-audiowide">¿Olvidaste tu contraseña?</a>
          </v-col>
          <v-col>
            <a href="#" @click.prevent="goToRegister" class="text-caption link-light font-audiowide">¿No tienes cuenta? Regístrate</a>
          </v-col>
        </v-row>
      </v-form>
    </div>
  </div>
</template>

<script>
import backgroundImage from '../assets/images/registro.png';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      showPassword: false,
      backgroundImage: backgroundImage
    };
  },
  methods: {
    handleLogin() {
      // Aquí irá la lógica de inicio de sesión
      console.log('Intentando iniciar sesión con:', {
        username: this.username,
        password: this.password
      });
      // Por ahora, redirigimos al home
      this.$router.push('/');
    },
    goToRegister() {
      this.$router.push('/registro');
    }
  }
}
</script>

<style scoped>
.login-background {
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

/* Estilos para los campos de texto */
.neon-input .v-field {
  background-color: rgba(0, 30, 60, 0.5) !important;
  border-radius: 16px !important;
}

.neon-input .v-field__outline {
  --v-field-border-width: 2px;
  --v-field-border-opacity: 0.8;
  color: #00bfff;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 8px -2px #00bfff;
}

.neon-input.v-text-field--active .v-field__outline,
.neon-input:focus-within .v-field__outline {
  --v-field-border-opacity: 1;
  color: #87cefa;
  box-shadow: 0 0 12px -1px #00bfff;
}

.neon-input .v-label {
  display: none !important;
}

.neon-input input, .neon-input .v-field__input::placeholder {
  color: white !important;
  opacity: 0.7;
}

/* Estilos para el botón */
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

/* Estilo de los enlaces */
.link-light {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.link-light:hover {
  color: #87cefa;
  text-decoration: underline;
}
</style>