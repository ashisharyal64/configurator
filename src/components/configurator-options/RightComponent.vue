<template>
    <div class="m-2">
        <label :for="right.id">
            <img :src="right.image" class="w-16">
        </label>
        <input type="radio" :id="right.id" name="right" class="hidden" :value="right" @change="selectRight(right)">
    </div>
</template>

<script>
    export default {
        name: "RightComponent",
        components: {},

        props:{
            right:{
                type:Object
            }
        },
        methods:{
            selectRight(right)
            {
                this.$store.commit('addRight', right);
            },

        }
    }
</script>
<style lang="scss">

</style>