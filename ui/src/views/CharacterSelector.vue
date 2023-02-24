<template>
  <div class="w-screen h-screen grid grid-cols-10 grid-rows-5">
    <!-- Characters List -->
    <div class="flex flex-col justify-between col-start-2 col-end-4 row-start-2 gap-2 row-end-5 w-full p-2 bg-gray-800 rounded-lg overflow-y-auto">
      <div class="flex justify-center items-center text-xs lg:text-lg w-full h-10 md:h-12 lg:h-16 xl:h-24 bg-black text-white rounded-lg p-2 border-[1px] border-solid border-transparent hover:border-white select-none transition-all" v-for="(character, index) in 5" :key="index" @click="ViewCharacter(index)">
        <div v-if="CurrentCharacters[index]">
          {{ CurrentCharacters[index].firstname }} {{  CurrentCharacters[index].lastname }}
        </div>
        <div v-else>
          Open Slot
        </div>
      </div>
    </div>

    <!-- Selected Character Data -->
    <transition name="bounce">
      <div class="col-start-8 col-end-10 w-full row-start-2 row-end-5 bg-gray-800 rounded-lg p-4 space-y-4 select-none overflow-y-auto scrollbar" v-if="showInfo">
        <!-- NAME -->
        <div class="flex w-full h-10 justify-center items-center text-white bg-black rounded-lg">
          NAME
        </div>

        <div class="flex w-full h-10 justify-center items-center text-white">
          {{ CurrentCharacters[viewedCharacter].firstname }} {{ CurrentCharacters[viewedCharacter].lastname }}
        </div>

        <!-- AGE -->
        <div class="flex w-full h-10 justify-center items-center text-white bg-black rounded-lg">
          AGE
        </div>

        <div class="flex w-full h-10 justify-center items-center text-white">
          {{ CurrentCharacters[viewedCharacter].age }}
        </div>

        <!-- SEX -->
        <div class="flex w-full h-10 justify-center items-center text-white bg-black rounded-lg">
          SEX
        </div>

        <div class="flex w-full h-10 justify-center items-center text-white">
          {{ CurrentCharacters[viewedCharacter].gender }}
        </div>

        <!-- BANK -->
        <div class="flex w-full h-10 justify-center items-center text-white bg-black rounded-lg">
          BANK
        </div>

        <div class="flex w-full h-10 justify-center items-center text-white">
          ${{ CurrentCharacters[viewedCharacter].bank }}
        </div>

        <!-- Jobs -->
        <div class="flex w-full h-10 justify-center items-center text-white bg-black rounded-lg">
          Jobs
        </div>

        <div class="flex w-full h-10 justify-center items-center text-white" v-for="(job, jobIndex) in CurrentCharacters[viewedCharacter].jobs" :key="jobIndex">
          {{ job.name }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import store from "@/store/index"

  export default {
    data() {
      return {
        switching: false,
        showInfo: true,
        viewedCharacter: 0
      }
    },
    methods: {
      ViewCharacter(characterIndex) {
        if (!this.CurrentCharacters[characterIndex]) {
          store.commit("Router/CHANGE_ROUTE", { route: "creator" })
          return;
        }
        if (this.switching) return;
        this.switching = true;

        if (this.showInfo) {
          this.showInfo = false;
          setTimeout(() => {
            this.viewedCharacter = characterIndex
            this.showInfo = true;
            this.switching = false;
          }, 1000);
        } else {
          this.viewedCharacter = characterIndex;
          this.showInfo = true;
          setTimeout(() => {
            this.switching = false;
          }, 1000);
        }
      }
    },
    components: {},
    computed: {
      CurrentCharacters() {
        return store.getters["CharacterSelector/getCharacters"]
      }
    }
  }
</script>

<style scoped>
  .bounce-enter-active {
    animation: bounce-in 0.5s;
  }
  .bounce-leave-active {
    animation: bounce-in 0.5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.25);
    }
    100% {
      transform: scale(1);
    }
  }

  .scrollbar {
    appearance: none;
  }

  .scrollbar::-webkit-scrollbar {
    width: 0px;
  }
</style>