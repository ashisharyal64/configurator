<template>
    <div>
        <div class="flex flex-row justify-center">
            <RightComponent v-for="(right, i) in rights" :key="i" :right="right"></RightComponent>

        </div>
        <div class="flex justify-end mt-10">
            <button class="bg-primary m-5 py-3 px-7 text-white rounded-full" v-on:click="onContinue()">
                FORTSÄTT
            </button>
        </div>
    </div>
</template>

<script>
    import RightComponent from "../components/configurator-options/RightComponent";
    export default {
        name: 'Right',
        components: {RightComponent},
        data(){
            return {
                rights:this.$store.state.rights
            }
        },

        methods:{
            onContinue(){

                this.$router.push('gavel-bak');

            }
        }
    }
</script>
<style lang="scss">

</style>