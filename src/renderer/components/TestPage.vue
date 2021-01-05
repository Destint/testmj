<template>
  <div class="main">
    <div class="role-top">
      <el-avatar :size="45">
        <img src="../assets/role.png" />
      </el-avatar>
    </div>
    <div class="cards-top">
      <el-checkbox-group v-model="outCard_top">
        <el-checkbox
          v-for="card_top in cards_top"
          :label="card_top"
          :key="card_top"
        >
          {{ card_top }}
        </el-checkbox>
      </el-checkbox-group>
    </div>
    <el-container>
      <div class="role-left">
        <el-avatar :size="45">
          <img src="../assets/role.png" />
        </el-avatar>
      </div>
      <div class="cards-left">
        <el-aside width="200px">
          <el-checkbox-group v-model="outCard_left">
            <el-checkbox
              v-for="card_left in cards_left"
              :label="card_left"
              :key="card_left"
            >
              {{ card_left }}
            </el-checkbox>
          </el-checkbox-group>
        </el-aside>
      </div>
      <div class="cards-right">
        <el-aside width="200px">
          <el-checkbox-group v-model="outCard_right">
            <el-checkbox
              v-for="card_right in cards_right"
              :label="card_right"
              :key="card_right"
            >
              {{ card_right }}
            </el-checkbox>
          </el-checkbox-group>
        </el-aside>
      </div>
      <div class="role-right">
        <el-avatar :size="45">
          <img src="../assets/role.png" />
        </el-avatar>
      </div>
    </el-container>
  </div>
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
  name: 'test-page',
  data() {
    return {
      outCard_top: [''],
      outCard_left: [''],
      outCard_right: [''],
      cards_top: cards,
      cards_left: cards,
      cards_right: cards
    };
  },
  // 导入其他的组件
  components: {},
  // 各种函数的书写位置
  methods: {}
};
</script>
<style>
.role-top {
  padding-left: 50%;
}
.cards-top {
  padding-left: 25%;
  padding-right: 25%;
}
.role-left {
  padding-top: 10%;
}
.cards-left {
  padding-left: 1%;
}
.role-right {
  padding-top: 10%;
  padding-left: 5%;
}
.cards-right {
  padding-left: 55%;
}
</style>
