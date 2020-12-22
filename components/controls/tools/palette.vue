<template>
  <a-row type="flex" justify="space-between">
    <a-col v-for="tool in tools" :key="tool.icon">
      <a-icon
        :type="tool.icon"
        @click="$emit('click', tool.cb)"
        style="font-size: 3rem"
      />
    </a-col>
  </a-row>
</template>

<script>
export default {
  data() {
    return {
      tools: [
        {
          icon: 'delete',
          cb: (mode, editor) => {
            editor.clear()
            return mode
          },
        },
        {
          icon: 'highlight',
          cb: () => 'freeDrawing',
        },
        {
          icon: 'border',
          cb: () => 'rect',
        },
        {
          icon: 'meh',
          cb: () => 'circle',
        },
      ],
    }
  },
}
</script>
