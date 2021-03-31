<template>
    <ul class="ml-3 lg:ml-4 font-semibold " >
        <li  class="text-white inline-block md:block  mr-4">
            <div class="inline-block">•</div>
            <div class="ml-4 inline-block " >
                <router-link to="/">
                    HÖJD
                </router-link>
            </div>
            <div class="border-l border-solid h-7 mt-2 mb-2 ml-1 border-white border-opacity-20 hidden lg:block"></div>
        </li>
        <li  class="text-white text-opacity-20 inline-block md:block mr-4">
            <div class="inline-block">•</div>
            <div class="ml-4 inline-block ">
                <router-link to="/bottom">
                    BOTTEN
                </router-link>
            </div>
            <div class="border-l border-solid h-7 mt-2 mb-2 ml-1  border-white border-opacity-20 hidden
            lg:block"></div></li>
        <li  class=" text-white text-opacity-20 inline-block md:block mr-4" >
            <div class="inline-block">•</div>
            <div class="ml-4 inline-block ">
                <router-link to="/gavel-fram">
                    GAVEL FRAM
                </router-link>
            </div>
            <div class="border-l border-solid h-7 mt-2 mb-2 ml-1  border-white border-opacity-20 hidden lg:block"></div>
        </li>
        <li  class="  text-white text-opacity-20 inline-block md:block mr-4">
            <div class="inline-block">•</div>
            <div class="ml-4 inline-block ">
                <router-link to="/right">
                    HÖGERSIDA
                </router-link>
            </div>
            <div class="border-l border-solid h-7 mt-2 mb-2 ml-1  border-white border-opacity-20 hidden lg:block"></div>
        </li>
        <li  class="  text-white text-opacity-20 inline-block md:block  mr-4">
            <div class="inline-block">•</div>
            <div class="ml-4 inline-block ">
                <router-link to="/gavel-bak">
                    GAVEL BAK
                </router-link>
            </div>
            <div class="border-l border-solid h-7 mt-2 mb-2 ml-1 border-white border-opacity-20 hidden lg:block"></div>
        </li>
        <li  class=" text-white text-opacity-20 inline-block md:block mr-4" >
            <div class="inline-block">•</div>
            <div class="ml-4 inline-block ">
                <router-link to="/left">
                    VÄNSTERSIDA
                </router-link>
            </div>
            <div class="border-l border-solid h-7 mt-2 mb-2 ml-1  border-white border-opacity-20 hidden lg:block"></div>
        </li>
        <li  class="  text-white text-opacity-20 inline-block md:block  mr-4">
            <div class="inline-block">•</div>
            <div class="ml-4 inline-block ">
                <router-link to="/lock">
                    LOCK
                </router-link>
            </div>
            <div class="border-l border-solid h-7 mt-2 mb-2 ml-1  border-white border-opacity-20 hidden lg:block"></div>
        </li>
        <li  class="  text-white text-opacity-20 inline-block md:block mr-4">
            <div class="inline-block">•</div>
            <div class="ml-4 inline-block ">
                <router-link to="/shelves">
                    HYLLOR
                </router-link>
            </div>

        </li>
    </ul>
</template>

<script>
    export default {
        name: "NavItems"
    }
</script>

<style scoped>

</style>