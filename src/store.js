// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    userInfo: {
      id: null, // Sørg for, at id er defineret som null initialt
      name: '',
      // andre brugeroplysninger
    },
    selectedItems: [],
    totalPoints: 0,
  },
  mutations: {
    setUserInfo(state, info) {
      state.userInfo = { ...state.userInfo, ...info };
    },
    updateSelectedItems(state, items) {
      state.selectedItems = items;
    },
    updateTotalPoints(state) {
      state.totalPoints = state.selectedItems.reduce((total, item) => total + item.score, 0);
    },
  },
  actions: {
    setUserInfo({ commit }, info) {
      commit('setUserInfo', info);
    },
    updateSelectedItems({ commit }, items) {
      commit('updateSelectedItems', items);
      commit('updateTotalPoints');
    },
  },
  getters: {
    getUserInfo: (state) => state.userInfo,
    getSelectedItems: (state) => state.selectedItems,
    getTotalPoints: (state) => state.totalPoints,
  },
});