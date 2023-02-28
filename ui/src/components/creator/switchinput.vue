<template>
  <div class="w-full bg-black rounded-lg p-2">
    <div class="w-full p-4 text-white text-center">{{ title }}</div>
    <div class="flex w-full h-20 p-2 rounded-lg justify-center items-center">
      <div class="relative flex justify-center w-full">
        <div class="text-white w-1/2 text-center bg-gray-800 p-2 rounded-l-lg">{{ firstOption }}</div>
        <div class="text-white w-1/2 text-center bg-gray-800 p-2 rounded-r-lg">{{ secondOption }}</div>
        <div class="flex justify-center items-center text-white absolute w-1/2 h-full left-0 bg-black cursor-pointer outline outline-white outline-1" :class="{ 'enabled': enabled, 'disabled': !enabled }" @click="EmitInput">{{ enabled ? secondOption : firstOption }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: { type: String, required: true, default: "Hello World!" },
      firstOption: { type: String, required: true, default: "First" },
      secondOption: { type: String, required: true, default: "Second" }
    },
    data() {
      return {
        enabled: false
      }
    },
    methods: {
      EmitInput() {
        this.enabled = !this.enabled

        if (this.enabled) {
          this.$emit("update:input", this.secondOption);
        } else {
          this.$emit("update:input", this.firstOption);
        }
      }
    },
    mounted() {
      this.value = this.firstOption
    }
  }
</script>

<style scoped>
  .enabled {
    animation-name: switchOn;
    animation-duration: 0.85s;
    animation-direction: normal;
    animation-fill-mode: forwards;
  }

  .disabled {
    animation-name: switchOff;
    animation-duration: 0.85s;
    animation-direction: normal;
    animation-fill-mode: forwards;
  }

  @keyframes switchOn {
    from {
      left: 0%;
      border-top-right-radius: 0rem;
      border-bottom-right-radius: 0rem;
      border-top-left-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
    }
    to {
      left: calc(100% - 50%);
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
      border-top-left-radius: 0rem;
      border-bottom-left-radius: 0rem;
    }
  }

  @keyframes switchOff {
    from {
      left: calc(100% - 50%);
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
      border-top-left-radius: 0rem;
      border-bottom-left-radius: 0rem;
    }
    to {
      left: 0%;
      border-top-right-radius: 0rem;
      border-bottom-right-radius: 0rem;
      border-top-left-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
    }
  }
</style>