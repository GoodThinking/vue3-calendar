<template>
  <div class="container">
    <div 
    class="year-list"
    v-for="(item,index) of yearData"
    :key="index">
      <h1 class="text title">{{item.name}}</h1>
      <h2 class="text time">{{item.startday}}</h2>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

import getData from '../services'
import { getNowDate } from '@/libs/utils'

export default {
  name: 'YearPage',
  components: {
  },
  setup() {
    const store = useStore()
    const state = store.state

    onMounted(()=>{
      if(state.yearData.length == 0) {
        getData(store, 'year', getNowDate('year'))
      }
    })

    return {
      yearData: computed(() => state.yearData)
    }
  }

}
</script>

<style lang="scss" scoped>
  .year-list {
    margin: .15rem .1rem 0 .1rem;
    border: 1px solid #ddd;
    border-radius: .1rem;
    overflow: hidden;
    box-shadow: 1px 1px 3px #999;
    background: url('~@/assets/img/5.jpg') no-repeat center/cover;
    
    .text {
      text-align: center;
      margin-top: .15rem;

      &.title {
        margin-top: .4rem;
        color: red;
        font-size: .4rem;
        font-weight: 700;
      }

      &.time {
        color: #fff;
        font-size: .2rem;
        margin-bottom: .3rem;
      }
    }
  }
</style>