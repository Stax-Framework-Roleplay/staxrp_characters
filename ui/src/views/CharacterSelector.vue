<template>
  <div class="w-screen h-screen grid grid-cols-10 grid-rows-5">
    <!-- Characters List -->
    <div class="col-start-2 col-end-4 row-start-2 row-end-5 w-full bg-gray-800 rounded-lg">
      <div class="text-center text-white p-4">Characters</div>
      <div class="grid h-[calc(100%-3rem)] w-full grid-cols-5 grid-rows-5">
        <!-- <div class="w-full p-4" v-for="(index, data) in 6" :key="index">
          <div class="flex w-full text-center justify-center items-center bg-gray-700 border-blue-700 border-2 border-solid rounded-lg text-white h-[calc(100%/3)]">Brian Wrathens {{ data }}</div>
        </div> -->
      </div>
    </div>

    <!-- Selected Character Data -->
    <transition>
      <div class="col-start-8 col-end-10 w-full row-start-2 row-end-5 bg-gray-800">
        CHARACTER DATA
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    components: {}
  }
</script>