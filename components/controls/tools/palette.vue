<template>
  <a-row type="flex" justify="space-between">
    <a-col v-for="tool in tools" :key="tool.icon">
      <a-icon
        :span="2"
        :type="tool.icon"
        @click="$emit('click', tool.cb)"
        style="font-size: 2.2rem; border-radius: 10px; padding: 4px"
        :class="mode == tool.mode ? 'selected' : ''"
      />
    </a-col>
    <a-col :span="2">
      <a-icon
        @click="triggerUpload"
        type="cloud-upload"
        style="font-size: 2.2rem; border-radius: 10px; padding: 4px"
      />
      <input
        id="chooseImage"
        style="visibility: hidden"
        type="file"
        @change="upload"
        accept="image/*"
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
    editor: {
      required: true,
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
          icon: 'yuque',
          mode: 'eraser',
          cb: () => 'eraser',
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
  methods: {
    triggerUpload() {
      document.getElementById('chooseImage').click()
    },
    upload(e) {
      this.editor.uploadImage(e)
    },
  },
}
</script>

<style scoped>
.selected {
  background-color: white;
}
</style>
