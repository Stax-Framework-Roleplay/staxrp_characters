<template>
  <div class="w-screen h-screen grid grid-cols-10 grid-rows-5">
    <!-- Characters List -->
    <div class="col-start-2 col-end-4 row-start-2 row-end-5 w-full bg-gray-800 rounded-lg">
      <div>
        
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