<template>
  <a-layout>
    <a-layout-header>
      <h1 style="color: white">JokerShpoker Paint</h1>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="4rem">
        <a-row type="flex" justify="space-around" style="margin-top: 15px">
          <a-col :span="20">
            <a-row style="background-color: white; border-radius: 10px">
              <one :color="color" />
            </a-row>
          </a-col>
        </a-row>
        <a-row type="flex" justify="space-around" style="margin-top: 15px">
          <a-col :span="20">
            <palette
              :colors="['#fff', '#f00', '#0f0', '#00f', '#000']"
              @click="(c) => (color = c)"
            />
          </a-col>
        </a-row>
      </a-layout-sider>
      <a-layout-content
        ><editor
          ref="editor"
          :canvas-width="cv.width"
          :canvas-height="cv.height"
          editor-id="canvasId"
      /></a-layout-content>
    </a-layout>
    <a-layout-footer>
      <a-row>
        <a-col>
          <tools-palette
            @click="(cb) => (mode = cb(mode, $refs.editor))"
            :mode="mode"
            :editor="$refs.editor"
          />
        </a-col>
        <a-col>
          <input
            id="chooseImage"
            style="visibility: hidden"
            type="file"
            @change="upload"
            accept="image/*"
          />
          <a-icon
            @click="triggerUpload"
            type="cloud-upload"
            style="font-size: 2.5rem; border-radius: 10px; padding: 4px"
          />
        </a-col>
      </a-row>
    </a-layout-footer>
  </a-layout>
</template>

<script>
import One from '~/components/controls/color/one.vue'
import Palette from '~/components/controls/color/palette.vue'
import ToolsPalette from '~/components/controls/tools/'
import Editor from '~/components/Editor.vue'

export default {
  components: { Editor, Palette, One, ToolsPalette },
  data() {
    return {
      mode: '',
      color: '',
    }
  },
  computed: {
    cv() {
      return {
        height: window.innerHeight - 160,
        width: window.innerWidth - 64,
      }
    },
  },
  watch: {
    mode() {
      this.smthChanged()
    },
    color() {
      this.smthChanged()
    },
  },
  mounted() {
    this.color = '#fff'
    this.mode = 'freeDrawing'
  },
  methods: {
    smthChanged() {
      this.$refs.editor.set(this.mode, { stroke: this.color })
    },
    triggerUpload() {
      document.getElementById('chooseImage').click()
    },
    upload(e) {
      this.$refs.editor.uploadImage(e)
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
