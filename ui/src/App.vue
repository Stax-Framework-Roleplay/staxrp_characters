<template>
  <div v-show="show">
    <router-view v-slot="{ Component }">
      <transition name="scale-slide">
        <Component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
  import { useRouterStore } from "@/stores/framework/router"

  export default {
    computed: {
      show() {
        return this.routerStore.GetShowState
      }
    },
    setup() {
      const routerStore = useRouterStore();
      return { routerStore }
    }
  }
</script>

<style scoped>
  .scale-slide-enter-active,
  .scale-slide-leave-active {
    position: absolute;
    transition: all 0.85s ease;
  }
  .scale-slide-enter-from {
    opacity: 0;
    left: -100%;
  }
  .scale-slide-enter-to {
    opacity: 1;
    left: 0%;
  }
  .scale-slide-leave-from {
    opacity: 1;
    transform: scale(1);
  }
  .scale-slide-leave-to {
    opacity: 0;
    transform: scale(0.8);
  }
</style>