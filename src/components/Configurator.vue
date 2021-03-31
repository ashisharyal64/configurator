<template>
    <div class="md:col-span-6">
        <div v-if="!isHome" class="flex justify-center">
            <Trolly ></Trolly>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import Trolly from "./Trolly";
    export default {
        name: "Configurator",
        components: {Trolly},


        computed:{
            isHome(){
                return this.$route.name === 'Home';
            }
        },




    }
</script>

<style scoped>

</style>