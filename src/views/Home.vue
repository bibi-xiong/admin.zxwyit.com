<template>
  <div class="home">
    <!-- 左边 -->
  <el-container style="height:100%; border: 1px solid #eee" >
    <el-aside :width="aside" style="background-color: #545C64;">
      <el-menu 
      class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="isCollapse"
          :default-active="$route.path"
          router
         >
        <p id="text-top"><img src="../assets/img/favicon.ico.jpg"><i class="text-mien" v-show="fac">智学无忧教育</i></p>
        <el-submenu index="1">
           <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">在线测试</span>
          </template>
          <el-menu-item-group v-for="(intm,index) in name" :key="index">
          <el-menu-item :index="intm.navItem" @click="aTab(intm)">
            {{intm.name}}
            </el-menu-item>

          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">基础数据</span>
          </template>
          <el-menu-item-group v-for="(item,i) in name2" :key="i">
            <el-menu-item :index="item.navItem" @click="aTab(item)" >
              {{item.name}}</el-menu-item>
         
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <!-- 右边 -->
    <el-container>
      <el-header style="text-align: right; font-size: 12px ;border-bottom:1px solid #888;height:50px;line-height:50px;padding-left: 0px;">
        <div style="height: 50px;width:30px;background-color: #189E8C;float:left;display: flex;" @click="dianji">
          <i class="zouban-san"> </i>
        </div>
        <el-tabs v-model="editableTabsValue" 
          type="card" closable 
          @tab-remove="removeTab"
          @tab-click="aTAb"
          style="height: 0px;line-height:0px;margin-top:8px;margin-bottom:0px;">
            <el-tab-pane
              v-for="(item,index) in editableTabs"
              :key="index"
              :label="item.title"
              :name="item.name">
              {{item.content}}
            </el-tab-pane>
        </el-tabs>

        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px">中文</i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>中文</el-dropdown-item>
            <el-dropdown-item>英文</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>某某</span>
      </el-header>
      <!-- 主键显示子路由 -->
      <el-main>
        <!-- 子路由 -->
         <router-view name="right">

         </router-view>
      </el-main>
    </el-container>
  </el-container>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data(){
    return{
      isCollapse: false,
      fac:true,
      aside:"200px",
      editableTabsValue: "1",
      editableTabs:[
        {
          title:"首页",name:"0",navItem:"/"}
      ],//接收顶部tab的数值
      tabIndex: 0,
      stuName:"",//用来接收点击时传过来的名字
      stuNavItem:"",//用来接收路劲
      name: [
        { name: "老师出卷", navItem: "/MakeTestPaper" },
        { name: "试卷管理", navItem: "/TestPaperManage" },
        { name: "安排测试", navItem: "/TestResult" },
        { name: "批阅试卷", navItem: "/TestSetter" },
        { name: "测试成绩", navItem: "/ViewTestPaper" }
      ],
      name2: [
        { name: "班级管理", navItem: "/ClassManage" },
        { name: "学生管理", navItem: "/ModifyPassword" },
        { name: "老师管理", navItem: "/StudentManage" },
        { name: "修改密码", navItem: "/TeacherManage" }
      ]
    }
      
  },
  methods: {
    //点击缩放
    dianji(){
      this.isCollapse=!this.isCollapse//收缩的非等于
      if(this.fac){//判断字体的收缩和侧边栏的宽度
        this.fac=false
        this.aside="64px"
      }else{
          this.fac=true
          this.aside="200px"
      }
    },
      // tab切换
    addTab(targetName) {
      var _this=this
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: _this.stuName,
        name: newTabName,
        navItem:_this.stuNavItem
      });
      this.editableTabsValue = newTabName;
    },
    removeTab(targetName) {//删除
      // console.log(tabs)
      // console.log(activeName)
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
    },
    // 点击时赋值并且调用tab选项卡
    aTab(a){
        this.stuName=a.name //把名字赋值给a。name
        this.stuNavItem=a.navItem //把路劲赋值给a.navItem
      //  this.addTab()
        // console.log(a.navItem)
        // console.log(this.editableTabs)
     for(let i=0;i<this.editableTabs.length;i++){
      //  console.log(this.editableTabs[i].title)
       if(this.editableTabs[i].title==a.name){
         this.editableTabsValue=this.editableTabs[i].name //判断它的下标把颜色赋值给它的下标
          return;//不给导航的主键重复 要是重复的就return掉
       }
     }
     this.addTab()//添加导航的主键
    },
    aTAb(tab){
      // console.log(this.editableTabs[tab.index])
      this.$router.push({path:this.editableTabs[tab.index].navItem})
      
    }
    },
  name: 'home',
  components: {
    HelloWorld
  },
  beforeCreate(){//加载前验证用户是否登录 加载前钩子函数
    var token = sessionStorage.getItem("token")
    if(!token){
      this.$router.replace("/login?retumUrl="+location.paltname + location.search)
    }
  }
}
</script>
<style lang="less" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
.home{
height: 100%;
}
#text-top{
  width: 100%;
  height: 50px;
   background-color: #FFEB39;
   line-height: 50px;
   color: #4A9E6B;
}
#text-top img{
  width: 30px;
  height: 30px;
  border-radius:50%;
  position: relative;
  top: 8px;
  left:10px;
  border: 1px solid #4A9E6B;
  box-shadow:0px 0px 10px 0px;
}
.text-mien{
  margin-left: 25px;
  font-weight: 800;
}
// 右边样式
.zouban-san{
    margin: auto;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-right: 10px solid white;
    border-bottom: 5px solid transparent;
}
/deep/.el-tabs__header {
    margin-left: 30px;
    width: 80%;
}
/deep/.el-tabs--card>.el-tabs__header{
      border-bottom: 0px;
}
/deep/.el-menu {
  border-right: solid 0px #e6e6e6;
}
</style>
