<template>


        <option :value="height.id">{{ height.name }}</option>

</template>

<script>

    export default {
        name: 'HeightComponent',
        components: {},

        props: {
            height: {
                type:Object,
            },
        },


    }
</script>
<style lang="scss">

</style>