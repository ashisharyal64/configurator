<template>
    <div>
        <div class="flex flex-row justify-center">
            <LeftComponent v-for="(left, i) in lefts" :key="i" :left="left"></LeftComponent>

        </div>
        <div class="flex justify-end mt-10">
            <button class="bg-primary m-5 py-3 px-7 text-white rounded-full" v-on:click="onContinue()">
                FORTSÄTT
            </button>
        </div>
    </div>
</template>

<script>
    import LeftComponent from "../components/configurator-options/LeftComponent";
    export default {
        name: 'Left',
        components: {LeftComponent},
        data(){
            return {
                lefts:this.$store.state.lefts
            }
        },

        methods:{
            onContinue(){
                this.$router.push('lock');
            }
        }
    }
</script>
<style lang="scss">

</style>`