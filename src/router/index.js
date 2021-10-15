import Vue from 'vue'
import Router from 'vue-router'

import index from '@/views/index'
import Politics from '@/views/National/Politics'
import Diplomacy from '@/views/National/Diplomacy'
import Defense from '@/views/National/Defense'
import LowAndCrime from '@/views/National/LowAndCrime'
import HealthAndWelfare from '@/views/National/HealthAndWelfare'

import Policies from '@/views/Finantial/Policies'
import EconomyMarkets from '@/views/Finantial/EconomyMarkets'
import Banks from '@/views/Finantial/Banks'
import Non_banks from '@/views/Finantial/Non_banks'
import Economic_Essay_Contest from '@/views/Finantial/Economic_Essay_Contest'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name:'index',
      component:index   
    },
    {
      path: '/national',
      name: 'national',
      component: index,
      children: [
        { path: "politics", component: Politics },
        { path: "diplomacy", component:  Diplomacy },
        { path: "defense", component:  Defense },
        { path: "lowAndCrime", component:  LowAndCrime },
        { path: "healthAndWelfare", component:  HealthAndWelfare },
      ],
    },
    {
      path: '/finantial',
      name: 'finantial',
      component: index,
      children: [
        { path: "policies", component: Policies },
        { path: "economyMarkets", component:  EconomyMarkets },
        { path: "banks", component:  Banks },
        { path: "non_banks", component:  Non_banks },
        { path: "economic_Essay_Contest", component:  Economic_Essay_Contest },
      ],
    }
  ]
})
