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
        //order by position
        res.sort((a, b) => (a.position > b.position ? b.position : -1));
        commit('setPortfolioItems', res);
    }
};
