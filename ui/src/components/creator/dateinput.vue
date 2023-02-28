<template>
  <div class="w-full bg-black rounded-lg p-2">
    <div class="w-full p-4 text-white text-center">{{ title }}</div>
    <div class="flex w-full h-20 p-2 rounded-lg justify-center items-center">
      <input class="h-3/4 w-full rounded-lg text-center focus:outline-none bg-gray-800 text-white focus:outline-white focus:outline-1" type="date" @input="EmitInput">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: { type: String, required: true, default: "Hello World!" }
    },
    methods: {
      EmitInput(e) {
        this.$emit("update:input", e.target.value);
      }
    }
  }
</script>

<style scoped>
  input {
    color-scheme: dark;
  }
</style>