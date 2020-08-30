<!--  -->
<template>
  <div class="list">
    <List-item 
    title="当前年月"
    :content="data['year-month']"  />
    <List-item 
    title="今年属相"
    :content="data.animalsYear"  />
    <List-item 
    title="农历年份"
    :content="data.lunarYear"  />
    <List-item 
    title="适宜事件"
    :content="data.suit"  />
    <List-item 
    title="当前年月"
    :content="data.avoid"  />
  </div>
</template>

<script>
import ListItem from './item'
export default {
    name: 'List',
    components: {
      ListItem
    },
    props: {
      data: Object
    },

}
</script>
<style lang="scss"  scoped>
  .list {
    padding: .15rem;
    box-sizing: border-box;
  }
</style>