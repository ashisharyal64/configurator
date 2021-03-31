<template>
    <div>
        <div class="flex flex-row justify-center">
            <LockComponent v-for="(lock, i) in locks" :key="i" :lock="lock"></LockComponent>

        </div>
        <div class="flex justify-end mt-10">
            <button class="bg-primary m-5 py-3 px-7 text-white rounded-full" v-on:click="onContinue()">
                FORTSÄTT
            </button>
        </div>
    </div>
</template>

<script>
    import LockComponent from "../components/configurator-options/LockComponent";
    export default {
        name: 'Lock',
        components: {LockComponent},
        data(){
            return {
                locks:this.$store.state.locks
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