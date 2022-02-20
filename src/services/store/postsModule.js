export const SET_COUNT = "set_post_count";

const state = {
    count: 5
};
const mutations = {
    increment1(state) {
        // `state` is the local module state
        state.count++
    }
};
const actions = {
    [SET_COUNT](context) {
        context.commit('increment1')
    }
};

export default {
    state, mutations, actions
}

