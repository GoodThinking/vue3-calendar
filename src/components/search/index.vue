<!--  -->
<template>
  <div class="search">
    <input 
    type="text"
    :placeholder="placeholder"
    :maxlength="maxlength" 
    v-model="inputValue"
    @input="searchData"/>
  </div>
</template>
<script>
import { ref } from 'vue'
import { debounce } from '@/libs/utils'
import { useStore } from 'vuex'
import findData from '@/services/findData'
export default {
    name: 'Search',
    props: {
      placeholder: String,
      maxlength: Number
    },
    setup() {
      const store = useStore()

      const inputValue = ref('')
      const searchData = debounce((e) => {
        console.log(e.target.value)
        findData(store,e.target.value)
      },500)

      return {
        inputValue,
        searchData
      }
    },
    components: {}

}
</script>

<style lang="scss" scoped>
  .search {
    position: fixed;
    top: .44rem;
    left: 0;
    width: 100%;
    height: .38rem;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    z-index: 1;
    padding: .03rem .1rem;
    box-sizing: border-box;
    input {
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      text-indent: .1rem;
      border-radius: .05rem;
      font-size: .14rem;
      caret-color:orange;
      &:focus {
        border-color: antiquewhite;
        box-shadow: 0 0 .02rem #ed4848;
        transition: all .2s;
      }
    }
    input::-webkit-input-placeholder{
      color:#585c89;
    }
  }

</style>