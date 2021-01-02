<template>
  <!-- 大纲视图组件 -->
  <div class="outline-view">
    <div v-for="(orItem, orIndex) in treeData" :key="orIndex">
      <div class="outline-item" >
        <div class="outline-header">
          <span class="outline-header-left">
            <i class="el-icon-arrow-down" @click="handleOrExpand(orIndex)"></i>
            <span>{{orIndex+1}}{{orItem.title}}</span>
          </span>
          <span class="outline-header-right">
            <span>新建</span>
            <span>删除</span>
          </span>
        </div>
        <div class="outline-content" v-if="orItem.expand">
          {{ orItem.title }}
        </div>
      </div>
      <div v-for="(drItem, drIndex) in orItem.children" :key="drIndex">
        <div class="outline-item" >
          <div class="outline-header">
            <span class="outline-header-left">
              <i class="el-icon-arrow-down" @click="handleDrExpand(orIndex,drIndex)"></i>
              <span>{{orIndex+1}}.{{drIndex+1}}{{drItem.title}}</span>
            </span>
            <span class="outline-header-right">
              <span>新建</span>
              <span>删除</span>
            </span>
          </div>
          <div class="outline-content" v-if="drItem.expand"></div>
        </div>
        <div class="outline-item" v-for="(dsItem, dsIndex) in drItem.children" :key="dsIndex">
          <div class="outline-header">
            <span class="outline-header-left">
              <i class="el-icon-arrow-down" @click="handleDsExpand(orIndex,drIndex, dsIndex)"></i>
              <span>{{orIndex+1}}.{{drIndex+1}}.{{dsIndex+1}}{{dsItem.title}}</span>
            </span>
            <span class="outline-header-right">
              <span>新建</span>
              <span>删除</span>
            </span>
          </div>
          <div class="outline-content" v-if="dsItem.expand"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "outlineView",
  data() {
    return {
      treeData: [
        {
          children: [
            {
              children: [
                {
                  title: 'Ds-1',
                  expand: true,
                },
                {
                  title: 'Ds-2',
                  expand: true,
                }
              ],
              title: 'DR-1',
              expand: true,
            },
            {
              children: [],
              title: 'DR-2',
              expand: true,
            }
          ],
          title: 'OR-1',
          expand: true,
        },
        {
          children: [
            {
              children: [],
              title: 'DR-1',
              expand: true,
            },
            {
              children: [],
              title: 'DR-2',
              expand: true,
            }
          ],
          title: 'OR-2',
          expand: true,
        }
      ],
      expand: true
    }
  },
  methods: {
    handleOrExpand (index) {
      console.log('----')
      this.treeData[index].expand = !this.treeData[index].expand
    },
    handleDrExpand (orIndex, drIndex) {
      this.treeData[orIndex].children[drIndex].expand = !this.treeData[orIndex].children[drIndex].expand
    },
    handleDsExpand (orIndex, drIndex, dsIndex) {
      this.treeData[orIndex].children[drIndex].children[dsIndex].expand = !this.treeData[orIndex].children[drIndex].children[dsIndex].expand
    }
  }
}
</script>

<style scoped lang="stylus">
  .outline-view
    .outline-item
      margin-bottom: 10px
      .outline-header
        display: flex
        justify-content: space-between
        padding: 10px
        background-color: #ddd
        .outline-header-right
          cursor: pointer
          display: none
          span
            margin: 0 10px
        &:hover
          .outline-header-right
            display: block
     .outline-content
       height: 100px
       border: 1px solid #ddd
</style>