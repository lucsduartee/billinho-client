import IInstitutions from "@/interfaces/IInstitutions";
import Resources from "@/utils/resources";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { FETCH_INSTITUTIONS } from "./actionsTypes";
import httpClient from "@/http";
import { ADD_INSTITUTIONS } from "./mutationsTypes";
import { INSTITUTIONS } from "./gettersTypes";

interface State {
  institutions: Array<IInstitutions>;
}

const store = createStore<State>({
  state: {
    institutions: [],
  },
  getters: {
    [INSTITUTIONS](state) {
      state.institutions;
    },
  },
  mutations: {
    [ADD_INSTITUTIONS](state, institutions: IInstitutions[]) {
      state.institutions = institutions;
    },
  },
  actions: {
    async [FETCH_INSTITUTIONS]({ commit }) {
      const institutions = await httpClient.get(Resources.INSTITUTIONS);
      const { data } = institutions.data;

      commit(ADD_INSTITUTIONS, data);
    },
  },
  modules: {},
});

export const key: InjectionKey<Store<State>> = Symbol();

export function useStore(): Store<State> {
  return vuexUseStore(key);
}

export default store;
