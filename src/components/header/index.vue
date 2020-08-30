<!--  -->
<template>
  <div id="header">
    <h1 class="title">
      <slot></slot>
    </h1>
  </div>
</template>

<script>

export default {
//import引入的组件需要注入到对象中才能使用
    name: 'Header',
    components: {
      
    },
    
}
</script>
<style lang="scss"  scoped>
  #header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: .44rem;
    z-index: 1;
    background-color: violet;
    text-align: center;
    line-height: .44rem;
    font-size: .16rem;
    color: #fff;
  }
</style>