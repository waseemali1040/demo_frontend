import ApiService from "@/services/api.service";

export const SET_COUNT = "set_count";
export const GET_USER_LIST = "get_user_list";

const state = {
    count: 5
};
const mutations = {
    increment(state) {
        // `state` is the local module state
        state.count++
    }
};
const actions = {
    increment(context) {
        context.commit('increment')
    },
    async [GET_USER_LIST]() {
       await ApiService.get('api/userdetails').then(data=>{
         return data;
      });

    }
};

export default {

    state, mutations, actions
}

