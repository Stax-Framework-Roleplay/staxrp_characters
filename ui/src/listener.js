import store from "./store/index"
import axios from "axios"

document.onreadystatechange = () => {
  if (!document.readyState === "complete") {
    return;
  }

  window.addEventListener("message", (event) => {
    if (!event.mutation) { return; }

    store.commit(event.mutation, event.payload);
  });

  // store.commit("Router/CHANGE_ROUTE", { route: "creator" });
  axios.post(`http://${GetParentResourceName()}/ready`)
}