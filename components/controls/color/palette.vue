<template>
  <a-row style="background-color: white; border-radius: 10px">
    <template v-if="horizontal">
      <a-col v-for="color in colors" :key="color" :span="4">
        <one :color="color" @click="$emit('click', color)" />
      </a-col>
    </template>
    <a-col v-else :span="24">
      <one
        v-for="color in colors"
        :key="color"
        :color="color"
        @click="$emit('click', color)"
      />
    </a-col>
  </a-row>
</template>

<script>
import one from './one.vue'
export default {
  components: { one },
  props: {
    horizontal: {
      default: false,
      type: Boolean,
    },
    colors: {
      required: true,
      type: Array,
    },
  },
}
</script>
