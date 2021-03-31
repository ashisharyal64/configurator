<template>
    <div class="m-2">
        <label :for="gavelback.id">
            <img :src="gavelback.image" class="w-16">
        </label>
        <input type="radio" :id="gavelback.id" name="gavelback" class="hidden" :value="gavelback" @change="selectGavelBack(gavelback)">
    </div>
</template>

<script>

    export default {
        name: "GavelBackComponent",
        components: {},

        props:{
            gavelback:{
                type:Object
            }
        },
        methods:{
            selectGavelBack(gavelback)
            {
                this.$store.commit('addGavelBack', gavelback);
            },

        }
    }
</script>

<style scoped>

</style>