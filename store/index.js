export const state = () => ({
  portfilioItems: [],
});

export const mutations = {
    setPortfolioItems(state, payload) {
        state.portfolioItems = payload;
    }
};

export const actions = {
    async getPortfolioItems({ commit }) {
        const res = await this.$content("portfolio").fetch();
        commit('setPortfolioItems', res);
    }
};
