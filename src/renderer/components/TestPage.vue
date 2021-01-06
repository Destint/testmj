<template>
  <div class="main">
    <div class="role-top">
      <el-avatar :size="45">
        <img src="../assets/role.png" />
      </el-avatar>
      <el-radio-group v-model="action_top">
        <el-radio-button label="吃"></el-radio-button>
        <el-radio-button label="碰"></el-radio-button>
        <el-radio-button label="杠"></el-radio-button>
        <el-radio-button label="胡"></el-radio-button>
        <el-radio-button label="出牌"></el-radio-button>
      </el-radio-group>
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
        <el-radio-group v-model="action_left">
          <el-radio-button label="吃"></el-radio-button>
          <el-radio-button label="碰"></el-radio-button>
          <el-radio-button label="杠"></el-radio-button>
          <el-radio-button label="胡"></el-radio-button>
          <el-radio-button label="出牌"></el-radio-button>
        </el-radio-group>
      </div>
      <div class="cards-left">
        <el-aside width="280px" style="overflow-y: hidden">
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
      <div class="button-reset">
        <el-button @click="reset">重置</el-button>
      </div>
      <div class="cards-right">
        <el-aside width="280px" style="overflow-y: hidden">
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
        <el-radio-group v-model="action_right">
          <el-radio-button label="吃"></el-radio-button>
          <el-radio-button label="碰"></el-radio-button>
          <el-radio-button label="杠"></el-radio-button>
          <el-radio-button label="胡"></el-radio-button>
          <el-radio-button label="出牌"></el-radio-button>
        </el-radio-group>
      </div>
    </el-container>

    <div class="cards-bottom">
      <el-checkbox-group v-model="outCard_bottom">
        <el-checkbox
          v-for="card_bottom in cards_bottom"
          :label="card_bottom"
          :key="card_bottom"
        >
          {{ card_bottom }}
        </el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="role-bottom">
      <el-avatar :size="45">
        <img src="../assets/role.png" />
      </el-avatar>
      <el-radio-group v-model="action_bottom">
        <el-radio-button label="吃"></el-radio-button>
        <el-radio-button label="碰"></el-radio-button>
        <el-radio-button label="杠"></el-radio-button>
        <el-radio-button label="胡"></el-radio-button>
        <el-radio-button label="出牌"></el-radio-button>
      </el-radio-group>
    </div>
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
      action_bottom: ''
    };
  },
  // 导入其他的组件
  components: {},
  // 各种函数的书写位置
  methods: {
    reset: function() {
      console.log(this.outCard_top);
      console.log(this.outCard_left);
      console.log(this.outCard_right);
      console.log(this.outCard_bottom);
      console.log(this.action_top);
      console.log(this.action_left);
      console.log(this.action_right);
      console.log(this.action_bottom);
      this.outCard_top = [];
      this.outCard_left = [];
      this.outCard_right = [];
      this.outCard_bottom = [];
      this.action_top = '';
      this.action_left = '';
      this.action_right = '';
      this.action_bottom = '';
    }
  }
};
</script>
<style>
.role-top {
  padding-left: 35%;
}
.cards-top {
  padding-left: 25%;
  padding-right: 25%;
}
.role-left {
  padding-top: 0.5%;
}
.cards-left {
  padding-left: 1%;
}
.role-right {
  padding-top: 0.5%;
  padding-left: 0.5%;
}
.cards-right {
  padding-left: 20%;
}
.role-bottom {
  padding-top: 0.5%;
  padding-left: 35%;
}
.cards-bottom {
  padding-left: 25%;
  padding-right: 25%;
}
.button-reset {
  padding-left: 10%;
  padding-top: 5%;
}
</style>
