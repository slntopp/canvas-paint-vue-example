<template>
  <a-row type="flex" justify="space-between">
    <a-col v-for="tool in tools" :key="tool.icon">
      <a-icon
        :type="tool.icon"
        @click="$emit('click', tool.cb)"
        style="font-size: 3rem; border-radius: 10px; padding: 4px"
        :class="mode == tool.mode ? 'selected' : ''"
      />
    </a-col>
  </a-row>
</template>

<script>
export default {
  props: {
    mode: {
      required: true,
      type: String,
    },
  },
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
          mode: 'freeDrawing',
          cb: () => 'freeDrawing',
        },
        {
          icon: 'border',
          mode: 'rect',
          cb: () => 'rect',
        },
        {
          icon: 'meh',
          mode: 'circle',
          cb: () => 'circle',
        },
        {
          icon: 'cloud-download',
          cb: (mode, editor) => {
            console.log()
            const linkSource = editor.saveImage()
            const downloadLink = document.createElement('a')
            document.body.appendChild(downloadLink)

            downloadLink.href = linkSource
            downloadLink.target = '_self'
            downloadLink.download = 'Untitled'
            downloadLink.click()
            return mode
          },
        },
      ],
    }
  },
}
</script>

<style scoped>
.selected {
  background-color: white;
}
</style>
