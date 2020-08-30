<!--  -->
<template>
  <div v-if="isShow" class="fail-wrap">
    <div class="box">
      <img src="../../assets/img/quesheng.png" alt=""/>
      <p>未找到相应的日期，请检查您的输入是否有误</p>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Fail',
    data() {
      return {
        isShow: false
      }
    },
    computed: {
      error_code() {
        return this.$store.state.error_code
      }
    },
    watch: {
      error_code(val) {
        val == 0? this.isShow = false : this.isShow = true
      }
    },
    mounted() {
      
    }

    

}
</script>
<style lang="scss"  scoped>
  .fail-wrap {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    top: .82rem;
    bottom: 0;
    left: 0;
    background-color:#fff;
    z-index: 999;

    .box {
      width: 2rem;
      border-radius: .1rem;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      
      img {
        height: 1.5rem;
      }
      p {
        font-size: .14rem;
        color: lightcoral;
        line-height: .2rem;
      }
    }
  }
</style>