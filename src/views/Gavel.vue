<template>

        <div>
            <div class="flex flex-row justify-center">
                <GavelFramComponent v-for="(gavelfram, i) in gavelframs" :key="i"
                                    :gavelfram="gavelfram"></GavelFramComponent>

            </div>
            <div class="flex justify-end mt-10">
                <button class="bg-primary m-5 py-3 px-7 text-white rounded-full" v-on:click="onContinue()">
                    FORTSÄTT
                </button>
            </div>
        </div>

</template>

<script>
    import GavelFramComponent from "../components/configurator-options/GavelFramComponent";
    export default {
        name: 'Gavel',
        components: {GavelFramComponent},
        data(){
            return {
                gavelframs:this.$store.state.gavelframs
            }
        },

        methods:{
            onContinue(){

                this.$router.push('right');

            }
        }
    }
</script>
<style lang="scss">

</style>