import { FLATS_LIST } from "@/constants";

const state = () => ({
  data: FLATS_LIST,
});

const mutations = {
  // TODO: Преминовать в toggleFavourite
  toggleFavourite(state, payload) {
    state.data = state.data.map((el) => {
      if (el.id === payload) {
        el.favorite = !el.favorite;
      }
      return el;
    });
  },
};

export default {
  namespaced: true,
  state,
  // actions,
  mutations,
  // getters
};
