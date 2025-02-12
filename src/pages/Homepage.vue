<template>
    <div class="d-flex flex-column justify-content-center align-items-center text-center vh-100 mt-5">
        <img src="../assets/logo_transparent.png" alt="Flyer" class="logo-img img-fluid" />
        <FlyerInfo />
    </div>
</template>
<script lang="ts">
import FlyerInfo from '../components/FlyerInfo.vue';
export default {
    components: { FlyerInfo },
}
</script>
<style scoped>
/*#logo-img {
    width: 200px;
    height: auto;
}*/
</style>