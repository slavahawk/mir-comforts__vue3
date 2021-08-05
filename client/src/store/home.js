import $axios from "../http";

export default {
    getters:{
        MAIN(state){
            return state.main_page
        }
    },
    state: {
        main_page: {}
    },
    mutations: {
        UPDATE__STATE__MAIN(state, data){
            state.main_page = data
        }
    },
    actions: {
        GET__DATA__MAIN({commit}){
            return $axios.get('/').then(response => commit('UPDATE__STATE__MAIN', response.data))
        }
    }
}
