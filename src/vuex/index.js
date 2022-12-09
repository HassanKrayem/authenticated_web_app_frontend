import Vuex from 'vuex'
import ajaxManager from 'devegram-vuex-ajax-manager'

export default (Vue) => {
  Vue.use(Vuex)
  return new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
  })
}
