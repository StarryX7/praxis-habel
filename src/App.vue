<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <!-- Navbar -->
    <Navbar />
    <router-view class="flex-grow-1" />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script lang="ts">
import  Navbar  from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import FlyerInfo from './components/FlyerInfo.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    FlyerInfo
  }
};
</script>

<style>
html,
body {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.therapiemethoden {
  font-size: 1.2rem;
}

.therapie {
  font-size: 24px;
}
</style>
