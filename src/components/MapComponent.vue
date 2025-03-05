vue
<template>
  <div class="map-container">
    <GoogleMap
      api-key="YOUR_GOOGLE_MAPS_API_KEY"
      :center="center"
      :zoom="15"
      class="map"
    >
      <Marker :options="{ position: center }" />
    </GoogleMap>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'
export default defineComponent({
  name: 'MapComponent',
  components: {
    GoogleMap,
    Marker
  },
  data() {
    return {
      center: {
        lat: 52.37095,
        lng: 10.13579
      }
    }
  }
})
</script>
<style scoped>
.map-container {
  width: 100%;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
}
.map {
  width: 100%;
  height: 100%;
}
</style>