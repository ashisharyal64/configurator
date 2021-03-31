<template>
    <div class="m-2">
        <label :for="left.id">
            <img :src="left.image" class="w-16">
        </label>
        <input type="radio" :id="left.id" name="left" class="hidden" :value="left" @change="selectLeft(left)">
    </div>
</template>

<script>

    export default {
        name: "LeftComponent",
        components: {},

        props:{
            left:{
                type:Object
            }
        },
        methods:{
            selectLeft(left)
            {
                this.$store.commit('addLeft', left);
            },

        }
    }
</script>

<style scoped>

</style>