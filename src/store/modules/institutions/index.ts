import httpClient from "@/http";
import IInstitutions from "@/interfaces/IInstitutions";
import { State } from "@/store";
import { FETCH_INSTITUTIONS } from "@/store/actionsTypes";
import { ADD_INSTITUTIONS } from "@/store/mutationsTypes";
import Resources from "@/utils/resources";
import { Module } from "vuex";

export interface InstitutionsState {
  institutions: Array<IInstitutions>;
}

export const institutions: Module<InstitutionsState, State> = {
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
};
