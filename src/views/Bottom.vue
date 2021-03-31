<template>

        <div>
            <div class="flex flex-row justify-center">
                <BottomComponent v-for="(bottom, i) in bottoms" :key="i" :bottom="bottom"></BottomComponent>
            </div>
            <div class="flex justify-end mt-10">
                <button class="bg-primary m-5 py-3 px-7 text-white rounded-full" v-on:click="onContinue()">
                    FORTSÄTT
                </button>
            </div>
        </div>


</template>

<script>
    import BottomComponent from '../components/configurator-options/BottomComponent'
    export default {
        name: 'Bottom',
        components: {BottomComponent},
        data(){
            return {
                bottoms:this.$store.state.bottoms
            }
        },

        methods:{
            onContinue(){
                //    1. save the height data on store

                //    2. go to bottom
                this.$router.push('gavel-fram');

            }
        }
    }
</script>
<style lang="scss">

</style>