<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
    <div class="container-fluid">
      <!-- Logo und Titel -->
      <router-link class="navbar-brand d-flex align-items-center" to="/">
        <img src="../assets/logo_transparent.png" alt="Logo" class="logo me-2" />
        <span>Praxis Habel</span>
      </router-link>

      <!-- Toggler für Mobilgeräte -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navigation Links -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'about' }">Über mich</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'posts' }">Beiträge</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'services' }">Leistungen</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'contact' }">Kontakt</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'Navbar'
}
</script>

<style scoped>
/* Styling für das Logo */
.logo {
  height: 40px; /* Höhe des Logos */
  width: auto; /* Breite proportional */
}
</style>
