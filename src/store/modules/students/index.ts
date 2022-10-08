import httpClient from "@/http";
import IStudents from "@/interfaces/IStudents";
import { State } from "@/store";
import { FETCH_STUDENTS } from "@/store/actionsTypes";
import { ADD_STUDENTS } from "@/store/mutationsTypes";
import Resources from "@/utils/resources";
import { Module } from "vuex";

export interface StudentsState {
  students: Array<IStudents>;
}

export const students: Module<StudentsState, State> = {
  mutations: {
    [ADD_STUDENTS](state, students: IStudents[]) {
      state.students = students;
    },
  },
  actions: {
    async [FETCH_STUDENTS]({ commit }) {
      const students = await httpClient.get(Resources.STUDENTS);
      const { data } = students.data;

      commit(ADD_STUDENTS, data);
    },
  },
};
