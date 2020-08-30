<template>
  <div class="container">
    <div 
    class="month-list"
    v-for="(item,index) of monthData"
    :key="index">
      <div class="header">
        <h1 class="text name">{{item.name}}</h1>
        <h2 class="text time">{{item.festival}}</h2>
      </div>
      <div class="footer">
        <p class="block desc">假期描述：{{item.name}}</p>
        <p class="block advice">拼假建议：{{item.rest}}</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

import getDate from '../services'
import { getNowDate } from '@/libs/utils'

export default {
  name: 'MonthPage',
  components: {
  },
  setup() {
    const store = useStore()
    const state = store.state

    onMounted(() => {
      if(state.monthData == 0) {
        getDate(store, 'month', '2020-1')
      }
    })

    return {
      monthData: computed(() => state.monthData)
    }
  }
}
</script>

<style lang="scss" scoped>
  .month-list {
    margin: .15rem .1rem 0 .1rem;
    overflow: hidden;
    border-radius: .15rem;
    box-sizing: border-box;
    border: 1px solid #ddd;
    height: 3rem;
    position: relative;
    box-shadow: 1px 1px 5px #999;

    .header {
      background: url('~@/assets/img/2.jpg') no-repeat center/cover;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      height: 70%;

      .text {
        text-align: center;
        display: flex;
        justify-content: center;

        &.name {
          color: red;
          font-size: .5rem;
          margin: .4rem 0 .15rem 0;
          font-weight: 700;
        }

        &.time {
          color: #fff;
          font-size: .25rem;
        }
      }
    }
    .footer {
      height: 30%;
      position: absolute;
      left: 0;
      bottom: 0;

      .block {
        margin-top: .1rem;
        padding-left: .05rem;
        &.desc {
          font-size: .16rem;
        }
        &.advice {
          font-size: .14rem;
          line-height: .2rem;
        }
      }
    }
  }
</style>
