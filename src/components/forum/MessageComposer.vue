<template>
  <v-card class="mb-6 message-composer" elevation="2">
    <v-card-title class="text-h6 font-weight-bold font-electrolize text-white">
      {{ replyToId ? 'Escribir Respuesta' : 'Publicar Nuevo Mensaje' }}
    </v-card-title>
    <v-card-text>
      <v-textarea
        v-model="messageContent"
        :label="replyToId ? 'Escribir respuesta...' : 'Escribir mensaje en el foro...'"
        :maxlength="maxChars"
        rows="3"
        auto-grow
        variant="outlined"
        hide-details
        class="font-electrolize white-textarea"
      ></v-textarea>
      
      <div class="d-flex justify-space-between mt-2 text-caption">
        <span class="text-white" :class="{ 'text-error': charsRemaining < 0 }">
          {{ charCount }} / {{ maxChars }} caracteres
        </span>
      </div>
    </v-card-text>

    <v-card-actions class="pt-0 px-4 pb-4">
      <v-spacer></v-spacer>
      <v-btn 
        color="#FF1493" 
        :disabled="!canSubmit"
        @click="submitMessage"
        class="font-electrolize"
      >
        Publicar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'MessageComposer',
  props: {
    replyToId: {
      type: Number,
      default: null 
    }
  },
  data() {
    return {
      messageContent: '',
      maxChars: 200,
    };
  },
  computed: {
    charCount() {
      return this.messageContent.length;
    },
    charsRemaining() {
      return this.maxChars - this.charCount;
    },
    canSubmit() {
      return this.charCount > 0 && this.charCount <= this.maxChars;
    }
  },
  methods: {
    submitMessage() {
      if (!this.canSubmit) return;

      const messageData = {
        content: this.messageContent,
        parent_id: this.replyToId,
      };

      console.log('Mensaje/Respuesta a enviar:', messageData);

      this.$emit('message-posted', messageData);
      this.messageContent = '';
    }
  }
}
</script>

<style scoped>
.message-composer {
  background-color: #0a1628;
  border: 1px solid rgba(255, 20, 147, 0.3);
}

.font-electrolize {
  font-family: 'Electrolize', sans-serif !important;
}

/* Estilos para el textarea en blanco */
.white-textarea :deep(.v-field__input) {
  color: white !important;
}

.white-textarea :deep(.v-field__outline) {
  color: rgba(255, 255, 255, 0.5) !important;
}

.white-textarea :deep(textarea::placeholder) {
  color: rgba(255, 255, 255, 0.5) !important;
}

.white-textarea :deep(.v-label) {
  color: rgba(255, 255, 255, 0.7) !important;
}
</style>