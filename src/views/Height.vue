<template>


        <div class="flex flex-col text-center justify-center   min-h-screen">
                <div>
                        <h3 class="font-bold">
                                VÄLJ INVÄNDIG HÖJD:
                        </h3>
                        <select class="rounded w-32 mt-4" name="size" id="size">
                                <HeightComponent v-for="(height, i) in heights" :key="i" :height="height"></HeightComponent>
                        </select>

                </div>
                <div class="flex justify-end mt-10">
                        <button class="bg-primary m-5 py-3 px-7 text-white rounded-full" v-on:click="onContinue()">
                                FORTSÄTT
                        </button>
                </div>
        </div>



</template>

<script>
    import HeightComponent from "../components/configurator-options/HeightComponent";
    export default {
        name: 'Height',
        components: {HeightComponent},

            data(){
                    return {
                            heights: this.$store.state.heights
                    }
            },
            methods:{
                    onContinue(){
                            //    1. save the height data on store
                            //    2. go to bottom
                            this.$router.push('bottom');
                    }
            }
    }


</script>
<style lang="scss">

</style>