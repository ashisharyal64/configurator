<template>
    <div class="bg-primary text-white">
        <div class="mt-20 ml-3 lg:ml-10">
            <h3 class="text-xl pb-5 font-bold">DINA VAL</h3>
                <NavItems></NavItems>
        </div>
    </div>
    
</template>

<script>
    import NavItems from "./navigation/NavItems";
    export default {
        name: "LeftMenu",
        components:{ NavItems }
    }
</script>

<style scoped>

</style>