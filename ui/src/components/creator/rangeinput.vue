<template>
  <div class="w-full bg-black rounded-lg p-2">
    <div class="w-full p-4 text-white text-center">{{ title }}</div>
    <div class="flex w-full h-20 p-2 rounded-lg justify-center items-center">
      <input class="h-3/4 w-full rounded-lg text-center focus:outline-none bg-gray-800 text-white focus:outline-white focus:outline-1" type="range" :min="min" :max="max" @input="EmitInput">
    </div>
  </div>
</template>

<script>
  import { toNumber } from '@vue/shared';

  export default {
    props: {
      title: { type: String, required: true, default: "Hello World!" },
      min: { type: Number, required: true, default: 0 },
      max: { type: Number, required: true, default: 1 }
    },
    methods: {
      EmitInput(e) {
        this.$emit("update:input", toNumber(e.target.value));
      }
    },
    mounted() {
      this.$emit("update:input", this.min);
    }
  }
</script>

<style scoped>
  input[type="range"] {
    appearance: none;
    -webkit-appearance: none;
    padding: 0.5rem;
  }

  input[type="range"]::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background-color: black;
    border-radius: 0.5rem;
  }

  input[type="range"]::-webkit-slider-thumb:hover {
    outline-style: solid;
    outline-color: white;
    outline-width: 1px;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 0.5rem;
  }
</style>