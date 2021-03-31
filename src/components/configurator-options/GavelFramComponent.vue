<template>

    <div class="m-2">
        <label :for="gavelfram.id">
            <img :src="gavelfram.image" class="w-16">
        </label>
        <input type="radio" :id="gavelfram.id" name="gavelfram" class="hidden"  :value="gavelfram"
               @change="selectGavelFram(gavelfram)">
    </div>
</template>

<script>
    export default {
        name: "GavelFramComponent",
        components: {},

        props:{
            gavelfram:{
                type:Object
            }
        },
        methods:{
            selectGavelFram(gavelfram)
            {
                this.$store.commit('addGavelFram', gavelfram);
            },

        }
    }
</script>

<style scoped>

</style>