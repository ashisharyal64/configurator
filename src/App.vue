<template>
    <div id="app" class="2xl:container xl:mx-auto grid grid-cols-auto font-body md:grid-flow-col">
        <!--    Dina val column-->
        <LeftMenu></LeftMenu>

        <!--    configurator column-->
        <Configurator></Configurator>

        <!--    price column-->
        <PriceColumn></PriceColumn>

    </div>
</template>

<script>
    import LeftMenu from "./components/LeftMenu";
    import Configurator from "./components/Configurator";
    import PriceColumn from "./components/PriceColumn";
    export default {
        name: 'App',
        components: {
            LeftMenu, Configurator, PriceColumn
        }
    }
</script>

<style lang="scss">

</style>
