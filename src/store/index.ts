import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { INSTITUTIONS } from "./gettersTypes";
import { InstitutionsState, institutions } from "./modules/institutions";
import { StudentsState, students } from "./modules/students";

export interface State {
  institutions: InstitutionsState;
  students: StudentsState;
}

const store = createStore<State>({
  state: {
    institutions: {
      institutions: [],
    },
    students: {
      students: [],
    },
  },
  getters: {
    [INSTITUTIONS](state) {
      state.institutions;
    },
  },
  mutations: {},
  actions: {},
  modules: {
    institutions,
    students,
  },
});

export const key: InjectionKey<Store<State>> = Symbol();

export function useStore(): Store<State> {
  return vuexUseStore(key);
}

export default store;
