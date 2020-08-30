<!--  -->
<template>
  <router-link :to="path" class="tab-item">
    <i class="icon">{{iconText}}</i>
    <p class="text">
      <slot>{{tabText}}</slot>
    </p>
  </router-link>
</template>

<script>

export default {
    name: 'TabItem',
    props: {
      path: String,
      iconText: String
    }
}
</script>
<style lang="scss"  scoped>
  .tab-item {
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: .25rem;
      height: .25rem;
      border-radius: 50%;
      background-color: #ddd;
      color: #999;
      font-size: .12rem;
      transition: all .5s;
    }
    .text {
      margin-top: .02rem;
      font-size: .12rem;
      color: #999;
      text-align: center;
      transition: color .5s;
    }
    &.router-link-active {
      .icon {
        background-color: #ed4040;
        color: #fff;
      }
      .text {
        color: #ed4040;
      }
    }
  }

</style>