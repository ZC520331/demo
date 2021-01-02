<template>
  <div class="tree-view" v-if="false">
    <div class="tree-view-header">
      <span class="header-type header-or">OR</span>
      <span class="header-type header-dr">DR</span>
      <span class="header-type header-ds">DS</span>
    </div>
    <div class="tree-view-content">
      <div v-for="(item, index) in treeData" :key="index"  class="li-container">
        <demand-type :item="item" style="width: 30%"></demand-type>
        <div class="expand-con">
          <span class="expand" @click="drExpandClick(index)" v-if="item.expand === false && item.children.length > 0">
            <i class="el-icon-circle-plus-outline"></i>
          </span>
          <span class="expand" @click="drExpandClick(index)" v-if="item.expand === true && item.children.length > 0">
            <i class="el-icon-remove-outline"></i>
          </span>
        </div>
        <div style="width: calc(70% - 60px); margin-left: 50px" v-if="item.expand">
          <div v-for="(drItem, drIndex) in item.children" :key="drIndex" class="dr-container">
            <demand-type :item="drItem" style="width: 46%"></demand-type>
            <div class="expand-con" style="left: 46%">
              <span class="expand" @click="dsExpandClick(index, drIndex)" v-if="drItem.expand === false && drItem.children.length > 0">
                <i class="el-icon-circle-plus-outline"></i>
              </span>
              <span class="expand" @click="dsExpandClick(index, drIndex)" v-if="drItem.expand === true && drItem.children.length > 0">
                <i class="el-icon-remove-outline"></i>
              </span>
           </div>
            <div style="width: 46%; margin-left: 50px" v-if="drItem.expand" >
              <div v-for="(dsItem, dsIndex) in drItem.children" :key="dsIndex" class="ds-container">
                <demand-type :item="dsItem"></demand-type>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import DemandType from "@/components/tree/demandType";
export default {
  name: 'HelloWorld',
  components: {DemandType},
  props: {
    msg: String
  },
  data() {
    return {
      treeData: [
        {
          children: [
            {
              children: [
                {
                  name: 'DS'
                },
                {
                  name: 'DS'
                }
              ],
              name: 'DR',
              expand: true
            },
            {
              children: [
                {
                  name: 'DS'
                }
              ],
              name: 'DR',
              expand: true
            },
            {
              children: [
                {
                  name: 'DS'
                }
              ],
              name: 'DR',
              expand: true
            },
          ],
          name: 'OR',
          expand: true
        },
        {
          children: [],
          name: 'OR',
          expand: true
        },
        {
          children: [
            {
              children: [
                {
                  name: 'DS'
                },
                {
                  name: 'DS'
                }
              ],
              name: 'DR',
              expand: true
            },
            {
              children: [
                {
                  name: 'DS'
                }
              ],
              name: 'DR',
              expand: true
            },
            {
              children: [],
              name: 'DR',
              expand: true
            },
          ],
          name: 'OR',
          expand: true
        },
      ]
    }
  },
  mounted() {
  },
  methods: {
    drExpandClick(index) {
      this.treeData[index].expand = !this.treeData[index].expand
    },
    dsExpandClick(parentIndex, index) {
      this.treeData[parentIndex].children[index].expand = !this.treeData[parentIndex].children[index].expand
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .tree-view
    margin: 0 auto
    width: 1000px
    border: 1px solid pink
    padding 10px
    .tree-view-header
      .header-type
        display: inline-block
        width: calc((100% - 110px)/3)
        border: 1px solid pink
        border-radius: 5px
      .header-dr
        margin: 0 50px
    .tree-view-content
      .expand-con
        position: absolute
        width: 50px
        height: 19px
        left: calc(30% + 2px)
        z-index: 100
        .expand
          display: inline-block
          margin-left: 15px
          height: 19px;
          background-color: white
          i
            height: 18px
            width: 18px
            font-size: 20px
            color: #ddd
        .expand:before
          content: ''
          position: absolute
          top: 51%
          background: #ddd
          width: 16px
          left: 0
          height: 1px
      .li-container
        position: relative
        display: flex
        align-items: center
        .dr-container
          display: flex
          align-items: center
          position: relative
          .ds-container
            position: relative
          .ds-container:not(:last-child):before
            content: ''
            position: absolute
            top: 50%
            width: 25px
            left: -25px
            border-top: 1px solid #ddd
            border-left: 1px solid #ddd
            height: calc(100% + 10px)
          .ds-container:last-child:before
            content: ''
            position: absolute
            top: 50%
            width: 25px
            left: -25px
            border-top: 1px solid #ddd
            height: 100%
        .dr-container:not(:last-child):before
          content: ''
          position: absolute
          top: 50%
          width: 25px
          left: -25px
          border-top: 1px solid #ddd
          border-left: 1px solid #ddd
          height: 100%
        .dr-container:last-child:before
          content: ''
          position: absolute
          top: 50%
          width: 25px
          left: -25px
          border-top: 1px solid #ddd
          height: 100%
</style>
