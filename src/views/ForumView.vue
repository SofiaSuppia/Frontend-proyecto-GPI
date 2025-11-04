<template>
  <div class="forum-view">
    <v-container>
      <h2 class="text-h3 mb-6 font-weight-bold font-electrolize text-white text-center">
        Foro de Ciberseguridad
      </h2>

      <MessageComposer @message-posted="handleNewMessage" />

      <ForumFilters 
        :sort-order="sortOrder"
        :total-messages="messages.length"
        @update:sort-order="sortOrder = $event"
      />

      <div v-if="loading" class="text-center py-10">
        <v-progress-circular 
          indeterminate 
          color="#FF1493"
          size="64"
        ></v-progress-circular>
        <p class="mt-4 text-white font-electrolize">Cargando mensajes...</p>
      </div>
      
      <v-alert v-else-if="messages.length === 0" type="info" class="font-electrolize">
        Aún no hay mensajes en el foro. ¡Sé el primero en publicar!
      </v-alert>
      
      <div v-else>
        <MessageCard 
          v-for="message in sortedMessages" 
          :key="message.id" 
          :message="message" 
          @reply-posted="loadMessages"
        />
      </div>

    </v-container>
  </div>
</template>

<script>
import MessageComposer from '@/components/forum/MessageComposer.vue';
import MessageCard from '@/components/forum/MessageCard.vue';
import ForumFilters from '@/components/forum/ForumFilters.vue';

export default {
  name: 'ForumView',
  components: {
    MessageComposer,
    MessageCard,
    ForumFilters,
  },
  data() {
    return {
      messages: [],
      loading: false,
      sortOrder: 'relevance_desc',
    };
  },
  computed: {
    sortedMessages() {
      let sorted = [...this.messages];
      
      if (this.sortOrder === 'relevance_desc') {
        sorted.sort((a, b) => b.likesCount - a.likesCount);
      } else if (this.sortOrder === 'date_desc') {
        sorted.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      } else if (this.sortOrder === 'date_asc') {
        sorted.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
      }
      
      return sorted;
    }
  },
  mounted() {
    this.loadMessages();
  },
  watch: {
    sortOrder() {
      // No necesitamos recargar, solo reordenar con el computed
    }
  },
  methods: {
    loadMessages() {
      this.loading = true;
      console.log(`Cargando mensajes con orden: ${this.sortOrder}`);

      setTimeout(() => {
        this.messages = this.getMockMessages();
        this.loading = false;
      }, 800);
    },
    handleNewMessage(messageData) {
      const newMessage = {
        id: Date.now(),
        content: messageData.content,
        username: 'Usuario Actual', // En producción vendría del estado de autenticación
        timestamp: new Date().toISOString(),
        likesCount: 0,
        likedByMe: false,
        replies: []
      };
      
      this.messages.unshift(newMessage);
    },
    getMockMessages() {
        return [
            {
            id: 1, 
            content: '¿Alguien ha probado a usar un VPN gratuito para el trabajo? ¿Es seguro?', 
            username: 'sofim', 
            timestamp: new Date('2025-10-30T10:00:00Z').toISOString(), 
            likesCount: 15, 
            likedByMe: false,
            dislikedByMe: false, // Añadir esta propiedad
            replies: [
                { 
                id: 11, 
                content: 'Yo no lo recomendaría. Los gratuitos a menudo venden tus datos. Mejor uno de pago o uno de código abierto.', 
                username: 'CyberGeek', 
                timestamp: new Date('2025-10-30T10:30:00Z').toISOString(), 
                likesCount: 8, 
                likedByMe: true,
                dislikedByMe: false, // Añadir esta propiedad
                replies: [] 
                }
            ]
            },
            {
            id: 2, 
            content: 'Me llegó un correo de mi banco pidiendo la clave. ¿Es phishing?', 
            username: 'User99', 
            timestamp: new Date('2025-11-03T15:30:00Z').toISOString(), 
            likesCount: 3, 
            likedByMe: false,
            dislikedByMe: false, // Añadir esta propiedad
            replies: []
            },
            {
            id: 3, 
            content: '¿Cuál es la mejor práctica para crear contraseñas seguras?', 
            username: 'SecureUser', 
            timestamp: new Date('2025-11-01T12:00:00Z').toISOString(), 
            likesCount: 22, 
            likedByMe: false,
            dislikedByMe: false, // Añadir esta propiedad
            replies: []
            }
        ];
    }
  }
};
</script>

<style scoped>
.forum-view {
  background-color: #000123;
  min-height: 100vh;
  padding: 60px 0;
}

.font-electrolize {
  font-family: 'Electrolize', sans-serif !important;
}
</style>