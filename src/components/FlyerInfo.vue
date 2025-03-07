<template>
    <main class="container mt-3">
        <h1 class="text-center">Reinald Habel</h1>
        <h2 class="text-center">Arzt für Integrative Medizin</h2>
        <div class="text-center">
            <p>Bauernstraße 36, 31275 Lehrte/Immensen</p>
            <p>Telefon: 0175 5628493</p>
            <p>Email: info@praxis-habel.de</p>
        </div>
        <div class="card my-4 fs-3">
            <div class="card-body">
                <h2 class="card-title ">Ganzheitliche Diagnose- und Therapieverfahren</h2>
                <ul class="therapie">
                    <li>Klassische Schulmedizin</li>
                    <li>Labor- und Diagnostikmethoden</li>
                    <li>HS-Spektralanalysen</li>
                    <li>Adjuvante Krebstherapie</li>
                    <li>Orthomolekulare Medizin</li>
                </ul>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
export default {
    name: 'FlyerInfo'
}
</script>

<style scoped>
.card {
    background-color: rgb(0, 183, 255);
}
</style>