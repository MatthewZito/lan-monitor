<script>
export default {
  name: 'BaseCard',
  inheritAttrs: false,
  props: {
    img: {
      type: String,
      required: true,
      default: ''
    },
    tags: {
      type: Array,
      required: false,
      default: () => ([])
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  },
  data: () => ({ hover: false }),
  computed: {
    hasTags () {
      return this.tags && this.tags.length;
    }
  }
};
</script>

<template>
  <v-flex>
    <v-hover v-slot:default="{ hover }">
      <v-card
        class="mx-auto mb-6"
        flat
        tile
        outlined
        :elevation="hover ? 8 : 2"
        v-bind="$attrs"
        v-on="$listeners"
      >
        <v-img
          :src="img"
        />

        <v-card-title class="black--text">
          {{ title }}
        </v-card-title>

        <v-card-text class="black--text">
          {{ subtitle }}
        </v-card-text>

        <v-divider
          v-if="hasTags"
          class="mx-4"
        />

        <v-card-text v-if="hasTags">
          <v-chip-group
            active-class="tertiary white--text"
            column
          >
            <v-chip
              v-for="(text, idx) in tags"
              :key="idx"
              color="quaterenary"
            >
              {{ text }}
            </v-chip>
          </v-chip-group>
        </v-card-text>
      </v-card>
    </v-hover>
  </v-flex>
</template>
