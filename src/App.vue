<template>
  <div id="app">
    <Header>{{headerTitle}}</Header>
    <Search :placeholder="placeholder" :maxlength="maxlength"></Search>
    <router-view/>
    <Fail></Fail>
    <Tab></Tab>
  </div>
</template>
<script>
  import Header from '@/components/header'
  import Tab from '@/components/tab'
  import Search from '@/components/search'
  import Fail from '@/components/fail'

  import { computed,watch } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'

  

  export default {
    components: {
      Header,
      Tab,
      Search,
      Fail
    },
    setup() {
      const store = useStore()
      const state = store.state
      const router = useRouter()
      //每次刷新页面重新回到首页
      router.push('/')

      store.commit('setPlaceholder','day')
      //watch传入两个回调函数，第一个返回监听的属性，第二个参数是第一个改变之后的值
      watch(()=>{
        return router.currentRoute.value.name
      },(value)=>{
        store.commit('changeTitle',value)
        store.commit('setPlaceholder',value)
        store.commit('setMaxlength',value)
      })

      return computed(()=>state).value
    }
  }
</script>

<style lang="scss">
  
</style>
