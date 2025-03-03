<template>
  <div id="app" class="d-flex flex-column">
    <!-- Navbar -->
    <Navbar/>

    <!-- Seiteninhalt -->
    <router-view></router-view>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
/* Verhindert ungewolltes Scrollen */
/*html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Kein horizontales Scrollen 
}*/

/* Hauptcontainer */
#app {
  display: flex;
  flex-direction: column;
  /*overflow-x: hidden;*/ /* Falls ein Element über den Rand geht */
}

/* Stellt sicher, dass der Hauptinhalt sich streckt */
.router-view {
  width: 100%;
}

/* Footer bleibt am unteren Rand, ohne zusätzlichen Scroll */
footer {
  background-color: #f8f9fa;
  padding: 1rem 0;
  text-align: center;
  border-top: 1px solid #dee2e6;
  width: 100%;
}

</style>
