<template>
  <v-card class="mb-6 forum-filters" elevation="2">
    <v-card-text>
      <v-row align="center">
        <v-col cols="12" sm="6" md="4">
          <label class="filter-label font-electrolize text-white mb-2 d-block">Ordenar por</label>
          <v-select
            :model-value="sortOrder"
            :items="sortOptions"
            variant="outlined"
            hide-details
            density="comfortable"
            @update:model-value="$emit('update:sortOrder', $event)"
            class="font-electrolize white-select"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" md="8" class="text-sm-right">
          <span class="text-caption text-white font-electrolize">
            {{ totalMessages }} {{ totalMessages === 1 ? 'mensaje' : 'mensajes' }}
          </span>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ForumFilters',
  props: {
    sortOrder: {
      type: String,
      required: true
    },
    totalMessages: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      sortOptions: [
        { title: 'Relevancia (Más Likes)', value: 'relevance_desc' },
        { title: 'Más Recientes', value: 'date_desc' },
        { title: 'Más Antiguos', value: 'date_asc' },
      ],
    };
  }
}
</script>

<style scoped>
.forum-filters {
  background-color: #0a1628;
  border: 1px solid rgba(255, 20, 147, 0.3);
}

.font-electrolize {
  font-family: 'Electrolize', sans-serif !important;
}

.filter-label {
  font-size: 0.9rem;
  font-weight: 600;
}

/* Estilos para el select en blanco */
.white-select :deep(.v-field__input) {
  color: white !important;
}

.white-select :deep(.v-field__outline) {
  color: rgba(255, 255, 255, 0.5) !important;
}

.white-select :deep(.v-select__selection-text) {
  color: white !important;
}

.white-select :deep(.v-icon) {
  color: white !important;
}
</style>