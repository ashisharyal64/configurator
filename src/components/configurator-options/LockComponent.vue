<template>
    <div class="m-2">
        <label :for="lock.id">
            <img :src="lock.image" class="w-20">
        </label>
        <input type="radio" :id="lock.id" name="left" class="hidden" :value="lock" @change="selectLeft(lock)">
    </div>
</template>

<script>

    export default {
        name: "LockComponent",
        components: {},

        props:{
            lock:{
                type:Object
            }
        },
        methods:{
            selectLeft(lock)
            {
                this.$store.commit('addLock', lock);
            },

        }
    }
</script>

<style scoped>

</style>