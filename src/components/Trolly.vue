<template>
    <div class="trolly pt-20 pb-20 relative ">
<!--        1. top -->
        <div class="absolute trolly-top">
                <img :src="getLock.image || lock" >
        </div >

<!--        3. front -->
        <div class="absolute trolly-front">
                <img :src="getGavelFram.image ||front" >
        </div>
<!--        4. back-->
            <div class="absolute trolly-back">
                    <img :src="getGavelBack.image || back" >
            </div>
<!--        5. left  -->
        <div class="absolute trolly-left">
                <img :src="getLeft.image || left" >
        </div>
<!--        6. right  -->
        <div class="absolute trolly-right">
                <img :src="getRight.image || right">
        </div>

<!--        2. bottom -->
        <div class="absolute trolly-bottom">
               <img :src="getBottom.image || bottom" >
<!--            {{ getBottom.image }}-->
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "Trolly",
        data(){
            return{
                lock:require("../assets/images/1250/base/top.png"),
                bottom:require("../assets/images/1250/base/bottom.png"),
                front:require("../assets/images/1250/base/front.png"),
                back:require("../assets/images/1250/base/back.png"),
                left:require("../assets/images/1250/base/left.png"),
                right:require("../assets/images/1250/base/right.png")
            }
        },

        computed:{
            getBottom(){
                return this.$store.getters.getBottom
            },
            getGavelFram(){
                return this.$store.getters.getGavelFram
            },
            getRight(){
                return this.$store.getters.getRight
            },
            getGavelBack(){
                return this.$store.getters.getGavelBack
            },
            getLeft(){
                return this.$store.getters.getLeft
            },
            getLock(){
                return this.$store.getters.getLock
            },
        }

    }
</script>
