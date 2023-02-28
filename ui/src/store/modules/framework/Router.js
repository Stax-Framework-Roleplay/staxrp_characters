import router from "../../../router/index"

const Router = {
  namespaced: true,
  state: () => ({
    show: true,
    route: "/"
  }),
  getters: {
    GetShowState(state) {
      return state.show;
    },
    GetRoute(state) {
      return state.route;
    }
  },
  mutations: {
    SHOW_UI(state) {
      state.show = true;
    },
    HIDE_UI(state) {
      state.show = false;
    },
    CHANGE_ROUTE(state, payload) {
      if (payload && payload.route) {
        const hasRoute = router.hasRoute(payload.route);

        if (!hasRoute) {
          console.error(`The route ${payload.route} does not exist!`);
          return;
        }

        router.push(payload.route);
        state.route = payload.route;
      } else {
        router.push("/");
        state.route = "/";
      }
    }
  }
}

export default Router;