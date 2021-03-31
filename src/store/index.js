import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    heights: [
      {
        id: 1,
        name: "1200",
      },
      {
        id: 2,
        name: "1250"
      },
      {
        id: 3,
        name: "1300"
      },
      {
        id: 4,
        name: "1350"
      },
      {
        id: 5,
        name: "1400"
      },
      {
        id: 6,
        name: "1450"
      },
      {
        id: 7,
        name: "1500"
      },
      {
        id: 8,
        name: "1550"
      },
      {
        id: 9,
        name: "1600"
      },
      {
        id: 10,
        name: "1650"
      },
      {
        id: 11,
        name: "1700"
      },
      {
        id: 12,
        name: "1750"
      },
      {
        id: 13,
        name: "1800"
      },
    ],
    bottoms: [
       {
         id:1,
         articleNumber:1,
        name:"Eur pallet",
         price:100,
       image:require("../assets/images/1250/bottom/article_bottom_eur_pallet.png")
       },
      {
        id:2,
        articleNumber:2,
        name:"Steel",
        price:200,
        image:require("../assets/images/1250/bottom/article_bottom_steel.png")
      },
      {
        id:3,
        articleNumber:3,
        name:"Steel Pallet",
        price:300,
        image:require("../assets/images/1250/bottom/article_bottom_steel_pallet.png")
      },
      {
        id:4,
        articleNumber:4,
        name:"Wood",
        price:400,
        image:require("../assets/images/1250/bottom/article_bottom_wood.png")
      },

    ],
    gavelframs: [
      {
        id:5,
        articleNumber:5,
        name:"Gavel Fram Pinchable",
        price:100,
        image:require("../assets/images/1250/gable-front/article_gable_front_pinchable_height_1250.png")
      },
      {
        id:6,
        articleNumber:6,
        name:"Gavel Fram removable",
        price:200,
        image:require("../assets/images/1250/gable-front/article_gable_front_removable_two_piece_height_1250.png")
      },
      {
        id:7,
        articleNumber:7,
        name:"Gavel Fram Whole Height",
        price:300,
        image:require("../assets/images/1250/gable-front/article_gable_front_removable_whole_height_1250.png")
      }

    ],
    order:{
      bottom:[],
      gavelfram:[],

    }

  },

  getters :{
    getBottom(state) {
      return state.order.bottom
    },
    getGavelFram(state) {
      return state.order.gavelfram
    },

  },

  mutations: {
    addBottom(state, bottom){
      state.order.bottom = bottom;
    },
    addGavelFram(state, gavelfram){
      state.order.gavelfram = gavelfram;
    }
  },
  actions: {
  },
  modules: {
  }
})
