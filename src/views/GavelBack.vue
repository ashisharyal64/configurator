<template>
    <div>
        <div class="flex flex-row justify-center">
<!--            <RightComponent v-for="(right, i) in rights" :key="i" :right="right"></RightComponent>-->
            <GavelBackComponent v-for="(gavelback, i) in gavelbacks" :key="i" :gavelback="gavelback"></GavelBackComponent>

        </div>
        <div class="flex justify-end mt-10">
            <button class="bg-primary m-5 py-3 px-7 text-white rounded-full" v-on:click="onContinue()">
                FORTSÄTT
            </button>
        </div>
    </div>
</template>

<script>
    import GavelBackComponent from "../components/configurator-options/GavelBackComponent";
    export default {
        name: 'GavelBack',
        components: {GavelBackComponent},
        data(){
            return {
                gavelbacks:this.$store.state.gavelbacks
            }
        },

        methods:{
            onContinue(){

                this.$router.push('left');

            }
        }
    }
</script>
<style lang="scss">

</style>