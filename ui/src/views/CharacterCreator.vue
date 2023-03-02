<template>
  <div class="w-screen h-screen grid grid-cols-10 grid-rows-5 select-none">
    <div id="creator_go_back" class="absolute top-2 right-2 bg-red-500 p-4 text-white rounded-lg hover:bg-red-600 transition-colors cursor-pointer" @click="GoBack">Go Back</div>
    <div id="creator_input_container" class="flex flex-col col-start-8 col-end-10 row-start-2 gap-2 row-end-5 w-full p-2 bg-gray-800 rounded-lg overflow-y-auto">
      <TextInput title="First Name" v-model:input="firstname"></TextInput>
      <TextInput title="Last Name" v-model:input="lastname"></TextInput>
      <DateInput title="Birthday" v-model:input="dob"></DateInput>
      <SwitchInput title="Sex" first-option="Male" second-option="Female" v-model:input="gender"></SwitchInput>
    </div>
  </div>
</template>

<script>
  import { useRouterStore } from "@/stores/framework/router"
  
  import TextInput from "@/components/creator/textinput.vue"
  import DateInput from "@/components/creator/dateinput.vue"
  // import RangeInput from "@/components/creator/rangeinput.vue" // Not Used Yet
  import SwitchInput from "@/components/creator/switchinput.vue"

  export default {
    data() {
      return {
        firstname: "",
        lastname: "",
        dob: "",
        gender: "Male"
      }
    },
    methods: {
      GoBack() {
        this.routerStore.ChangeRoute();
      }
    },
    setup() {
      const routerStore = useRouterStore()

      return { routerStore }
    },
    components: { TextInput, DateInput, SwitchInput }
  }
</script>

<style scoped>
  #creator_input_container {
    overflow-y: auto;
  }

  #creator_input_container::-webkit-scrollbar {
    appearance: none;
    -webkit-appearance: none;
  }

  #creator_input_container::-webkit-scrollbar-button {
    background-color: rgb(31 41 55 / var(--tw-bg-opacity));
    border-radius: 0.5rem;
    color: white;
  }

  #creator_input_container::-webkit-scrollbar-corner {
    background-color: blue;
  }

  #creator_input_container::-webkit-scrollbar-thumb {
    background-color: rgb(31 41 55 / var(--tw-bg-opacity));
    outline-style: solid;
    outline-color: white;
    outline-width: 1px;
  }

  #creator_input_container::-webkit-scrollbar-track-piece {
    background-color: black;
  }
</style>