<template>
  <el-container>
    <el-aside width="200px"
      >Aside
      <div v-for="item_img in imageList" :key="item_img.id">
        <img class="demo-image" :src="item_img.src" />
      </div>
    </el-aside>
    <el-container>
      <el-header>Header </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
    <el-aside width="200px">Aside</el-aside>
  </el-container>
</template>

<script>
const cards = [
  '春花',
  '夏花',
  '秋花',
  '冬花',
  '梅花',
  '兰花',
  '竹花',
  '菊花',
  '一条',
  '二条',
  '三条',
  '四条',
  '五条',
  '六条',
  '七条',
  '八条',
  '九条',
  '一筒',
  '二筒',
  '三筒',
  '四筒',
  '五筒',
  '六筒',
  '七筒',
  '八筒',
  '九筒',
  '一万',
  '两万',
  '三万',
  '四万',
  '五万',
  '六万',
  '七万',
  '八万',
  '九万',
  '东风',
  '南风',
  '西风',
  '北风',
  '红中',
  '发财',
  '白板'
];
// import 其他vue组件的名称 from './其他vue组件的名称(components下)' 导入其他组件
export default {
  // 当前组件的名称
  name: 'test-page1',
  data() {
    return {
      outCard_top: [],
      outCard_left: [],
      outCard_right: [],
      outCard_bottom: [],
      cards_top: cards,
      cards_left: cards,
      cards_right: cards,
      cards_bottom: cards,
      action_top: '',
      action_left: '',
      action_right: '',
      action_bottom: '',

      imageList: [
        {
          src: 'src/renderer/components/hua_1.png'
        },
        {
          src: 'src/renderer/components/hua_1.png'
        },
        {
          src: 'src/renderer/components/hua_1.png'
        }
      ]
    };
  },
  // 导入其他的组件
  components: {},
  // 各种函数的书写位置
  methods: {}
};
</script>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  text-align: center;
  line-height: 150%;
}

.el-main {
  text-align: center;
  line-height: 160px;
}

.demo-image {
  width: 150px;
  height: 150px;
  margin-top: 10px;
}
</style>
