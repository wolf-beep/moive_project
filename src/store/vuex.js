import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
     state:{
         count:0,
         city:'地球'
     },
     mutations:{
        setCity:function(state,cityName){
            state.city = cityName
        }
     },
     actions:{

     },
     getters:{

     }
})