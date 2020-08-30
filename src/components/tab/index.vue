<!--  -->
<template>
  <div id="tab">
    <div 
    class="tab-item"
    v-for="(item,index) in tabData"
    :key="index">
      <tab-item 
      :path="item.path"
      :iconText="item.iconText">
        {{item.tabText}}
      </tab-item>
    </div>
  </div>
</template>

<script>
import TabItem from './TabItem'
import { tabData } from '@/data/tabData'

import { reactive } from 'vue'
export default {
    name: 'Tab',
    setup() {
      const state = reactive({
        tabData
      })

      return {
        ...state
      }
    },
    components: {
      TabItem
    },
}
</script>
<style lang="scss"  scoped>
  #tab {
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    height: .44rem;
    width: 100%;
    z-index: 1;
    background-color: #fff;
    border-top: 1px solid #999;
    .tab-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 33.33%;
      height: 100%;
    }
  }
</style>