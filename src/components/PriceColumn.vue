<template>
    <div class="bg-secondary   bg-gray-100 text-black">
        <div class="mt-20 ">
                    <img src="../assets/logo.png" class="ml-7">
        </div>
        <div class="mt-20 ml-7 mr-7">
            <h3 class="font-bold border-black border-b-2">
                DIN BESTÄLLNING
            </h3>

            <div class="flex flex-row my-7 text-gray-600">
                <div class="w-1/2">
                    Artikel
                </div>
                <div class="w-1/2 text-right">
                    Artikelnummer
                </div>

            </div>
<!--use component to calculate price here-->
           <PriceColumnComponent ></PriceColumnComponent>



            <div class="flex flex-row my-5 ">
                <div class="w-1/2">
                    Antal
                </div>
                <div class="w-1/2 text-right">
                    1 ST
                </div>

            </div>

            <div>
                <div class="text-right my-3">
                    Totalpris
                </div>
                <div class="text-right font-black font-bold text-lg	">
                    4760 KR
                </div>
            </div>

            <div>

            </div>
        </div>
    </div>
</template>

<script>
    import PriceColumnComponent from "./configurator-options/PriceColumnComponent";
    export default {
        name: "PriceColumn",
        components:{PriceColumnComponent},

    }
</script>

<style scoped>

</style>