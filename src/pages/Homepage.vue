<template>
    <div class="d-flex flex-column justify-content-center align-items-center text-center">
        <div class="img-container">
            <img src="../assets/logo_transparent.png" alt="Flyer" class="logo-img" />
        </div>
        <FlyerInfo />
    </div>
</template>
<script lang="ts">
import FlyerInfo from '../components/FlyerInfo.vue';
import Footer from '../components/Footer.vue';
export default {
    components: { FlyerInfo, Footer }
}
</script>
<style scoped>
.logo-img {
    width: 180px;
    height: auto;

    /*img-fluid*/
}
</style>