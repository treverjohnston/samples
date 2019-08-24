import Vue from 'vue'
import Vuex from 'vuex'
import VueAnime from 'vue-animejs';
// import example from './module-example'
import samples from './samples'

Vue.use(Vuex)
Vue.use(VueAnime)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      samples
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
