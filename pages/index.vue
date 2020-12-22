<template>
  <a-layout>
    <a-layout-header>
      <h1 style="color: white">JokerShpoker Paint</h1>
    </a-layout-header>
    <a-layout>
      <a-layout-sider>
        <a-col :span="24"></a-col>
      </a-layout-sider>
      <a-layout-content
        ><editor
          ref="editor"
          :canvas-width="1024"
          :canvas-height="720"
          editor-id="canvasId"
      /></a-layout-content>
    </a-layout>
    <a-layout-footer></a-layout-footer>
  </a-layout>
</template>

<script>
import Editor from '~/components/Editor.vue'

export default {
  components: { Editor },
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
