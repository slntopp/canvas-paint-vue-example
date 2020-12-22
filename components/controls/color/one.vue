<template>
  <div
    :style="{
      borderRadius: '50%',
      width: '3rem',
      height: '3rem',
      borderWidth: '5px',
      borderColor: 'black',
      borderStyle: 'solid',
      margin: '3px',
      backgroundColor: color,
    }"
    v-on:click="$emit('click')"
  ></div>
</template>

<script>
export default {
  props: {
    color: {
      required: true,
      type: String,
    },
  },
}
</script>
