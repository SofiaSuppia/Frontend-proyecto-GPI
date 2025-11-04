<template>
  <v-card 
    :class="{'mb-4': !isReply, 'mb-2 ml-8': isReply}" 
    :elevation="isReply ? 0 : 2"
    class="message-card"
  >
    <v-card-text class="pb-2">
      <div class="d-flex align-center mb-3">
        <v-avatar size="32" class="mr-3" color="#FF1493">
          <span class="text-white font-weight-bold">{{ message.username.charAt(0).toUpperCase() }}</span>
        </v-avatar>
        <div>
          <div class="font-weight-bold font-electrolize text-white">{{ message.username }}</div>
          <div class="text-caption text-grey">{{ formattedDate }}</div>
        </div>
      </div>
      
      <p class="text-body-1 message-content font-electrolize text-white">
        {{ message.content }}
      </p>

      <div class="d-flex align-center mt-3">
        <!-- Botón Like (Pulgar arriba) -->
        <v-btn 
          icon
          variant="text"
          size="small"
          @click="toggleLike"
          :class="{ 'liked': message.likedByMe }"
          class="action-btn"
        >
          <v-icon :color="message.likedByMe ? '#FF1493' : 'white'">
            mdi-thumb-up
          </v-icon>
        </v-btn>

        <!-- Botón Dislike (Pulgar abajo) -->
        <v-btn 
          icon
          variant="text"
          size="small"
          @click="toggleDislike"
          :class="{ 'disliked': message.dislikedByMe }"
          class="action-btn ml-1"
        >
          <v-icon :color="message.dislikedByMe ? '#FF1493' : 'white'">
            mdi-thumb-down
          </v-icon>
        </v-btn>

        <!-- Botón Compartir -->
        <v-btn 
          icon
          variant="text"
          size="small"
          class="action-btn ml-1"
        >
          <v-icon color="white">mdi-share-variant</v-icon>
        </v-btn>

        <!-- Contador de Likes -->
        <span class="text-white font-electrolize ml-2" v-if="message.likesCount > 0">
          {{ message.likesCount }}
        </span>

        <!-- Botón Responder (solo en mensajes principales) -->
        <v-btn 
          v-if="!isReply" 
          variant="text"
          size="small"
          color="white"
          @click="showReply = !showReply"
          class="ml-4 font-electrolize"
        >
          <v-icon class="mr-1" size="small">mdi-reply</v-icon>
          Responder
        </v-btn>
      </div>
    </v-card-text>
    
    <v-card-text v-if="showReply" class="pt-0">
      <MessageComposer 
        :reply-to-id="message.id" 
        @message-posted="handleReplyPosted" 
      />
    </v-card-text>
    
    <v-card-text v-if="message.replies && message.replies.length > 0" class="pt-0">
      <MessageCard 
        v-for="reply in message.replies" 
        :key="reply.id" 
        :message="reply" 
        :is-reply="true"
        @reply-posted="$emit('reply-posted')"
      />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'MessageCard',
  props: {
    message: {
      type: Object,
      required: true,
    },
    isReply: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showReply: false,
    };
  },
  computed: {
    formattedDate() {
      return new Date(this.message.timestamp).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  },
  methods: {
    toggleLike() {
      // Si tenía dislike, quitarlo
      if (this.message.dislikedByMe) {
        this.message.dislikedByMe = false;
        this.message.likesCount++;
      }
      
      // Toggle del like
      this.message.likedByMe = !this.message.likedByMe;
      this.message.likesCount += this.message.likedByMe ? 1 : -1;
    },
    toggleDislike() {
      // Si tenía like, quitarlo
      if (this.message.likedByMe) {
        this.message.likedByMe = false;
        this.message.likesCount--;
      }
      
      // Toggle del dislike
      this.message.dislikedByMe = !this.message.dislikedByMe;
    },
    handleReplyPosted() {
      this.showReply = false;
      this.$emit('reply-posted');
    }
  }
}
</script>

<style scoped>
.message-card {
  background-color: #0a1628;
  border: 1px solid rgba(255, 20, 147, 0.2);
}

.message-content {
  color: #f5f5f5;
  word-wrap: break-word;
}

.font-electrolize {
  font-family: 'Electrolize', sans-serif !important;
}

.text-grey {
  color: #b0b0b0;
}

.action-btn {
  min-width: 40px !important;
}

.action-btn.liked .v-icon,
.action-btn.disliked .v-icon {
  color: #FF1493 !important;
}
</style>