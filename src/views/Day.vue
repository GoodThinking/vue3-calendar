<template>
  <div class="container">
    <Card :data="dayData" ></Card>
    <List :data="dayData"></List>
  </div>
</template>

<script>

import Card from '@/components/dayComp/Card.vue'
import List from '@/components/dayComp/list'
import getDate from '../services'
import { onMounted,computed } from 'vue'
import { useStore } from 'vuex'

import { getNowDate } from '@/libs/utils'

export default {
  name: 'DayPage',
  components: {
    Card,
    List
  },
  setup() {
    const store = useStore()
    const state = store.state

    onMounted(()=>{
      if(Object.keys(state.dayData).length == 0){
        getDate(store,'day', getNowDate('day'))
      }
    })
    return {
      dayData: computed(()=>state.dayData)
    }
  }
}
</script>
<style lang="scss" scoped>
  
</style>