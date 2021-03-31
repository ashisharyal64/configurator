<template>

            <div class="m-2">
                <label :for="bottom.id">
                    <img :src="bottom.image" class="w-40">
                </label>
                <input type="radio" :id="bottom.id" name="bottom" class="hidden" :value="bottom"
                       @change="selectBottom(bottom)">
            </div>



</template>

<script>
    export default {
        name: 'BottomComponent',
        components: {},

        props:{
            bottom:{
                type:Object
            }
        },

        methods:{
            selectBottom(bottom)
            {
                this.$store.commit('addBottom', bottom);

            },

        }
    }
</script>
<style lang="scss">

</style>